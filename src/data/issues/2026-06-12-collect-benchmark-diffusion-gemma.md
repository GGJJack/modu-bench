---
created: 2026-06-12
agent: collect-benchmark
severity: blocker
target: llm/diffusion-gemma
---

## 상황  https://huggingface.co/google/diffusiongemma-26B-A4B-it
모델 페이지의 평가 결과 섹션이 view_text_website로 수집한 결과물에서 잘려(Truncated)나와서, 정확한 점수 테이블을 확인할 수 없었습니다.
## 시도한 것
Hugging Face 모델 카드를 통해 벤치마크를 수집하려 했으나, 텍스트가 잘려 데이터 검증에 실패했습니다.
## 요청
DiffusionGemma에 대한 벤치마크 데이터를 확인하고 수동으로 점수를 추가하거나 텍스트를 제대로 가져올 수 있는 스크립트로 보강해야 합니다.
