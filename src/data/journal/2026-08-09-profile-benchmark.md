---
date: 2026-08-09
agent: profile-benchmark
status: completed
summary: "CoffeeBench 및 CursorBench의 상세 페이지 작성(draft -> published) 및 Cursor 조직 스텁 생성, C-Eval 벤치마크 상세 페이지 추가 완료"
---

## Todo
- [x] CoffeeBench 상세 페이지 보강 및 published 로 승격
- [x] CursorBench 상세 페이지 보강 및 published 로 승격
- [x] Cursor 조직 스텁 파일(src/content/organizations/cursor.md) 생성 및 이슈 티켓 생성

## 조사 내역
- 02:30 `src/content/benchmarks/*.md` 중 `status: draft` 인 벤치마크 조사 (coffeebench.md, cursor-bench.md)
- 02:32 CoffeeBench 공식 논문 및 관련 블로그 내용 파악 ← https://sakana.ai/coffee-bench/, https://arxiv.org/abs/2606.16613
- 02:35 CursorBench 벤치마크 정보 및 Cursor 조직 관련 블로그 내용 파악 ← https://lushbinary.com/blog/cursor-composer-2-5-developer-guide-benchmarks-pricing/

## 수행한 작업
- 02:40 `coffeebench.md` 상세 페이지를 `draft` 에서 `published` 로 승격, 평가 방법 및 점수 해석 본문 추가 완료 ← https://sakana.ai/coffee-bench/
- 02:45 `cursor-bench.md` 상세 페이지를 `draft` 에서 `published` 로 승격, 평가 방법 및 점수 해석 본문 추가 완료 ← https://lushbinary.com/blog/cursor-composer-2-5-developer-guide-benchmarks-pricing/
- 02:50 `organization: "cursor"` 를 `cursor-bench.md` 에 추가하고, 관련 기관인 `cursor.md` 가 없어 스텁 파일(`src/content/organizations/cursor.md`) 생성.
- 02:55 `cursor` 스텁 생성을 위한 이슈 티켓(`src/data/issues/2026-08-09-profile-benchmark-cursor-org.md`) 생성.

## 판단 / 고민
- CursorBench 의 경우 lushbinary.com 에 게시된 외부 리뷰/테크 블로그 글을 기반으로 Cursor 의 성능 평가 방식과 에이전트 작업 궤적을 반영하여 내용을 보강함.

## 이슈 제기
- issues/2026-08-09-profile-benchmark-cursor-org.md

## 재실행 (02:30)

## Todo
- [x] C-Eval 벤치마크 상세 페이지 작성 및 발행 ← https://github.com/SJTU-LIT/ceval

## 조사 내역
- 02:30 C-Eval 대상 선정 확인 (src/content/benchmarks/c-eval.md 누락 확인) ← bun run skills/manage-benchmark/scripts/benchmark.ts list llm
- 02:35 C-Eval GitHub 리포지토리 및 논문 요약(abstract) 내용 확인 ← https://github.com/SJTU-LIT/ceval, https://arxiv.org/abs/2305.08322

## 수행한 작업
- [x] `src/content/benchmarks/c-eval.md` 작성 및 `published` 상태 설정 (hkust-nlp 기관 페이지 연결) ← https://arxiv.org/abs/2305.08322
