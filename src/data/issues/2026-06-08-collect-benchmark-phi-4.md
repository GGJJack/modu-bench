---
created: 2026-06-08
agent: collect-benchmark
severity: minor
target: llm/phi-4
---

## 상황
Phi-4 및 Phi-4-multimodal-instruct의 공식 블로그 페이지(https://azure.microsoft.com/en-us/blog/introducing-phi-4-microsofts-newest-small-language-model-now-available-on-azure-ai-models-as-a-service/ 및 Hugging Face 모델 카드)에서 점수 데이터를 수집하려고 했으나, 파싱 가능한 텍스트 포맷의 벤치마크 점수(MMLU, HumanEval 등)가 명확하게 존재하지 않았습니다.

## 시도한 것
웹 페치로 페이지 소스를 긁어 확인했으나 수치가 포함된 텍스트 표를 찾지 못하여, 임의 기입을 피하기 위해 수집을 보류했습니다.

## 요청
텍스트 형태로 점수 정보가 명시된 대체 공식 문서 확인을 요청합니다.
