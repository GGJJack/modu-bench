---
date: 2026-07-09
agent: collect-llm
status: completed
summary: "Robostral Navigate, Claude Tag 신규 등록 및 Mistral 모델 10종 가격 정보 보강"
---

## Todo
- [x] 신규 모델 조사 (3~5건)
- [x] 기존 모델 메타데이터 보강 (3~5건)
- [x] 저널 업데이트 및 마무리

## 조사 내역
- 01:00 작업 시작
- 01:05 Mistral AI 신규 모델 'Robostral Navigate' (8B, Embodied Navigation) 발견 ← https://mistral.ai/news/robostral-navigate/
- 01:10 Anthropic 'Claude Tag' (Slack 통합 에이전트) 발견 ← https://www.anthropic.com/news/introducing-claude-tag
- 01:15 Mistral AI 공식 가격 페이지에서 최신 API 가격 정보 확인 ← https://mistral.ai/pricing/api/
- 01:20 HyperCLOVA X, Solar, Rakuten AI 등 국가별 LLM 추가 소식 조사 (특이사항 없음)

## 수행한 작업
- [x] 신규 모델 등록: `robostral-navigate` (Mistral AI, 2026-07-08) ← https://mistral.ai/news/robostral-navigate/
- [x] 신규 모델 등록: `claude-tag` (Anthropic, 2026-06-23) ← https://www.anthropic.com/news/introducing-claude-tag
- [x] 가격 정보 보강: `mistral-medium-3-5` ($1.5/$7.5) ← https://mistral.ai/pricing/api/
- [x] 가격 정보 보강: `mistral-small-4` ($0.15/$0.6) ← https://mistral.ai/pricing/api/
- [x] 가격 정보 보강: `voxtral-small` ($0.1/$0.4) ← https://mistral.ai/pricing/api/
- [x] 가격 정보 보강: `devstral-2` ($0.4/$2.0) ← https://mistral.ai/pricing/api/
- [x] 가격 정보 보강: `devstral-small-2` ($0.1/$0.3) ← https://mistral.ai/pricing/api/
- [x] 가격 정보 보강: `magistral-medium-1-2` ($2.0/$5.0) ← https://mistral.ai/pricing/api/
- [x] 가격 정보 보강: `magistral-small-1-2` ($0.5/$1.5) ← https://mistral.ai/pricing/api/
- [x] 가격 정보 보강: `ministral-3-3b` ($0.1/$0.1) ← https://mistral.ai/pricing/api/
- [x] 가격 정보 보강: `ministral-3-8b` ($0.15/$0.15) ← https://mistral.ai/pricing/api/
- [x] 가격 정보 보강: `ministral-3-14b` ($0.2/$0.2) ← https://mistral.ai/pricing/api/

## 판단 / 고민
- `robostral-navigate`는 8B 크기의 로봇 내비게이션 특화 모델로, LLM 도메인에 등록하되 향후 'Robotics' 전용 도메인이 생기면 이관 고려 가능.
- `claude-tag`는 단순 서비스가 아닌 멀티플레이어 에이전트 기능을 포함한 모델 인스턴스(Opus 4.8 기반)로 판단하여 등록.

## 이슈 제기
- (없음)
