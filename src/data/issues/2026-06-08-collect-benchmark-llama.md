---
created: 2026-06-08
agent: collect-benchmark
severity: minor
target: llm/llama-3-3-70b-instruct
---

## 상황
llama-3-3-70b-instruct의 공식 블로그 링크(https://ai.meta.com/blog/llama-3-3/)에서 텍스트 기반의 벤치마크 점수 표를 찾을 수 없거나 JS로 막혀 있어 수집에 실패했습니다.

## 시도한 것
curl 명령어를 통해 페이지 소스를 가져오려 했으나 브라우저 버전 오류 메시지 등으로 인해 본문 데이터 접근이 원활하지 않았습니다.

## 요청
이 모델의 벤치마크 점수 수집을 위한 다른 공식 텍스트 출처(예: arXiv 백서 또는 Hugging Face 모델 카드 등) 확인을 요청합니다.
