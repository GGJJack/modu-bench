---
modelId: gemini-robotics-er-1-6
domain: llm
status: published
updated: 2026-06-24
sources:
  - https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
  - https://ai.google.dev/gemini-api/docs/robotics-overview
  - https://deepmind.google/models/gemini-robotics/safety
features:
  toolUse: true
  vision: true
  audioInput: true
  computerUse: true
  thinking: true
highlights:
  - "로보틱스 에이전트 기능을 위해 설계된 멀티모달 시각 언어 모델(VLM)"
  - "물리적 세계에서의 고급 추론 및 공간 인지 능력 제공"
  - "131,072 토큰의 입력 및 65,536 토큰의 출력 컨텍스트 지원"
relatedOrganization: google
---

# Gemini Robotics-ER 1.6 소개

## 개요
Gemini Robotics-ER 1.6은 Google이 로보틱스 분야에 특화하여 개발한 차세대 시각 언어 모델(Vision-Language Model, VLM)입니다. 이 모델은 Gemini의 에이전틱(Agentic) 능력을 물리적 하드웨어에 결합하여, 로봇이 복잡한 시각 데이터를 해석하고 공간적 추론을 수행하며 자연어 명령을 기반으로 행동 계획을 수립할 수 있도록 지원합니다. 현재 프리뷰 단계로 제공되며, 실제 환경에서의 자율적인 상호작용 성능을 대폭 향상시킨 것이 특징입니다.

## 기술 특징
Gemini Robotics-ER 1.6은 텍스트, 이미지, 비디오, 오디오를 동시에 처리하는 멀티모달 입력 능력을 갖추고 있습니다. 특히 공간적/시간적 추론 능력이 강화되어 객체의 위치(좌표)와 관계를 파악하고, 시간에 따른 장면의 변화를 이해할 수 있습니다. 131,072 토큰의 입력 한도와 65,536 토큰의 대규모 출력 한도를 제공하여 복잡한 지시사항과 대량의 시각적 맥락을 유지할 수 있습니다. 또한 '생각하기(Thinking)' 기능을 지원하여 counting이나 무게 추정 등 고난도 추론 작업 시 연산 예산을 동적으로 조절할 수 있으며, 코드 실행(Code Execution) 및 도구 호출 기능을 통해 로봇 시스템의 API와 직접 통합됩니다.

## 사용 사례
이 모델은 물체 감지 및 추적, 궤적(Trajectory) 생성, 다단계 과제 조율(Task Orchestration) 등 다양한 로보틱스 작업에 활용됩니다. 예를 들어, 자연어 명령으로 특정 물체를 찾아 옮기거나, 복잡한 점심 가방 싸기 작업을 단계별로 계획하고 실행하는 데 사용될 수 있습니다. 또한 아날로그 게이지 읽기, 회로 기판의 마킹 식별, 액체 잔량 측정과 같이 높은 정밀도가 필요한 시각적 분석 작업에서도 에이전틱 능력을 발휘하여 이미지 확대/회전 등의 사전 작업을 자율적으로 수행합니다.

## 한계
Gemini Robotics-ER 1.6은 프리뷰 상태의 모델로, 대기 시간(Latency)이 입력 데이터의 해상도나 추론 설정에 따라 증가할 수 있습니다. 로보틱스 특화 모델인 만큼 표준 LLM 벤치마크 지표(MMLU 등)보다는 물리적 환경에서의 수행 능력이 우선시되어 설계되었습니다. 또한 물리적 로봇을 제어할 때 발생할 수 있는 안전 사고를 방지하기 위해 인간의 감독과 별도의 안전 프레임워크와의 긴밀한 통합이 필수적입니다.
