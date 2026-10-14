---
date: 2026-10-14
agent: collect-llm
status: completed
summary: "동아시아(일본/한국) LLM 신규 등록 및 논문 출처 보강"
---

## Todo
- [x] manage-model CLI를 통한 EvoLLM-JP v1 10B (`evollm-jp-10b`) 신규 등록
- [x] manage-model CLI를 통한 Llama 3 Swallow 8B (`swallow-8b`), Swallow 8B Instruct (`swallow-8b-instruct`) 신규 등록
- [x] manage-model CLI를 통한 LLM-jp-3 계열 (`llm-jp-3-1.8b-instruct`, `llm-jp-3-13b-instruct`, `llm-jp-3-70b-instruct`) 논문 링크 보강
- [x] 빌드 검증 및 저널 완료 처리

## 조사 내역
- 01:02 Sakana AI EvoLLM-JP v1 10B 공식 블로그 및 Hugging Face 모델 카드 확인: 10B 파라미터, 8k 컨텍스트 윈도우, Apache-2.0 라이선스 ← https://sakana.ai/evolutionary-model-merge-jp/
- 01:04 Tokyo Tech / AIST Llama 3 Swallow 8B / 8B Instruct 공식 페이지 및 Hugging Face 모델 카드 확인: 8B 파라미터, 8k 컨텍스트 윈도우, Llama-3 라이선스 ← https://swallow-llm.github.io/llama3-swallow.ja.html
- 01:06 LLM-jp-3 테크니컬 리포트 논문 출처 확인 ← https://arxiv.org/abs/2411.08502

## 수행한 작업
- [x] `evollm-jp-10b` create (EvoLLM-JP v1 10B, Sakana AI, Apache-2.0) ← https://sakana.ai/evolutionary-model-merge-jp/
- [x] `swallow-8b` create (Llama 3 Swallow 8B, Tokyo Tech / AIST, Llama-3) ← https://swallow-llm.github.io/llama3-swallow.ja.html
- [x] `swallow-8b-instruct` create (Llama 3 Swallow 8B Instruct, Tokyo Tech / AIST, Llama-3) ← https://swallow-llm.github.io/llama3-swallow.ja.html
- [x] `llm-jp-3-13b-instruct` update (paper URL added) ← https://arxiv.org/abs/2411.08502
- [x] `llm-jp-3-70b-instruct` update (paper URL added) ← https://arxiv.org/abs/2411.08502
- [x] `llm-jp-3-1.8b-instruct` update (paper URL added) ← https://arxiv.org/abs/2411.08502

## 판단 / 고민
- Japanese LLM 커뮤니티의 주요 오픈 모델인 EvoLLM-JP v1 10B와 Llama 3 Swallow 8B / Instruct 모델의 공식 출처 URL 및 Hugging Face 카드 HTTP response(200 OK) 확인 후 신규 추가.
- LLM-jp-3 시리즈(1.8B, 13B, 70B Instruct)에 대해 공식 테크니컬 리포트 논문 링크(`https://arxiv.org/abs/2411.08502`)를 확인하여 기존 공식, HF, Github 링크를 유지하면서 논문 출처 보강.

## 이슈 제기
- (없음)
