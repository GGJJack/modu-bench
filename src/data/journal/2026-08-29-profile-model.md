---
date: 2026-08-29
agent: profile-model
status: completed
summary: "BAAI BGE-M3 모델 상세 프로파일 작성 및 출처 검증 완료"
---

## Todo
- [x] BAE-M3 모델 대상 선정 (08-29 collect-llm 등록건)
- [x] BGE-M3 공식 출처 및 논문 정보 조사
- [x] `src/content/models/bge-m3.md` 상세 프로파일 작성 (`status: published`)
- [x] Zod 스키마 및 빌드 검증 (`bun run build`)

## 조사 내역
- 02:05 BAAI/bge-m3 Hugging Face 모델 카드 상세 스펙 및 사용 파이프라인 확인 ← https://huggingface.co/BAAI/bge-m3
- 02:06 BGE-M3 논문 (M3-Embedding) 아키텍처 및 자체 지식 증류(Self-Knowledge Distillation) 확인 ← https://arxiv.org/abs/2402.03216

## 수행한 작업
- [x] `src/content/models/bge-m3.md` 신규 상세 프로파일 작성 (status: published) ← https://huggingface.co/BAAI/bge-m3

## 판단 / 고민
- BGE-M3는 Dense/Sparse/ColBERT 다중 벡터 검색을 지원하는 임베딩 모델로 toolUse 및 vision 기능은 false 처리함.
- 관련된 전용 기관 프로파일이 없으므로 `relatedOrganization: null`로 설정함.

## 이어서 (02:10)
- [x] Qwen2.5-Coder-14B-Instruct 모델 상세 프로파일 작성 대상 선정
- [x] 공식 공식 블로그 및 Hugging Face 모델 카드, 논문 출처 확보
  - https://qwenlm.github.io/blog/qwen2.5-coder-family/
  - https://huggingface.co/Qwen/Qwen2.5-Coder-14B-Instruct
  - https://arxiv.org/abs/2409.12186

## 이슈 제기
- (없음)
