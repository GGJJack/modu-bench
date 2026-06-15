---
modelId: voxtral-mini-transcribe-realtime
domain: multimodal
status: published
updated: 2026-06-15
sources:
  - https://mistral.ai/news/voxtral-transcribe-2/
  - https://huggingface.co/mistralai/Voxtral-Mini-4B-Realtime-2602
  - https://docs.mistral.ai/models/voxtral-mini-transcribe-realtime-26-02
features:
  audioInput: true
  audioOutput: false
  realtime: true
highlights:
  - "Apache 2.0 라이선스의 오픈 가중치 실시간 STT 모델"
  - "최저 200ms 미만의 지연시간(Latency) 지원"
  - "4B 파라미터 규모로 에지 디바이스 실행 가능"
relatedOrganization: mistral-ai
---

# Voxtral Realtime 소개

## 개요
Voxtral Realtime(공식 명칭 Voxtral Mini Transcribe Realtime)은 Mistral AI가 2026년 2월 4일에 공개한 실시간 스트리밍 전용 음성 인식(STT) 모델입니다. 기존의 오프라인 모델을 잘게 쪼개어 처리하는 방식이 아닌, 오디오 데이터가 도착하는 즉시 처리하는 고유한 스트리밍 아키텍처를 채택했습니다. 특히 Apache 2.0 라이선스로 공개되어 상업적 이용과 로컬 환경 배포가 자유로운 것이 큰 장점입니다.

## 기술 특징
이 모델은 4B 파라미터 규모로 설계되어 스마트폰이나 노트북과 같은 에지 디바이스에서도 효율적으로 작동합니다. 가장 큰 특징은 **가변 지연시간(Configurable Latency)**으로, 사용 환경에 따라 지연시간을 200ms 미만까지 낮출 수 있어 실시간 대화형 AI 시스템에 최적입니다. 지연시간을 2.4초로 설정할 경우 배치 모델인 Voxtral Mini Transcribe 2에 근접하는 정확도를 보여주며, 480ms 수준에서도 높은 정확도를 유지합니다. 한국어를 포함한 13개 언어를 기본 지원하며, 노이즈가 많은 환경에서도 안정적인 성능을 발휘합니다.

## 사용 사례
Voxtral Realtime은 실시간성이 중요한 모든 음성 인터페이스에 활용됩니다. 대표적으로 대화형 AI 에이전트, 실시간 자막 생성, 다국어 라이브 방송 더빙 보조 등에 사용됩니다. 특히 오픈 가중치 모델이기 때문에 데이터 보안이 중요한 기업 내부용 실시간 회의 지원 도구나 오프라인 상태에서 작동해야 하는 임베디드 기기의 음성 명령 인식 엔진으로도 강력한 경쟁력을 가집니다.

## 한계
실시간 처리에 특화된 만큼, 긴 오디오 파일을 한꺼번에 처리하는 배치 작업에서는 배치 전용 모델보다 처리 효율이 낮을 수 있습니다. 또한 매우 짧은 지연시간을 설정할 경우(예: 200ms 미만), 문맥 파악 능력이 다소 감소하여 지연시간이 긴 설정에 비해 단어 오류율(WER)이 소폭 상승할 수 있습니다. 배치 모델과 마찬가지로 화자가 동시에 말을 하는 복잡한 오디오 환경에서의 완벽한 분리에는 한계가 있습니다.
