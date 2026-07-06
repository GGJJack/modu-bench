---
modelId: gemini-omni-flash
domain: llm
status: published
updated: 2026-06-30
sources:
  - https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/
  - https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/
  - https://deepmind.google/models/gemini-omni
features:
  toolUse: true
  vision: true
  audioInput: true
  audioOutput: true
  videoInput: true
  videoOutput: true
highlights:
  - "비디오, 오디오, 텍스트 등 모든 입력을 자유자재로 조합하여 고품질 비디오를 생성"
  - "대화형 자연어를 통한 비실시간/실시간 비디오 편집 및 스타일 변환 능력"
  - "Gemini API 및 Google AI Studio를 통해 개발자에게 공개"
relatedOrganization: google
---

# Gemini Omni Flash 소개

## 개요
Gemini Omni Flash는 2026년 5월 Google I/O에서 첫 공개된 차세대 생성형 멀티모달 모델 제품군인 'Gemini Omni'의 핵심 모델입니다. 2026년 6월 30일부터 Google AI Studio와 Gemini API를 통해 개발자들에게 공식적으로 제공되기 시작했습니다. 단순한 이미지 생성을 넘어 비디오 영역에서 "어떤 입력으로든 무엇이든 생성할 수 있는(Create anything from any input)" 능력을 갖추고 있으며, 특히 대화형 자연어를 통한 정밀한 비디오 편집 기능에 최적화되어 있습니다.

## 기술 특징
Gemini Omni Flash는 Gemini의 강력한 멀티모달 추론 능력과 비디오 생성 기술을 결합하여 다음과 같은 기술적 우위를 제공합니다:

* **대화형 비디오 편집**: 자연어를 사용하여 생성된 비디오를 수정하거나 세분화할 수 있습니다. 예를 들어, 특정 객체의 색상을 변경하거나 배경을 교체하는 작업을 대화하듯 수행할 수 있습니다.
* **멀티모달 참조**: 이미지, 텍스트, 비디오 입력을 조합하여 장면의 일관성을 유지하고 정밀하게 제어할 수 있습니다.
* **실세계 지식 활용**: 역사, 생물학, 서사 논리 등 Gemini의 방대한 지식을 바탕으로 물리적으로 타당하고 맥락적으로 풍부한 비디오를 생성합니다.
* **텍스트-동작 동기화**: 단순한 프롬프팅을 통해 비디오 내의 동작과 텍스트/그래픽을 직접적으로 연결하고 동기화할 수 있습니다.

## 사용 사례
* **크리에이티브 워크플로우**: Nano Banana 2 Lite로 이미지를 빠르게 생성한 후, 이를 Gemini Omni Flash의 참조 이미지로 전달하여 고품질 애니메이션으로 변환하는 연쇄적인 미디어 제작 파이프라인을 구축할 수 있습니다.
* **맞춤형 영상 제작**: 'Anywhere'와 같은 앱을 통해 사용자의 사진을 아이코닉한 장소로 이동시킨 후, Omni Flash를 사용하여 해당 장소에서의 움직이는 클립으로 변환할 수 있습니다.
* **디지털 인테리어 및 디자인**: 정적인 실내 사진을 업로드한 후 디자인 컨셉을 적용하고, 이를 시네마틱한 비디오로 쇼케이스하여 실제 공간의 변화를 미리 체험할 수 있게 합니다.

## 한계
* **생성 길이 제약**: 현재는 주로 10초 내외의 비디오 생성에 최적화되어 있으며, 더 긴 영상 생성 기능은 향후 지원될 예정입니다.
* **입력 지원의 제한**: API를 통한 오디오 참조 업로드 및 장면 확장 기능은 현재 개발 중이며, 비디오 참조 입력(최대 3초)의 처리 능력 역시 지속적으로 개선되고 있는 단계입니다.
* **일관성 유지**: 장면 전환이나 급격한 카메라 팬 이동 시 캐릭터의 일관성을 유지하는 데 일부 한계가 존재합니다.
