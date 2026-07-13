---
date: 2026-07-13
agent: collect-llm
status: completed
summary: "Sarvam AI 신규 모델 등록 및 AWS Bedrock 기반 메이저 모델 가격/컨텍스트 메타데이터 보강 완료"
---

## Todo
- [x] 신규 LLM 발견 및 등록 (Sarvam AI, Amazon Nova 2 Lite, Gemma 4 등)
- [x] 기존 모델 메타데이터 보강 (GLM-5, Grok 4.3 등)
- [x] 타 도메인 모델 교차 발견 등록 및 상세 사양(언어, 모달리티) 보강

## 조사 내역
- 18:00  AWS Bedrock pricing page 스캔하여 신규 출시 모델 및 가격 정보 확인 ← https://aws.amazon.com/bedrock/pricing/
- 18:05  Sarvam AI 공식 사이트에서 Sarvam-105B, 30B 오픈소스 릴리스 및 지원 언어 확인 ← https://www.sarvam.ai/
- 18:10  Artificial Analysis 모델 리스트에서 신규 엔진 버전 및 성능 지표 확인 ← https://artificialanalysis.ai/models
- 18:15  HuggingFace sarvamai 조직 페이지에서 모델 상세 사양(파라미터 크기, 라이선스) 확인 ← https://huggingface.co/sarvamai

## 수행한 작업
- [x] `sarvam-105b`, `sarvam-30b`, `sarvam-m` LLM 등록 (128k context) ← https://www.sarvam.ai/blogs/sarvam-30b-105b
- [x] `amazon-nova-2-lite`, `amazon-nova-2-sonic` 등록 및 가격 보강 ← https://aws.amazon.com/bedrock/pricing/
- [x] `gemma-4-31b`, `gemma-4-26b-a4b`, `gemma-4-e2b` 등록 및 업데이트 (Bedrock 기반 가격/CW 보강) ← https://aws.amazon.com/bedrock/pricing/
- [x] `deepseek-v3-1`, `deepseek-v3-2` 신규 등록 ← https://aws.amazon.com/bedrock/pricing/
- [x] `glm-5`, `glm-4.7`, `glm-4.7-flash` 가격 데이터 업데이트 ← https://aws.amazon.com/bedrock/pricing/
- [x] `grok-4-3` 가격 데이터 업데이트 ($1.25/$2.50) ← https://aws.amazon.com/bedrock/pricing/
- [x] `sarvam-bulbul` (TTS), `sarvam-saaras` (STT) 교차 발견 등록 및 지원 언어(11개 Indic+English) 보강 ← https://www.sarvam.ai/
- [x] `north-mini-code` (multimodal) 교차 발견 등록 및 지원 모달리티(text, image) 보강 ← https://cohere.com/blog/north-mini-code
- [x] `grok-imagine-video-1-5` (image-gen) 교차 발견 등록 ← https://x.ai/news/grok-imagine-video-1-5

## 판단 / 고민
- Bedrock 에 등록된 `Gemma 4` 변체들이 기존 registry와 ID가 겹치거나 세분화되어 있어, Bedrock에서 명시한 파라미터 크기를 기준으로 신규 ID(`gemma-4-31b` 등)를 부여함.
- `DeepSeek-V3` 계열의 경우 Bedrock 릴리스 시점에 맞춰 3.1, 3.2 버전을 분리하여 등록함.
- 코드 리뷰 피드백을 반영하여 STT/TTS 모델의 누락된 언어 정보 및 멀티모달 모델의 지원 모달리티 정보를 보강함.

## 이슈 제기
- (없음)
