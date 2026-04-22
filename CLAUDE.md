# CLAUDE.md — 개발 맥락

## 프로젝트 목표

AI 벤치마크를 한국어로 비교하는 오픈소스 PoC. **"Jules 로 모델/벤치마크 데이터 수집을 자동화할 수 있는가"** 를 검증한다.

## 기술 스택

- Astro 6 (정적, `output: static`, `base: /modu-bench`)
- Tailwind CSS 3 (MD3 토큰, `darkMode: class`)
- Preact (Islands), astro-icon (Material Symbols)
- Bun 런타임, GitHub Pages 배포

## 빌드·실행

```bash
bun install
bun run dev      # http://localhost:4321/modu-bench
bun run build    # → dist/
```

## 커밋 정책

- **자동 커밋 금지** — 사용자 요청 시에만
- Conventional Commits, 한국어 권장
- 기본 브랜치 `master`, force push 금지

## 코드 스타일

- TypeScript strict 준수
- Tailwind 유틸 클래스 사용, 색상은 `tailwind.config.mjs` MD3 토큰만 (하드코딩 금지)
- 컴포넌트: PascalCase (`.astro`, `.tsx`)
- 경로는 `import.meta.env.BASE_URL` 사용

## 프로젝트 구조

```
src/
 ├── pages/          # 라우트
 ├── components/common/
 ├── data/
 │   ├── models/*.json        # 구조화 지표 (스크립트로만 수정)
 │   ├── benchmarks/*.json
 │   ├── updates/*.md         # 공개 뉴스/리포트
 │   ├── journal/             # 에이전트 raw 로그
 │   └── issues/              # 미해결 티켓
 ├── content/        # 상세 페이지 Markdown (Astro Content Collections)
 └── lib/timeline.ts

skills/              # 수동/자동 에이전트 스킬 (Jules + Claude Code 호환)
missions/            # 한시적 에이전트 초점
.github/workflows/   # Jules 트리거용 cron 워크플로우
reference/           # 설계 문서
```

## 데이터 편집 규칙

- `src/data/models/*.json`, `src/data/benchmarks/*.json` 은 **직접 편집 금지**. 반드시 `skills/manage-model/` 또는 `skills/manage-benchmark/` 스크립트 사용.
- 상세 페이지 (`src/content/*.md`) 는 직접 작성. Zod 가 빌드 시 검증.

## 자율 에이전트 파이프라인

Jules 가 하루 1회 사이클로 데이터를 수집·프로파일·보강·리포트 한다. 이 파이프라인을 설계/수정할 때는 `AGENTS.md` 와 `reference/jules-plan.md` 참조.

## 주의사항

- `.claude/`, `.env`, `CLAUDE.local.md` 는 `.gitignore` 대상
- `base: /modu-bench` — 모든 경로에 base 포함
