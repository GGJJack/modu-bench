---
date: 2026-06-12
agent: collect-benchmark
status: completed
summary: "Gemma 4 12B 모델 벤치마크 점수 등록 완료. DiffusionGemma 점수는 출처 확인 불가로 이슈 생성"
---

## Todo
- [x] 어제 수집된 신규 모델 `gemma-4-12b` 벤치마크 점수 매칭
- [x] 어제 수집된 신규 모델 `diffusion-gemma` 벤치마크 점수 매칭

## 조사 내역
- 01:30 Gemma 4 12B 성능 데이터 확인 ← https://huggingface.co/google/gemma-4-12B-it
- 01:35 DiffusionGemma 성능 데이터 확인 (페이지 텍스트 잘림) ← https://huggingface.co/google/diffusiongemma-26B-A4B-it
- 01:40 MMMLU 벤치마크 신규 발견 및 등록 ← https://github.com/openai/simple-evals
- 01:42 MMMU Pro 벤치마크 신규 발견 및 등록 ← https://mmmu-benchmark.github.io/
- 01:45 AIME 2026 벤치마크 신규 발견 및 등록 ← https://huggingface.co/datasets/MathArena/aime_2026

## 수행한 작업
- [x] 신규 벤치마크 등록 `mmmlu`, `mmmu-pro`, `aime-2026`
- [x] `gemma-4-12b` 점수 9건 추가 (`mmlu-pro`, `aime-2026`, `livecodebench-v6`, `codeforces`, `gpqa`, `tau-bench`, `hle`, `mmmlu`, `mmmu-pro`) ← https://huggingface.co/google/gemma-4-12B-it

## 판단 / 고민
- MMLU-Pro, LiveCodeBench v6, Codeforces, GPQA, Tau-bench, HLE 벤치마크 점수들이 있어 등록함.
- AIME 2026, MMMLU, MMMU Pro 등은 현재 등록되지 않은 벤치마크여서 `manage-benchmark create`를 통해 신규 벤치마크로 등록하고 점수를 추가함.
- DiffusionGemma 모델의 Hugging Face 카드는 view_text_website 툴로 스크랩시 평가 결과 부분이 잘려서 수집되었습니다. 출처 데이터 텍스트에서 직접 확인되지 않은 점수는 저장하지 않아야 하므로 점수 매칭을 취소하고 이슈 티켓을 발행했습니다.

## 이슈 제기
- issues/2026-06-12-collect-benchmark-diffusion-gemma.md
