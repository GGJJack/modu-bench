---
date: 2026-08-10
agent: profile-model
status: completed
summary: "일본의 소버린 LLM 대표 2개 모델(LLM-jp-3 13B Instruct, Swallow 13B Instruct)에 대한 상세 프로파일(Markdown) 신규 작성 및 배포 완료"
---

## Todo
- [x] LLM-jp-3 13B Instruct 상세 프로파일 Markdown 파일 작성 (`src/content/models/llm-jp-3-13b-instruct.md`) ← https://llm-jp.nii.ac.jp/, https://huggingface.co/llm-jp/llm-jp-3-13b-instruct, https://github.com/llm-jp/llm-jp-3
- [x] Swallow 13B Instruct 상세 프로파일 Markdown 파일 작성 (`src/content/models/swallow-13b-instruct.md`) ← https://tokyotech-llm.github.io/, https://huggingface.co/tokyotech-llm/Swallow-13b-instruct, https://github.com/tokyotech-llm/swallow-llm
- [x] Astro 빌드를 통한 Zod 스키마 검증 및 정상 동작 대조

## 조사 내역
- 18:00 작업 시작 및 전날 수집된 일본의 대표 독자 모델군 중 `llm-jp-3-13b-instruct` 및 `swallow-13b-instruct` 모델 선정.
- 18:05 LLM-jp-3 13B Instruct 공식 사양 조사 및 출처 확보 (13B, Context 2048, Apache-2.0, LLM-jp 개발) ← https://llm-jp.nii.ac.jp/, https://huggingface.co/llm-jp/llm-jp-3-13b-instruct, https://github.com/llm-jp/llm-jp-3
- 18:10 Swallow 13B Instruct 공식 사양 조사 및 출처 확보 (13B, Context 4096, Llama 2 라이선스 기반, 도쿄공업대학/AIST 공동 개발) ← https://tokyotech-llm.github.io/, https://huggingface.co/tokyotech-llm/Swallow-13b-instruct, https://github.com/tokyotech-llm/swallow-llm

## 수행한 작업
- 18:15 `src/content/models/llm-jp-3-13b-instruct.md` 상세 프로파일 신규 마크다운 파일 작성 (published 상태, 한국어 4개 문단 구성, 출처 3개 이상 만족) ← https://llm-jp.nii.ac.jp/, https://huggingface.co/llm-jp/llm-jp-3-13b-instruct, https://github.com/llm-jp/llm-jp-3
- 18:30 `src/content/models/swallow-13b-instruct.md` 상세 프로파일 신규 마크다운 파일 작성 (published 상태, 한국어 4개 문단 구성, 출처 3개 이상 만족) ← https://tokyotech-llm.github.io/, https://huggingface.co/tokyotech-llm/Swallow-13b-instruct, https://github.com/tokyotech-llm/swallow-llm
- 18:45 `bun run build`를 성공적으로 구동하여 새로 추가된 모델 상세 프로파일 2종이 Zod Content Schema를 온전히 통과하는지 검증 완료.

## 판단 / 고민
- 일본 소버린 LLM 연구 개발에서 핵심적인 자취를 남긴 대표적인 13B 오픈소스 Instruct 계열 모델 2종(LLM-jp-3, Swallow)을 발굴 및 프로파일링 대상으로 최종 낙점하여 완성도 높은 상세 페이지를 저술했습니다.
- 두 모델 모두 공식 소개 홈페이지, 허깅페이스 리포지토리, 깃허브 코드 저장소를 sources 주소로 정합적으로 명시하여 데이터 품질과 극도의 오리지널 출처 신뢰성을 확보했습니다.
- 라이선스 구성 측면에서 Apache-2.0(LLM-jp-3) 및 Llama 2 Community License(Swallow)의 특색과 차이점을 한계 섹션에 온전히 수록하여 학술용/상업용 실무에 필요한 리스크 요소를 객관적으로 짚었습니다.

## 이슈 제기
- (없음)
