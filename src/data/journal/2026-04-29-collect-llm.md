---
date: 2026-04-29
agent: collect-llm
status: completed
summary: "Mistral AI 신규 모델 발견 및 기존 모델군 보강, Sakana AI 및 xAI 모델 정보 업데이트"
---

## Todo
- [x] Mistral Medium 3.5 상세 정보 확인 및 등록
- [x] Mistral Large 3, Small 4 메타데이터 보강
- [x] xAI Grok 4.20 가격 및 컨텍스트 윈도우 확인
- [x] Sakana AI Fugu, Marlin 모델군 조사 및 보강
- [x] 교차 발견 모델(TTS/STT/OCR) 등록

## 조사 내역
- 17:23  Mistral AI 뉴스 페이지에서 Mistral Medium 3.5 출시 확인  ← https://mistral.ai/news
- 17:25  xAI 블로그에서 Grok 4.20 출시 및 SpaceX 인수 소식 확인  ← https://x.ai/news
- 17:26  xAI 문서에서 Grok 4.20 및 음성/이미지 API 가격 확인  ← https://docs.x.ai/developers/models
- 17:27  Mistral AI 문서에서 전체 모델 라인업 및 상세 정보 확인  ← https://docs.mistral.ai/models/overview
- 17:35  Sakana AI 블로그에서 Fugu(멀티 에이전트), Marlin(리서치) 베타 확인  ← https://sakana.ai/blog/
- 17:40  Mistral Medium 3.5 상세: 256k context, $1.5/$7.5 pricing, Modified MIT ← https://docs.mistral.ai/models/model-cards/mistral-medium-3-5-26-04
- 17:42  Mistral Large 3 보강: 675B(total)/41B(active), 256k, $0.5/$1.5 ← https://docs.mistral.ai/models/model-cards/mistral-large-3-25-12
- 17:45  Mistral Small 4 보강: 119B(total)/6.5B(active), 256k, $0.15/$0.6 ← https://docs.mistral.ai/models/model-cards/mistral-small-4-0-26-03
- 17:50  Sakana Fugu 상세: fugu-mini, fugu-ultra 라인업 확인. OpenAI 호환 API. ← https://sakana.ai/fugu-beta/
- 17:55  Sakana Marlin 상세: 8시간 이상 자율 리서치 수행 가능. AB-MCTS 기술 기반. ← https://sakana.ai/marlin-beta/

## 수행한 작업
- [x] mistral-medium-3-5 신규 등록 (llm)  ← https://docs.mistral.ai/models/model-cards/mistral-medium-3-5-26-04
- [x] mistral-large-3 메타데이터 보강  ← https://docs.mistral.ai/models/model-cards/mistral-large-3-25-12
- [x] mistral-small-4 메타데이터 보강  ← https://docs.mistral.ai/models/model-cards/mistral-small-4-0-26-03
- [x] grok-4-20 메타데이터 보강 (1M context, $5/$15)  ← https://docs.x.ai/developers/models
- [x] sakana-fugu-mini, sakana-fugu-ultra, sakana-marlin 공식 링크 보강  ← https://sakana.ai/fugu-beta/

## 판단 / 고민
- Sakana Fugu는 오케스트레이션 시스템이지만 그 자체가 언어 모델로 동작하므로 LLM 도메인 등록이 적절함. 이미 등록되어 있어 링크 정보만 보강함.
- Mistral의 Voxtral은 TTS/STT 도메인으로 교차 등록함.

## 이슈 제기
- (없음)

## 교차 발견
- mistral-voxtral-mini-transcribe → stt
- mistral-ocr-3 → multimodal
