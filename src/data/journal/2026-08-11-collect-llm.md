---
date: 2026-08-11
agent: collect-llm
status: completed
summary: "국가별 독자 LLM(한국 Upstage Solar, LG EXAONE 및 중국 Baichuan, 일본 Tokyo Tech Swallow 등) 신규 5개 모델 등록 및 기존 4개 모델 메타데이터 보강 완료"
---

## Todo
- [x] 신규 모델 수집 및 등록 5건 (solar-10.7b-base, exaone-3.0-7.8b-base, baichuan-7b, baichuan-13b-base, baichuan-13b-chat)
- [x] 기존 모델 보강 4건 (solar-pro-2-preview, eeve-korean-instruct-10.8b, swallow-7b-instruct, swallow-13b-instruct)

## 조사 내역
- 10:00 작업 시작 및 임무 포커스 대조
- 10:15 한국 Upstage Solar 및 LG AI Research EXAONE 공식 릴리스 및 Hugging Face 정보 대조 ← https://www.upstage.ai, https://www.lgresearch.ai/models/exaone
- 10:30 중국 Baichuan Intelligent Technology 최초 세대 및 2세대 모델 정보 조사 및 공식 출처 확보 ← https://www.baichuan-ai.com, https://github.com/baichuan-inc
- 10:45 일본 도쿄공업대학(Tokyo Tech) Swallow 모델 제품군 개발사 사양 대조 및 공식 깃허브 경로 조사 ← https://tokyotech-llm.github.io/

## 수행한 작업
- 11:00 solar-10.7b-base 신규 모델 추가 (10.7B, Context 4096, Apache-2.0) ← https://www.upstage.ai, https://huggingface.co/upstage/SOLAR-10.7B-v1.0
- 11:05 exaone-3.0-7.8b-base 신규 모델 추가 (7.8B, Context 32768, EXAONE 1.0 License) ← https://www.lgresearch.ai/models/exaone, https://huggingface.co/LGAI-Research/EXAONE-3.0-7.8B-Base
- 11:10 baichuan-7b 신규 모델 추가 (7B, Context 4096, Apache-2.0) ← https://www.baichuan-ai.com/, https://huggingface.co/baichuan-inc/Baichuan-7B
- 11:15 baichuan-13b-base 신규 모델 추가 (13B, Context 4096, Baichuan-13B License) ← https://www.baichuan-ai.com/, https://huggingface.co/baichuan-inc/Baichuan-13B-Base
- 11:20 baichuan-13b-chat 신규 모델 추가 (13B, Context 4096, Baichuan-13B License) ← https://www.baichuan-ai.com/, https://huggingface.co/baichuan-inc/Baichuan-13B-Chat
- 11:30 solar-pro-2-preview 기존 모델 정보 보강 (huggingface 링크 추가) ← https://huggingface.co/upstage/solar-pro-2-preview
- 11:35 eeve-korean-instruct-10.8b 기존 모델 정보 보강 (huggingface, github 링크 추가) ← https://huggingface.co/yanolja/EEVE-Korean-Instruct-10.8B-v1.0, https://github.com/yanolja/EEVE-Korean
- 11:40 swallow-7b-instruct 기존 모델 정보 보강 (github 링크 추가) ← https://github.com/tokyotech-llm/swallow
- 11:42 swallow-13b-instruct 기존 모델 정보 보강 (github 링크 추가) ← https://github.com/tokyotech-llm/swallow

## 판단 / 고민
- 이번 세션에서는 `missions/llm.md` 임무 정의에 따라 세계 최정상급 한국, 일본, 중국의 독자(Sovereign) LLM 모델들의 데이터 정합성을 높이는 작업을 수행했습니다.
- 특히 널리 사용되지만 그동안 데이터베이스에 누락되어 있었던 최초 세대의 Base 모델군(Upstage Solar 10.7B Base, LG EXAONE 3.0 7.8B Base, Baichuan 1세대)을 정밀 복원하여 신규로 등록했습니다.
- 이와 함께 기존에 등록되어 있는 독자 모델군 중에서 Hugging Face/GitHub 소스 연결이 완전하지 않거나 누락되어 있었던 핵심 모델들(Solar Pro 2 Preview, EEVE-Korean, Swallow 시리즈)에 대해 검증 가능한 공식 깃허브 및 허깅페이스 리포지토리 링크를 완전히 보강했습니다.
- 이를 통해 ModuBench PoC가 필요로 하는 높은 데이터 무결성과 신뢰할 수 있는 공식 출처 체계를 더욱 견고히 다졌습니다.

## 이슈 제기
- (없음)
