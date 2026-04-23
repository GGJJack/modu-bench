---
date: 2026-04-23
agent: collect-llm
status: completed
summary: "LLM 도메인 신규 모델 5건 수집 및 등록 완료 (HyperCLOVA X, EXAONE 3.0, Solar Pro 3, Llama 3.1, DeepSeek-V3)"
---

## Todo
- [x] HyperCLOVA X 정보 수집 및 등록
- [x] EXAONE 3.0 정보 수집 및 등록
- [x] Solar Pro 3 정보 수집 및 등록
- [x] Llama 3.1 정보 수집 및 등록
- [x] DeepSeek-V3 정보 수집 및 등록
- [x] 수집된 모델 등록 (manage-model 스크립트 사용)

## 조사 내역
- 01:05 수집 작업 시작 ← AGENTS.md
- 01:15 DeepSeek-V3 조사: 출시일 2024-12-26, 라이선스 DeepSeek Model License, 컨텍스트 128K ← https://github.com/deepseek-ai/DeepSeek-V3
- 01:20 Llama 3.1 조사: 출시일 2024-07-23, 라이선스 Llama 3.1 Community License, 컨텍스트 128K ← https://huggingface.co/meta-llama/Llama-3.1-405B-Instruct
- 01:25 Solar Pro 3 조사: 출시일 2026-01-26, 라이선스 Proprietary, Upstage 개발 ← https://www.upstage.ai/blog/en/solar-pro-3-0127
- 01:30 EXAONE 3.0 조사: 출시일 2024-08-07, LG AI Research 개발, 라이선스 EXAONE AI Model License Agreement 1.0 ← https://www.lgresearch.ai
- 01:35 HyperCLOVA X 조사: 출시일 2023-08-24, NAVER Cloud 개발, 라이선스 Proprietary ← https://clova-x.naver.com

## 수행한 작업
- [x] hyperclova-x 신규 등록 (2023-08-24) ← https://clova-x.naver.com
- [x] exaone-3.0 신규 등록 (2024-08-07) ← https://www.lgresearch.ai
- [x] solar-pro-3 신규 등록 (2026-01-26) ← https://www.upstage.ai/blog/en/solar-pro-3-0127
- [x] llama-3.1-405b 신규 등록 (2024-07-23) ← https://ai.meta.com/blog/meta-llama-3-1/
- [x] deepseek-v3 신규 등록 (2024-12-26) ← https://github.com/deepseek-ai/DeepSeek-V3

## 판단 / 고민
- 라이선스 명칭이 각기 다르므로 공식 문서에 기재된 정확한 명칭을 사용함.
- Llama 3.1과 DeepSeek-V3의 컨텍스트 윈도우(128K) 정보를 추가로 업데이트함.

## 이슈 제기
- (없음)
