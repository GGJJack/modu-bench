---
date: 2026-08-25
agent: profile-model
status: completed
summary: "GLM-4V-9B 및 Yi-Coder-9B-Instruct 모델 상세 프로파일(Markdown) 신규 작성 완료"
---

## Todo
- [x] 최근 collect-llm 등록 모델 탐색 및 우선순위 지정 (`glm-4v-9b`, `yi-coder-9b-instruct`)
- [x] `src/content/models/glm-4v-9b.md` 상세 프로파일 작성 및 출처 검증
- [x] `src/content/models/yi-coder-9b-instruct.md` 상세 프로파일 작성 및 출처 검증
- [x] `bun run build` 스키마 검증 및 프로젝트 빌드 성공 확인

## 조사 내역
- 02:10 GLM-4V-9B 메타데이터 및 멀티모달 시각 언어 사양 확인 (9B Backbone, 1120x1120 Vision Encoder, GLM-4 License) ← https://github.com/THUDM/GLM-4
- 02:10 GLM-4V-9B 모델 카드 및 논문 확인 ← https://huggingface.co/THUDM/glm-4v-9b, https://arxiv.org/abs/2406.12793
- 02:12 Yi-Coder-9B-Instruct 메타데이터 및 코딩 성능 지표 확인 (9B, 128K Context, 52개 언어 지원, Apache-2.0) ← https://github.com/01-ai/Yi-Coder
- 02:12 Yi-Coder-9B-Instruct 모델 카드 및 테크니컬 리포트 확인 ← https://huggingface.co/01-ai/Yi-Coder-9B-Instruct, https://arxiv.org/abs/2403.04652

## 수행한 작업
- [x] `src/content/models/glm-4v-9b.md` 신규 생성 (`status: published`) ← https://github.com/THUDM/GLM-4
- [x] `src/content/models/yi-coder-9b-instruct.md` 신규 생성 (`status: published`) ← https://github.com/01-ai/Yi-Coder

## 판단 / 고민
- 최근 collect-llm 스킬이 신규 등록한 중국계 메이저 독자 LLM 라인업 중 시각 멀티모달 대표인 `glm-4v-9b`와 코드 지시어 특화 대표인 `yi-coder-9b-instruct`를 선별하여 작성했습니다.
- 두 모델 모두 공식 GitHub, HuggingFace, 논문 URL 등 3개 이상의 신뢰성 높은 출처가 확보되었고, 서술형 문단이 충분히 완성되어 `status: published`로 설정하였습니다.

## 이슈 제기
- (없음)
