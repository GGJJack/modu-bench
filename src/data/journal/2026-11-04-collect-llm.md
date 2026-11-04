---
date: 2026-11-04
agent: collect-llm
status: completed
summary: "Mistral AI의 대표 기반 오픈 모델(Mistral 7B, Mixtral 8x7B, Mixtral 8x22B, Ministral 8B) 신규 등록 및 mistral-large-2411 라이선스 보강"
---

## Todo
- [x] Mistral AI 공식 블로그, 문서 사이트, Hugging Face 모델 카드를 통해 기반 모델 사양 및 메타데이터 조사
- [x] `mistral-7b`, `mixtral-8x7b`, `mixtral-8x22b`, `ministraux-8b` 4종 신규 등록
- [x] 기존 `mistral-large-2411` 모델의 공식 문서 링크 및 라이선스(Mistral Research License) 보강
- [x] 등록된 모델 데이터 및 git diff 검증
- [x] 프로젝트 빌드 검증 및 저널 status: completed 갱신

## 조사 내역
- 01:05 기존 Mistral 모델 등록 현황 점검 (최신 세대 모델들이 다수 등록되어 있으나 기반이 되는 초기 오픈 웨이트 대표작 Mistral 7B, Mixtral 8x7B, Mixtral 8x22B 누락 확인) ← bun run skills/manage-model/scripts/model.ts list llm
- 01:08 Mistral 7B 공식 출시 블로그 확인 (7.3B 파라미터, Apache 2.0 라이선스, 2023-09-27 출시) ← https://mistral.ai/news/announcing-mistral-7b/
- 01:10 Mistral 공식 문서 모델 카드 확인 (Mistral 7B 컨텍스트 8k 확인) ← https://docs.mistral.ai/models/mistral-7b-0-1/
- 01:12 Hugging Face mistralai/Mistral-7B-v0.1 모델 카드 확인 (파라미터 7B, 아카이브 논문 arXiv:2310.06825) ← https://huggingface.co/mistralai/Mistral-7B-v0.1
- 01:15 Mixtral of Experts 공식 발표 확인 (46.7B 파라미터 중 토큰당 12.9B 활성화, 32k 컨텍스트, Apache 2.0, 2023-12-11 출시) ← https://mistral.ai/news/mixtral-of-experts/
- 01:18 Mistral 공식 문서 Mixtral 8x7B 모델 카드 확인 (파라미터 47B, 컨텍스트 32k, 아카이브 논문 arXiv:2401.04088) ← https://docs.mistral.ai/models/mixtral-8x7b-0-1/
- 01:20 Hugging Face mistralai/Mixtral-8x7B-v0.1 모델 카드 확인 (Apache-2.0, Safetensors 47B) ← https://huggingface.co/mistralai/Mixtral-8x7B-v0.1
- 01:23 Mixtral 8x22B 공식 발표 블로그 확인 (141B 파라미터 중 토큰당 39B 활성화, 64k 컨텍스트, Apache 2.0, 2024-04-17 출시) ← https://mistral.ai/news/mixtral-8x22b/
- 01:25 Mistral 공식 문서 Mixtral 8x22B 모델 카드 확인 (파라미터 141B, 컨텍스트 64k) ← https://docs.mistral.ai/models/mixtral-8x22b-0-1-0-3/
- 01:27 Hugging Face mistralai/Mixtral-8x22B-v0.1 모델 카드 확인 (Apache 2.0 라이선스, 141B 파라미터) ← https://huggingface.co/mistralai/Mixtral-8x22B-v0.1
- 01:30 Les Ministraux 공식 발표 블로그 확인 (엣지용 Ministral 8B 및 3B, 128k 컨텍스트, 2024-10-16 출시, API $0.1/M input/output, Mistral Commercial License 및 Mistral Research License) ← https://mistral.ai/news/ministraux/
- 01:32 Mistral 공식 문서 Ministral 8B 모델 카드 확인 (컨텍스트 128k, MRL 라이선스) ← https://docs.mistral.ai/models/ministral-8b-24-1/
- 01:35 Mistral 공식 문서 Mistral Large 2.1(2411) 모델 카드 확인 (MRL 라이선스, 컨텍스트 128k) ← https://docs.mistral.ai/models/mistral-large-2-1-24-11/

## 수행한 작업
- [x] `mistral-7b` 신규 등록 (parameterSize: 7B, contextWindow: 8192, license: Apache-2.0, paper: arXiv:2310.06825) ← https://mistral.ai/news/announcing-mistral-7b/
- [x] `mixtral-8x7b` 신규 등록 (parameterSize: 47B, contextWindow: 32768, license: Apache-2.0, paper: arXiv:2401.04088) ← https://mistral.ai/news/mixtral-of-experts/
- [x] `mixtral-8x22b` 신규 등록 (parameterSize: 141B, contextWindow: 65536, license: Apache-2.0) ← https://mistral.ai/news/mixtral-8x22b/
- [x] `ministraux-8b` 신규 등록 (parameterSize: 8B, contextWindow: 131072, pricing: $0.10/$0.10, license: Mistral Commercial License) ← https://mistral.ai/news/ministraux/
- [x] `mistral-large-2411` 메타데이터 보강 (license를 Proprietary에서 공식 MRL인 "Mistral Research License"로 갱신, 공식 문서 URL 보강) ← https://docs.mistral.ai/models/mistral-large-2-1-24-11/

## 판단 / 고민
- Mistral AI 라인업 중 최근 세대(Mistral 3, Large 4, Small 4 등)와 특정 변형들은 이미 등록되어 있었으나, 오픈소스 LLM 생태계의 패러다임을 바꾼 역사적 기반 모델인 `Mistral 7B`와 첫 희소 MoE 모델 `Mixtral 8x7B`, 대규모 오픈 MoE인 `Mixtral 8x22B`가 정작 누락되어 있었음.
- 2024년 10월 엣지 디바이스용으로 출시된 오리지널 Ministral 모델 중 Ministral 8B(`ministraux-8b`)를 Hugging Face 모델 카드와 공식 블로그를 교차 검증하여 등록함.
- 기존 등록되어 있던 `mistral-large-2411`의 라이선스가 'Proprietary'로 되어 있었으나 공식 모델 카드 확인 결과 연구용 오픈 가중치 라이선스인 'Mistral Research License (MRL)'로 배포되었음이 확인되어 정확한 라이선스명으로 보강함.

## 이슈 제기
- (없음)
