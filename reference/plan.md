# ModuBench (모두벤치) - 프로젝트 구현 계획서

## 1. 프로젝트 개요

**ModuBench (모두벤치)** - 오픈소스 AI 벤치마크 허브
- 전 세계 커뮤니티가 함께 만들어가는 AI 모델 평가 플랫폼
- 투명한 지표와 데이터를 통해 AI 모델 성능을 비교/공유
- 정적 사이트로 구축, GitHub Pages로 호스팅

---

## 2. 페이지 구성

### 2.1 Home (`/`)
- 프로젝트 소개 히어로 섹션
- 실시간 성능 지표 벤토 그리드 (활성 모델 수, 오늘의 업데이트, 총 벤치마크 실행)
- GitOps 업데이트 로그 타임라인 (Deploy → Merge → Review → Scrape)

### 2.2 Leaderboard (`/leaderboard`)
- AI 모델 성능 리더보드 테이블 (추론, 지시 이행, 코딩 점수)
- 카테고리 필터 칩 (All Models / LLM / Vision / Audio / Multimodal)
- 모델 검색 기능
- 페이지네이션
- 주간 리포트 + 검증 데이터 안내 (벤토 레이아웃)

### 2.3 News & Insights (`/news`)
- 기사 목록 피드 (2가지 레이아웃 타입 지원)
  - **Type 1**: 타임라인 스타일 - 날짜 기반 세로 피드, 이미지 포함/미포함 혼합
  - **Type 2**: 에디토리얼 스타일 - 피처드 기사 + 카드 그리드, 뉴스레터 구독 섹션
- 카테고리 라벨 (벤치마크 리포트, 공지사항, 기술 심층 분석, 파트너십 등)
- "Load More" 페이지네이션

