---
modelId: mistral-medium-3-5
domain: llm
status: published
updated: 2026-04-29
sources:
  - https://docs.mistral.ai/models/model-cards/mistral-medium-3-5-26-04
  - https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5
  - https://build.nvidia.com/mistralai/mistral-medium-3.5-128b
features:
  toolUse: true
  vision: true
  fineTuning: true
highlights:
  - "128B Dense 아키텍처"
  - "256k 컨텍스트 윈도우 지원"
  - "SWE-bench Verified 77.6% 달성"
relatedOrganization: mistral-ai
---

# Mistral Medium 3.5 소개

## 개요
Mistral Medium 3.5는 2026년 4월 29일에 공개된 Mistral AI의 차세대 플래그십 모델로, 지시 이행(Instruction-following), 추론, 코딩 능력을 하나의 128B 밀집(Dense) 모델로 통합한 것이 특징입니다. 이 모델은 특히 에이전트 환경과 복잡한 코딩 작업에 최적화되어 있으며, Mistral Vibe와 Le Chat의 기본 모델로 채택되었습니다. 공개 가중치(Open Weights) 방식으로 제공되며 수정된 MIT 라이선스(Modified MIT License)를 따릅니다.

## 기술 특징
Mistral Medium 3.5는 128B 파라미터의 밀집형 아키텍처를 채택하여 실세계 문제 해결 능력을 극대화했습니다. 256k의 광범위한 컨텍스트 윈도우를 제공하며, 요청별로 추론 노력(Reasoning effort)을 설정할 수 있어 간단한 채팅부터 복잡한 에이전트 실행까지 유연하게 대응합니다. 또한, 다양한 이미지 크기와 종횡비를 처리할 수 있도록 처음부터 훈련된 비전 인코더를 탑재하고 있습니다. 벤치마크 결과, SWE-bench Verified에서 77.6%를 기록하며 Devstral 2 및 Qwen3.5 397B 등의 모델을 상회하는 성능을 보여주었습니다.

## 사용 사례
이 모델은 장기적인 작업(Long-horizon tasks)과 다중 도구 호출(Multiple tool calls)에 강력한 성능을 발휘합니다. 주요 사용 사례로는 Mistral Vibe를 통한 비동기 클라우드 코딩 에이전트, Le Chat의 새로운 '워크 모드(Work mode)'를 통한 연구, 분석 및 도구 간 협업 작업 등이 있습니다. 또한 구조화된 출력(Structured output) 생성이 탁월하여 하위 코드 시스템과의 연동이 용이합니다.

## 한계
Mistral AI는 해당 모델이 에이전트 및 코딩 워크플로우에 최적화되어 있으나, 특정 매우 전문적인 영역에서의 성능 제한이나 도구 호출 과정에서의 안전 승인 필요성 등을 언급하고 있습니다. 자가 호스팅을 위해서는 최소 4대의 GPU가 필요하며, 이는 하드웨어 리소스 요구 사항이 작지 않음을 시사합니다.
