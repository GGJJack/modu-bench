#!/usr/bin/env bun
/**
 * ModuBench 모델 CRUD 스크립트
 *
 * Usage:
 *   bun run skills/manage-model/scripts/model.ts list <domain>
 *   bun run skills/manage-model/scripts/model.ts get <domain> <id>
 *   bun run skills/manage-model/scripts/model.ts create <domain> '<json>'
 *   bun run skills/manage-model/scripts/model.ts update <domain> <id> '<json>'
 *   bun run skills/manage-model/scripts/model.ts delete <domain> <id>
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const DOMAINS = ["llm", "image-gen", "tts", "stt", "multimodal"] as const;
type Domain = (typeof DOMAINS)[number];

const REQUIRED_FIELDS: Record<Domain, string[]> = {
  llm: ["id", "name", "provider", "releaseDate", "license"],
  "image-gen": ["id", "name", "provider", "releaseDate", "license"],
  tts: ["id", "name", "provider", "releaseDate", "license"],
  stt: ["id", "name", "provider", "releaseDate", "license"],
  multimodal: ["id", "name", "provider", "releaseDate", "license"],
};

const DOMAIN_DEFAULTS: Record<Domain, Record<string, unknown>> = {
  llm: { parameterSize: null, contextWindow: null, pricing: null, links: {} },
  "image-gen": {
    maxResolution: null,
    supportedStyles: [],
    pricing: null,
    links: {},
  },
  tts: {
    supportedLanguages: [],
    realtime: false,
    pricing: null,
    links: {},
  },
  stt: {
    supportedLanguages: [],
    realtime: false,
    pricing: null,
    links: {},
  },
  multimodal: {
    supportedModalities: [],
    contextWindow: null,
    pricing: null,
    links: {},
  },
};

// ── helpers ──────────────────────────────────────────────

function dataPath(domain: string): string {
  return resolve(process.cwd(), `src/data/models/${domain}.json`);
}

function readData(domain: string): { domain: string; models: any[] } {
  const p = dataPath(domain);
  if (!existsSync(p)) {
    console.error(`❌ 파일을 찾을 수 없습니다: ${p}`);
    process.exit(1);
  }
  return JSON.parse(readFileSync(p, "utf-8"));
}

function writeData(domain: string, data: any): void {
  writeFileSync(dataPath(domain), JSON.stringify(data, null, 2) + "\n");
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

function validateRequired(domain: Domain, obj: any): void {
  const missing = REQUIRED_FIELDS[domain].filter((f) => !(f in obj));
  if (missing.length > 0) {
    console.error(`❌ 필수 필드 누락: ${missing.join(", ")}`);
    process.exit(1);
  }
}

// ── commands ─────────────────────────────────────────────

function list(domain: string): void {
  validateDomain(domain);
  const data = readData(domain);
  if (data.models.length === 0) {
    console.log(`ℹ️  ${domain} 도메인에 등록된 모델이 없습니다.`);
    return;
  }
  console.log(`📋 ${domain} 도메인 모델 목록 (${data.models.length}개):\n`);
  for (const m of data.models) {
    console.log(`  - ${m.id} | ${m.name} | ${m.provider} | ${m.releaseDate}`);
  }
}

function get(domain: string, id: string): void {
  validateDomain(domain);
  const data = readData(domain);
  const model = data.models.find((m: any) => m.id === id);
  if (!model) {
    console.error(`❌ 모델을 찾을 수 없습니다: ${id}`);
    process.exit(1);
  }
  console.log(JSON.stringify(model, null, 2));
}

function create(domain: string, json: string): void {
  validateDomain(domain);
  const data = readData(domain);
  const input = parseJson(json);

  validateRequired(domain, input);

  if (data.models.some((m: any) => m.id === input.id)) {
    console.error(`❌ 이미 존재하는 모델 ID: ${input.id}`);
    process.exit(1);
  }

  const model = { ...DOMAIN_DEFAULTS[domain], ...input };
  data.models.push(model);
  writeData(domain, data);
  console.log(`✅ 모델 추가 완료: ${model.id} (${model.name})`);
}

function update(domain: string, id: string, json: string): void {
  validateDomain(domain);
  const data = readData(domain);
  const idx = data.models.findIndex((m: any) => m.id === id);
  if (idx === -1) {
    console.error(`❌ 모델을 찾을 수 없습니다: ${id}`);
    process.exit(1);
  }

  const patch = parseJson(json);
  if ("id" in patch && patch.id !== id) {
    console.error(`❌ id 필드는 변경할 수 없습니다.`);
    process.exit(1);
  }

  data.models[idx] = { ...data.models[idx], ...patch };
  writeData(domain, data);
  console.log(`✅ 모델 수정 완료: ${id}`);
}

function remove(domain: string, id: string): void {
  validateDomain(domain);
  const data = readData(domain);
  const idx = data.models.findIndex((m: any) => m.id === id);
  if (idx === -1) {
    console.error(`❌ 모델을 찾을 수 없습니다: ${id}`);
    process.exit(1);
  }

  const removed = data.models.splice(idx, 1)[0];
  writeData(domain, data);
  console.log(`✅ 모델 삭제 완료: ${removed.id} (${removed.name})`);
}

// ── main ─────────────────────────────────────────────────

const [command, ...args] = process.argv.slice(2);

switch (command) {
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
  default:
    console.log(`ModuBench 모델 관리 스크립트

Usage:
  bun run skills/manage-model/scripts/model.ts <command> [args]

Commands:
  list <domain>                    도메인별 모델 목록 조회
  get <domain> <id>                특정 모델 상세 조회
  create <domain> '<json>'         새 모델 추가
  update <domain> <id> '<json>'    모델 정보 수정 (부분 업데이트)
  delete <domain> <id>             모델 삭제

Domains: ${DOMAINS.join(", ")}
`);
    process.exit(command ? 1 : 0);
}
