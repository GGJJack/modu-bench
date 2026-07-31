---
date: 2026-07-31
agent: profile-model
status: completed
summary: "Qwen2.5-Coder-3B-Instruct 및 Qwen2.5-Coder-0.5B-Instruct 상세 프로파일 생성"
---

## Todo
- [x] qwen-2.5-coder-3b-instruct 상세 정보 프로파일링 (src/content/models/qwen-2.5-coder-3b-instruct.md)
- [x] qwen-2.5-coder-0.5b-instruct 상세 정보 프로파일링 (src/content/models/qwen-2.5-coder-0.5b-instruct.md)

## 조사 내역
- 02:05 Qwen 2.5 Coder Instruct 모델 성능 지표 및 특징 탐독 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- 02:10 Qwen 2.5 Coder HuggingFace 모델 카드 및 라이선스, 아키텍처 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-3B-Instruct
- 02:12 Qwen 2.5 Coder GitHub 저장소 사양 및 기능 분석 ← https://github.com/QwenLM/Qwen2.5-Coder

## 수행한 작업
- [x] Qwen2.5-Coder-3B-Instruct 모델 프로파일 신규 생성 및 published 승격 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] Qwen2.5-Coder-0.5B-Instruct 모델 프로파일 신규 생성 및 published 승격 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/

## 판단 / 고민
- 신규 등록된 두 모델 모두 3개 이상의 공식 출처와 3문단 이상의 충실한 상세 정보 설명 문장을 충족하여 곧장 `status: published`로 승격하여 완성하였습니다.
- Zod 스키마 검증 및 빌드 결과 정상적으로 처리됨을 확인하였습니다.

## 이슈 제기
- 없음
