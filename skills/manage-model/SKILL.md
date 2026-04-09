---
name: manage-model
description: ModuBench의 AI 모델 데이터를 CRUD 관리합니다 (도메인별 JSON)
allowed-tools:
  - "Bash"
  - "Read"
---

# Manage Model Skill

ModuBench 프로젝트의 AI 모델 데이터를 관리하는 스킬입니다.
직접 JSON을 편집하지 말고, 반드시 아래 스크립트를 사용하세요.

## Overview

모델 데이터는 5개 도메인 파일로 분리 관리됩니다:
- `src/data/models/llm.json` — 대규모 언어 모델
- `src/data/models/image-gen.json` — 이미지 생성 모델
- `src/data/models/tts.json` — 음성 합성 모델
- `src/data/models/stt.json` — 음성 인식 모델
- `src/data/models/multimodal.json` — 멀티모달 모델

## Script Usage

모든 명령은 프로젝트 루트에서 실행합니다.

### 모델 목록 조회

```bash
bun run skills/manage-model/scripts/model.ts list <domain>
```

예시:
```bash
bun run skills/manage-model/scripts/model.ts list llm
bun run skills/manage-model/scripts/model.ts list image-gen
```

### 모델 상세 조회

```bash
bun run skills/manage-model/scripts/model.ts get <domain> <id>
```

예시:
```bash
bun run skills/manage-model/scripts/model.ts get llm gpt-4o
```

### 모델 추가

```bash
bun run skills/manage-model/scripts/model.ts create <domain> '<json>'
```

예시:
```bash
bun run skills/manage-model/scripts/model.ts create llm '{"id":"gemma-3-27b","name":"Gemma 3 27B","provider":"Google","releaseDate":"2025-03-12","license":"Gemma","parameterSize":"27B","contextWindow":128000}'

bun run skills/manage-model/scripts/model.ts create image-gen '{"id":"midjourney-v6","name":"Midjourney V6","provider":"Midjourney","releaseDate":"2023-12-21","license":"Proprietary","maxResolution":"1024x1024","supportedStyles":["raw","default"]}'

bun run skills/manage-model/scripts/model.ts create tts '{"id":"elevenlabs-v2","name":"ElevenLabs V2","provider":"ElevenLabs","releaseDate":"2024-01-15","license":"Proprietary","supportedLanguages":["en","ko","ja"],"realtime":true}'

bun run skills/manage-model/scripts/model.ts create stt '{"id":"deepgram-nova-3","name":"Deepgram Nova 3","provider":"Deepgram","releaseDate":"2025-02-04","license":"Proprietary","supportedLanguages":["en","ko"],"realtime":true}'

bun run skills/manage-model/scripts/model.ts create multimodal '{"id":"gpt-4o","name":"GPT-4o","provider":"OpenAI","releaseDate":"2024-05-13","license":"Proprietary","supportedModalities":["text","image","audio"],"contextWindow":128000}'
```

필수 필드: `id`, `name`, `provider`, `releaseDate`, `license`
나머지 도메인별 필드는 생략하면 null 또는 빈 배열로 자동 설정됩니다.

### 모델 수정

```bash
bun run skills/manage-model/scripts/model.ts update <domain> <id> '<json>'
```

부분 업데이트입니다. 변경할 필드만 전달하면 됩니다. `id`는 변경할 수 없습니다.

예시:
```bash
bun run skills/manage-model/scripts/model.ts update llm gpt-4o '{"contextWindow":256000,"pricing":{"input":1.25,"output":5.00}}'
```

### 모델 삭제

```bash
bun run skills/manage-model/scripts/model.ts delete <domain> <id>
```

예시:
```bash
bun run skills/manage-model/scripts/model.ts delete llm gpt-4o
```

## 도메인별 필드 참고

타입 정의는 `src/data/types.ts`를 참조하세요.

| 도메인 | 고유 필드 |
|--------|----------|
| llm | `parameterSize`, `contextWindow`, `pricing.input/output` ($/1M tokens) |
| image-gen | `maxResolution`, `supportedStyles`, `pricing.perImage` |
| tts | `supportedLanguages` (ISO 639-1), `realtime`, `pricing.perCharacter` |
| stt | `supportedLanguages` (ISO 639-1), `realtime`, `pricing.perMinute` |
| multimodal | `supportedModalities`, `contextWindow`, `pricing.input/output` |

## Rules

- JSON을 직접 편집하지 말고 반드시 스크립트를 사용할 것
- 스크립트가 중복/유효성 검사를 자동 수행하므로 별도 확인 불필요
- pricing은 USD 기준
- 모델 추가 후 벤치마크 점수도 추가하려면 `manage-benchmark` 스킬을 사용할 것

## Resources

- 타입 정의: `src/data/types.ts`
- 모델 데이터: `src/data/models/*.json`
- 벤치마크 스킬: `skills/manage-benchmark/`
