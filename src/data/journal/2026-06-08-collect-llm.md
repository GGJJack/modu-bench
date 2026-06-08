---
status: completed
---

# 2026-06-08 collect-llm

## 시작 상태
- LLM 도메인 메타데이터 수집 및 보강 세션 시작.
- 주요 타겟: Anthropic, Mistral AI, Sakana AI, Inception Labs, Upstage 등의 신규 모델 및 누락 정보.

## 변경 사항
### 신규 등록
- mythos-preview (Anthropic): Project Glasswing을 통해 발표된 보안 특화 frontier 모델. ($25/$125)
- claude-opus-4-6 (Anthropic): Opus 4.5의 후속작으로 1M 컨텍스트 지원. ($5/$25)
- llama-3.1-namazu-405b (Sakana AI): Llama 3.1 405B 기반 일본어 튜닝 모델.
- namazu-gpt-oss-120b (Sakana AI): GPT-OSS 120B 기반 일본어 튜닝 모델.

### 기존 모델 보강
- mercury-2 (Inception Labs): 출시일(2026-02-24), 가격($0.25/$0.75), 컨텍스트 윈도우(128,000) 보강.
- solar-pro-2 (Upstage): 파라미터 크기(31B) 보강.
- claude-opus-4-8 (Anthropic): 공식 링크 보강.

## 교차 도메인 발견
- grok-imagine-video-1.5-preview (image-gen/video): xAI의 이미지-비디오 모델. (2026-06-03)
- voxtral-tts (tts): Mistral AI의 텍스트-음성 모델.
- veo (image-gen/video): Google의 비디오 생성 모델.
- imagen (image-gen): Google의 이미지 생성 모델.
- lyria (tts/music): Google의 음악 생성 모델.
- nano-banana (image-gen): Google의 이미지 생성 모델.
- gemini-audio (stt/audio): Google의 오디오 처리 모델.
