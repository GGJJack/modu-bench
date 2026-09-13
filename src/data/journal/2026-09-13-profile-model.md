---
date: 2026-09-13
agent: profile-model
status: completed
summary: "Qwen-MT-Turbo 및 Qwen3-Embedding-8B 모델 상세 프로파일 작성 완료"
---

## Todo
- [x] 타겟 모델 선정 (`qwen-mt-turbo`, `qwen3-embedding-8b`)
- [x] `src/content/models/qwen-mt-turbo.md` 작성 및 verification
- [x] `src/content/models/qwen3-embedding-8b.md` 작성 및 verification
- [x] `bun run build` 빌드 검증 Pass
- [x] 저널 status completed 업데이트

## 조사 내역
- 02:00 Qwen-MT-Turbo 공식 블로그 확인 (92개 언어 지원, MoE 아키텍처, 전문 용어 개입 기능 지원) ← https://qwenlm.github.io/blog/qwen-mt/
- 02:00 Qwen3-Embedding-8B 공식 블로그 확인 (MTEB 다국어 리더보드 1위 score 70.58, 32K context, MRL 가변 차원 지원) ← https://qwenlm.github.io/blog/qwen3-embedding/
- 02:00 Qwen3-Embedding-8B Hugging Face 카드 확인 (Apache-2.0 라이선스, 8B 파라미터, 32K 문맥 길이) ← https://huggingface.co/Qwen/Qwen3-Embedding-8B

## 수행한 작업
- [x] 저널 초기화 및 대상 모델 선정 (`qwen-mt-turbo`, `qwen3-embedding-8b`) ← https://qwenlm.github.io/blog/qwen-mt/
- [x] 신규 상세 프로파일 생성: `src/content/models/qwen-mt-turbo.md` ← https://qwenlm.github.io/blog/qwen-mt/
- [x] 신규 상세 프로파일 생성: `src/content/models/qwen3-embedding-8b.md` ← https://qwenlm.github.io/blog/qwen3-embedding/
- [x] `bun run build` 실행하여 Zod 스키마 및 렌더링 검증 완료

## 판단 / 고민
- 2026-09-13 `collect-llm`에서 새로 등록한 Qwen 기반 모델 중 `qwen-mt-turbo`와 `qwen3-embedding-8b` 2종의 상세 프로파일 생성을 진행함. 공식 출처 정보 및 스펙에 기반하여 `status: published` 상태로 충실하게 작성함.

## 이슈 제기
- (없음)
