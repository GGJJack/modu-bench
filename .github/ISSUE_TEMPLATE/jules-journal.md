---
name: "Jules · 데일리 리포트 (journal)"
about: "journal 스킬을 Jules 에게 위임 (당일 저널을 모아 데일리 리포트 발행)"
title: "[jules] journal · YYYY-MM-DD"
labels: ["jules"]
---

다음 문서들을 순서대로 읽고 그 지침에 따라 작업하세요. (`AGENTS.md` 의 공통 규칙이 자동 주입됩니다.)

1. `skills/journal/SKILL.md` — 이번 작업의 절차
2. `missions/master.md` — 전체 계획 (journal 전용 미션 파일은 보통 두지 않음)

`src/data/journal/YYYY-MM-DD-*.md` 에 기록된 당일 에이전트 저널들을 읽어 `src/data/updates/YYYY-MM-DD-daily.md` 데일리 리포트 한 편을 작성하세요. 저널에 없는 사실은 절대 서술하지 마세요.

본인 저널은 `src/data/journal/YYYY-MM-DD-journal.md` 에 기록하고 `status: completed` 로 마감하세요.

---

> 이 이슈는 수동/백업 트리거용입니다. 정상 운영 시에는 Jules Schedules (KST 05:00) 로 자동 실행됩니다.
