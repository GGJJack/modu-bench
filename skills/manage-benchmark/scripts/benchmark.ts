#!/usr/bin/env bun
/**
 * ModuBench 벤치마크 CRUD 스크립트
 *
 * 벤치마크 정의 관리:
 *   bun run skills/manage-benchmark/scripts/benchmark.ts list <domain>
 *   bun run skills/manage-benchmark/scripts/benchmark.ts get <domain> <id>
 *   bun run skills/manage-benchmark/scripts/benchmark.ts create <domain> '<json>'
 *   bun run skills/manage-benchmark/scripts/benchmark.ts update <domain> <id> '<json>'
 *   bun run skills/manage-benchmark/scripts/benchmark.ts delete <domain> <id>
 *
 * 점수 관리:
 *   bun run skills/manage-benchmark/scripts/benchmark.ts list-scores <domain> [modelId]
 *   bun run skills/manage-benchmark/scripts/benchmark.ts add-score <domain> <modelId> <benchmarkId> '<json>'
 *   bun run skills/manage-benchmark/scripts/benchmark.ts delete-score <domain> <modelId> <benchmarkId>
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const DOMAINS = ["llm", "image-gen", "tts", "stt", "multimodal"] as const;
type Domain = (typeof DOMAINS)[number];

const BENCHMARK_REQUIRED = [
  "id",
  "name",
  "nameKo",
  "category",
  "description",
  "source",
  "unit",
  "scoreRange",
  "higherIsBetter",
];

const SCORE_REQUIRED = ["value", "date", "source"];

// ── helpers ──────────────────────────────────────────────

function benchmarkPath(domain: string): string {
  return resolve(process.cwd(), `src/data/benchmarks/${domain}.json`);
}

function modelPath(domain: string): string {
  return resolve(process.cwd(), `src/data/models/${domain}.json`);
}

function readBenchmarkData(domain: string): {
  domain: string;
  benchmarks: any[];
  scores: Record<string, Record<string, any>>;
} {
  const p = benchmarkPath(domain);
  if (!existsSync(p)) {
    console.error(`❌ 파일을 찾을 수 없습니다: ${p}`);
    process.exit(1);
  }
  return JSON.parse(readFileSync(p, "utf-8"));
}

function readModelData(domain: string): { domain: string; models: any[] } {
  const p = modelPath(domain);
  if (!existsSync(p)) {
    console.error(`❌ 모델 파일을 찾을 수 없습니다: ${p}`);
    process.exit(1);
  }
  return JSON.parse(readFileSync(p, "utf-8"));
}

function writeData(domain: string, data: any): void {
  writeFileSync(benchmarkPath(domain), JSON.stringify(data, null, 2) + "\n");
}

function validateDomain(domain: string): asserts domain is Domain {
  if (!DOMAINS.includes(domain as Domain)) {
    console.error(`❌ 잘못된 도메인: ${domain}`);
    console.error(`   유효한 도메인: ${DOMAINS.join(", ")}`);
    process.exit(1);
  }
}

function parseJson(raw: string): any {
  try {
    return JSON.parse(raw);
  } catch {
    console.error(`❌ JSON 파싱 실패: ${raw}`);
    process.exit(1);
  }
}

function validateRequired(fields: string[], obj: any, label: string): void {
  const missing = fields.filter((f) => !(f in obj));
  if (missing.length > 0) {
    console.error(`❌ ${label} 필수 필드 누락: ${missing.join(", ")}`);
    process.exit(1);
  }
}

// ── 벤치마크 정의 CRUD ──────────────────────────────────

function list(domain: string): void {
  validateDomain(domain);
  const data = readBenchmarkData(domain);
  if (data.benchmarks.length === 0) {
    console.log(`ℹ️  ${domain} 도메인에 등록된 벤치마크가 없습니다.`);
    return;
  }
  const scoreCount = Object.keys(data.scores).length;
  console.log(
    `📋 ${domain} 도메인 벤치마크 (${data.benchmarks.length}개, 점수 등록 모델 ${scoreCount}개):\n`
  );
  for (const b of data.benchmarks) {
    const dir = b.higherIsBetter ? "↑" : "↓";
    console.log(
      `  - ${b.id} | ${b.name} (${b.nameKo}) | ${b.unit} ${dir} | ${b.category}`
    );
  }
}

function get(domain: string, id: string): void {
  validateDomain(domain);
  const data = readBenchmarkData(domain);
  const bench = data.benchmarks.find((b: any) => b.id === id);
  if (!bench) {
    console.error(`❌ 벤치마크를 찾을 수 없습니다: ${id}`);
    process.exit(1);
  }
  // 해당 벤치마크의 모델별 점수도 포함
  const scores: Record<string, any> = {};
  for (const [modelId, modelScores] of Object.entries(data.scores)) {
    if (id in (modelScores as any)) {
      scores[modelId] = (modelScores as any)[id];
    }
  }
  console.log(JSON.stringify({ ...bench, scores }, null, 2));
}

function create(domain: string, json: string): void {
  validateDomain(domain);
  const data = readBenchmarkData(domain);
  const input = parseJson(json);

  validateRequired(BENCHMARK_REQUIRED, input, "벤치마크");

  if (data.benchmarks.some((b: any) => b.id === input.id)) {
    console.error(`❌ 이미 존재하는 벤치마크 ID: ${input.id}`);
    process.exit(1);
  }

  if (
    !Array.isArray(input.scoreRange) ||
    input.scoreRange.length !== 2 ||
    typeof input.scoreRange[0] !== "number" ||
    typeof input.scoreRange[1] !== "number"
  ) {
    console.error(`❌ scoreRange는 [min, max] 숫자 배열이어야 합니다.`);
    process.exit(1);
  }

  data.benchmarks.push(input);
  writeData(domain, data);
  const dir = input.higherIsBetter ? "↑" : "↓";
  console.log(
    `✅ 벤치마크 추가 완료: ${input.id} (${input.nameKo}) [${input.unit} ${dir}]`
  );
}

function update(domain: string, id: string, json: string): void {
  validateDomain(domain);
  const data = readBenchmarkData(domain);
  const idx = data.benchmarks.findIndex((b: any) => b.id === id);
  if (idx === -1) {
    console.error(`❌ 벤치마크를 찾을 수 없습니다: ${id}`);
    process.exit(1);
  }

  const patch = parseJson(json);
  if ("id" in patch && patch.id !== id) {
    console.error(`❌ id 필드는 변경할 수 없습니다.`);
    process.exit(1);
  }

  data.benchmarks[idx] = { ...data.benchmarks[idx], ...patch };
  writeData(domain, data);
  console.log(`✅ 벤치마크 수정 완료: ${id}`);
}

function remove(domain: string, id: string): void {
  validateDomain(domain);
  const data = readBenchmarkData(domain);
  const idx = data.benchmarks.findIndex((b: any) => b.id === id);
  if (idx === -1) {
    console.error(`❌ 벤치마크를 찾을 수 없습니다: ${id}`);
    process.exit(1);
  }

  const removed = data.benchmarks.splice(idx, 1)[0];

  // 관련 점수도 정리
  for (const modelScores of Object.values(data.scores)) {
    delete (modelScores as any)[id];
  }

  writeData(domain, data);
  console.log(
    `✅ 벤치마크 삭제 완료: ${removed.id} (${removed.nameKo}) — 관련 점수도 제거됨`
  );
}

// ── 점수 CRUD ────────────────────────────────────────────

function listScores(domain: string, modelId?: string): void {
  validateDomain(domain);
  const data = readBenchmarkData(domain);

  if (modelId) {
    const modelScores = data.scores[modelId];
    if (!modelScores || Object.keys(modelScores).length === 0) {
      console.log(`ℹ️  ${modelId}의 점수가 없습니다.`);
      return;
    }
    console.log(`📊 ${modelId}의 ${domain} 벤치마크 점수:\n`);
    for (const [benchId, score] of Object.entries(modelScores)) {
      const bench = data.benchmarks.find((b: any) => b.id === benchId);
      const name = bench ? bench.nameKo : benchId;
      const dir = bench?.higherIsBetter ? "↑" : "↓";
      console.log(
        `  - ${benchId} (${name}): ${(score as any).value} ${bench?.unit ?? ""} ${dir} [${(score as any).source}]`
      );
    }
  } else {
    console.log(
      `📊 ${domain} 도메인 전체 점수 현황:\n`
    );
    for (const [mid, modelScores] of Object.entries(data.scores)) {
      const count = Object.keys(modelScores as any).length;
      console.log(`  - ${mid}: ${count}개 벤치마크`);
    }
  }
}

function addScore(
  domain: string,
  modelId: string,
  benchmarkId: string,
  json: string
): void {
  validateDomain(domain);
  const data = readBenchmarkData(domain);

  // 벤치마크 존재 확인
  const bench = data.benchmarks.find((b: any) => b.id === benchmarkId);
  if (!bench) {
    console.error(
      `❌ 벤치마크를 찾을 수 없습니다: ${benchmarkId}`
    );
    console.error(
      `   등록된 벤치마크: ${data.benchmarks.map((b: any) => b.id).join(", ")}`
    );
    process.exit(1);
  }

  // 모델 존재 확인
  const modelData = readModelData(domain);
  if (!modelData.models.some((m: any) => m.id === modelId)) {
    console.error(`❌ 모델을 찾을 수 없습니다: ${modelId}`);
    console.error(
      `   등록된 모델: ${modelData.models.map((m: any) => m.id).join(", ")}`
    );
    process.exit(1);
  }

  const input = parseJson(json);
  validateRequired(SCORE_REQUIRED, input, "점수");

  // 범위 검증
  const [min, max] = bench.scoreRange;
  if (input.value < min || input.value > max) {
    console.error(
      `❌ 점수 범위 초과: ${input.value} (허용: ${min}~${max})`
    );
    process.exit(1);
  }

  // source 유효성
  if (!["official", "community", "reproduced"].includes(input.source)) {
    console.error(
      `❌ 잘못된 source: ${input.source} (허용: official, community, reproduced)`
    );
    process.exit(1);
  }

  if (!data.scores[modelId]) {
    data.scores[modelId] = {};
  }

  const existed = benchmarkId in data.scores[modelId];
  data.scores[modelId][benchmarkId] = input;
  writeData(domain, data);

  const action = existed ? "수정" : "추가";
  const dir = bench.higherIsBetter ? "↑" : "↓";
  console.log(
    `✅ 점수 ${action} 완료: ${modelId} → ${benchmarkId} = ${input.value} ${bench.unit} ${dir}`
  );
}

function deleteScore(
  domain: string,
  modelId: string,
  benchmarkId: string
): void {
  validateDomain(domain);
  const data = readBenchmarkData(domain);

  if (!data.scores[modelId] || !(benchmarkId in data.scores[modelId])) {
    console.error(
      `❌ 점수를 찾을 수 없습니다: ${modelId} → ${benchmarkId}`
    );
    process.exit(1);
  }

  delete data.scores[modelId][benchmarkId];

  // 해당 모델의 점수가 모두 없으면 키 자체 제거
  if (Object.keys(data.scores[modelId]).length === 0) {
    delete data.scores[modelId];
  }

  writeData(domain, data);
  console.log(
    `✅ 점수 삭제 완료: ${modelId} → ${benchmarkId}`
  );
}

// ── main ─────────────────────────────────────────────────

const [command, ...args] = process.argv.slice(2);

switch (command) {
  // 벤치마크 정의
  case "list":
    list(args[0]);
    break;
  case "get":
    get(args[0], args[1]);
    break;
  case "create":
    create(args[0], args[1]);
    break;
  case "update":
    update(args[0], args[1], args[2]);
    break;
  case "delete":
    remove(args[0], args[1]);
    break;

  // 점수 관리
  case "list-scores":
    listScores(args[0], args[1]);
    break;
  case "add-score":
    addScore(args[0], args[1], args[2], args[3]);
    break;
  case "delete-score":
    deleteScore(args[0], args[1], args[2]);
    break;

  default:
    console.log(`ModuBench 벤치마크 관리 스크립트

Usage:
  bun run skills/manage-benchmark/scripts/benchmark.ts <command> [args]

벤치마크 정의 관리:
  list <domain>                              벤치마크 목록 조회
  get <domain> <id>                          벤치마크 상세 + 점수 조회
  create <domain> '<json>'                   새 벤치마크 정의 추가
  update <domain> <id> '<json>'              벤치마크 정의 수정
  delete <domain> <id>                       벤치마크 삭제 (관련 점수도 삭제)

점수 관리:
  list-scores <domain> [modelId]             점수 조회 (모델별 또는 전체)
  add-score <domain> <modelId> <benchId> '<json>'   점수 추가/수정
  delete-score <domain> <modelId> <benchId>  점수 삭제

Domains: ${DOMAINS.join(", ")}
`);
    process.exit(command ? 1 : 0);
}
