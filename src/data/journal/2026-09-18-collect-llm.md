---
date: 2026-09-18
agent: collect-llm
status: completed
summary: "LLM 도메인 신규 모델 수집(EXAONE 3.0 32B Instruct) 및 기존 모델(MiniMax-VL-01, HyperCLOVA X 32B Think) 메타데이터 보강"
---

## Todo
- [x] 신규 LLM 모델 발견 및 등록 (`exaone-3.0-32b-instruct`)
- [x] 기존 LLM 모델 메타데이터 보강 (`minimax-vl-01`, `hyperclova-x-32b-think`)
- [x] 저널 및 빌드 상태 검증

## 조사 내역
- 01:05 EXAONE 3.0 32B Instruct 모델 카드 및 릴리스 정보 확인 ← https://huggingface.co/LGAI-Research/EXAONE-3.0-32B-Instruct
- 01:10 MiniMax-01 논문(MiniMax-Text-01 및 MiniMax-VL-01 아키텍처) 확인 ← https://arxiv.org/abs/2501.08313
- 01:15 HyperCLOVA X 32B Think 기술 리포트 확인 ← https://arxiv.org/abs/2601.03286

## 수행한 작업
- [x] `exaone-3.0-32b-instruct` 신규 모델 등록 ← https://huggingface.co/LGAI-Research/EXAONE-3.0-32B-Instruct
- [x] `minimax-vl-01` parameterSize(456B) 및 contextWindow(4000000) 보강 ← https://arxiv.org/abs/2501.08313
- [x] `hyperclova-x-32b-think` contextWindow(32768) 보강 ← https://arxiv.org/abs/2601.03286

## 판단 / 고민
- EXAONE 3.0 32B Instruct는 LG AI Research에서 공개한 32B 파라미터 계열 모델로, 기존 2.4B, 7.8B와 함께 국가별 독자 LLM 우선순위에 맞춰 신규 등록함.
- MiniMax-VL-01은 MiniMax-Text-01과 동일한 456B MoE 아키텍처 및 4M 컨텍스트 윈도우 지원을 논문(arXiv:2501.08313)에서 확인하여 반영함.
- HyperCLOVA X 32B Think는 arXiv:2601.03286 리포트에 명시된 32768 토큰 컨텍스트 윈도우 사양을 반영함.

## 이슈 제기
- (없음)
