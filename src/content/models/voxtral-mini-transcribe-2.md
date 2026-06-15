---
modelId: voxtral-mini-transcribe-2
domain: multimodal
status: published
updated: 2026-06-15
sources:
  - https://mistral.ai/news/voxtral-transcribe-2/
  - https://docs.mistral.ai/models/voxtral-mini-transcribe-26-02
  - https://console.mistral.ai/build/audio/speech-to-text
features:
  audioInput: true
  audioOutput: false
  realtime: false
highlights:
  - "Mistral의 차세대 배치용 음성-텍스트(STT) 모델"
  - "화자 분리(Diarization), 단어 단위 타임스탬프 지원"
  - "13개 언어 지원 및 높은 노이즈 내성"
relatedOrganization: mistral-ai
---

# Voxtral Mini Transcribe 2 소개

## 개요
Voxtral Mini Transcribe 2는 Mistral AI가 2026년 2월 4일에 발표한 차세대 배치형 음성 인식(STT) 모델입니다. 이전 세대 대비 비약적인 정확도 향상과 비용 효율성을 달성하였으며, 특히 13개 주요 언어에 대해 업계 최고 수준의 단어 오류율(WER)을 기록했습니다. 이 모델은 대규모 오디오 데이터를 빠르고 정확하게 텍스트로 변환해야 하는 비즈니스 워크플로우에 최적화되어 있습니다.

## 기술 특징
이 모델은 배치 처리에 특화되어 최대 3시간 분량의 오디오를 단일 요청으로 처리할 수 있습니다. 주요 기술적 특징으로는 정교한 **화자 분리(Speaker Diarization)** 기능을 통해 여러 명의 화자가 대화하는 상황에서도 각 발화자를 정확히 구분하며, 단어 단위의 타임스탬프를 제공하여 자막 제작이나 오디오 검색에 활용할 수 있습니다. 또한 **컨텍스트 바이어싱(Context Biasing)** 기능을 통해 고유 명사나 전문 용어의 인식률을 높일 수 있는 기능을 갖추고 있습니다. Mistral AI의 벤치마크에 따르면 FLEURS 데이터셋에서 약 4%의 WER을 기록하며 경쟁 모델 대비 우수한 성능을 입증했습니다.

## 사용 사례
Voxtral Mini Transcribe 2는 회의록 자동 작성, 인터뷰 분석, 고객 센터의 녹취록 생성 등 정교한 사후 처리가 필요한 도메인에서 널리 사용됩니다. 특히 화자 분리 기능은 다자간 회의에서 누가 어떤 발언을 했는지 기록하는 데 유용하며, 저렴한 비용($0.003/min) 덕분에 대량의 미디어 자산을 아카이빙하고 인덱싱하는 용도로 적합합니다.

## 한계
이 모델은 배치 처리에 최적화되어 있어 실시간 스트리밍 통역이나 즉각적인 반응이 필요한 서비스에는 적합하지 않으며, 해당 용도로는 Voxtral Realtime 모델이 권장됩니다. 또한 여러 화자가 동시에 말을 하는 겹침(Overlapping) 상황에서는 모든 화자를 개별적으로 분리하기보다 주된 화자 한 명의 발화만을 인식하는 경향이 있습니다. 컨텍스트 바이어싱 기능은 현재 영어에 최적화되어 있으며 다른 언어에서는 실험적인 수준입니다.
