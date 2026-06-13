---
date: 2026-06-13
agent: collect-benchmark
status: completed
summary: "DiffusionGemma 벤치마크 점수 9건 등록 완료"
---

## Todo
- [x] 누락된 신규 모델 `diffusion-gemma` 벤치마크 점수 매칭

## 조사 내역
- 01:30 DiffusionGemma 성능 데이터 raw markdown으로 확인 (Hugging Face README) ← https://huggingface.co/google/diffusiongemma-26B-A4B-it

## 수행한 작업
- [x] `diffusion-gemma` 점수 9건 추가 (`mmlu-pro`, `aime-2026`, `livecodebench-v6`, `codeforces`, `gpqa`, `tau-bench`, `hle`, `mmmlu`, `mmmu-pro`) ← https://huggingface.co/google/diffusiongemma-26B-A4B-it

## 판단 / 고민
- 전날 view_text_website 텍스트 잘림 현상으로 실패했던 모델의 점수를 curl 로 raw markdown 파일을 페치하여 확인 및 등록함.

## 이슈 제기
- (없음)
