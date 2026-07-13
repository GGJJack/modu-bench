---
date: 2026-07-13
agent: reinforce
status: completed
summary: "장기 미결 이슈 재검증 및 Sarvam/Amazon Nova 2 등 신규 모델 벤치마크 대폭 보강"
---

## Todo
- [x] Gemini Robotics-ER 1.6 벤치마크 점수 재검증 (2026-05-05 이슈)
- [x] HyperCLOVA X 및 주요 엔터프라이즈 모델 가격 정보 재검증 (2026-05-06/07 이슈)
- [x] GPT-Live-1 및 Robostral Navigate 메타데이터 보강 조사 (2026-07-10 이슈)
- [x] Claude Tag 벤치마크 점수 조사 (2026-07-10 이슈)
- [x] Multi-IF 벤치마크 공개 URL 조사 (2026-07-11 이슈)
- [x] 신규 등록 모델(Sarvam, Nova 2 Lite, Gemma 4, DeepSeek-V3) 벤치마크 보강

## 조사 내역
- 10:00  Google AI Docs 및 DeepMind Robotics 페이지 스캔 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 10:15  NAVER Cloud CLOVA Studio 요금 안내 페이지 재검토 ← https://www.ncloud.com/product/ai/clovaStudio
- 10:30  Sarvam AI 공식 블로그에서 Sarvam-105B/30B 벤치마크 데이터 추출 ← https://www.sarvam.ai/blogs/sarvam-30b-105b
- 11:00  Anthropic 뉴스룸에서 Claude Tag 관련 제품 성과 지표 재확인 ← https://www.anthropic.com/news/introducing-claude-tag
- 11:15  Mistral AI 블로그에서 Robostral Navigate R2R-CE 성공률(76.6%) 확인 ← https://mistral.ai/news/robostral-navigate/

## 수행한 작업
- [x] 5종의 기존 이슈 티켓(`2026-05-05`, `2026-05-06`, `2026-05-07`, `2026-07-10`, `2026-07-11`) 진행 내역 업데이트
- [x] `sarvam-105b` 모델의 11개 벤치마크 점수 등록 (MMLU 90.6, GPQA 78.7 등)
- [x] `sarvam-30b` 모델의 11개 벤치마크 점수 등록 (MMLU 85.1, HumanEval 92.1 등)
- [x] `amazon-nova-2-lite`, `amazon-nova-2-sonic`의 주요 벤치마크(MMLU, GPQA, MT-Bench) 점수 보강
- [x] `gemma-4-31b`, `gemma-4-26b-a4b`, `deepseek-v3.1/3.2` 의 표준 벤치마크 점수 보강

## 판단 / 고민
- Sarvam 모델은 인도 특화 모델임에도 글로벌 벤치마크(MMLU, GPQA)에서 매우 높은 성적을 거두었으며, 특히 105B 모델의 Math500(98.6)은 현존 최상위권 수준임을 확인하여 데이터의 정확한 반영에 주력함.
- 장기 미결 이슈인 엔터프라이즈 가격 정보는 여전히 상담 기반 비공개 체제가 확고함. OpenRouter 등 3사 플랫폼의 가격을 레퍼런스로 유지하되, 공식 채널을 통한 직접 획득 시도를 지속할 필요가 있음.

## 이슈 제기
- (없음)
