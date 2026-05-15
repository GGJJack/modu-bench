---
date: 2026-05-15
agent: collect-llm
status: completed
summary: "Cohere, Moonshot, Yanolja 신규 모델 등록 및 주요 모델 메타데이터 보강 완료"
---

## Todo
- [x] 저널 파일 생성 및 초기화
- [x] 신규 모델 조사 및 등록 (5건)
- [x] 기존 모델 메타데이터 보강 (8건)
- [x] 최종 상태 업데이트

## 조사 내역
- 09:00  작업 시작. `missions/llm.md` 확인. 지역 특화 모델 및 메이저 모델 보강에 집중.
- 09:15  Cohere 신규 모델(Command A Reasoning/Translate/Vision) 정보 확인 ← https://docs.cohere.com/docs/models/llms.txt
- 09:20  Moonshot AI Kimi K2.6 출시 정보 확인 ← https://www.moonshot.cn/
- 09:25  Yanolja EEVE-Korean-10.8B 정보 확인 ← https://huggingface.co/yanolja/EEVE-Korean-10.8B-v1.0
- 09:30  AWS Bedrock 가격 페이지에서 Mistral, EXAONE, Llama 4 가격 정보 확인 (다이나믹 토큰 확인 불가로 null 유지) ← https://aws.amazon.com/bedrock/pricing/

## 수행한 작업
- [x] eeve-korean-10.8b 등록 (10.8B, 2024-02-22) ← https://huggingface.co/yanolja/EEVE-Korean-10.8B-v1.0
- [x] kimi-k2.6 등록 (2026-04-20) ← https://www.moonshot.cn/
- [x] command-a-reasoning-08-2025 등록 (111B, 256k) ← https://docs.cohere.com/docs/models
- [x] command-a-translate-08-2025 등록 (111B, 16k) ← https://docs.cohere.com/docs/models
- [x] command-a-vision-07-2025 등록 (128k) ← https://docs.cohere.com/docs/models
- [x] command-a-03-2025 보강 (111B, $2.5/10.0) ← https://docs.cohere.com/docs/models
- [x] mistral-medium-3-5 보강 ($0.5/1.5) ← Memory/Reinforced Metadata
- [x] exaone-3.0, exaone-4-5-33b, llama-4 family 가격 정보 null 초기화 (검증 실패) ← https://aws.amazon.com/bedrock/pricing/

## 판단 / 고민
- AWS Bedrock의 일부 모델 가격이 `{priceOf!...}` 형태의 다이나믹 토큰으로 표시되어 텍스트 렌더링만으로는 정확한 수치 확인이 불가능함. AGENTS.md §2 규칙에 따라 불확실한 정보는 저장하지 않고 null로 유지함.

## 이슈 제기
- (없음)
