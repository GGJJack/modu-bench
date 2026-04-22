# missions/

에이전트의 **한시적 초점**을 기록하는 디렉터리.

- `skills/` = HOW (방법론, 거의 변경 없음)
- `missions/` = WHAT/FOCUS (이번 기간 무엇에 집중, 수시 갱신)

## 구조

- `master.md` — 모든 에이전트가 읽는 전체 계획
- `<domain>.md` — 특정 스킬의 한시적 초점
  - `llm.md` → collect-llm
  - `benchmark.md` → collect-benchmark
  - `profile.md` → profile-model / profile-benchmark 공통
  - `reinforce.md` → reinforce (대개 비어 있음)

## 동작 규칙

1. 파일이 **없어도 OK** — 에이전트는 기본 모드로 진행.
2. 파일이 **있지만 비어 있어도 OK** — 기본 모드.
3. YAML frontmatter 파싱 실패 → 기본 모드 + 이슈 티켓 생성.
4. 내용이 있으면 → 해당 지침이 `SKILL.md` 보다 **우선**하되, `AGENTS.md` §2 출처 절대 규칙은 오버라이드 불가.

## 예시 frontmatter

```markdown
---
updated: 2026-04-22
priority: high
---

## 이번 기간 포커스
- ...
```

`updated` 필드로 오래된 임무 추적.
