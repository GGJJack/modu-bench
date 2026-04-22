# ModuBench Jules 에이전트 파이프라인 설계 (v3)

## 0. 문서 목적

ModuBench 프로젝트에서 AI 모델/벤치마크 데이터 수집과 상세 페이지 작성을 Google Jules 백그라운드 에이전트로 자동화하기 위한 **확정 설계 문서**.

- **대상 에이전트**: Google Jules (백그라운드, 세션당 15분, 유료 기준 일 100회)
- **스킬 포맷**: [google-labs-code/jules-skills](https://github.com/google-labs-code/jules-skills) 와 Claude Code Skills 동일 규격 (`SKILL.md` + frontmatter `name`/`description`/`allowed-tools`)
- **핵심 원칙**: 출처 URL 없이는 어떤 필드도 저장하지 않는다 (할루시네이션 방지)

---

## 1. 핵심 원칙

### 1.1 제약

| 항목 | 값 |
|------|----|
| 세션 최대 | 15분 |
| 일간 예산 | 100회 (유료) |
| 실사용 예상 | 하루 2~5회 |

### 1.2 원칙

1. **HOW / FOCUS 분리**
   - `skills/` = HOW (방법론, 거의 불변)
   - `missions/` = WHAT/FOCUS (한시적 초점, 수시 갱신)
2. **수집 / 프로파일 2 층위**
   - 수집 (collect-*) = JSON 지표 채우기 (빠름)
   - 프로파일 (profile-*) = Markdown 상세 페이지 작성 (느림, 모델/벤치 당 1세션)
3. **출처 절대 규칙** — 모든 변경을 저널에 `필드 ← URL` 로 기록
4. **쓰기=스크립트, 읽기/판단=LLM** — JSON 은 `manage-*` 스크립트로만
5. **선택적 오버레이** — `missions/<domain>.md` 없어도 기본 모드로 동작
6. **재개 가능성** — 저널 `status: timeout` 으로 다음 세션이 이어받음

---

## 2. 디렉터리 구조

```text
modu-bench/
├── AGENTS.md                         # Jules 자동 로드 — 공통 규칙 (임무/출처/저널/이슈/예산)
├── CLAUDE.md                         # Claude Code 자동 로드 — 개발·프로젝트 맥락
├── skills/
│   ├── manage-model/                # 기존 CRUD 스크립트
│   ├── manage-benchmark/
│   ├── collect-llm/                 # 메타 수집
│   │   ├── SKILL.md
│   │   └── resources/sources.md
│   ├── collect-benchmark/
│   │   ├── SKILL.md
│   │   └── resources/sources.md
│   ├── profile-model/               # 상세 페이지 작성
│   ├── profile-benchmark/           #   (+ 기관 페이지 부수 처리)
│   ├── reinforce/                   # 이슈 해결 전담
│   └── journal/                     # 데일리 리포트 Publisher
│
├── missions/                         # 한시적 초점 (선택적)
│   ├── README.md
│   ├── master.md
│   ├── llm.md
│   ├── benchmark.md
│   └── profile.md
│
├── src/
│   ├── content/                      # Astro Content Collections (상세 페이지)
│   │   ├── config.ts                 # Zod 스키마 — 빌드 시 검증 (할루시네이션 2차 방어선)
│   │   ├── models/<id>.md
│   │   ├── benchmarks/<id>.md
│   │   └── organizations/<id>.md
│   ├── data/
│   │   ├── models/*.json             # 지표 (기존)
│   │   ├── benchmarks/*.json         # 지표 (기존)
│   │   ├── updates/*.md              # 공식 뉴스 + 데일리 리포트
│   │   ├── journal/<YYYY-MM-DD-agent>.md    # 에이전트 raw 로그
│   │   └── issues/<YYYY-MM-DD-agent-slug>.md # 미해결 티켓
│   └── pages/
│       ├── models/[...slug].astro    # 상세 페이지 라우팅
│       ├── benchmarks/[...slug].astro
│       └── organizations/[...slug].astro
│
└── .github/workflows/
    ├── deploy.yml                    # 기존 Pages 배포
    ├── jules-collect.yml             # KST 01:00 — collect-* 트리거
    ├── jules-profile.yml             # KST 02:00 — profile-* 트리거
    └── jules-reinforce.yml           # KST 03:00 — reinforce 트리거 (이슈 있을 때만)
```

---

## 3. 에이전트 카탈로그

| 스킬 | 역할 | 결과물 |
|------|------|-------|
| `collect-llm` | LLM 신규 발견 + 메타 보강 | `src/data/models/llm.json` |
| `collect-benchmark` | 벤치 정의 등록 + 점수 매칭 | `src/data/benchmarks/llm.json` |
| `profile-model` | 모델 상세 페이지 작성 | `src/content/models/<id>.md` |
| `profile-benchmark` | 벤치 상세 + 기관 페이지 스텁 | `src/content/benchmarks/<id>.md`, `organizations/<id>.md` |
| `reinforce` | 이슈 티켓 해결 전담 | 이슈 파일 삭제 또는 진행 내역 append |
| `journal` | 데일리 리포트 발행 | `src/data/updates/<YYYY-MM-DD>-daily.md` |

공통 규칙은 [AGENTS.md](../AGENTS.md) 에 있고 Jules 가 자동 로드한다. 각 SKILL.md 는 그 위의 도메인 고유 절차만 담는다.

---

## 4. 임무 읽기 프로토콜

```
SKILL.md
   ↑ 덮어씀 가능 (단 출처 규칙은 예외)
missions/master.md
   ↑ 덮어씀 가능
missions/<domain>.md
```

상세는 [AGENTS.md](../AGENTS.md) §1 참조.

---

## 5. 절대 규칙 — 출처와 할루시네이션 방지

**이 블록은 어떤 임무 지침으로도 오버라이드할 수 없다.**

1. 출처 URL 없이는 어떤 필드도 저장하지 않는다.
2. 확인 실패 → 저장 금지, 이슈 티켓 생성.
3. `source` 구분: `official` / `community` / `reproduced` (재현은 이 트랙 금지).
4. 모든 변경은 저널에 기록.
5. 상세 페이지 본문 주장도 모두 frontmatter `sources` 배열 또는 각주로 URL 명시.

상세 규칙·예시는 [AGENTS.md](../AGENTS.md) §2, §7 참조.

---

## 6. 저널 / 이슈 포맷

- **저널**: `src/data/journal/YYYY-MM-DD-<agent>.md` — 각 에이전트가 직접 작성, 데일리, 같은 날 append.
- **이슈**: `src/data/issues/YYYY-MM-DD-<agent>-<slug>.md` — 완전 해결 시 삭제, 부분 해결 시 append.

포맷 템플릿 전체는 [AGENTS.md](../AGENTS.md) §3, §4 참조.

### 홈페이지 렌더링

기존 [src/pages/index.astro](../src/pages/index.astro) 의 `import.meta.glob('../data/updates/*.md', {eager:true})` 패턴을 유지하고, 필요 시 `journal/*.md` 도 같은 패턴으로 병합하여 [src/lib/timeline.ts](../src/lib/timeline.ts) `buildTimeline` 확장.

Publisher(`journal` 스킬)가 작성한 `updates/YYYY-MM-DD-daily.md` 는 기존 타임라인 파이프라인에 자동 포함됨.

---

## 7. 스케줄 (재설계 v3)

| 시간 (KST) | 에이전트 | 트리거 | cron (UTC) |
|-----------|---------|-------|-----------|
| **01:00** | `collect-llm`, `collect-benchmark` | **GitHub Actions** (`jules-collect.yml`) → 이슈 생성 + `jules` 라벨 | `0 16 * * *` |
| **02:00** | `profile-model`, `profile-benchmark` | **GitHub Actions** (`jules-profile.yml`) | `0 17 * * *` |
| **03:00** | `reinforce` | **GitHub Actions** (`jules-reinforce.yml`) — 이슈 있을 때만 | `0 18 * * *` |
| **05:00** | `journal` (데일리 리포트) | **Jules Schedules** (직접 등록, 레포 외부) | — |

> GitHub Actions `cron` 은 UTC 만 지원하므로 KST 기준 시간은 UTC − 9h 로 지정된다.

### Jules 트리거 방식

GitHub Actions 에서 `gh issue create --label jules` 로 이슈 생성. 이슈 본문 표준 포맷:

```
skill: <스킬명>
missions:
  - missions/master.md
  - missions/<domain>.md
journal: src/data/journal/{TODAY}-<스킬명>.md
```

Jules 가 이 포맷을 자동 파싱하는지는 PoC 수동 트리거에서 실측 (열린 이슈 §10).

---

## 8. 스키마 확장 (v3 신규)

### 8.1 Score (types.ts)

```typescript
interface Score {
  value: number;
  date: string;
  source: ScoreSource;
  note?: string;
  subscores?: Record<string, number>;   // 신규 (선택)
}
```

### 8.2 BenchmarkDef (types.ts)

```typescript
interface BenchmarkDef {
  // 기존 필드...
  metric?: string;                      // 신규 (선택) — "ELO" / "pass@1" 등
  subMetrics?: SubMetricDef[];          // 신규 (선택) — 복합 점수 벤치용
}

interface SubMetricDef {                // 신규
  id: string;
  name: string;
  unit: string;
  higherIsBetter?: boolean;
}
```

모두 **하위 호환 optional**. 기존 JSON 영향 없음.

### 8.3 Content Collections Zod (src/content/config.ts)

`models` / `benchmarks` / `organizations` 세 컬렉션. 공통 필수 필드: `<entity>Id`, `status`, `updated`, `sources` (URL 배열, min 1). 스키마 위반 시 `bun run build` 실패 → 할루시네이션 2차 방어선.

---

## 9. PoC 범위와 확장

### 9.1 현재 단계

- 도메인: **LLM 만**.
- 벤치마크: **LLM 벤치마크 만**.
- missions 파일로 범위 통제 — `missions/benchmark.md` 에 "대상 도메인: llm" 명시.

### 9.2 확장 로드맵

1. LLM 트랙 안정화 (1~2주 관찰, 저널/이슈 포맷 검증).
2. `collect-llm/` → `collect-tts/`, `collect-stt/` 등으로 **복제 + `resources/sources.md` 교체**.
3. `missions/benchmark.md` 에 도메인 추가로 벤치마크 범위 확장.
4. Publisher 주간 하이라이트, 대시보드 등 고도화.

---

## 10. 열린 이슈

- [ ] Jules 가 이슈 본문 `skill:` / `missions:` / `journal:` 포맷을 자동 파싱하는가, 자연어 프롬프트로 재작성해야 하는가 (PoC 수동 트리거에서 실측 필요)
- [ ] 저널/이슈 홈페이지 섹션 추가 (기존 `buildTimeline` 확장)
- [ ] 연간 저널 아카이브 전략
- [ ] 빈 Content Collection 에서 `getCollection` 동작 (현재 각 라우트에서 `status: published` 필터로 빈 배열 반환 → 404 문제 없음)
- [ ] reinforce 연속 실패 시 사람 에스컬레이션 경로

---

## 11. 참고

- 공통 규칙: [AGENTS.md](../AGENTS.md) (Jules 자동 로드)
- 개발 맥락: [CLAUDE.md](../CLAUDE.md) (Claude Code 자동 로드)
- 데이터 타입: [src/data/types.ts](../src/data/types.ts)
- Content 스키마: [src/content/config.ts](../src/content/config.ts)
- 모델 스킬: [skills/manage-model/SKILL.md](../skills/manage-model/SKILL.md)
- 벤치마크 스킬: [skills/manage-benchmark/SKILL.md](../skills/manage-benchmark/SKILL.md)
- Jules Skills 저장소: <https://github.com/google-labs-code/jules-skills>
- Jules 공식 문서: <https://jules.google/docs/>
- 프로젝트 전체 계획: [reference/plan.md](plan.md)
