---
date: 2026-10-23
agent: collect-benchmark
status: completed
summary: "Sakana AI 모델의 신규 벤치마크 및 점수 반영 (JFBench, FairPoliticsQA, Chartography, SWEFish)"
---

## Todo
- [x] Sakana AI 신규 벤치마크(JFBench, FairPoliticsQA, Chartography, SWEFish) 탐색 및 등록
- [x] `sakana-namazu` 모델 FairPoliticsQA 점수 등록
- [x] `sakana-fugu-ultra-v2` 모델 Chartography 점수 등록

## 조사 내역
- 01:30 Sakana Namazu API 공식 발표 블로그 확인 ← https://sakana.ai/namazu-api/
- 01:32 Sakana Fugu Max 및 Fugu Ultra v2 공식 발표 블로그 확인 ← https://sakana.ai/fugu-max-release/
- 01:35 Sakana Fugu Cyber 공식 발표 블로그 확인 ← https://sakana.ai/fugu-cyber-release/

## 수행한 작업
- [x] `jfbench` 벤치마크 신규 등록 ← https://sakana.ai/namazu-api/
- [x] `fairpoliticsqa` 벤치마크 신규 등록 ← https://sakana.ai/namazu-api/
- [x] `chartography` 벤치마크 신규 등록 ← https://sakana.ai/fugu-max-release/
- [x] `swefish` 벤치마크 신규 등록 ← https://sakana.ai/fugu-max-release/
- [x] `sakana-namazu` 모델에 `fairpoliticsqa` 점수(56.30) 등록 ← https://sakana.ai/namazu-api/
- [x] `sakana-fugu-ultra-v2` 모델에 `chartography` 점수(48.3) 등록 ← https://sakana.ai/fugu-max-release/

## 판단 / 고민
- JFBench와 SWEFish는 블로그 포스트에 구체적인 점수 수치가 기재되어 있지 않아, 출처 URL이 없는 필드는 저장하지 않기 규칙을 준수하여 점수를 기입하지 않음.
- DeepSWE 점수 74.3이 제시되어 있으나, 버전(1.0 또는 1.1)이 불명확하여 점수 입력을 유보함.
- 관련된 내용들을 묶어 마이너 이슈 티켓으로 발행함.

## 이슈 제기
- issues/2026-10-23-collect-benchmark-sakana-scores.md
