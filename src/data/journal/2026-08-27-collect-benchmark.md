---
date: 2026-08-27
agent: collect-benchmark
status: completed
summary: "GLM-4V-9B 및 GLM-4-9B 벤치마크 점수 탐색 및 등록 (MMMU, MME 포함)"
---

## Todo
- [x] 신규 등록된 LLM (GLM-4V-9B, GLM-4-9B) 벤치마크 점수 등록 여부 확인
- [x] Hugging Face 공식 출처 기반 벤치마크 점수 및 출처 URL 등록

## 조사 내역
- 01:30 `glm-4v-9b` 벤치마크 점수 (MME, MMMU) 확인 ← https://huggingface.co/THUDM/glm-4v-9b
- 01:35 `glm-4-9b` 벤치마크 점수 (MMLU, C-Eval, GPQA, GSM8K, MATH, HumanEval) 확인 ← https://huggingface.co/THUDM/glm-4-9b

## 수행한 작업
- [x] 신규 벤치마크 `mme` (MME (다중 모달 평가)) 생성 ← https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models
- [x] 신규 벤치마크 `mmmu` (MMMU (다중 모달 추론)) 생성 ← https://mmmu-benchmark.github.io/
- [x] `glm-4v-9b` 벤치마크 점수 2건 (mme, mmmu) 등록 ← https://huggingface.co/THUDM/glm-4v-9b
- [x] `glm-4-9b` 벤치마크 점수 6건 갱신 (mmlu, c-eval, gpqa, gsm8k, math, humaneval) ← https://huggingface.co/THUDM/glm-4-9b

## 판단 / 고민
- MME 및 MMMU 벤치마크가 `llm` 도메인 목록에 없어서 다중 모달 평가 지표로서 새로 추가하였습니다.
- Minimax-Text-01 모델의 점수는 이미 등록된 것을 확인하여 추가 작업을 건너뛰었습니다.
- Yi-Coder 모델 역시 이미 상당수의 벤치마크가 등록되어 있어 추가하지 않았습니다.

## 이슈 제기
- (없음)
