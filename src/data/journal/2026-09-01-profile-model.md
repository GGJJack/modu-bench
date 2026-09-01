---
date: 2026-09-01
agent: profile-model
status: completed
summary: "DeepSeek-R1-Distill-Qwen-14B 모델 상세 프로파일 작성 완료"
---

## Todo
- [x] 대상 모델 선정 (deepseek-r1-distill-qwen-14b)
- [x] `src/content/models/deepseek-r1-distill-qwen-14b.md` 상세 페이지 작성
- [x] `bun run build` 검증 및 저널 완료 갱신

## 조사 내역
- 02:00  모델 `deepseek-r1-distill-qwen-14b` 선택 (JSON 지표 및 HF 카드 확인)  ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B
- 02:02  DeepSeek-R1 80만 개 추론 샘플 기반 Qwen2.5-14B SFT 미세조정 사양 확인  ← https://github.com/deepseek-ai/DeepSeek-R1

## 수행한 작업
- [x] 저널 초기 파일 작성 (`src/data/journal/2026-09-01-profile-model.md`)  ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B
- [x] 신규 마크다운 프로파일 생성 (`src/content/models/deepseek-r1-distill-qwen-14b.md`)  ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B

## 판단 / 고민
- DeepSeek-R1 증류 모델 시리즈 중 14B 파라미터 규격인 `deepseek-r1-distill-qwen-14b`를 선택하여 상세 마크다운 프로파일을 작성함.

## 이슈 제기
- (없음)
