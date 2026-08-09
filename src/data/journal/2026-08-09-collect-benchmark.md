---
date: 2026-08-09
agent: collect-benchmark
status: completed
summary: "GLM-4-9B 벤치마크 점수 등록 (MMLU, C-Eval 등 5개), Yi-1.5 모델은 출처 확인 실패로 이슈 생성"
---

## Todo
- [x] 신규 등록된 LLM 모델(glm-4-9b, yi-1-5-9b, yi-1-5-6b) 벤치마크 점수 매칭

## 조사 내역
- 01:30 GLM-4-9B 모델 공식 출처(Huggingface) 탐색 및 벤치마크 점수 확인 ← https://huggingface.co/THUDM/glm-4-9b/raw/main/README.md
- 01:35 Yi-1.5-9B, Yi-1.5-6B 모델 공식 출처(Huggingface, GitHub) 탐색 및 벤치마크 점수 확인 실패 ← https://huggingface.co/01-ai/Yi-1.5-9B/raw/main/README.md, https://raw.githubusercontent.com/01-ai/Yi/main/README.md

## 수행한 작업
- [x] 신규 벤치마크 c-eval (C-Eval (중국어 평가)) 등록 ← https://github.com/SJTU-LIT/ceval
- [x] glm-4-9b 모델 mmlu 점수(74.7) 매칭 ← https://huggingface.co/THUDM/glm-4-9b/raw/main/README.md
- [x] glm-4-9b 모델 c-eval 점수(77.1) 매칭 ← https://huggingface.co/THUDM/glm-4-9b/raw/main/README.md
- [x] glm-4-9b 모델 gpqa 점수(34.3) 매칭 ← https://huggingface.co/THUDM/glm-4-9b/raw/main/README.md
- [x] glm-4-9b 모델 gsm8k 점수(84.0) 매칭 ← https://huggingface.co/THUDM/glm-4-9b/raw/main/README.md
- [x] glm-4-9b 모델 math 점수(30.4) 매칭 ← https://huggingface.co/THUDM/glm-4-9b/raw/main/README.md
- [x] glm-4-9b 모델 humaneval 점수(70.1) 매칭 ← https://huggingface.co/THUDM/glm-4-9b/raw/main/README.md
- [x] yi-1-5-9b, yi-1-5-6b 모델의 점수 출처를 찾지 못하여 2026-08-09-collect-benchmark-yi-1-5.md 이슈 티켓 생성

## 판단 / 고민
- GLM-4-9B의 README에서 C-Eval 벤치마크 점수를 발견하여 새롭게 `c-eval` 벤치마크를 정의하고 등록했습니다.
- Yi-1.5 시리즈의 경우 공식 Huggingface 및 Github 리포지토리의 README를 조회했으나 상세 점수표를 포함하고 있지 않아 점수 매칭을 보류하고 이슈 티켓을 남겼습니다.

## 이슈 제기
- issues/2026-08-09-collect-benchmark-yi-1-5.md
