---
date: 2026-08-08
agent: profile-model
status: completed
summary: "중국 01.AI의 Yi-1.5-9B 및 Zhipu AI의 GLM-4-9B 2개 모델에 대한 상세 프로파일(Markdown) 신규 작성 및 배포"
---

## Todo
- [x] Yi-1.5-9B 상세 프로파일 Markdown 파일 작성 (`src/content/models/yi-1-5-9b.md`) ← https://github.com/01-ai/Yi-1.5, https://huggingface.co/01-ai/Yi-1.5-9B
- [x] GLM-4-9B 상세 프로파일 Markdown 파일 작성 (`src/content/models/glm-4-9b.md`) ← https://github.com/THUDM/GLM-4, https://huggingface.co/THUDM/glm-4-9b
- [x] Astro 빌드를 통한 Zod 스키마 검증 및 정상 동작 대조

## 조사 내역
- 12:00 작업 시작 및 금일 수집 대상 확인. `yi-1-5-9b` 및 `glm-4-9b` 모델 선택.
- 12:05 Yi-1.5-9B 공식 자료 조사 (9B, 4K Context, Apache 2.0 라이선스 확인) ← https://github.com/01-ai/Yi-1.5, https://huggingface.co/01-ai/Yi-1.5-9B
- 12:10 GLM-4-9B 공식 자료 조사 (9B, 128K Context, GLM-4 License 확인) ← https://github.com/THUDM/GLM-4, https://huggingface.co/THUDM/glm-4-9b

## 수행한 작업
- 12:15 `src/content/models/yi-1-5-9b.md` 신규 파일 작성 (published 상태, 한국어 3문단 이상, 출처 3개 이상 만족) ← https://github.com/01-ai/Yi-1.5, https://huggingface.co/01-ai/Yi-1.5-9B, https://arxiv.org/abs/2403.04652
- 12:25 `src/content/models/glm-4-9b.md` 신규 파일 작성 (published 상태, 한국어 3문단 이상, 출처 3개 이상 만족) ← https://github.com/THUDM/GLM-4, https://huggingface.co/THUDM/glm-4-9b, https://arxiv.org/abs/2406.12793
- 12:35 `bun run build` 실행하여 Zod 스키마 및 마크다운 오류 유무 체크 (정상 동작 확인)

## 판단 / 고민
- `yi-1-5-9b`와 `glm-4-9b` 모두 오늘 수집된 뛰어난 9B급 중국 대표 언어 모델들이며, 각각의 장단점(Yi-1.5-9B의 높은 기저 체력과 유연한 라이선스, GLM-4-9B의 128K 대용량 컨텍스트 윈도우 지원)을 명확하게 서술하여 한국어 중심 정보의 완성도를 높였습니다.
- `relatedOrganization` 필드의 경우 기존 템플릿과 저장소 구조에 맞춰 `01-ai` 및 `zhipu-ai`로 맵핑하여 데이터 연속성을 보존하였습니다.

## 이슈 제기
- (없음)
