---
modelId: phi-4-multimodal-instruct
domain: llm
status: published
updated: 2026-06-13
sources:
  - https://huggingface.co/microsoft/phi-4-multimodal-instruct
  - https://arxiv.org/abs/2503.01743
  - https://azure.microsoft.com/en-us/blog/introducing-phi-4-microsofts-newest-small-language-model-now-available-on-azure-ai-models-as-a-service/
features:
  toolUse: true
  vision: true
  audio: true
  multilingual: true
highlights:
  - "텍스트, 이미지, 오디오를 단일 네트워크에서 처리하는 5.6B 경량 멀티모달 모델"
  - "WhisperV3를 능가하는 강력한 음성 인식(ASR) 및 번역 성능"
  - "128K 토큰의 긴 컨텍스트와 도구 사용(Tool Use) 능력 확보"
relatedOrganization: microsoft
---

# Phi-4 Multimodal Instruct 소개

## 개요
Phi-4 Multimodal Instruct는 2025년 2월 19일 Microsoft가 발표한 5.6B 파라미터 규모의 경량 멀티모달 오픈 소스 모델입니다. 이 모델은 기존 Phi-3.5 및 4.0 시리즈의 연구 성과와 데이터셋을 계승하며, 텍스트, 이미지, 오디오 입력을 동시에 처리하여 텍스트 응답을 생성하도록 설계되었습니다. 특히 '단일 신경망' 구조를 통해 별도의 외부 인코더 연결 없이 여러 모달리티의 정보를 통합적으로 이해하고 정렬할 수 있는 것이 특징입니다.

## 기술 특징
이 모델은 Phi-4-Mini-Instruct를 백본(Backbone)으로 사용하며, 고도의 비전 및 음성 인코더와 어댑터가 통합된 아키텍처를 가집니다. 128K 토큰의 컨텍스트 윈도우를 지원하여 긴 오디오 파일이나 여러 장의 이미지를 포함한 복잡한 프롬프트를 처리할 수 있습니다. 기술적 성능 면에서는 음성 인식(ASR) 및 번역 부문에서 전용 모델인 WhisperV3와 SeamlessM4T-v2-Large를 능가하는 결과를 보여주었으며, 비전 부문에서도 차트/테이블 이해 및 다중 이미지 비교에서 동급 소형 모델 중 최상위권의 성능을 입증했습니다.

## 사용 사례
Phi-4 Multimodal Instruct는 리소스가 제한된 환경이나 지연 시간이 중요한 시나리오에서 범용 AI 시스템의 빌딩 블록으로 활용됩니다. 주요 사용 사례로는 복잡한 이미지 내 텍스트 인식(OCR), 시각적 수학 문제 풀이, 오디오 요약 및 질의응답(Audio QA), 그리고 여러 이미지를 동시에 분석하여 변화를 파악하는 작업 등이 있습니다. 또한 한국어를 포함한 24개 언어의 텍스트와 8개 언어의 오디오를 지원하여 글로벌 서비스 구축에도 적합합니다.

## 한계
5.6B 규모의 소형 모델인 만큼, 아주 방대한 지식이 필요한 작업이나 극도로 복잡한 추론 작업에서는 대형 모델에 비해 성능 격차가 존재합니다. 음성 질의응답(Speech QA) 작업에서는 여전히 Gemini 1.5 Flash나 GPT-4o-Realtime과 같은 폐쇄형 모델에 비해 성능 차이가 관찰되며, 비전 및 오디오 처리의 정확도는 입력 데이터의 품질이나 조명 조건, 배경 소음 등에 영향을 받을 수 있습니다. 또한 Microsoft는 모델 카드를 통해 고위험 시나리오에서의 사용 전 철저한 안전성 검증을 권고하고 있습니다.
