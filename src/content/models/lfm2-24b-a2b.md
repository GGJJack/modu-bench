---
modelId: lfm2-24b-a2b
domain: llm
status: published
updated: 2026-07-08
sources:
  - https://www.liquid.ai/blog/no-cloud-tool-calling-agents-consumer-hardware-lfm2-24b-a2b
  - https://github.com/Liquid4All/cookbook/tree/main/examples/localcowork
features:
  toolUse: true
  vision: false
highlights:
  - "로컬 소비자 가전에서 구동 가능한 도구 호출 최적화 모델"
  - "평균 400ms 미만의 초저지연 도구 선택 성능"
  - "14.5GB 수준의 낮은 메모리 점유율 (Q4_K_M 양자화 기준)"
  - "17T 이상의 토큰으로 사전 학습 진행"
relatedOrganization: liquid
---

# LFM2-24B-A2B 소개

## 개요
LFM2-24B-A2B는 2026년 3월 5일 Liquid AI가 발표한 로컬 에이전트 특화 언어 모델입니다. 이 모델은 클라우드 연결 없이 소비자용 하드웨어에서 도구 호출(Tool-calling) 작업을 수행하도록 설계되었습니다. 특히 개인정보 보호와 지연 시간(latency)이 중요한 규제 산업이나 온디바이스 워크플로우 자동화를 타겟으로 하며, 'LocalCowork'라는 오픈소스 데스크톱 에이전트의 핵심 엔진으로 활용됩니다.

## 기술 특징
LFM2-24B-A2B는 LFM2 아키텍처를 기반으로 하며, 도구 선택 및 디스패치 성능을 극대화하는 데 초점을 맞추었습니다. Apple M4 Max (36GB RAM) 환경에서 Q4_K_M GGUF 양자화 모델 기준 약 14.5GB의 메모리를 사용하며, 도구 선택 응답당 평균 385ms라는 초저지연 성능을 보여줍니다. 67개의 도구를 포함한 13개의 MCP(Model Context Protocol) 서버 환경에서 단일 단계 도구 선택 정확도 80%를 기록했습니다. 이 모델은 사전 학습 단계에서 이미 17T 이상의 토큰을 학습했으며, 이는 향후 LFM2.5-24B-A2B로 이어지는 기술적 토대가 됩니다.

## 사용 사례
가장 대표적인 사용 사례는 'LocalCowork' 에이전트를 통한 온디바이스 파일 시스템 제어 및 자동화입니다. 로컬 폴더의 보안 스캔(API 키 유출 탐지), 시스템 정보 조회, 클립보드 제어, 영수증 OCR 및 CSV 추출 등 데이터가 기기 외부로 유출되지 않아야 하는 민감한 작업에 최적화되어 있습니다. 특히 빠른 루프를 통해 사용자의 확인을 거치는 '가이드형 에이전트(guided loop)' 방식에서 높은 효율을 보입니다.

## 한계
LFM2-24B-A2B는 자율적인 장기 추론(Long-chain)보다는 빠른 도구 선택 및 디스패치에 최적화되어 있습니다. 다중 단계 체인 워크플로우(Multi-step chains)의 경우 완결 성공률이 상대적으로 낮아, 전적으로 모델에게 맡기는 '오토파일럿'보다는 사용자의 개입이 포함된 루프에서 사용하는 것이 권장됩니다.
