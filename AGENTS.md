# ModuBench (모두벤치)

## 프로젝트 개요

AI 벤치마크를 한곳에 모아 한국어로 비교할 수 있는 오픈소스 PoC.
Google Jules로 데이터 수집 자동화가 가능한지, DeepResearch로 LLM Wiki를 구축할 수 있는지 검증하는 것이 목표.

## 기술 스택

- **Framework**: Astro 6 (정적 사이트, `output: 'static'`)
- **Styling**: Tailwind CSS 3 (`darkMode: 'class'`, MD3 색상 토큰)
- **Interactive**: Preact (Islands Architecture, `client:visible`)
- **Icon**: astro-icon + @iconify-json/material-symbols
- **Font**: Pretendard (한국어) + Inter
- **Runtime**: Bun
- **Deploy**: GitHub Pages + GitHub Actions
- **TypeScript**: strict 모드 (`astro/tsconfigs/strict`)

## 프로젝트 구조

- `src/pages/` — 라우트 (index, leaderboard, news, resources)
- `src/components/common/` — Header, Footer, ThemeToggle
- `src/layouts/BaseLayout.astro` — 공통 레이아웃
- `src/styles/global.css` — 글로벌 스타일, CSS 변수 (MD3 토큰)
- `reference/` — Google Stitch 디자인 레퍼런스 HTML
- `tailwind.config.mjs` — MD3 색상 토큰을 CSS 변수로 매핑

## 커밋 정책

- 커밋 메시지는 한국어 또는 영어 모두 허용 하지만 한글 권장
- Conventional Commits 형식 권장: `feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`
- 커밋 단위는 하나의 논리적 변경 단위로 유지
- 자동 커밋 금지 — 반드시 사용자 요청 시에만 커밋
- 기본 브랜치: `master`
- force push 금지 (master 브랜치)

## 린트 및 코드 스타일

- 별도 ESLint/Prettier 설정 없음 (추후 도입 예정)
- TypeScript strict 모드 준수
- Tailwind 유틸리티 클래스 사용, 인라인 스타일 지양
- 색상은 반드시 `tailwind.config.mjs`에 정의된 MD3 토큰 사용 (하드코딩 금지)
- 컴포넌트 파일명: PascalCase (`.astro`, `.tsx`)

## 빌드 및 실행

```bash
bun install            # 의존성 설치
bun run dev            # 개발 서버 (localhost:4321)
bun run build          # 정적 빌드 → dist/
bun run preview        # 빌드 결과 프리뷰
```

## 주의사항

- `base: '/modu-bench'` 설정되어 있음 — 모든 경로에 base path 포함 필요
- `.claude/` 디렉토리는 `.gitignore`에 포함되어 있음
- `reference/` 폴더는 Stitch 디자인 원본 등 참고용 자료가 올라갈 예정
