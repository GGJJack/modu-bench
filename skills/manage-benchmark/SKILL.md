---
name: manage-benchmark
description: ModuBench의 벤치마크 정의와 모델 점수를 CRUD 관리합니다
allowed-tools:
  - "Bash"
  - "Read"
---

# Manage Benchmark Skill

ModuBench 프로젝트의 벤치마크 정의와 모델별 점수를 관리하는 스킬입니다.
직접 JSON을 편집하지 말고, 반드시 아래 스크립트를 사용하세요.

## Overview

각 도메인 벤치마크 파일은 두 파트로 구성됩니다:
1. **`benchmarks`** — 벤치마크 정의 (이름, 단위, 점수 방향 등)
2. **`scores`** — 모델별 벤치마크 점수

파일 위치: `src/data/benchmarks/{domain}.json`

도메인: `llm`, `image-gen`, `tts`, `stt`, `multimodal`

## Script Usage — 벤치마크 정의

모든 명령은 프로젝트 루트에서 실행합니다.

### 벤치마크 목록 조회

```bash
bun run skills/manage-benchmark/scripts/benchmark.ts list <domain>
```

예시:
```bash
bun run skills/manage-benchmark/scripts/benchmark.ts list llm
bun run skills/manage-benchmark/scripts/benchmark.ts list stt
```

### 벤치마크 상세 조회 (점수 포함)

```bash
bun run skills/manage-benchmark/scripts/benchmark.ts get <domain> <id>
```

예시:
```bash
bun run skills/manage-benchmark/scripts/benchmark.ts get llm mmlu
```

### 벤치마크 정의 추가

```bash
bun run skills/manage-benchmark/scripts/benchmark.ts create <domain> '<json>'
```

예시:
```bash
bun run skills/manage-benchmark/scripts/benchmark.ts create llm '{"id":"arc-c","name":"ARC-Challenge","nameKo":"ARC 챌린지","category":"reasoning","description":"과학 시험 문제 기반 추론 평가","source":"https://arxiv.org/abs/1803.05457","unit":"%","scoreRange":[0,100],"higherIsBetter":true}'

bun run skills/manage-benchmark/scripts/benchmark.ts create image-gen '{"id":"hps-v2","name":"HPS v2","nameKo":"인간 선호도 점수 v2","category":"aesthetics","description":"인간 선호도 기반 이미지 품질 평가","source":"https://arxiv.org/abs/2306.09341","unit":"점","scoreRange":[0,100],"higherIsBetter":true}'

bun run skills/manage-benchmark/scripts/benchmark.ts create stt '{"id":"wer-commonvoice-ko","name":"WER (CommonVoice Korean)","nameKo":"단어 오류율 (CommonVoice 한국어)","category":"korean","description":"Mozilla CommonVoice 한국어 테스트셋 단어 오류율","source":"https://commonvoice.mozilla.org","unit":"%","scoreRange":[0,100],"higherIsBetter":false}'
```

필수 필드: `id`, `name`, `nameKo`, `category`, `description`, `source`, `unit`, `scoreRange`, `higherIsBetter`

### 벤치마크 정의 수정

```bash
bun run skills/manage-benchmark/scripts/benchmark.ts update <domain> <id> '<json>'
```

부분 업데이트. `id`는 변경 불가.

예시:
```bash
bun run skills/manage-benchmark/scripts/benchmark.ts update llm mmlu '{"description":"57개 학문 분야에 걸친 5지선다형 지식 평가 (개정판)"}'
```

### 벤치마크 삭제

```bash
bun run skills/manage-benchmark/scripts/benchmark.ts delete <domain> <id>
```

관련된 모든 모델의 점수도 함께 삭제됩니다.

## Script Usage — 점수 관리

### 점수 조회

```bash
# 도메인 전체 점수 현황
bun run skills/manage-benchmark/scripts/benchmark.ts list-scores <domain>

# 특정 모델의 점수
bun run skills/manage-benchmark/scripts/benchmark.ts list-scores <domain> <modelId>
```

예시:
```bash
bun run skills/manage-benchmark/scripts/benchmark.ts list-scores llm
bun run skills/manage-benchmark/scripts/benchmark.ts list-scores llm gpt-4o
```

### 점수 추가/수정

```bash
bun run skills/manage-benchmark/scripts/benchmark.ts add-score <domain> <modelId> <benchmarkId> '<json>'
```

스크립트가 자동으로 검증합니다:
- 해당 모델이 `src/data/models/{domain}.json`에 존재하는지
- 해당 벤치마크가 `src/data/benchmarks/{domain}.json`에 정의되어 있는지
- 점수가 `scoreRange` 범위 내인지

이미 점수가 있으면 덮어씁니다.

예시:
```bash
bun run skills/manage-benchmark/scripts/benchmark.ts add-score llm gpt-4o mmlu '{"value":88.7,"date":"2024-05-13","source":"official"}'

bun run skills/manage-benchmark/scripts/benchmark.ts add-score stt whisper-large-v3 wer-librispeech-clean '{"value":2.0,"date":"2023-11-06","source":"official"}'

bun run skills/manage-benchmark/scripts/benchmark.ts add-score image-gen dall-e-3 fid '{"value":12.1,"date":"2024-01-15","source":"community","note":"COCO 2017 val set 기준"}'
```

점수 JSON 필수 필드: `value` (숫자), `date` (YYYY-MM-DD), `source` (official|community|reproduced)
선택 필드: `note` (메모)

### 점수 삭제

```bash
bun run skills/manage-benchmark/scripts/benchmark.ts delete-score <domain> <modelId> <benchmarkId>
```

## 점수 방향 참고

| 높을수록 좋음 (higherIsBetter: true) | 낮을수록 좋음 (higherIsBetter: false) |
|--------------------------------------|--------------------------------------|
| 정답률 (%), MOS, CLIP Score, pass@1 | FID, WER, CER, 지연시간 (ms) |

## 도메인별 카테고리 참고

| 도메인 | 카테고리 |
|--------|---------|
| llm | reasoning, coding, instruction, korean, math, knowledge |
| image-gen | quality, alignment, compositionality, aesthetics |
| tts | naturalness, intelligibility, cloning, prosody |
| stt | accuracy, korean, noise-robustness, realtime |
| multimodal | understanding, reasoning, video, audio |

## Rules

- JSON을 직접 편집하지 말고 반드시 스크립트를 사용할 것
- 점수 추가 전 해당 모델이 `manage-model` 스킬로 먼저 등록되어 있어야 함
- `date`를 모르면 오늘 날짜 사용
- `source`가 불명확하면 `community` 사용
- `nameKo`는 반드시 한국어로 작성

## Resources

- 타입 정의: `src/data/types.ts`
- 벤치마크 데이터: `src/data/benchmarks/*.json`
- 모델 데이터: `src/data/models/*.json`
- 모델 스킬: `skills/manage-model/`
