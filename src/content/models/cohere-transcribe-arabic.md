---
modelId: cohere-transcribe-arabic
domain: stt
status: published
updated: 2026-07-11
sources:
  - https://cohere.com/blog/transcribe-arabic
  - https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026
  - https://docs.cohere.com/docs/models
features:
  toolUse: false
  vision: false
highlights:
  - "오픈 소스 모델 중 가장 정교한 아랍어 전사 정확도 구현"
  - "30여 개 이상의 아랍어 방언 및 아랍어-영어 코드 스위칭 완벽 지원"
  - "RTFx 525를 달성한 고성능 추론 최적화 및 소비자 하드웨어 구동 가능"
relatedOrganization: cohere
---

# Cohere Transcribe Arabic 소개

## 개요
Cohere Transcribe Arabic은 2026년 7월 7일 코히어(Cohere)가 발표한 오픈 소스(Apache 2.0) 아랍어 특화 음성 인식(ASR) 모델입니다. 3억 명 이상의 아랍어 사용자들이 사용하는 30여 개 이상의 방언과 비즈니스 환경에서 빈번하게 발생하는 아랍어-영어 혼용(Code-switching)을 정확하게 처리하기 위해 개발되었습니다. 기존의 범용 모델들이 아랍어 방언 처리에 한계를 보였던 것과 달리, 실질적인 비즈니스 및 개발 환경에 최적화된 성능을 제공합니다.

## 기술 특징
Cohere Transcribe Arabic은 코히어가 2026년 초에 발표한 2B 파라미터 규모의 프런티어 ASR 모델을 기반으로 하며, 방대한 아랍어 방언 데이터와 전문 용어, 코드 스위칭 시나리오를 바탕으로 추가 학습되었습니다.

주요 기술적 성과는 다음과 같습니다:
- **독보적인 정확도**: Hugging Face 아랍어 ASR 리더보드에서 평균 단어 오류율(WER) 25.87을 기록하며, Meta의 OmniASR(28.32)이나 OpenAI의 Whisper Large V3(36.86)를 제치고 1위를 차지했습니다.
- **방언 충실도**: 현대 표준 아랍어(MSA)뿐만 아니라 이집트, 걸프, 레반트, 마그레브 등 지역별 방언의 미묘한 차이를 보존하며 전사합니다.
- **추론 최적화**: vLLM을 활용하여 고성능 서빙이 가능하도록 최적화되었으며, RTFx(Real-Time Factor multiple) 점수 525를 기록했습니다. 이는 Whisper Large V3(146) 대비 약 3.6배 빠른 속도로, 대규모 동시 요청 처리에 적합합니다.

## 주요 활용 사례
엔터프라이즈 환경에서의 회의록 작성, 고객 상담 데이터 분석, 미디어 콘텐츠 자막 생성 등 아랍어권 비즈니스 전반에서 활용될 수 있습니다. 특히 "annual leave"나 "HRIS"와 같은 업무용 영어 용어가 섞인 대화도 맥락에 맞게 정확히 잡아내므로, 다국적 기업이나 기술 기반 스타트업의 업무 자동화에 강력한 도구가 됩니다. 또한 Apache 2.0 라이선스 하에 소비자용 하드웨어에서도 독립적으로 구동 가능하므로 데이터 주권(Sovereignty) 확보가 필요한 정부 및 공공 기관에도 적합합니다.

## 한계
Cohere Transcribe Arabic은 아랍어 음성 인식에 특화된 모델로, 텍스트 생성(LLM)이나 이미지 이해(Vision) 기능은 포함되어 있지 않습니다. 또한 매우 소수의 인구가 사용하는 희귀 방언이나 극심한 소음 환경에서는 전사 품질이 저하될 수 있습니다. 최상의 성능을 위해서는 고품질 마이크를 사용하고 배경 소음을 최소화하는 것이 권장됩니다.
