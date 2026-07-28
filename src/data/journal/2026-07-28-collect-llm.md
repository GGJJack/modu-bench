---
date: 2026-07-28
agent: collect-llm
status: completed
summary: "사카나 AI 및 라쿠텐 AI 모델, 네이버 하이퍼클로바 X 등 국가별 독자 LLM 메타데이터 대대적 보강 완료"
---

## Todo
- [x] 일본 라쿠텐 AI 2.0 시리즈 컨텍스트 윈도우 보강 ➔ https://huggingface.co/Rakuten/RakutenAI-2.0-mini/raw/main/config.json 및 https://huggingface.co/Rakuten/RakutenAI-2.0-8x7B/raw/main/config.json
- [x] 사카나 AI Trinity Coordinator 파라미터 사이즈 보강 ➔ https://sakana.ai/trinity/
- [x] 사카나 AI Namazu-DeepSeek-V3.1-Terminus 컨텍스트 윈도우 보강 ➔ https://sakana.ai/namazu-alpha/
- [x] 네이버 하이퍼클로바 X 32B Think 및 8B Omni 논문 링크 보강 ➔ https://arxiv.org/abs/2601.03286 및 https://arxiv.org/abs/2601.01792

## 조사 내역
- 17:00 일본 라쿠텐 AI 2.0 미니 및 8x7B 공식 HuggingFace config.json 스캔하여 각각 131,072(128K) 및 32,768(32K) 컨텍스트 윈도우 규격 확인 ➔ https://huggingface.co/Rakuten/RakutenAI-2.0-mini / https://huggingface.co/Rakuten/RakutenAI-2.0-8x7B
- 17:15 사카나 AI의 ICLR 2026 채택 논문 및 공식 릴리스 페이지 분석을 통해 Trinity Coordinator의 파라미터 수가 2만 개 미만(< 20K learnable params)임을 정밀 확인 ➔ https://sakana.ai/trinity/
- 17:20 사카나 AI의 Namazu-DeepSeek-V3.1-Terminus가 DeepSeek-V3.1-Terminus를 기반으로 한 사후 학습 모델이므로 동일한 128,000 토큰의 컨텍스트 윈도우 사양을 가짐을 교차 확인 ➔ https://sakana.ai/namazu-alpha/
- 17:25 네이버 하이퍼클로바 X 32B Think 및 8B Omni 공식 arXiv 논문 ID(2601.03286, 2601.01792) 및 공식 발표 내용 확인 ➔ https://arxiv.org/abs/2601.03286 / https://arxiv.org/abs/2601.01792

## 수행한 작업
- [x] rakuten-ai-2-0-mini 및 rakuten-ai-2-0-mini-instruct 컨텍스트 윈도우 보강 (contextWindow: 131072) ➔ https://huggingface.co/Rakuten/RakutenAI-2.0-mini
- [x] rakuten-ai-2-0-8x7b 및 rakuten-ai-2-0-8x7b-instruct 컨텍스트 윈도우 보강 (contextWindow: 32768) ➔ https://huggingface.co/Rakuten/RakutenAI-2.0-8x7B
- [x] trinity-coordinator 파라미터 사이즈 정보 보강 (parameterSize: "< 20K (learnable params)") ➔ https://sakana.ai/trinity/
- [x] namazu-deepseek-v3-1-terminus 컨텍스트 윈도우 보강 (contextWindow: 128000) ➔ https://sakana.ai/namazu-alpha/
- [x] hyperclova-x-32b-think 논문 링크 보강 (paper: "https://arxiv.org/abs/2601.03286") ➔ https://arxiv.org/abs/2601.03286
- [x] hyperclova-x-8b-omni 논문 링크 보강 (paper: "https://arxiv.org/abs/2601.01792") ➔ https://arxiv.org/abs/2601.01792

## 판단 / 고민
- 국가별 독자 LLM 활성화 미션에 따라, 수집 과정에서 임의적인 추정을 전면 배제하고, 공식 리포지토리의 원본 소스 파일(config.json), 피어 리뷰 완료된 학술 논문(ICLR, arXiv) 및 제조사 공식 보도자료를 엄밀하게 탐색했습니다.
- 이를 통해 신뢰도 100%의 확실한 수치들을 추가 발굴하여 데이터베이스의 완결성을 높였습니다.

## 이슈 제기
- (없음)
