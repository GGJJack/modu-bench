---
date: 2026-10-15
agent: collect-llm
status: completed
summary: "동아시아(일본 LLM) 신규 등록 및 LLM-jp-3 베이스 모델 논문 출처 보강"
---

## Todo
- [x] manage-model CLI를 통한 Llama 3 Swallow 70B (`swallow-3-70b`), Llama 3 Swallow 70B Instruct (`swallow-3-70b-instruct`) 신규 등록
- [x] manage-model CLI를 통한 LLM-jp-3 베이스 모델 계열 (`llm-jp-3-1.8b`, `llm-jp-3-3.7b`, `llm-jp-3-13b`, `llm-jp-3-70b`) 논문 링크 보강
- [x] 프로젝트 빌드 검증 및 저널 완료 처리

## 조사 내역
- 01:02 Tokyo Tech / AIST Llama 3 Swallow 70B 및 70B Instruct 공식 페이지 및 Hugging Face 모델 카드 확인: 70B 파라미터, 8k 컨텍스트 윈도우, Llama-3 라이선스 ← https://swallow-llm.github.io/llama3-swallow.ja.html
- 01:05 LLM-jp-3 테크니컬 리포트 논문 출처 확인 ← https://arxiv.org/abs/2411.08502

## 수행한 작업
- [x] `swallow-3-70b` create (Llama 3 Swallow 70B, Tokyo Tech / AIST, Llama-3) ← https://swallow-llm.github.io/llama3-swallow.ja.html
- [x] `swallow-3-70b-instruct` create (Llama 3 Swallow 70B Instruct, Tokyo Tech / AIST, Llama-3) ← https://swallow-llm.github.io/llama3-swallow.ja.html
- [x] `llm-jp-3-1.8b` update (paper URL added) ← https://arxiv.org/abs/2411.08502
- [x] `llm-jp-3-3.7b` update (paper URL added) ← https://arxiv.org/abs/2411.08502
- [x] `llm-jp-3-13b` update (paper URL added) ← https://arxiv.org/abs/2411.08502
- [x] `llm-jp-3-70b` update (paper URL added) ← https://arxiv.org/abs/2411.08502

## 판단 / 고민
- Japanese LLM 커뮤니티의 70B급 주요 오픈 모델인 Llama 3 Swallow 70B 및 70B Instruct 모델의 공식 웹사이트 및 Hugging Face 모델 카드 정보를 확인 후 신규 등록함.
- LLM-jp-3 시리즈의 베이스 모델들(`llm-jp-3-1.8b`, `llm-jp-3-3.7b`, `llm-jp-3-13b`, `llm-jp-3-70b`)에 대해 공식 테크니컬 리포트 논문 링크(`https://arxiv.org/abs/2411.08502`)를 추가하여, 기존 links 객체의 키들(official, huggingface, github)을 온전히 유지하면서 논문 출처를 보강함.

## 이슈 제기
- (없음)
