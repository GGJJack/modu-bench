---
date: 2026-07-22
agent: collect-llm
status: completed
summary: "사카나 AI 및 라쿠텐 신규 모델 발견 및 수집, 기존 라쿠텐 모델 고품질 보강 작업 완료"
---

## Todo
- [x] 신규 LLM 발견 및 등록 (`sakana-fugu-cyber`, `rakuten-ai-2-0-mini`, `rakuten-ai-2-0-mini-instruct`, `rakuten-ai-2-0-8x7b`, `rakuten-ai-2-0-8x7b-instruct`)
- [x] 기존 모델 메타데이터 보강 (`rakuten-ai-3-0`, `rakuten-ai-7b`, `rakuten-ai-7b-instruct`, `rakuten-ai-7b-chat`)

## 조사 내역
- 12:00 Sakana AI 공식 블로그 신제품 분석 및 취약점 검증 특화 100만 컨텍스트 'Fugu Cyber' 릴리스 파악 ← https://sakana.ai/fugu-cyber-release/
- 12:10 Hugging Face Rakuten 공식 레포지토리 분석을 통한 미등록 2.0 미니 및 8x7B MoE 모델 사양 확인 ← https://huggingface.co/Rakuten
- 12:15 Hugging Face RakutenAI-3.0 사양 정밀 분석 (MoE 구조, 671B 파라미터, 128K 컨텍스트, 라이선스) ← https://huggingface.co/Rakuten/RakutenAI-3.0

## 수행한 작업
- [x] `sakana-fugu-cyber` 신규 등록 (Provider: Sakana AI, ReleaseDate: 2026-07-21, License: Proprietary, contextWindow: 1000000) ← https://sakana.ai/fugu-cyber-release/
- [x] `rakuten-ai-2-0-mini` 신규 등록 (Provider: Rakuten, ReleaseDate: 2025-02-10, License: Apache-2.0, parameterSize: 2B) ← https://huggingface.co/Rakuten/RakutenAI-2.0-mini
- [x] `rakuten-ai-2-0-mini-instruct` 신규 등록 (Provider: Rakuten, ReleaseDate: 2025-02-26, License: Apache-2.0, parameterSize: 2B) ← https://huggingface.co/Rakuten/RakutenAI-2.0-mini-instruct
- [x] `rakuten-ai-2-0-8x7b` 신규 등록 (Provider: Rakuten, ReleaseDate: 2025-02-12, License: Apache-2.0, parameterSize: 47B) ← https://huggingface.co/Rakuten/RakutenAI-2.0-8x7B
- [x] `rakuten-ai-2-0-8x7b-instruct` 신규 등록 (Provider: Rakuten, ReleaseDate: 2025-02-26, License: Apache-2.0, parameterSize: 47B) ← https://huggingface.co/Rakuten/RakutenAI-2.0-8x7B-instruct
- [x] `rakuten-ai-3-0` 기존 모델 정보 보강 (parameterSize: 671B (37B active) MoE, contextWindow: 128000, links.huggingface: https://huggingface.co/Rakuten/RakutenAI-3.0, links.official: https://corp.rakuten.co.jp/news/press/2026/0317_01.html) ← https://huggingface.co/Rakuten/RakutenAI-3.0
- [x] `rakuten-ai-7b` 기존 모델 정보 보강 (links.huggingface: https://huggingface.co/Rakuten/RakutenAI-7B) ← https://huggingface.co/Rakuten
- [x] `rakuten-ai-7b-instruct` 기존 모델 정보 보강 (links.huggingface: https://huggingface.co/Rakuten/RakutenAI-7B-instruct) ← https://huggingface.co/Rakuten
- [x] `rakuten-ai-7b-chat` 기존 모델 정보 보강 (links.huggingface: https://huggingface.co/Rakuten/RakutenAI-7B-chat) ← https://huggingface.co/Rakuten

## 판단 / 고민
- 이번 세션에서는 일본 소버린 LLM(사카나 AI 및 라쿠텐)에 포커스를 두었습니다.
- 사카나 AI가 2026-07-21에 공식 발표한 Fugu Cyber 모델은 CyberGym 및 CTI-REALM 보안 벤치마크에 고성능을 내며 1M 컨텍스트 윈도우를 가집니다. 이를 신규 수집하였습니다.
- 라쿠텐의 Hugging Face 공식 페이지에서 기존 DB에 누락된 RakutenAI 2.0 시리즈(Mini 및 8x7B) 4개 기종을 완벽하게 신규 발견 및 등록했습니다.
- 또한 기존에 등록되었으나 사양이 빈약하던 `rakuten-ai-3-0`의 실제 스펙(671B MoE, 128k 컨텍스트, 공식 보도 및 HF 링크)을 보강하였고, 7B 구형 기종의 HF 레포지토리 링크를 완전히 확충하였습니다.
- AGENTS.md 규정에 의거하여 확실하고 검증 가능한 공식 및 커뮤니티 출처 URL이 확보된 정보들만 기록하였습니다.

## 이슈 제기
- (없음)
