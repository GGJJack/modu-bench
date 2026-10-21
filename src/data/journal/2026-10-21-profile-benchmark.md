---
date: 2026-10-21
agent: profile-benchmark
status: completed
summary: "JMMLU, JP-LMEH, FishMath Internal, HealthBench-Hard 상세 프로파일 4건 작성 및 published 승격"
---

## Todo
- [x] `jmmlu` 상세 프로파일 작성 및 published 승격
- [x] `jp-lmeh` 상세 프로파일 작성 및 published 승격
- [x] `fishmath-internal` 상세 프로파일 작성 및 published 승격
- [x] `healthbench-hard` 상세 프로파일 작성 및 published 승격
- [x] 저널 완결 및 빌드 검증

## 조사 내역
- 02:30 JMMLU 공식 GitHub 정보 확인 ← https://github.com/nlp-waseda/JMMLU
- 02:35 JP-LMEH 공식 GitHub 정보 확인 ← https://github.com/Stability-AI/lm-evaluation-harness
- 02:40 FishMath Internal 관련 정보 확인 ← https://huggingface.co/SakanaAI/gpt-oss-120b-sft-aimo3-fishmath
- 02:45 HealthBench 관련 정보 확인 ← https://huggingface.co/baichuan-inc/Baichuan-M3-235B
- 02:50 JHumanEval 공식 GitHub 404 에러 확인 ← https://github.com/shunk031/JHumanEval

## 수행한 작업
- [x] `src/content/benchmarks/jmmlu.md` 프로파일 작성 완료 ← https://github.com/nlp-waseda/JMMLU
- [x] `src/content/benchmarks/jp-lmeh.md` 프로파일 작성 완료 ← https://github.com/Stability-AI/lm-evaluation-harness
- [x] `src/content/benchmarks/fishmath-internal.md` 프로파일 작성 완료 ← https://huggingface.co/SakanaAI/gpt-oss-120b-sft-aimo3-fishmath
- [x] `src/content/benchmarks/healthbench-hard.md` 프로파일 작성 완료 ← https://huggingface.co/baichuan-inc/Baichuan-M3-235B

## 판단 / 고민
- 기존 `status: draft` 상태였던 벤치마크 4종의 상세 프로파일을 조사하여 내용을 채우고 `published`로 승격함.
- JHumanEval의 경우 출처 URL(GitHub)이 404 에러를 반환하여, 불확실한 정보 추측 및 저장을 방지하기 위해 내용 수정을 생략하고 이슈로 기록하기로 함.

## 이슈 제기
- src/data/issues/2026-10-21-profile-benchmark-jhumaneval.md
