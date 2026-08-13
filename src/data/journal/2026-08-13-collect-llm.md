---
date: 2026-08-13
agent: collect-llm
status: completed
summary: "국가별 독자 LLM(한국 LG EXAONE, 일본 LLM-jp-3 및 중국 Qwen2.5 시리즈) 5개 신규 모델 추가 및 기존 라쿠텐(Rakuten AI) 모델 4개 정보 보강 완료"
---

## Todo
- [x] 신규 모델 수집 및 등록 5건 (exaone-3.0-2.4b-base, llm-jp-3-13b, llm-jp-3-1.8b, qwen-2.5-1.5b, qwen-2.5-0.5b-instruct)
- [x] 기존 모델 보강 4건 (rakuten-ai-7b, rakuten-ai-7b-instruct, rakuten-ai-7b-chat, rakuten-ai-2-0-8x7b-instruct)

## 조사 내역
- 13:00 작업 시작 및 임무 포커스 대조
- 13:10 한국 LG AI Research EXAONE 3.0 라인업 및 공식 허깅페이스 사양 대조 ← https://www.lgresearch.ai/models/exaone, https://huggingface.co/LGAI-Research/EXAONE-3.0-2.4B-Base
- 13:20 일본 산학관 공동 연구체 LLM-jp-3 최신 베이스 모델(13B, 1.8B) 및 허깅페이스 리포지토리 조사 ← https://llm-jp.nii.ac.jp/, https://huggingface.co/llm-jp
- 13:30 중국 Alibaba Cloud Qwen 2.5 소형 라인업(1.5B Base, 0.5B Instruct) 공식 블로그 및 코드베이스 대조 ← https://qwenlm.github.io/blog/qwen2.5/, https://github.com/QwenLM/Qwen2.5
- 13:40 일본 라쿠텐(Rakuten)의 공식 GitHub 리포지토리 및 7B/2.0 8x7B 소스 코드 경로 검증 ← https://github.com/Rakuten/RakutenAI-7B, https://github.com/Rakuten/RakutenAI-2.0

## 수행한 작업
- [x] exaone-3.0-2.4b-base 신규 모델 추가 (2.4B, Context 32768, EXAONE 1.0 License) ← https://huggingface.co/LGAI-Research/EXAONE-3.0-2.4B-Base
- [x] llm-jp-3-13b 신규 모델 추가 (13B, Context 2048, Apache-2.0) ← https://huggingface.co/llm-jp/llm-jp-3-13b
- [x] llm-jp-3-1.8b 신규 모델 추가 (1.8B, Context 2048, Apache-2.0) ← https://huggingface.co/llm-jp/llm-jp-3-1.8b
- [x] qwen-2.5-1.5b 신규 모델 추가 (1.5B, Context 128000, Apache-2.0) ← https://huggingface.co/Qwen/Qwen2.5-1.5B
- [x] qwen-2.5-0.5b-instruct 신규 모델 추가 (0.5B, Context 128000, Apache-2.0) ← https://huggingface.co/Qwen/Qwen2.5-0.5B-Instruct
- [x] rakuten-ai-7b 기존 모델 정보 보강 (GitHub 링크 추가) ← https://github.com/Rakuten/RakutenAI-7B
- [x] rakuten-ai-7b-instruct 기존 모델 정보 보강 (GitHub 링크 추가) ← https://github.com/Rakuten/RakutenAI-7B
- [x] rakuten-ai-7b-chat 기존 모델 정보 보강 (GitHub 링크 추가) ← https://github.com/Rakuten/RakutenAI-7B
- [x] rakuten-ai-2-0-8x7b-instruct 기존 모델 정보 보강 (GitHub 링크 추가) ← https://github.com/Rakuten/RakutenAI-2.0

## 판단 / 고민
- 이번 수집 주기에서는 한국, 일본, 중국의 국가별 독자(Sovereign) LLM 중, 주요 소형 오픈소스 베이스(Base) 모델군을 조준하여 추가했습니다.
- 특히 Instruct 계열만 등록되어 근간이 되는 모델이 누락되어 있던 EXAONE 3.0 2.4B Base 및 LLM-jp-3 13B/1.8B Base를 신규 등록함으로써 데이터의 다각성과 무결성을 한층 높였습니다.
- 또한, Qwen2.5의 초경량 라인업(1.5B Base, 0.5B Instruct)을 추가하여 온디바이스(On-device)나 경량 모바일 환경 벤치마크 확장을 고려했습니다.
- 기존 일본 Rakuten AI 7B 및 2.0 8x7B 모델군에 대해서는 누락되어 있던 공식 GitHub 링크를 완벽히 매핑 보강하여 출처 신뢰성을 극대화했습니다.

## 이슈 제기
- (없음)
