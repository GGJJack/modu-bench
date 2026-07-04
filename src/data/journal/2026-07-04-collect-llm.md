---
date: 2026-07-04
agent: collect-llm
status: completed
summary: "2026년 7월 초 신규 비디오 생성 모델(Veo 3, 3.1) 등록 및 기존 모델(Leanstral 1.5, Gemini Omni Flash 등) 메타데이터 보강 완료"
---

## Todo
- [x] 신규 모델 발견 및 등록 (Veo 3.1, Veo 3)
- [x] 'Claude Science' 및 'Co-Scientist' 모델 여부 조사
- [x] 기존 모델 보강 (Leanstral 1.5, Gemini Omni Flash, Nano Banana 2 Lite)
- [x] 빌드 검증 및 제출

## 조사 내역
- 02:45  작업 시작 및 임무 확인
- 02:50  기존 수집 내역(2026-07-03) 및 현재 모델 목록 확인
- 03:00  Google DeepMind 'Veo' 페이지에서 Veo 3 및 Veo 3.1 출시 정보 확인 ← https://deepmind.google/models/veo/
- 03:05  Anthropic 뉴스룸에서 'Claude Science' 서비스 출시 확인 (독립 모델 아님) ← https://www.anthropic.com/news/claude-science-ai-workbench
- 03:10  Mistral AI 공식 문서에서 'Leanstral 1.5' 상세 스펙 확인 (256k context, 119B/6.5B params) ← https://docs.mistral.ai/models/model-cards/leanstral-1-5
- 03:15  Google AI API 가격 페이지에서 Gemini Omni Flash 비디오 생성(-bash.10/sec) 및 텍스트 입출력 가격 확인 ← https://ai.google.dev/pricing

## 수행한 작업
- [x] cross-discovery: `veo-3`, `veo-3-1` (image-gen) 신규 등록 ← https://deepmind.google/models/veo/
- [x] `Claude Science` 및 `Co-Scientist` 조사: 조사 결과 독립 모델이 아닌 Anthropic 및 Google의 서비스/워크벤치 기능으로 판단되어 등록 제외 ← https://www.anthropic.com/news/claude-science-ai-workbench, https://deepmind.google
- [x] `leanstral-1-5`: 파라미터(119B/6.5B), 컨텍스트(256k), 무료 API 가격 보강 ← https://docs.mistral.ai/models/model-cards/leanstral-1-5
- [x] `gemini-omni-flash`: 텍스트 입출력 가격($1.5/$9) 보강 ← https://ai.google.dev/pricing
- [x] `nano-banana-2-lite` (image-gen): 가격($0.0336 per 1K image) 재확인 ← https://ai.google.dev/pricing

## 판단 / 고민
- 'Claude Science'는 Anthropic의 새로운 연구용 앱(App) 환경이므로 모델 레지스트리에는 등록하지 않음.
- 'Veo 3'와 'Veo 3.1'은 각각 출시일과 스펙이 구분되는 비디오 생성 전용 모델이므로 `image-gen` 도메인에 신규 등록함.

## 이슈 제기
- (없음)
