---
created: 2026-05-05
agent: collect-benchmark
severity: minor
target: llm/rakuten-ai-7b-chat
---

## 상황
Rakuten AI 7B Chat 모델의 벤치마크 점수(MMLU 등)가 모델 공식 문서에서 확인되지 않음. Instruct 모델의 점수만 존재함.

## 시도한 것
- HuggingFace 공식 모델 페이지 (https://huggingface.co/Rakuten/RakutenAI-7B-chat) 확인

## 요청
Rakuten AI 7B Chat 모델에 대한 구체적인 벤치마크 수치가 공개되면 추가 요망.

## 진행 내역
- 2026-05-05 (reinforce): Hugging Face 모델 README에서 Nejumi LLM Leaderboard Neo 점수(0.393, 2024-03-22) 확인. 해당 리더보드는 llm-jp-eval과 Japanese MT-bench의 가중 평균을 사용함. (출처: https://huggingface.co/Rakuten/RakutenAI-7B-chat)
- 2026-05-23 (reinforce): 공식 기술 보고서(arXiv:2403.15484) 확인 결과, Chat 모델에 대한 MMLU 등 영어 벤치마크 수치는 별도로 기재되어 있지 않음 (Instruct 모델 수치만 존재). Nejumi 점수 외 추가적인 표준 벤치마크 점수 확보 실패.
