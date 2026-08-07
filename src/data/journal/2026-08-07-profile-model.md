---
date: 2026-08-07
agent: profile-model
status: completed
summary: "최신 수집된 주요 국가별 콤팩트 모델 2종(Solar Open 100B, TinySwallow-1.5B-Instruct)의 상세 프로파일 페이지 기획 및 신규 배포 완결"
---

## Todo
- [x] 신규 수집 모델 중 `solar-open-100b` 모델 프로파일 상세 작성
- [x] 신규 수집 모델 중 `tinyswallow-1-5b-instruct` 모델 프로파일 상세 작성

## 조사 내역
- 17:30 `collect-llm` 대조 및 최근 수집되었지만 상세 프로파일이 없던 신규 모델 목록 선별
- 17:35 Upstage Solar Open 100B 모델 사양(총 102.6B, 활성 12B MoE, 19.7T 토큰 사전학습, 128K context) 조사 및 공식 허깅페이스 사양 대조 ← https://huggingface.co/upstage/Solar-Open-100B, https://arxiv.org/abs/2601.07022
- 17:40 Sakana AI TinySwallow-1.5B-Instruct 모델의 핵심 기법(TAID 지식 증류, Qwen2.5 기반, Swallow 팀 협업) 조사 및 사카나 AI 사양서 및 논문 대조 ← https://huggingface.co/SakanaAI/TinySwallow-1.5B-Instruct, https://arxiv.org/abs/2501.16937, https://sakana.ai/taid-jp/

## 수행한 작업
- [x] 17:45 `solar-open-100b` 모델 상세 프로파일 작성 및 게시 (`status: published`) ← https://huggingface.co/upstage/Solar-Open-100B
- [x] 17:50 `tinyswallow-1-5b-instruct` 모델 상세 프로파일 작성 및 게시 (`status: published`) ← https://huggingface.co/SakanaAI/TinySwallow-1.5B-Instruct
- [x] 17:55 Astro 정적 분석 및 정합성 검증을 위한 빌드 성공 완결 (`bun run build`)

## 판단 / 고민
- 임무 포커스(`missions/profile.md`) 및 하루 최대 3개 이하의 품질 중심 프로파일 제작 정책에 근거하여, 최근 `collect-llm` 이 성공적으로 등록한 모델 중 상세가 비어 있던 `solar-open-100b` 및 `tinyswallow-1-5b-instruct`를 정밀 보강했습니다.
- 두 모델 모두 공식 기술 리포트 논문, Hugging Face 공식 레포지토리, 기관 소개 등 3개 이상의 풍부한 출처를 보유하고 있으며, 4문단 이상의 입체적인 설명이 수반되어 작성과 동시에 `published` 상태로 자신 있게 승격 배포하였습니다.

## 이슈 제기
- (없음)
