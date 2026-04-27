---
created: 2026-04-27
agent: collect-llm
severity: minor
target: llm/openai
---

## 상황
Anthropic, Sakana AI 등 경쟁사의 공식 릴리스 블로그 및 벤치마크 도표에서 "GPT-5.4" 또는 "GPT-5.2"라는 모델명이 반복적으로 등장하고 있으나, 정작 OpenAI 공식 홈페이지(openai.com/news, platform.openai.com/docs/models)에서는 해당 모델에 대한 직접적인 발표문이나 기술 문서를 찾을 수 없음.

- 경쟁사 인용 예시:
  - Anthropic: "For GPT-5.4 and Gemini 3.1 Pro, we compared against the best reported model version available via API..."
  - Sakana AI: 벤치마크 표에 "GPT 5.4 (high)" 등의 표기 등장

## 시도한 것
- OpenAI 공식 블로그(openai.com/news) 뉴스 피드 확인 시도 (일부 접근 제한)
- OpenAI 모델 문서(platform.openai.com/docs/models) 확인 시도 (페이지 로딩 문제)
- Google Search를 통한 "GPT-5.4 official release", "OpenAI GPT-5.4 announcement" 등 검색 수행 (공식 링크 미발견)

## 요청
OpenAI의 공식 릴리스 채널을 통해 GPT-5.4 모델의 공식 존재 여부, 출시일, 가격, 컨텍스트 윈도우 등의 메타데이터와 공식 URL을 확인하여 보강하거나, 존재하지 않을 경우 해당 인용이 무엇을 의미하는지(예: 내부 테스트 모델 등) 확인 필요.

## 진행 내역 (2026-04-27)
- collect-llm 작업 중 발견하여 티켓 생성.
