---
name: collect-llm
description: LLM 도메인의 신규 모델을 발견하고 기존 모델의 누락 메타데이터를 보강합니다
allowed-tools:
  - "Bash"
  - "Read"
  - "Write"
  - "WebFetch"
---

# collect-llm

`AGENTS.md` 의 공통 규칙 위에서 동작한다. 본 문서는 도메인 고유 절차만 기술.

## 역할

LLM 도메인의 메타데이터 관리자. 두 가지 일만 한다:
1. **신규 모델 발견** → 최소 필수 필드 5개로 등록
2. **기존 모델 보강** → `parameterSize`, `contextWindow`, `pricing`, `links` 등 null 필드를 공식 출처에서 확인해 채움

상세 페이지 작성은 이 스킬이 하지 않는다 (profile-model 담당).

## 절차

1. 공통 서문 §1 임무 읽기 수행.
2. 저널 파일 열기/생성 (공통 §3).
3. 기존 모델 목록 확보:
   ```bash
   bun run skills/manage-model/scripts/model.ts list llm
   ```
4. 출처 스캔 — [resources/sources.md](./resources/sources.md) 참조.
5. 발견한 신규 LLM:
   ```bash
   bun run skills/manage-model/scripts/model.ts create llm '{"id":"...","name":"...","provider":"...","releaseDate":"YYYY-MM-DD","license":"...","links":{"official":"..."}}'
   ```
   - 필수 필드 5개 + `links.official` 만 채워도 됨. 나머지는 보강 단계로 이월.
6. 기존 모델 보강 대상(null 필드):
   ```bash
   bun run skills/manage-model/scripts/model.ts update llm <id> '{"contextWindow":256000,"pricing":{"input":2.5,"output":10}}'
   ```
7. 교차 발견(TTS/STT 등) → 공통 서문 §8 절차.
8. 저널에 모든 변경을 `필드 ← URL` 로 기록.

## 완료 기준

- 저널 frontmatter `status: completed` 로 저장.
- 출처 없는 추정치 저장 **없음**.
- 확인 실패한 건은 이슈 티켓 생성.

## 금지

- JSON 파일 직접 편집.
- "보통 그렇다"는 판단으로 가격/크기/날짜 추측.
- 한 세션에서 10건 이상 시도 (예산 초과). 초과분은 다음 세션으로.
