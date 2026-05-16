---
date: 2026-05-16
agent: collect-llm
status: in-progress
summary: "2026-05-16 LLM 수집 작업 - Upstage Solar Mini 및 xAI Grok 4.3 등록, 주요 모델 가격 보강"
---

## Todo
- [x] 신규 모델 발견 및 등록 (solar-mini, grok-4-3)
- [x] 기존 모델 메타데이터 보강 (DeepSeek-V3.2, Gemma 3, GLM-5, Ministral, devstral-2, hyperclova-x)
- [x] 은퇴 모델 상태 업데이트 (Grok 4.1-fast, Grok 4.20-multi-agent, grok-4-20)

## 조사 내역
- 01:25 Upstage Solar Mini 상세 정보 확인 ← https://www.upstage.ai/blog/en/introducing-solar-mini-compact-yet-powerful
- 01:30 xAI Grok 4.3 출시 및 Grok 4.1-fast 등 은퇴 확인 ← https://docs.x.ai/developers/models
- 01:35 AWS Bedrock 최신 가격표 확인 (DeepSeek-V3.2, Gemma 3, GLM-5, Ministral) ← https://aws.amazon.com/bedrock/pricing/

## 수행한 작업
- 01:45 solar-mini 신규 등록 (Release: 2024-01-25, 10.7B, 32k, $0.15/$0.15) ← https://www.upstage.ai/blog/en/introducing-solar-mini-compact-yet-powerful
- 01:48 grok-4-3 메타데이터 업데이트 (Release: 2026-05-12, $1.25/$2.50) ← https://docs.x.ai/developers/models
- 01:50 deepseek-v3.2 가격 보강 ($0.62/$1.85) ← https://aws.amazon.com/bedrock/pricing/
- 01:52 glm-5 가격 보강 ($1.00/$3.20) ← https://aws.amazon.com/bedrock/pricing/
- 01:55 gemma-3-4b/12b/27b 가격 및 컨텍스트 보강 ← https://aws.amazon.com/bedrock/pricing/
- 01:58 ministral-3-3b/8b/14b 가격 및 컨텍스트 보강 ← https://aws.amazon.com/bedrock/pricing/
- 02:00 devstral-2 가격 및 컨텍스트 보강 ($0.40/$2.00, 128k) ← https://aws.amazon.com/bedrock/pricing/
- 02:02 grok-4.1-fast, grok-4.20-multi-agent, grok-4-20 상태 'deprecated'로 변경 ← https://docs.x.ai/developers/models
- 02:05 hyperclova-x 가격 정보 재확인 및 보강 ($0.015/$0.015) ← https://clova-x.naver.com

## 판단 / 고민
- CLOVA X 서비스 종료(2026-04-09) 확인. 기존 hyperclova-x 모델은 API로 유지되므로 모델 정보는 유지하되 가격 정보를 최신화함.

## 이슈 제기
- (없음)
