---
modelId: solar-pro-2-preview
domain: llm
status: published
updated: 2026-10-23
sources:
  - https://www.upstage.ai/blog/en/solar-pro-2-preview-small-powerful-now-with-reasoning
  - https://huggingface.co/upstage/solar-pro-2-preview
  - https://www.upstage.ai/
features:
  extendedThinking: true
  fineTuning: true
highlights:
  - "추론(Reasoning) 능력 강화 및 128K 확장 컨텍스트 지원 22B 소형 고성능 언어모델"
  - "DUS(Depth Up-scaling) 기법 고도화 및 단계별 얼라인먼트 튜닝 적용"
  - "단일 GPU 환경 온프레미스 기업용 가성비 deployment에 최적화"
relatedOrganization: upstage
---

# Solar Pro 2 Preview 소개

## 개요
Solar Pro 2 Preview(솔라 프로 2 프리뷰)는 대한민국 인공지능 대표 기업 업스테이지(Upstage)가 2025년 5월 공개한 220억 개(22B) 매개변수 규모의 차세대 언어 모델입니다. 기존 Solar Pro 모델을 계승하여 소형 체급에서 최고 수준의 가성비를 확보함과 동시에, 강화된 다단계 심층 추론(Reasoning) 및 확장된 128,000(128K) 토큰 문맥 윈도우 지원을 본격적으로 도입하였습니다. 단일 enterprise GPU 카드 상에서 구동 가능하도록 효율적으로 설계되어 차세대 기업용 AI 시장을 타깃으로 합니다.

## 기술 특징
Solar Pro 2 Preview는 업스테이지의 독자적인 Depth Up-scaling(DUS) 아키텍처 확장 기법과 최신 심층 추론 정렬(Reasoning Alignment) 기술을 접목하여 개발되었습니다. 복잡한 논리 판단이나 다단계 문제 해결 시 내부 사고 과정(Reasoning trace)을 거쳐 정밀한 답변을 유도하도록 최적화되었으며, 기존 소형 모델들의 한계였던 긴 문서 문맥 유지를 128K 토큰까지 대폭 확장하였습니다. 또한 정밀한 지시 이행 능력 및 파인튜닝(Fine-Tuning) 유연성을 보유하고 있습니다.

## 사용 사례
Solar Pro 2 Preview는 22B 규모의 높은 효율성을 바탕으로 사내 보안 인프라나 온프레미스(On-premise) 환경에서 독립적인 에이전틱(Agentic) AI 시스템 및 RAG 플랫폼 구축에 유용하게 사용됩니다. 금융, 법률, 의료 등 복잡한 규정 분석 및 다단계 추론이 요구되는 엔터프라이즈 도메인에서 우수한 성능을 보이며, 비용 효율적이고 강력한 AI 파이프라인 수립에 기여합니다.

## 한계
Preview 버전으로 공개된 특성상 특정 고난도 도메인의 특수 작업이나 초대형 프론티어 플래그십 모델 대비 일부 복잡한 다국어 텍스트 처리에서 성능 격차가 있을 수 있습니다. 또한 추론 모드 활용 시 답변 생성 속도가 일반 대화 모드 대비 연산 시간이 더 소요될 수 있어 상용 서버 서비스 시 요청 지연시간(Latency)을 고려한 아키텍처 설계가 요구됩니다.
