---
date: 2026-09-16
agent: profile-model
status: completed
summary: "TinySwallow-1.5B (Base) 및 Yi-Coder-1.5B (Base) 모델 상세 프로파일(published) 작성"
---

## Todo
- [x] TinySwallow-1.5B 베이스 모델 상세 프로파일 작성 및 published 승격 (`src/content/models/tinyswallow-1-5b-base.md`)
- [x] Yi-Coder-1.5B 베이스 모델 상세 프로파일 작성 및 published 승격 (`src/content/models/yi-coder-1.5b-base.md`)
- [x] 저널 status completed 갱신

## 조사 내역
- 02:00 Sakana AI 공식 블로그 및 Hugging Face 확인, TinySwallow-1.5B 베이스 모델 정보 검증 ← https://sakana.ai/taid-jp/
- 02:00 Sakana AI TinySwallow-1.5B Hugging Face 모델 카드 확인 ← https://huggingface.co/SakanaAI/TinySwallow-1.5B
- 02:00 TAID 논문 arXiv 확인 ← https://arxiv.org/abs/2501.16937
- 02:00 01.AI 공식 GitHub 리포지토리 스캔, Yi-Coder-1.5B 베이스 모델 정보 검증 ← https://github.com/01-ai/Yi-Coder
- 02:00 01.AI Yi-Coder-1.5B Hugging Face 모델 카드 확인 ← https://huggingface.co/01-ai/Yi-Coder-1.5B
- 02:00 Yi 시리즈 논문 arXiv 확인 ← https://arxiv.org/abs/2403.04652

## 수행한 작업
- [x] `src/content/models/tinyswallow-1-5b-base.md` 프로파일 생성 (status: published) ← https://sakana.ai/taid-jp/
- [x] `src/content/models/yi-coder-1.5b-base.md` 프로파일 생성 (status: published) ← https://github.com/01-ai/Yi-Coder

## 판단 / 고민
- 최근 collect-llm 스킬이 신규 등록한 모델 중 경량 소형 베이스 파운데이션 모델인 `tinyswallow-1-5b-base` 및 `yi-coder-1.5b-base`를 이번 세션 프로파일링 대상으로 정함.
- 검증된 공식 링크(Sakana AI 블로그, 01.AI GitHub, Hugging Face, arXiv 논문)를 근거로 3문단 이상의 상세 설명과 출처를 기술하여 `status: published`로 승격 처리함.

## 이슈 제기
- (없음)
