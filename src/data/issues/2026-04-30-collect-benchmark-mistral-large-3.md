---
created: 2026-04-30
agent: collect-benchmark
severity: blocker
target: llm/mistral-large-3
---

## 상황  https://mistral.ai/news/mistral-3
- Mistral Large 3 모델의 구체적인 벤치마크 점수(MMLU, HumanEval 등)가 블로그 게시글에서 명확히 확인되지 않음.
## 시도한 것
- 관련 뉴스 등 검색했으나 정확한 수치를 확인할 수 없었음. (이전 검색 결과의 신뢰성 문제로 데이터 삭제 처리함)
## 요청
- Mistral Large 3 모델의 정확한 벤치마크 점수를 신뢰할 수 있는 출처를 통해 탐색하여 등록할 것. (사람 에스컬레이션 필요: 공식 텍스트 수치 확인 불가)
## 진행 내역
- 2026-04-30 (reinforce): LMArena 리더보드에서 Chatbot Arena ELO 점수(1415) 확인. 공식 및 커뮤니티 출처(Artificial Analysis, Hugging Face 등)를 정밀 탐색했으나 MMLU, HumanEval, GSM8K의 구체적 수치는 여전히 미기재 상태로 확인됨.
- 2026-05-01 (reinforce): 'Chatbot Arena ELO' 신규 벤치마크 정의를 추가하고 Mistral Large 3의 점수(1415, community)를 등록함. MMLU 등 아카데믹 점수는 여전히 공식 미기재 상태이므로 티켓을 유지함.
- 2026-05-02 (reinforce): 공식 블로그, 기술 문서, Artificial Analysis 및 Hugging Face 모델 카드를 정밀 탐색하였으나 MMLU, HumanEval, GSM8K의 구체적인 텍스트 기반 수치는 여전히 확인되지 않음.
- 2026-05-05 (reinforce): Ministral 3 기술 리포트(arXiv:2601.08584)에서도 Mistral Large 3의 점수는 텍스트로 명시되지 않고 타 모델과의 비교 차트로만 제시됨. 공식 텍스트 수치 확인이 여전히 어려워 티켓을 유지함.
- 2026-05-07 (reinforce): Search performed on official site and technical reports, but text-based scores still unavailable.
- 2026-05-08 (reinforce): Mistral 공식 블로그 및 Artificial Analysis 등을 포함한 주요 커뮤니티 리더보드를 재탐색하였으나, Mistral Large 3의 MMLU, HumanEval 등 아카데믹 벤치마크에 대한 텍스트 기반 공식 수치는 여전히 공개되지 않은 상태임.
- 2026-05-09 (reinforce): 공식 Hugging Face 모델 카드의 벤치마크 차트 이미지를 통해 MMLU(85.5%, 8-lang average), GPQA(43.9%, Diamond 5-shot), Chatbot Arena ELO(1418) 점수를 확인하여 등록함. HumanEval, GSM8K 점수는 여전히 텍스트로 명시되지 않음.
- 2026-05-11 (reinforce): 공식 기술 리포트(arXiv:2601.08584)에서 Ministral 3 (14B, 8B, 3B)의 MMLU, MBPP, ARC-C, TriviaQA, MATH 점수를 확인하여 등록함. Mistral Large 3의 HumanEval, GSM8K 점수는 여전히 텍스트 수치로 확인되지 않아 티켓을 유지함.
- 2026-05-13 (reinforce): 공식 블로그 및 기술 문서(arXiv:2601.08584)를 재검토하고 최신 커뮤니티 리더보드(llm-stats.com)를 탐색했으나, Mistral Large 3의 HumanEval 및 GSM8K 공식 수치는 여전히 공개되지 않음. 추가 데이터 확인 불가로 티켓 유지함.
- 2026-05-14 (reinforce): Mistral Large v2 (Instruct-2407) 데이터를 Large 3로 오인하여 등록했으나 이를 취소함. Large 3의 공식 텍스트 점수는 여전히 확인되지 않아 티켓 유지함.
- 2026-05-15 (reinforce): 공식 블로그 및 Hugging Face 모델 카드(Mistral-Large-3-675B-Instruct-2512)를 재검토하였으나, HumanEval 및 GSM8K 점수는 여전히 이미지로만 제공되며 텍스트 기반 공식 수치는 확인되지 않음. Mistral Large v2(2407)와의 혼동을 방지하기 위해 추가 데이터 등록 없이 티켓을 유지함.

- 2026-05-16 (reinforce): 공식 블로그 및 관련 기술 문서를 정밀 재탐색하였으나 Mistral Large 3의 HumanEval 및 GSM8K 공식 텍스트 점수는 여전히 확인되지 않음. 기존에 잘못된 출처 URL로 등록되어 있던 MMLU 및 GPQA 점수의 URL을 공식 Hugging Face 경로로 수정함.
- 2026-05-17 (reinforce): 공식 블로그(mistral.ai/news/mistral-3/) 및 기술 리포트(arXiv:2601.08584)를 재조사함. HumanEval 및 GSM8K 점수는 여전히 텍스트로 명시되지 않고 타 모델과의 비교 차트로만 존재함. 다수의 reinforce 세션에서 해결되지 않아 severity를 blocker로 격상하고 사람 에스컬레이션을 요청함.
