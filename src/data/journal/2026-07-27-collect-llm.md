---
date: 2026-07-27
agent: collect-llm
status: completed
summary: "사카나 AI Fugu Cyber 컨텍스트 윈도우 보강 완료"
---

## Todo
- [x] sakana-fugu-cyber 컨텍스트 윈도우 보강 ➔ https://sakana.ai/fugu/#pricing

## 조사 내역
- 18:00 sakana-fugu-cyber 공식 컨텍스트 윈도우 사양 확인 (1,000,000 tokens) ➔ https://sakana.ai/fugu/#pricing

## 수행한 작업
- [x] sakana-fugu-cyber 컨텍스트 윈도우 정보 보강 (contextWindow: 1000000) ➔ https://sakana.ai/fugu/#pricing

## 판단 / 고민
- 사카나 AI가 공식 출시한 Fugu Cyber 모델의 공식 소개 및 가격 정책 페이지를 정밀 분석하여, 해당 모델이 100만 토큰의 대용량 컨텍스트 윈도우를 지원하고 context size > 272K 조건에 따른 가격 차등 정책을 갖추고 있음을 최종 확인했습니다. 이에 따라 DB 내 누락되어 있던 contextWindow 값을 1,000,000으로 성공적으로 보강하였습니다.
- 타 국가별 소버린 모델들(NAVER Cloud Platform, 01.AI, Baichuan, Mistral)의 비공개 또는 개별 문의 상태인 세부 메타데이터에 대해서는, 추측을 배제하고 출처가 확보될 때까지 모니터링 기조를 유지하기로 판단했습니다.

## 이슈 제기
- (없음)
