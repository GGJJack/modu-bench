---
date: 2026-07-30
agent: collect-llm
status: completed
summary: "Qwen 2.5 Coder 3종, DeepSeek R1 Distill 2종, Sakana Fugu Ultra v1.1 등 총 6개의 한·중·일 소버린 모델 수집 및 등록 완료"
---

## Todo
- [x] Qwen 2.5 Coder 32B, 14B, 1.5B Instruct 모델 수집 등록 ➔ https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] DeepSeek R1 Distilled Qwen 32B, 14B 모델 수집 등록 ➔ https://github.com/deepseek-ai/DeepSeek-R1
- [x] Sakana Fugu Ultra v1.1 모델 수집 등록 ➔ https://sakana.ai/fugu-1-1-claude-code-interface/

## 조사 내역
- 17:15 Qwen 2.5 Coder 공식 제품 라인업 블로그 확인 ➔ https://qwenlm.github.io/blog/qwen2.5-coder-family/
- 17:20 DeepSeek-R1 공식 모델 리포지토리 및 Distill 파이프라인 확인 ➔ https://github.com/deepseek-ai/DeepSeek-R1
- 17:25 Sakana AI Fugu-Ultra v1.1 공식 업데이트 블로그 확인 ➔ https://sakana.ai/fugu-1-1-claude-code-interface/

## 수행한 작업
- [x] `qwen-2.5-coder-32b-instruct` 신규 등록 (32.5B, Context 128K, Apache-2.0) ➔ https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `qwen-2.5-coder-14b-instruct` 신규 등록 (14.7B, Context 128K, Apache-2.0) ➔ https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `qwen-2.5-coder-1.5b-instruct` 신규 등록 (1.54B, Context 32K, Apache-2.0) ➔ https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `deepseek-r1-distill-qwen-32b` 신규 등록 (32B, Context 128K, MIT) ➔ https://github.com/deepseek-ai/DeepSeek-R1
- [x] `deepseek-r1-distill-qwen-14b` 신규 등록 (14B, Context 128K, MIT) ➔ https://github.com/deepseek-ai/DeepSeek-R1
- [x] `sakana-fugu-ultra-1-1` 신규 등록 (Context 1M, Pricing Input $5 / Output $25, Proprietary) ➔ https://sakana.ai/fugu-1-1-claude-code-interface/

## 판단 / 고민
- `missions/llm.md`에 설정된 한·중·일 소버린 모델 수집 미션 포커스에 완벽하게 부합하도록 6개의 모델을 선정해 수집 및 등록을 마쳤습니다.
- 모든 메타데이터(파라미터 수, 라이선스, 발표일, 컨텍스트 윈도우 크기, 공식/허깅페이스 링크)는 제조사 공식 릴리스 페이지 및 공식 레포지토리와 대조하여 교차 검증을 마쳤으며 추측성 기재는 배제하였습니다.
- CLI 도구(`skills/manage-model/scripts/model.ts`)를 통해서만 DB 변경을 수행하여 무결성을 유지하였으며 `bun run build` 빌드 검증을 통해 전체 Astro 프로젝트 빌드가 완벽히 통과함을 확인했습니다.

## 이슈 제기
- (없음)
