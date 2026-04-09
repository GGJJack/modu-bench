# ModuBench (모두벤치)

AI 벤치마크를 한곳에 모아 한국어로 비교할 수 있는 오픈소스 PoC 프로젝트입니다.

Google Jules로 벤치마크 데이터를 지속 수집하면 실제로 자동화가 가능한지 검증하고, DeepResearch를 활용한 LLM Wiki 구축까지 실험합니다.

## 왜 만들었나?

AI 모델을 선택할 때마다 반복되는 두 가지 불편함이 있었습니다.

**1. 매번 찾아봐야 하는 벤치마크 정보**

- 글쓰기를 가장 잘하는 오픈소스 모델은?
- 에이전트용으로 적합한 모델은?
- TTS 중 성능이 가장 좋은 건?
- 맥미니 같은 로컬 환경에서 돌릴 수 있는 모델은?

이런 질문에 답하려면 매번 여러 벤치마크 사이트를 돌아다녀야 합니다. 이 과정을 자동화하고 싶었습니다.

**2. 영문 중심의 AI 정보**

대부분의 AI 벤치마크와 관련 정보가 영어로만 제공됩니다. 번역기를 거쳐야 하는 불편함을 해소하고, 한국어로 정리된 AI 정보를 제공하고 싶었습니다.

## 프로젝트 구조

```
modu-bench/
├── public/                  # 정적 에셋 (favicon 등)
├── src/
│   ├── components/
│   │   └── common/          # Header, Footer, ThemeToggle
│   ├── layouts/
│   │   └── BaseLayout.astro # 공통 레이아웃
│   ├── pages/
│   │   ├── index.astro      # Home
│   │   ├── leaderboard.astro
│   │   ├── news/
│   │   └── resources/
│   └── styles/
│       └── global.css
├── reference/               # Google Stitch 디자인 레퍼런스 (HTML)
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 페이지 구성

| 페이지 | 상태 | 설명 |
|--------|------|------|
| Home | 개발 중 | 프로젝트 소개, 실시간 지표, GitOps 업데이트 로그 |
| Leaderboard | 개발 중 | AI 모델 성능 비교 (추론, 지시 이행, 코딩 등) |
| News & Insights | 🔜 개발 필요 | 벤치마크 리포트, 기술 분석 기사 |
| Wiki | 🔜 개발 필요 | DeepResearch 기반 LLM 지식 백과 |
| Tools & Resources | 🔜 개발 필요 | 데이터셋, API, 도구 모음 |
| Showcase / Explorer | 🔜 개발 필요 | 다른 AI 벤치마크·프로젝트 조사 및 소개 |

## 기술 스택

| 구분 | 기술 |
|------|------|
| Framework | [Astro](https://astro.build/) (정적 사이트 생성) |
| Styling | Tailwind CSS |
| Interactive | Preact (Islands Architecture) |
| Icon | astro-icon + Material Symbols |
| Deploy | GitHub Pages + GitHub Actions |
| Runtime | Bun |
| Design | Google Stitch |
| Data Collection | Google Jules (예정) |
| Research | DeepResearch (예정) |

## 시작하기

```bash
# 의존성 설치
bun install

# 개발 서버
bun run dev

# 빌드
bun run build

# 프리뷰
bun run preview
```

## TODO

### Phase 1 — 프로젝트 초기 세팅 (현재)

- [x] Google Stitch로 UI 디자인
- [x] Astro 프로젝트 초기화
- [x] Tailwind CSS + 다크모드 설정
- [x] 공통 레이아웃 (Header, Footer, ThemeToggle)
- [x] GitHub Actions 배포 파이프라인
- [ ] Home 페이지 구현
- [ ] Leaderboard 페이지 구현

### Phase 2 — Jules 벤치마크 데이터 수집

- [ ] Google Jules 연동
- [ ] 벤치마크 데이터 수집 자동화 파이프라인 구축
- [ ] 수집 데이터 → leaderboard.json 변환
- [ ] 수집 주기 및 안정성 검증

### Phase 3 — DeepResearch 기반 LLM Wiki

- [ ] DeepResearch를 활용한 AI 모델 정보 조사 자동화
- [ ] Wiki 페이지 설계 및 구현
- [ ] 한국어 콘텐츠 자동 생성 파이프라인

### Phase 4 — 추가 페이지

- [ ] News & Insights 페이지
- [ ] Tools & Resources 페이지
- [ ] Showcase / Explorer — 외부 AI 벤치마크·프로젝트 조사 및 소개

### Phase 5 — 고도화

- [ ] 검색 기능 (pagefind)
- [ ] View Transitions
- [ ] SEO 최적화 (sitemap, OG tags)
- [ ] 성능 최적화 (Lighthouse 95+)

## 기여

이 프로젝트는 오픈소스입니다. 이슈와 PR을 환영합니다.

## License

MIT
