---
name: collect-benchmark
description: 벤치마크 정의를 등록하고 모델별 점수를 매칭합니다
allowed-tools:
  - "Bash"
  - "Read"
  - "Write"
  - "WebFetch"
---

# collect-benchmark

`AGENTS.md` 의 공통 규칙 위에서 동작한다. 본 문서는 도메인 고유 절차만 기술.

## 역할

벤치마크 정의 + 점수 관리자. 두 가지 일만 한다:
1. **신규 벤치마크 정의 등록** (JSON)
2. **모델 × 벤치마크 점수 매칭** — 리더보드/논문에서 발견한 점수를 `add-score` 로 등록

벤치마크 상세 페이지 작성은 profile-benchmark 담당.

## 대상 도메인

PoC 단계에서는 `missions/benchmark.md` 에 명시된 도메인만 처리. 기본값은 `llm`.

## 절차

1. 공통 서문 §1 임무 읽기.
2. 저널 파일 열기/생성.
3. 기존 벤치마크 목록:
   ```bash
   bun run skills/manage-benchmark/scripts/benchmark.ts list llm
   ```
4. 신규 벤치마크 발견 시 정의 등록:
   ```bash
   bun run skills/manage-benchmark/scripts/benchmark.ts create llm '{"id":"...","name":"...","nameKo":"...","category":"...","description":"...","source":"https://...","unit":"%","scoreRange":[0,100],"higherIsBetter":true}'
   ```
   복합 점수 벤치마크는 `metric` / `subMetrics` 추가 (예: MT-Bench, Chatbot Arena).
5. 점수 매칭:
   ```bash
   bun run skills/manage-benchmark/scripts/benchmark.ts add-score llm <modelId> <benchmarkId> '{"value":88.7,"date":"YYYY-MM-DD","source":"official"}'
   ```
   - 복합 점수면 `"subscores":{"turn1":8.2,"turn2":8.5}` 추가.
   - `source` 는 `official` 또는 `community` 만 사용. `reproduced` 금지.
6. 점수 대상 모델이 미등록이면 → 해당 모델을 최소 필수 필드 5개로 먼저 `manage-model create` 한 뒤 점수 등록. 저널에 "pre-registered model for score matching" 기록.
7. 리더보드 구조 변경/접근 실패 → 이슈 티켓 생성하고 다음으로.

## 완료 기준

- 저널 `status: completed`.
- 모든 점수에 `source` 와 URL 기록.
- 한 세션 최대 점수 20건.

## 금지

- JSON 직접 편집.
- 점수를 "대략 이 정도"로 추정.
- 재현 점수(`reproduced`) 등록.
