---
date: 2026-07-20
agent: collect-llm
status: completed
summary: "국가별 소버린 및 글로벌 메이저 LLM 신규 발견 및 기존 모델 메타데이터 보강 완료"
---

## Todo
- [x] 신규 LLM 발견 및 등록 (`o1-mini`, `o1-preview`, `mistral-large-2`, `exaone-3.0-2.4b-instruct`, `solar-10.7b`)
- [x] 기존 모델 메타데이터 보강 (`solar-pro-2-preview`, `baichuan2-13b-chat`, `claude-science`)

## 조사 내역
- 11:00 OpenAI o1-mini 릴리스 사양 및 가격 분석 ← https://openai.com/index/openai-o1-mini-advancing-cost-efficient-reasoning/
- 11:05 OpenAI o1-preview 릴리스 사양 및 가격 분석 ← https://openai.com/index/introducing-openai-o1-preview/
- 11:10 Mistral Large 2 출시 블로그 분석 (컨텍스트, 파라미터 크기, 가격) ← https://mistral.ai/news/mistral-large-2407/
- 11:15 LG AI Research의 EXAONE-3.0-2.4B-Instruct 사양 확인 ← https://huggingface.co/LGAI-Research/EXAONE-3.0-2.4B-Instruct
- 11:20 Upstage SOLAR-10.7B-Instruct-v1.0의 출시 이력 및 파라미터 크기/컨텍스트 사양 확인 ← https://huggingface.co/upstage/SOLAR-10.7B-Instruct-v1.0
- 11:25 Upstage Solar Pro 2 Preview 공식 릴리스 내용 재확인하여 파라미터 크기 22B 명시 분석 ← https://www.upstage.ai/blog/en/solar-pro-2-preview-small-powerful-now-with-reasoning
- 11:30 Baichuan 2-13B-Chat Hugging Face 모델 카드 및 아키텍처 스펙 분석 ← https://huggingface.co/baichuan-inc/Baichuan2-13B-Chat
- 11:35 Anthropic Claude Science Workbench 제품 사양 및 Claude 3.5 Sonnet 연계에 따른 컨텍스트 확인 ← https://www.anthropic.com/news/claude-science-ai-workbench

## 수행한 작업
- [x] `o1-mini` 신규 등록 (Provider: OpenAI, ReleaseDate: 2024-09-12, License: Proprietary, contextWindow: 128000, pricing: input 3.0, output 12.0) ← https://openai.com/index/openai-o1-mini-advancing-cost-efficient-reasoning/
- [x] `o1-preview` 신규 등록 (Provider: OpenAI, ReleaseDate: 2024-09-12, License: Proprietary, contextWindow: 128000, pricing: input 15.0, output 60.0) ← https://openai.com/index/introducing-openai-o1-preview/
- [x] `mistral-large-2` 신규 등록 (Provider: Mistral AI, ReleaseDate: 2024-07-24, License: Mistral Research License, parameterSize: 123B, contextWindow: 128000, pricing: input 2.0, output 6.0) ← https://mistral.ai/news/mistral-large-2407/
- [x] `exaone-3.0-2.4b-instruct` 신규 등록 (Provider: LG AI Research, ReleaseDate: 2024-08-07, License: EXAONE AI Model License Agreement 1.0 (Apache-2.0 compatible for non-commercial), parameterSize: 2.4B (dense), contextWindow: 32768) ← https://huggingface.co/LGAI-Research/EXAONE-3.0-2.4B-Instruct
- [x] `solar-10.7b` 신규 등록 (Provider: Upstage, ReleaseDate: 2023-12-14, License: Apache-2.0, parameterSize: 10.7B, contextWindow: 4096) ← https://huggingface.co/upstage/SOLAR-10.7B-Instruct-v1.0
- [x] `solar-pro-2-preview` 기존 모델 정보 보강 (parameterSize: 22B) ← https://www.upstage.ai/blog/en/solar-pro-2-preview-small-powerful-now-with-reasoning
- [x] `baichuan2-13b-chat` 기존 모델 정보 보강 (contextWindow: 4096) ← https://huggingface.co/baichuan-inc/Baichuan2-13B-Chat
- [x] `claude-science` 기존 모델 정보 보강 (contextWindow: 200000) ← https://www.anthropic.com/news/claude-science-ai-workbench

## 판단 / 고민
- 글로벌 메이저(OpenAI, Mistral AI) 및 국가별 독자 소버린 모델(한국 Upstage, LG AI Research)에 중심을 두고 수집 범위를 다각화하였습니다.
- OpenAI의 기념비적인 추론 모델 시리즈인 o1-mini와 o1-preview, 그리고 Mistral AI의 대표 플래그십 오픈 모델인 Mistral Large 2가 누락되어 있음을 인지하고 이를 공식 릴리스 스펙 기반으로 신규 수집하였습니다.
- 한국 소버린 모델 측면에서 큰 족적을 남긴 Upstage Solar 10.7B Instruct와 LG EXAONE 3.0 2.4B Instruct 모델을 신규 발굴하여 등록했으며, 기존에 누락되어 있던 Solar Pro 2 Preview의 크기(22B), Baichuan 2 13B의 컨텍스트(4k), Claude Science의 컨텍스트(200k)를 보강하였습니다.
- AGENTS.md 규정에 입각하여 확실하고 검증 가능한 공식 및 커뮤니티(Hugging Face) 출처 URL이 확보된 필드들만 신중히 선별하여 수집 작업을 완수하였습니다.

## 이슈 제기
- (없음)
