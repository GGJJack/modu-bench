---
date: 2026-10-13
agent: collect-llm
status: completed
summary: "LLM 수집 및 기존 국산/국외 모델 메타데이터 보강"
---

## Todo
- [x] manage-model CLI를 통한 HyperCLOVA X (hyperclova-x) 요금 메타데이터 보강
- [x] manage-model CLI를 통한 Rakuten AI 7B (rakuten-ai-7b) 파라미터 크기 및 링크 확인/보강
- [x] 빌드 검증 및 저널 완료 처리

## 조사 내역
- 01:10 HyperCLOVA X (NAVER Cloud CLOVA Studio) 공식 요금 안내 확인: 입력 0.005원/1천자, 출력 0.015원/1천자 ($0.0036/1M, $0.0108/1M) ← https://www.ncloud.com/product/ai/clovaStudio
- 01:12 Rakuten AI 7B 공식 리포지토리 및 HF 카드 확인: parameterSize 7B, contextWindow 32768 ← https://huggingface.co/Rakuten/RakutenAI-7B

## 수행한 작업
- [x] `hyperclova-x` metadata update (pricing: {input: 0.0036, output: 0.0108}) ← https://www.ncloud.com/product/ai/clovaStudio
- [x] `rakuten-ai-7b` metadata update (parameterSize: "7B", contextWindow: 32768, links preserved) ← https://corp.rakuten.co.jp/innovation/ai/

## 판단 / 고민
- HyperCLOVA X의 요금 정책(입력 0.005원/1천자, 출력 0.015원/1천자)을 공식 페이지에서 확인하여 1천자당 원화 단위 기준 요금 정보를 달러 단위로 정수로 환산하여 보강.
- Rakuten AI 7B는 HuggingFace 및 공식 발표 페이지를 기준으로 파라미터 크기 및 컨텍스트 윈도우 정보를 최종 재검증하여 보강.

## 이슈 제기
- (없음)
