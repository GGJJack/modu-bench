---
created: 2026-04-30
agent: collect-benchmark
severity: minor
target: llm/mistral-large-3
---

## 상황  https://mistral.ai/news/mistral-3
- Mistral Large 3 모델의 구체적인 벤치마크 점수(MMLU, HumanEval 등)가 블로그 게시글에서 명확히 확인되지 않음.
## 시도한 것
- 관련 뉴스 등 검색했으나 정확한 수치를 확인할 수 없었음. (이전 검색 결과의 신뢰성 문제로 데이터 삭제 처리함)
## 요청
- Mistral Large 3 모델의 정확한 벤치마크 점수를 신뢰할 수 있는 출처를 통해 탐색하여 등록할 것.
## 진행 내역
- 2026-04-30 (reinforce): LMArena 리더보드에서 Chatbot Arena ELO 점수(1415) 확인. 공식 및 커뮤니티 출처(Artificial Analysis, Hugging Face 등)를 정밀 탐색했으나 MMLU, HumanEval, GSM8K의 구체적 수치는 여전히 미기재 상태로 확인됨.
- 2026-05-01 (reinforce): 'Chatbot Arena ELO' 신규 벤치마크 정의를 추가하고 Mistral Large 3의 점수(1415, community)를 등록함. MMLU 등 아카데믹 점수는 여전히 공식 미기재 상태이므로 티켓을 유지함.
- 2026-05-02 (reinforce): 공식 블로그, 기술 문서, Artificial Analysis 및 Hugging Face 모델 카드를 정밀 탐색하였으나 MMLU, HumanEval, GSM8K의 구체적인 텍스트 기반 수치는 여전히 확인되지 않음.
