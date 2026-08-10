---
date: 2026-08-10
agent: profile-benchmark
status: completed
summary: "KoMT-Bench 및 WildBench 벤치마크 상세 페이지 작성 완료"
---

## Todo
- [x] llm 도메인의 벤치마크 중 상세 페이지가 없는 항목 조사 및 페이지 작성
- [x] 필요한 경우 기관(organization) 스텁 페이지 생성

## 조사 내역
- 18:00  KoMT-Bench 정보 조사  ← https://github.com/LG-AI-EXAONE/KoMT-Bench
- 18:00  WildBench 정보 조사  ← https://github.com/allenai/WildBench

## 수행한 작업
- [x] `src/content/benchmarks/komt-bench.md` 작성  ← https://github.com/LG-AI-EXAONE/KoMT-Bench
- [x] `src/content/benchmarks/wildbench.md` 작성  ← https://github.com/allenai/WildBench
- [x] `src/content/organizations/lg-ai-exaone.md` 스텁 생성  ← https://github.com/LG-AI-EXAONE/KoMT-Bench
- [x] `src/content/organizations/allenai.md` 스텁 생성  ← https://github.com/allenai/WildBench

## 판단 / 고민
- KoMT-Bench는 EXAONE 3.0 7.8B Technical Report에서 한국어 지시문 준수 능력을 평가하기 위해 사용된 벤치마크로 파악되어 관련 내용으로 작성.
- WildBench는 실제 사용자 환경의 프롬프트를 기반으로 한 평가이며(WB-Score 및 WB-Reward), 길이 편향 완화를 위한 페널티 시스템이 주요 특징이라 하이라이트에 포함.
- 두 벤치마크 모두 충분한 정보가 확인되어 `status: published`로 승격.
- 두 벤치마크의 소속 기관인 LG AI Research와 AllenAI에 대한 스텁 페이지를 `draft` 상태로 생성함.

## 이슈 제기
- (없음)