### 2.4 Resources/Tools (`/resources`)
- 리소스 갤러리 (이미지 포함 카드 / 아이콘 플레이스홀더 카드)
- 카테고리 필터 (전체 / 데이터셋 / API / UI·UX / 도구)
- 태그 시스템 (#Free, #OpenSource, #Dataset, #API 등)

### 2.5 공통 요소
- **TopNavBar**: 고정 헤더, 글래스 이펙트(backdrop-blur), 내비게이션, 검색, 계정 아이콘
- **Footer**: 로고, 저작권, 링크 (Terms, Privacy, GitHub, Contact)
- **반응형**: 모바일/태블릿/데스크톱
- **다크모드**: `darkMode: "class"` 기반 토글

---

## 3. 기술 스택

### 3.1 핵심 프레임워크

| 기술 | 버전 | 용도 |
|------|------|------|
| **Astro** | 5.x | 정적 사이트 생성 프레임워크 |
| **Tailwind CSS** | v4 | 유틸리티 기반 스타일링 (빌드타임 통합) |
| **TypeScript** | 5.x | 타입 안전성 |

### 3.2 Astro 통합 (Integrations)

| 패키지 | 용도 |
|--------|------|
| `@astrojs/tailwind` | Tailwind CSS 빌드타임 통합 |
| `@astrojs/sitemap` | SEO용 sitemap 자동 생성 |
| `@astrojs/preact` | 리더보드 등 인터랙티브 컴포넌트용 (Islands) |
| `astro-icon` | Material Symbols SVG 인라인 (폰트 로딩 제거) |

### 3.3 추가 도구

| 도구 | 용도 |
|------|------|
| `sharp` (Astro 내장) | 이미지 최적화 (WebP/AVIF 자동 변환) |
| `pagefind` | 빌드타임 정적 검색 엔진 (뉴스/리소스 검색) |
| **View Transitions** | 페이지 전환 애니메이션 (`astro:transitions` 내장) |

### 3.4 배포

| 항목 | 선택 |
|------|------|
| 호스팅 | GitHub Pages |
| CI/CD | GitHub Actions (`withastro/action@v3`) |
| 빌드 출력 | `output: 'static'` |

### 3.5 제외한 기술 (및 사유)

| 기술 | 제외 사유 |
|------|-----------|
| Next.js / Nuxt | SSR 불필요, GitHub Pages는 정적 호스팅만 지원 |
| Headless CMS (초기) | 초기 콘텐츠 양 적음, Markdown으로 충분. 추후 Decap CMS 추가 가능 |
| DB / Backend API | 정적 사이트로 충분. 리더보드 데이터는 JSON으로 관리 |
| i18n 프레임워크 | 현재 한국어 중심, 본격 다국어 지원 시 추후 도입 |
| Google Fonts CDN (아이콘) | astro-icon으로 SVG 인라인 처리하여 성능 향상 |

---

## 4. 프로젝트 구조

```
modu-bench/
├── public/
│   ├── favicon.svg
│   └── images/                    # 정적 이미지 에셋
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.astro       # TopNavBar
│   │   │   ├── Footer.astro       # Footer
│   │   │   ├── SearchBar.astro    # 검색 컴포넌트
│   │   │   └── ThemeToggle.astro  # 다크모드 토글
│   │   ├── home/
│   │   │   ├── Hero.astro         # 히어로 섹션
│   │   │   ├── MetricCard.astro   # 벤토 그리드 지표 카드
│   │   │   └── UpdateLog.astro    # 타임라인 업데이트 로그
│   │   ├── leaderboard/
│   │   │   ├── FilterChips.tsx    # 필터 칩 (Preact, 인터랙티브)
│   │   │   ├── ModelTable.tsx     # 리더보드 테이블 (Preact, 정렬/필터)
│   │   │   └── WeeklyReport.astro # 주간 리포트 섹션
│   │   ├── news/
│   │   │   ├── ArticleCard.astro  # 기사 카드 컴포넌트
│   │   │   ├── FeaturedArticle.astro  # 피처드 기사
│   │   │   └── Newsletter.astro   # 뉴스레터 구독 섹션
│   │   └── resources/
│   │       ├── ResourceCard.astro # 리소스 카드
│   │       └── ResourceFilter.astro # 리소스 필터
│   ├── content/
│   │   ├── config.ts              # Content Collections 스키마 정의
│   │   ├── news/                  # 뉴스 기사 (Markdown/MDX)
│   │   │   ├── reasoning-metrics.md
│   │   │   ├── api-open-source.md
│   │   │   └── korean-llm-analysis.md
│   │   └── resources/             # 리소스 데이터 (Markdown/MDX)
│   │       ├── precision-dataset-v2.md
│   │       ├── simulation-api-wrapper.md
│   │       └── performance-dashboard.md
│   ├── data/
│   │   └── leaderboard.json       # 리더보드 모델 데이터
│   ├── layouts/
│   │   ├── BaseLayout.astro       # 공통 레이아웃 (head, header, footer)
│   │   ├── ArticleLayout.astro    # 뉴스 기사 상세 레이아웃
│   │   └── ResourceLayout.astro   # 리소스 상세 레이아웃
│   ├── pages/
│   │   ├── index.astro            # Home
│   │   ├── leaderboard.astro      # Leaderboard
│   │   ├── news/
│   │   │   ├── index.astro        # News 목록
│   │   │   └── [...slug].astro    # News 상세 (동적 라우팅)
│   │   └── resources/
│   │       ├── index.astro        # Resources 목록
│   │       └── [...slug].astro    # Resources 상세 (동적 라우팅)
│   └── styles/
│       └── global.css             # 글로벌 스타일, Tailwind 디렉티브, 커스텀 CSS
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml             # GitHub Pages 자동 배포
```

---

## 5. 디자인 시스템

### 5.1 색상 체계 (Material Design 3 토큰)

reference 파일들에서 추출한 통일 색상 토큰:

```
Primary:          #0053db
Primary Dim:      #0048c1
Primary Container:#dbe1ff
On Primary:       #f8f7ff
On Primary Container: #0048bf

Surface:          #f7f9fb
Surface Container Low:  #f0f4f7
Surface Container:      #e8eff3
Surface Container High: #e1e9ee
Surface Container Highest: #d9e4ea
Surface Container Lowest:  #ffffff

On Surface:       #2a3439
On Surface Variant: #566166
Outline:          #717c82
Outline Variant:  #a9b4b9

Error:            #9f403d
Error Container:  #fe8983
```

### 5.2 타이포그래피

- **폰트**: Inter (400, 500, 600, 700)
- **Headline**: `font-headline` - Inter
- **Body**: `font-body` - Inter
- **Label**: `font-label` - Inter
- **한국어 폰트**: 추가 검토 필요 (Pretendard 또는 Noto Sans KR 병용 고려)

### 5.3 아이콘

- **Material Symbols Outlined** → `astro-icon` + `@iconify-json/material-symbols`로 SVG 인라인 전환
- 기본 설정: `FILL: 0, wght: 400, GRAD: 0, opsz: 24`

### 5.4 공통 UI 패턴

- **Glass Effect**: `backdrop-filter: blur(20px)`, `background: rgba(255,255,255,0.8)`
- **Data Glass**: 좌측 2px primary 보더 + 글래스 배경
- **Card Hover**: `hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]`, `scale` 트랜지션
- **Border Radius**: `DEFAULT: 0.125rem`, `lg: 0.25rem`, `xl: 0.5rem`, `full: 0.75rem`

---

## 6. 콘텐츠 관리 전략

### 6.1 Astro Content Collections

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['벤치마크 리포트', '공지사항', '기술 심층 분석', '파트너십', '보안']),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    readTime: z.string().optional(),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['데이터셋', 'API', 'UI/UX', '도구']),
    tags: z.array(z.string()),
    image: z.string().optional(),
    icon: z.string().optional(),
  }),
});
```

### 6.2 리더보드 데이터

```jsonc
// src/data/leaderboard.json
[
  {
    "name": "GPT-4o",
    "provider": "OpenAI",
    "logo": "/images/models/gpt-4o.png",
    "scores": {
      "reasoning": 94.2,
      "instruction": 96.8,
      "coding": 91.5
    },
    "license": "Proprietary",
    "category": ["LLM", "Multimodal"]
  }
]
```

---

## 7. 주요 기능 구현 상세

### 7.1 다크모드

- Tailwind `darkMode: "class"` 사용
- `ThemeToggle.astro` 컴포넌트에서 `<html>` 태그에 `dark` 클래스 토글
- `localStorage`에 사용자 선호 저장
- `prefers-color-scheme` 미디어 쿼리로 시스템 설정 감지

### 7.2 리더보드 인터랙티브 기능 (Astro Islands)

- **Preact** 사용 (번들 ~3KB)
- `client:visible` 디렉티브로 뷰포트 진입 시 로드
- 구현 기능:
  - 카테고리 필터링 (LLM / Vision / Audio / Multimodal)
  - 컬럼별 정렬 (추론, 지시 이행, 코딩 점수)
  - 클라이언트 사이드 검색
  - 페이지네이션

### 7.3 검색 (pagefind)

- 빌드 시 정적 검색 인덱스 생성
- 뉴스 기사, 리소스 콘텐츠 대상
- 0KB 초기 JS (검색 UI 활성화 시에만 로드)
- `astro.config.mjs`에서 빌드 후 스크립트로 통합

### 7.4 View Transitions

- `astro:transitions`로 페이지 간 부드러운 전환
- `BaseLayout.astro`에서 `<ViewTransitions />` 추가
- 공통 요소(Header, Footer) 유지하며 콘텐츠 영역만 전환

### 7.5 이미지 최적화

- Astro `<Image />` 컴포넌트 사용
- 자동 WebP/AVIF 변환
- `loading="lazy"` 기본 적용
- 반응형 `srcset` 자동 생성

---

## 8. 배포 설정

### 8.1 Astro 설정

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://<username>.github.io',
  base: '/modu-bench',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
    preact(),
    icon(),
  ],
});
```

