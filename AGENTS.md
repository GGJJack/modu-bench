# AGENTS.md — 자율 에이전트 지침

이 문서는 Jules 등 자율 에이전트가 본 저장소에서 작업할 때 따르는 규칙이다. 모든 에이전트는 작업 전 이 문서를 읽는다.

## 프로젝트 목표

AI 벤치마크를 한국어로 비교하는 오픈소스 PoC. **"Jules 로 모델/벤치마크 데이터 수집을 자동화할 수 있는가"** 를 검증한다.

## 파이프라인 (KST)

| 시간 | 스킬 | 트리거 |
|-----|------|-------|
| 01:00 | `collect-llm` / `collect-benchmark` | GH Actions `jules-collect.yml` |
| 02:00 | `profile-model` / `profile-benchmark` | GH Actions `jules-profile.yml` |
| 03:00 | `reinforce` | GH Actions `jules-reinforce.yml` (이슈 있을 때만) |
| 05:00 | `journal` | Jules Schedules |

각 스킬의 상세 절차는 `skills/<name>/SKILL.md`. 한시적 초점은 `missions/<domain>.md` (없으면 기본 모드).

---

## 1. 임무 읽기

작업 시작 시:
1. `missions/master.md` 읽기 (없거나 비면 스킵)
2. `missions/<domain>.md` 읽기 (없거나 비거나 YAML 파싱 실패 → 기본 모드)
3. 두 문서의 지시는 `SKILL.md` 본문보다 우선. 단 §2 는 예외 없이 불변
4. 저널 파일 열기/이어받기 (§3)

## 2. 출처 절대 규칙 (최우선 · 오버라이드 불가)

1. **출처 URL 없는 어떤 필드도 저장/갱신 금지**
2. 확인 실패 → 저장 금지, `src/data/issues/` 에 티켓 생성 후 다음 대상
3. `source` 값: `official` (제작사 공식) / `community` (HF·PWC·리더보드) / `reproduced` (이 트랙 금지)
4. 모든 변경은 저널에 `HH:MM 요약 ← URL` 형식으로 기록
5. "기억난다 / 보통 그렇다 / 추정상" 금지. 매번 URL 확인
6. 출처 상충 시 `official` 우선. 해결 불가 → 이슈
7. 상세 페이지(Markdown) 본문의 사실 주장도 frontmatter `sources` 배열 또는 각주로 URL 명시

## 3. 저널 포맷

경로: `src/data/journal/YYYY-MM-DD-<agent>.md`. 같은 날·같은 에이전트는 한 파일에 append. 타임아웃 재개 시 `## 이어서 (HH:MM)` 섹션 추가.

```markdown
---
date: 2026-04-22
agent: collect-llm
status: in-progress   # | timeout | completed
summary: "한 줄 요약"
---

## Todo
## 조사 내역
- HH:MM  <요지>  ← <URL>
## 수행한 작업
- [x] `<변경 요지>`  ← <URL>
## 판단 / 고민
## 이슈 제기
- (없음) 또는 issues/<파일명>
```

**이어받기**: `status: in-progress | timeout` → 같은 파일 append. `completed` → `## 재실행 (HH:MM)`. 15분 예산 종료 직전 반드시 `status: timeout` 저장.

## 4. 이슈 티켓

경로: `src/data/issues/YYYY-MM-DD-<agent>-<slug>.md`.

```markdown
---
created: 2026-04-22
agent: collect-llm
severity: blocker | major | minor
target: llm/model-x
---

## 상황  <재현 URL/명령/기대결과>
## 시도한 것
## 요청  <reinforce 가 할 구체 작업>
## 진행 내역 (reinforce 부분 해결 시 append)
```

**해결 정책 (reinforce 전용)**: 완전 해결 → 파일 삭제. 부분 해결 → 원본 유지 + `## 진행 내역 (YYYY-MM-DD)` append. 어느 쪽이든 reinforce 저널에 처리 내역 기록.

## 5. 15분 예산

- 한 작업 단위(예: 모델 1개)에 최대 5분. 초과 시 이슈로 이월
- 12분 경과 시 저널 정리 → `status` 저장
- 웹 페치 연속 5회 이내

## 6. JSON 편집 금지

`src/data/models/*.json`, `src/data/benchmarks/*.json` 은 **직접 편집 금지**. 반드시 스크립트:
- 모델: `bun run skills/manage-model/scripts/model.ts <list|get|create|update|delete> ...`
- 벤치마크: `bun run skills/manage-benchmark/scripts/benchmark.ts <list|get|create|update|delete|list-scores|add-score|delete-score> ...`

## 7. 상세 페이지 (profile 계열 전용)

- 경로: `src/content/{models,benchmarks,organizations}/<id>.md`
- frontmatter 는 `src/content.config.ts` Zod 스키마를 따름. 빌드 실패 = 작성 오류
- `status: draft` 로 시작, 출처·본문 충분하면 `published` 승격
- 본문은 한국어 중심. 사실 주장에 출처 URL

## 8. 교차 발견

자기 도메인이 아닌 대상 발견 시:
1. 해당 도메인 JSON 에 필수 5필드(`id, name, provider, releaseDate, license`)만으로 `create`
2. 저널에 `cross-discovery → <domain>` 기록
3. 다음 해당 도메인 사이클이 자동 보강

---

## 참조

- 타입: `src/data/types.ts` · Content 스키마: `src/content.config.ts`
- 기존 스킬: `skills/manage-model/SKILL.md`, `skills/manage-benchmark/SKILL.md`
- 설계 문서: `reference/jules-plan.md`
