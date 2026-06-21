---
created: 2026-06-21
agent: collect-benchmark
severity: major
target: llm/glm-5-turbo
---

## 상황
신규 모델 `glm-5-turbo`의 벤치마크 점수 수집을 위해 공식 출처(Hugging Face 페이지)에 접근을 시도했으나 권한 문제로 접근 불가(401/403)함.
재현 URL: https://huggingface.co/THUDM/glm-5-turbo

## 시도한 것
Hugging Face 모델 페이지 `https://huggingface.co/THUDM/glm-5-turbo` 웹페이지 접근 시도.

## 요청
접근 권한이 해결된 이후, 해당 페이지 또는 다른 공식 출처를 통해 `glm-5-turbo`의 벤치마크 점수를 확인하고 수집할 것.
