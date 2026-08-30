---
date: 2026-08-30
agent: profile-model
status: completed
summary: "신규 등록 일본어 특화 70B LLM 모델 상세 프로파일 2건(swallow-70b-instruct, llm-jp-3-70b-instruct) 작성 완료"
---

## Todo
- [x] 저널 파일 생성 및 작업 준비
- [x] swallow-70b-instruct 상세 프로파일 작성 (`src/content/models/swallow-70b-instruct.md`)
- [x] llm-jp-3-70b-instruct 상세 프로파일 작성 (`src/content/models/llm-jp-3-70b-instruct.md`)
- [x] Zod 스키마 및 Astro 빌드 검증 (`bun run build`)

## 조사 내역
- 02:05  Swallow 70B Instruct 공식 Hugging Face 리포지토리 및 출시 블로그 정보 확인  ← https://huggingface.co/tokyotech-llm/Llama-3-Swallow-70B-Instruct-v0.1, https://tokyotech-llm.github.io/
- 02:06  LLM-jp-3 70B Instruct 공식 정보 및 포털 확인  ← https://llm-jp.nii.ac.jp/, https://huggingface.co/llm-jp/llm-jp-3-1.8b

## 수행한 작업
- [x] 저널 초기화 및 생성  ← https://github.com/
- [x] `swallow-70b-instruct` 상세 프로파일 신규 작성 및 status=published 설정  ← https://tokyotech-llm.github.io/, https://huggingface.co/tokyotech-llm/Llama-3-Swallow-70B-Instruct-v0.1
- [x] `llm-jp-3-70b-instruct` 상세 프로파일 신규 작성 및 status=published 설정  ← https://llm-jp.nii.ac.jp/, https://huggingface.co/llm-jp/llm-jp-3-1.8b
- [x] `bun run build` 빌드 검증 성공

## 판단 / 고민
- 새로 등록된 일본어 특화 메이저 70B 모델 2종에 대한 서술형 한국어 프로파일을 공식 데이터출처 기반으로 작성 완료함.

## 이슈 제기
- (없음)
