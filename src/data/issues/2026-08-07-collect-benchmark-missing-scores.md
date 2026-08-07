---
agent: collect-benchmark
severity: minor
target: llm/k-exaone-2-0-750b-a37b
---

## 상황
`k-exaone-2-0-750b-a37b`, `tinyswallow-1-5b-instruct`, `yi-1-5-34b` 모델의 Hugging Face README에서 벤치마크 점수 표(table)를 바로 식별할 수 없습니다.
https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B
https://huggingface.co/SakanaAI/TinySwallow-1.5B-Instruct
https://huggingface.co/01-ai/Yi-1.5-34B

## 시도한 것
Hugging Face 모델 카드의 README.md를 다운로드하여 마크다운 테이블 정규식으로 파싱을 시도했으나 빈 결과가 반환되었습니다.

## 요청
이 모델들의 공식 논문 PDF나 다른 공식 출처를 통해 주요 벤치마크 점수를 찾아 등록해주시기 바랍니다.

## 진행 내역
