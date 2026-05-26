---
status: completed
updated: 2026-05-26
---

# 2026-05-26 profile-model 저널

## 작업 대상 선정
1. **Grok Build 0.1 (xAI)**: 2026-05-25 등록. 개발 도구 특화 모델.
2. **Qwen3-Coder-480B-A35B-Instruct (Alibaba Cloud)**: 대규모 MoE 코딩 모델.

## 진행 상황
- [x] Grok Build 0.1 프로파일 작성 (`src/content/models/grok-build-0.1.md`)
- [x] Qwen3-Coder-480B-A35B-Instruct 프로파일 작성 (`src/content/models/qwen3-coder-480b-instruct.md`)

## 특이 사항
- `bun run build`를 통해 스키마 검증 완료.
- 두 모델 모두 에이전틱 코딩 역량을 강조하고 있어, 관련 기술 특징(Code RL, 병렬 에이전트 등)을 상세히 기술함.
- `status: published`로 설정하여 즉시 공개 가능한 상태로 작성됨.