### 8.2 GitHub Actions 워크플로우

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist/
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## 9. SEO 및 성능

### 9.1 SEO

- `<title>`, `<meta description>` 페이지별 설정
- Open Graph / Twitter Card 메타태그
- `@astrojs/sitemap`으로 sitemap.xml 자동 생성
- 시맨틱 HTML (`<article>`, `<nav>`, `<main>`, `<header>`, `<footer>`)
- `robots.txt` 설정

### 9.2 성능 목표

| 지표 | 목표 |
|------|------|
| Lighthouse Performance | 95+ |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Blocking Time | < 200ms |
| 초기 JS 번들 | 0KB (인터랙티브 섹션 제외) |

---

## 10. 구현 순서

### Phase 1: 프로젝트 초기 설정
- [ ] Astro 프로젝트 생성 및 의존성 설치
- [ ] Tailwind CSS v4 설정 (MD3 색상 토큰 포함)
- [ ] 공통 레이아웃 구성 (BaseLayout, Header, Footer)
- [ ] 다크모드 토글 구현
- [ ] GitHub Actions 배포 파이프라인 설정

### Phase 2: 핵심 페이지 구현
- [ ] Home 페이지 (히어로, 메트릭 카드, 업데이트 로그)
- [ ] Leaderboard 페이지 (테이블, 필터, 정렬 - Preact Islands)
- [ ] News 목록 페이지 (Content Collections 기반)
- [ ] Resources 목록 페이지

### Phase 3: 콘텐츠 및 상세 페이지
- [ ] Content Collections 스키마 정의
- [ ] 뉴스 기사 상세 페이지 (`[...slug].astro`)
- [ ] 리소스 상세 페이지
- [ ] 샘플 콘텐츠 작성 (Markdown)

### Phase 4: 부가 기능 및 최적화
- [ ] View Transitions 적용
- [ ] pagefind 검색 통합
- [ ] 이미지 최적화 적용
- [ ] SEO 메타태그 체계화 (sitemap, OG tags)
- [ ] 성능 테스트 및 Lighthouse 최적화
