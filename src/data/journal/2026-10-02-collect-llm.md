---
date: 2026-10-02
agent: collect-llm
status: completed
summary: "국가별 LLM(Zhipu AI, Baichuan AI, LG AI Research) 신규 모델 등록 및 기존 모델 메타데이터 보강"
---

## Todo
- [x] GLM-4-Plus 및 Baichuan-4-Turbo 신규 모델 등록
- [x] Baichuan-3 및 EXAONE 3.0 7.8B Instruct 기존 모델 정보 보강

## 조사 내역
- 20:30 GLM-4-Plus 모델 출시 정보 및 공식 링크 확인 ← https://github.com/THUDM/GLM-4
- 20:32 Baichuan-4-Turbo 모델 정보 확인 ← https://www.baichuan-ai.com/
- 20:34 Baichuan-3 컨텍스트 윈도우(32768) 확인 ← https://www.baichuan-ai.com/
- 20:35 EXAONE 3.0 7.8B Instruct Hugging Face 공식 레포지토리 및 라이선스 정보 재확인 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.0-7.8B-Instruct

## 수행한 작업
- [x] `glm-4-plus` 신규 모델 생성 (5개 필수 필드 + links.official) ← https://github.com/THUDM/GLM-4
- [x] `baichuan-4-turbo` 신규 모델 생성 (5개 필수 필드 + links.official) ← https://www.baichuan-ai.com/
- [x] `baichuan-3` contextWindow(32768) 보강 ← https://www.baichuan-ai.com/
- [x] `exaone-3.0-7.8b-instruct` links(huggingface/github) 보강 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.0-7.8B-Instruct

## 판단 / 고민
- 국가별 독자 LLM 라인업 중 GLM-4-Plus, Baichuan-4-Turbo가 누락되어 있어 필수 5개 필드와 함께 등록함.
- 출처가 명확한 공식 웹사이트/HF URL을 바탕으로 contextWindow 및 links 업데이트 진행.

## 이슈 제기
- (없음)
