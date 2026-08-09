---
date: 2026-08-09
agent: profile-model
status: completed
summary: "국가별 독자 LLM 2개 모델(LG EXAONE 3.0 7.8B Instruct, Alibaba Qwen2.5 1.5B Instruct)에 대한 상세 프로파일(Markdown) 신규 작성 및 배포"
---

## Todo
- [x] EXAONE 3.0 7.8B Instruct 상세 프로파일 Markdown 파일 작성 (`src/content/models/exaone-3.0-7.8b-instruct.md`) ← https://www.lgresearch.ai/models/exaone, https://huggingface.co/LGAI-Research/EXAONE-3.0-7.8B-Instruct
- [x] Qwen2.5 1.5B Instruct 상세 프로파일 Markdown 파일 작성 (`src/content/models/qwen-2.5-1.5b-instruct.md`) ← https://qwenlm.github.io/blog/qwen2.5/, https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct
- [x] Astro 빌드를 통한 Zod 스키마 검증 및 정상 동작 대조

## 조사 내역
- 13:00 작업 시작 및 수집된 신규 모델 리스트 검토 후 EXAONE 3.0 7.8B Instruct 및 Qwen2.5 1.5B Instruct 모델을 대상 모델로 선정.
- 13:05 LG EXAONE 3.0 7.8B Instruct 공식 사양 조사 및 출처 확보 (7.8B, Context 32K, EXAONE 1.0 License, GQA 적용) ← https://www.lgresearch.ai/models/exaone, https://huggingface.co/LGAI-Research/EXAONE-3.0-7.8B-Instruct, https://arxiv.org/abs/2408.03541
- 13:10 Alibaba Qwen2.5 1.5B Instruct 공식 사양 조사 및 출처 확보 (1.5B, Context 128K, Apache-2.0, GQA 적용) ← https://qwenlm.github.io/blog/qwen2.5/, https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct, https://arxiv.org/abs/2412.15115

## 수행한 작업
- 13:15 `src/content/models/exaone-3.0-7.8b-instruct.md` 신규 파일 작성 (published 상태, 한국어 4문단 구성, 출처 4개 만족) ← https://www.lgresearch.ai/models/exaone, https://huggingface.co/LGAI-Research/EXAONE-3.0-7.8B-Instruct, https://github.com/LG-AI-Research/EXAONE-3.0, https://arxiv.org/abs/2408.03541
- 13:25 `src/content/models/qwen-2.5-1.5b-instruct.md` 신규 파일 작성 (published 상태, 한국어 4문단 구성, 출처 4개 만족) ← https://qwenlm.github.io/blog/qwen2.5/, https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct, https://github.com/QwenLM/Qwen2.5, https://arxiv.org/abs/2412.15115
- 13:35 `bun run build` 실행하여 Zod 스키마 및 마크다운 오류 유무 체크 (정상 동작 확인, 339개 페이지 빌드 성공)

## 판단 / 고민
- 신규 모델 중에서 한국과 중국을 각각 대표하는 최고 품질의 소형/경량 Instruct 모델 2종(EXAONE 3.0 7.8B, Qwen2.5 1.5B)을 선정하였습니다.
- 두 모델 모두 공식 Hugging Face 리포지토리, 깃허브, 소개 블로그, 그리고 정식 출판된 ArXiv 논문 링크를 sources로 포함하여 극도의 출처 고품질을 지켰습니다.
- 관련 기관(relatedOrganization) 필드 역시 `lg-ai-research` 및 `alibaba`와 정상 맵핑되도록 하였습니다.

## 이슈 제기
- (없음)
