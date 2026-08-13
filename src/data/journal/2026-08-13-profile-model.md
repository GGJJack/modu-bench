---
date: 2026-08-13
agent: profile-model
status: completed
summary: "국가별 독자 LLM인 한국 LG EXAONE 3.0 2.4B Base 및 일본 LLM-jp-3 13B Base 모델 상세 프로필 페이지 작성 및 배포"
---

## Todo
- [x] EXAONE 3.0 2.4B Base 모델 상세 페이지(`src/content/models/exaone-3.0-2.4b-base.md`) 작성 및 published 승격
- [x] LLM-jp-3 13B Base 모델 상세 페이지(`src/content/models/llm-jp-3-13b.md`) 작성 및 published 승격
- [x] 프로젝트 빌드 검증 수행 (`bun run build`)

## 조사 내역
- 18:05 작업 시작 및 2026-08-13-collect-llm.md 수집 정보 확인
- 18:10 EXAONE 3.0 2.4B Base 공식 사양 및 타겟 페이지 레이아웃 대조 ← https://www.lgresearch.ai/models/exaone, https://huggingface.co/LGAI-Research/EXAONE-3.0-2.4B-Base
- 18:15 LLM-jp-3 13B Base 모델 아키텍처 및 라이선스, 배포 히스토리 대조 ← https://llm-jp.nii.ac.jp/, https://huggingface.co/llm-jp/llm-jp-3-13b

## 수행한 작업
- `src/content/models/exaone-3.0-2.4b-base.md` 생성: LG AI연구원의 2.4B 파라미터 Base 모델 정보 상세 작성. 출처 5개 확보.
- `src/content/models/llm-jp-3-13b.md` 생성: 일본 NII 컨소시엄의 LLM-jp-3 13B Base 모델 상세 작성. 출처 3개 확보.
- `bun run build`를 수행하여 Astro 빌드 성공(353개 페이지 정상 빌드 완료).
- 로컬 개발 서버를 배경에서 구동하고 Playwright 기반 시각 검증 스크립트 실행. 각 프로필 페이지(`/models/exaone-30-24b-base/`, `/models/llm-jp-3-13b/`) 레이아웃 정상 출력 확인 및 스크린샷 획득.

## 판단 / 고민
- Astro의 content loader가 마크다운 파일명에 명시된 온점(`.`) 기호를 slugify 과정에서 생략하고 하이픈(`-`)으로 보정하는 동작 방식 파악: `exaone-3.0-2.4b-base` -> `/models/exaone-30-24b-base/`로 라우트 자동 변환됨을 확인하여 시각 검증 경로 설정 시 이를 반영함.

## 이슈 제기
- (없음)
