---
name: "Jules · 프로파일 — 모델"
about: "profile-model 스킬을 Jules 에게 위임 (모델 상세 페이지 Markdown 작성)"
title: "[jules] profile-model · YYYY-MM-DD"
labels: ["jules", "프로파일"]
---

다음 문서들을 순서대로 읽고 그 지침에 따라 작업하세요. (`AGENTS.md` 의 공통 규칙이 자동 주입됩니다.)

1. `skills/profile-model/SKILL.md` — 이번 작업의 절차
2. `missions/master.md`, `missions/profile.md` — 이번 기간 초점

결과물은 `src/content/models/<id>.md` 에 신규 생성합니다. frontmatter 는 `src/content.config.ts` 의 Zod 스키마를 따르며, `bun run build` 가 통과해야 합니다.

작업 내역은 `src/data/journal/YYYY-MM-DD-profile-model.md` 에 저널로 기록하세요.
