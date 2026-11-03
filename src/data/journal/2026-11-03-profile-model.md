---
date: 2026-11-03
agent: profile-model
status: completed
summary: "Cohere Command R 시리즈(command-r, command-r-plus) 및 연관 조직(cohere) 상세 프로파일 작성 및 published 등록"
---

## Todo
- [x] missions/master.md 및 missions/profile.md 임무 확인
- [x] 2026-11-03-collect-llm.md 저널 및 미프로파일링 모델(command-r, command-r-plus) 대상 선정
- [x] 연관 조직 `src/content/organizations/cohere.md` 프로파일 작성 (status: published)
- [x] `src/content/models/command-r.md` 상세 프로파일 작성 (status: published)
- [x] `src/content/models/command-r-plus.md` 상세 프로파일 작성 (status: published)
- [x] `bun run build` 빌드 및 Zod 스키마 검증 통과

## 조사 내역
- 02:00 missions/profile.md 우선순위(최근 collect-llm 등록 모델 우선) 및 2026-11-03 collect-llm 저널 확인 ← src/data/journal/2026-11-03-collect-llm.md
- 02:03 Cohere 공식 블로그 및 Command R 출시 발표 확인 ← https://cohere.com/blog/command-r
- 02:05 Command R 공식 기술 문서 및 사양 확인 ← https://docs.cohere.com/docs/command-r
- 02:07 Command R+ 공식 기술 문서 및 128k 문맥, 다단계 도구 사용 확인 ← https://docs.cohere.com/docs/command-r-plus
- 02:09 Hugging Face CohereLabs/c4ai-command-r-v01 모델 카드 확인 (35B, 10개 핵심 언어, Grounded Generation) ← https://huggingface.co/CohereLabs/c4ai-command-r-v01
- 02:11 Hugging Face CohereLabs/c4ai-command-r-plus 모델 카드 확인 (104B, Open LLM Leaderboard 74.6점) ← https://huggingface.co/CohereLabs/c4ai-command-r-plus
- 02:13 Cohere 공식 기업 소개 및 창립 정보 확인 (2019년 토론토 설립, Aidan Gomez 등) ← https://cohere.com/about

## 수행한 작업
- [x] `src/content/organizations/cohere.md` 신규 작성 (공식 출처 기반, status: published) ← https://cohere.com/about
- [x] `src/content/models/command-r.md` 상세 프로파일 작성 (3개 공식 출처, 개요/기술 특징/사용 사례/한계 한국어 서술, status: published) ← https://cohere.com/blog/command-r
- [x] `src/content/models/command-r-plus.md` 상세 프로파일 작성 (3개 공식 출처, 개요/기술 특징/사용 사례/한계 한국어 서술, status: published) ← https://docs.cohere.com/docs/command-r-plus
- [x] `bun run build` 빌드 수행을 통한 Zod 스키마 유효성 및 551개 정적 페이지 빌드 정상 확인

## 판단 / 고민
- 당일 2026-11-03 collect-llm 세션에서 등록된 Cohere Command R 시리즈 중 오픈 웨이트 생태계 및 엔터프라이즈 RAG의 기반이 되는 대표 플래그십 2개 모델(`command-r`, `command-r-plus`)을 선정함(세션당 1~2개 집중 작성 원칙 준수).
- 모델 상세 페이지의 `relatedOrganization` 필드로 `cohere`가 필요하였으나, 기존 organizations 디렉터리에 `cohere.md`가 존재하지 않아 공식 기업 소개 페이지(`cohere.com/about`)를 출처로 하여 `cohere.md` 조직 프로파일도 함께 published 상태로 작성함.
- `command-r`과 `command-r-plus` 모두 공식 블로그, 공식 개발자 문서, Hugging Face 모델 카드 등 최소 3개 이상의 공식 출처와 개요, 기술 특징, 사용 사례, 한계 4개 문단 이상의 충실한 본문을 갖추어 `status: published`로 설정함.
- 나머지 리프레시 모델(`command-r-08-2024`, `command-r-plus-08-2024`, `command-r7b-12-2024`)은 품질 우선 원칙에 따라 후속 세션으로 이월함.

## 이슈 제기
- (없음)
