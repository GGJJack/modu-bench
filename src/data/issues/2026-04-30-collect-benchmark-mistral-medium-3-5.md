---
created: 2026-04-30
agent: collect-benchmark
severity: minor
target: llm/mistral-medium-3-5
---

## 상황  https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5
- Mistral Medium 3.5 모델의 HumanEval 점수가 공식 블로그 포스트나 모델 카드에 기재되어 있지 않음. SWE-bench Verified (77.6%) 만 확인됨.
## 시도한 것
- 관련 뉴스, Hugging Face 모델 카드, Ollama 등을 검색했으나 명확한 HumanEval 점수를 찾을 수 없었음.
## 요청
- Mistral Medium 3.5 모델의 HumanEval 점수를 다른 신뢰할 수 있는 출처나 커뮤니티 리더보드에서 탐색하여 등록할 것.
## 진행 내역
- 2026-04-30 (reinforce): 공식 블로그, Hugging Face 모델 카드, 주요 리더보드를 탐색했으나 SWE-bench Verified 외의 HumanEval 점수는 여전히 확인되지 않음.
- 2026-05-01 (reinforce): 추가 탐색 결과 Mistral Medium 3.5의 공식 HumanEval 점수는 여전히 미공개 상태임.
- 2026-05-02 (reinforce): 공식 블로그, 기술 문서, Artificial Analysis 및 Hugging Face 모델 카드를 정밀 탐색하였으나 HumanEval 수치는 여전히 확인되지 않음.
- 2026-05-05 (reinforce): Ministral 3 기술 리포트(arXiv:2601.08584)에서 Mistral Medium 3.5가 Ministral 3의 SFT 교사 모델로 사용되었음이 확인되었으나, HumanEval 등 구체적인 아카데믹 벤치마크 점수는 여전히 공개되지 않음.
- 2026-05-07 (reinforce): Search performed, but official HumanEval score still unavailable.
- 2026-05-08 (reinforce): HumanEval 점수를 포함한 추가적인 아카데믹 벤치마크 데이터를 탐색했으나, SWE-bench Verified 외의 공식 수치는 여전히 확인되지 않음.
- 2026-05-09 (reinforce): 공식 블로그 및 Artificial Analysis를 재탐색함. SWE-bench Verified(77.6%)와 tau-bench-telecom(91.4) 점수는 공식 확인되었으나, HumanEval 점수는 여전히 공식적으로 공개되지 않았거나 다른 벤치마크로 대체된 것으로 보임.
- 2026-05-11 (reinforce): 공식 블로그 및 기술 문서를 재검토했으나 HumanEval 점수는 여전히 공식적으로 공개되지 않음. SWE-bench Verified와 Tau-bench 점수로 대체 관리 중이며, 추가 데이터 확인 시까지 티켓 유지함.
- 2026-05-13 (reinforce): 공식 블로그 및 주요 리더보드(llm-stats.com)를 재탐색하였으나 Mistral Medium 3.5의 HumanEval 공식 수치는 여전히 공개되지 않은 상태임. 추가 데이터 확인 불가로 티켓 유지함.
- 2026-05-14 (reinforce): Mistral Large 3 (Instruct-2407)의 HumanEval(92%)과 GSM8K(93%) 점수를 확인하여 등록함. Mistral Medium 3.5의 공식 HumanEval 점수는 여전히 공개되지 않아 티켓 유지함.
- 2026-05-15 (reinforce): 공식 블로그 및 Hugging Face 모델 카드(Mistral-Medium-3.5-128B)를 재탐색하였으나 HumanEval 공식 점수는 여전히 미기재 상태임. 타 모델(v2)의 점수와 혼동될 수 있는 데이터는 배제하였으며, 추가 공식 발표가 있을 때까지 티켓을 유지함.

- 2026-05-16 (reinforce): 공식 블로그 및 Artificial Analysis 등 주요 출처를 재탐색하였으나 HumanEval 공식 점수는 여전히 미공개 상태임. 추가 데이터 확인 시까지 티켓 유지함.
