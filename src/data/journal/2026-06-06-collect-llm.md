---
date: 2026-06-06
agent: collect-llm
status: completed
summary: "Upstage, Google, Zhipu AI, StepFun 신규 모델 등록 및 기존 모델 보강 완료"
---

## Todo
- [x] 저널 파일 생성
- [x] 신규 모델 검색 (OpenAI, Anthropic, Google, xAI, Naver, Upstage, Zhipu AI, StepFun 등)
- [x] 기존 모델 보강 (solar-pro-3, gemini-omni 등)
- [x] 신규 모델 등록 (solar-pro-2, solar-pro-2-preview, gemini-omni-pro, glm-4-7-pro, step-3-7-pro)
- [x] 결과 요약 및 저널 업데이트

## 조사 내역
- 01:00 작업 시작
- Upstage: `Solar Pro 3` (2026-01-26) 정보 보강 및 `Solar Pro 2` (2025-07-10), `Solar Pro 2 Preview` (2025-05-20) 발견.
- Google: `Gemini Omni Pro` (2026-05-14) 발견. `Gemini Omni` 정보 보강.
- Zhipu AI: `GLM-4.7 Pro` (2026-05-11) 발견 및 정보 보강.
- StepFun: `Step 3.7 Pro` (2026-06-03) 발견 및 정보 보강.
- OpenAI/Anthropic: 최근 며칠간 신규 모델 출시 뉴스 없음. 기존 `gpt-rosalind`, `rosalind-biodefense` 사양 재검토 (확정된 사양 부재로 null 유지).

## 수행한 작업
- [x] 신규 모델 등록:
  - `solar-pro-2` (2025-07-10) ← https://www.upstage.ai/blog/en/solar-pro-2-launch
  - `solar-pro-2-preview` (2025-05-20) ← https://www.upstage.ai/blog/en/solar-pro-2-preview-small-powerful-now-with-reasoning
  - `gemini-omni-pro` (2026-05-14, Multimodal: text, image, audio, video) ← https://deepmind.google/models/gemini-omni/
  - `glm-4-7-pro` (2026-05-11) ← https://www.zhipuai.cn/news
  - `step-3-7-pro` (2026-06-03) ← https://www.stepfun.com/news
- [x] 기존 모델 정보 보강:
  - `solar-pro-3`: Context Window 128k, Pricing $0.25/$1.0 ← https://console.upstage.ai/docs/models/solar-pro-3
  - `gemini-omni`: Context Window 1M, Pricing $1.25/$10.0 ← https://deepmind.google/models/gemini-omni/
  - `glm-4-7-pro`: Context Window 128k, Pricing $0.015/$0.015 (1000 tokens 기준 0.1 RMB 환산)
  - `step-3-7-pro`: Context Window 1M, Pricing $0.1/$0.3
- [x] 빌드 테스트 완료: `bun run build`를 통해 데이터 정합성 및 스키마 준수 확인.

## 판단 / 고민
- `Solar Pro 3`는 2026-01-26에 출시되었으나 기존 레지스트리에는 가격 정보가 누락되어 있어 보강함.
- `Solar Pro 2` 및 `Preview`는 Upstage 제품 라인업의 중요 모델로 판단하여 소급 등록함.
- OpenAI의 `gpt-rosalind` 시리즈와 Inception Labs의 `mercury-2`는 여전히 공식 문서상 상세 API 사양(Context Window, Pricing)이 확인되지 않아 불확실한 정보 입력을 피하기 위해 null 상태를 유지함.

## 이슈 제기
- [ ] OpenAI `gpt-rosalind` 시리즈의 상세 API 사양(Pricing, Context Window) 공식 문서 지속 모니터링 필요.
