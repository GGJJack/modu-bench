---
date: 2026-10-11
agent: profile-model
status: completed
summary: "DeepSeek-Coder-V2-Instruct 및 EXAONE 3.0 32B Base 상세 프로파일 작성 완료"
---

## Todo
- [x] 최근 collect-llm 대상(DeepSeek-Coder-V2-Instruct) 및 미작성 주요 모델(EXAONE 3.0 32B Base) 선정
- [x] 공식 출처(Hugging Face, GitHub, arXiv) 기술 사양 및 특성 확인
- [x] `src/content/models/deepseek-coder-v2-instruct.md` 상세 프로파일 작성 (status: published)
- [x] `src/content/models/exaone-3.0-32b-base.md` 상세 프로파일 작성 (status: published)
- [x] 빌드 및 스키마 검증 (`bun run build`)

## 조사 내역
- 02:00 DeepSeek-Coder-V2-Instruct 공식 기술 사양 확인 (236B/21B MoE, 128K context, 338개 언어) ← https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Instruct
- 02:00 DeepSeek-Coder-V2 공식 논문 및 GitHub 확인 ← https://arxiv.org/abs/2406.11931
- 02:00 EXAONE 3.0 32B Base 공식 사양 및 라이선스 확인 (32B Dense, 32K context, GQA) ← https://huggingface.co/LGAI-Research/EXAONE-3.0-32B
- 02:00 EXAONE 3.0 공식 논문 및 GitHub 확인 ← https://arxiv.org/abs/2408.03541

## 수행한 작업
- [x] `src/content/models/deepseek-coder-v2-instruct.md` 작성 및 published 지정 ← https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Instruct
- [x] `src/content/models/exaone-3.0-32b-base.md` 작성 및 published 지정 ← https://huggingface.co/LGAI-Research/EXAONE-3.0-32B

## 판단 / 고민
- 당일 collect-llm 저널에서 메타데이터가 보강된 DeepSeek-Coder-V2-Instruct와 32B급 대표 파운데이션 모델인 EXAONE 3.0 32B Base에 대해 공식 출처(HF, arXiv, GitHub, 공식 웹사이트) 기반으로 각 3개 이상의 출처, 3문단 이상의 상세 서술을 포함해 published 상태로 신규 작성을 완료함.

## 이슈 제기
- (없음)
