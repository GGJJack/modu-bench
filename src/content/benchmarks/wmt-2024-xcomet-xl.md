---
benchmarkId: wmt-2024-xcomet-xl
domain: llm
status: published
updated: 2026-07-08
organization: wmt
sources:
  - https://huggingface.co/datasets/wmt/wmt24
  - https://statmt.org/wmt24/translation-task.html
highlights:
  - "다양한 도메인과 모달리티(오디오/ASR 포함)의 일반 번역 평가"
  - "X-to-Y (비영어권 간 번역) 등 다국어 지원 집중"
  - "문단 단위(Paragraph-level) 번역 품질 테스트"
---

# WMT 2024 General Translation (XCOMET-XL)

## 개요
WMT 2024(Ninth Conference on Machine Translation)의 '일반 기계 번역(General Machine Translation)' 태스크는 최신 기계 번역 시스템이 다양한 도메인과 언어 쌍에서 보여주는 번역 능력을 포괄적으로 평가하기 위한 벤치마크입니다. 예전의 뉴스 번역(News translation) 태스크가 확장된 형태로, 단순한 텍스트를 넘어 음성(Audio/ASR)과 같은 모달리티를 포함한 다방면의 능력을 검증하며, 고품질 평가 메트릭인 XCOMET-XL 모델을 통해 기계적 평가 점수를 산출합니다.

## 평가 방법
평가는 영어를 포함하는 언어 쌍뿐만 아니라 체코어-우크라이나어, 일본어-중국어 등 비영어권 언어 간(X-to-Y) 번역 능력을 광범위하게 테스트합니다. 모델은 문장 단위가 아닌 문단 단위(Paragraph-level)로 제공되는 텍스트를 번역해야 하며, 영어를 타겟으로 하는 일부 데이터 세트에서는 음성 데이터의 자동 음성 인식(ASR) 전사 텍스트가 포함되어 구어체나 대화체 번역 능력도 함께 측정됩니다.

## 특징
단순히 번역의 정확도뿐만 아니라 언어 간의 어순 차이, 형태론적 복잡성 등 다양한 언어학적 과제를 모델이 어떻게 해결하는지를 확인합니다. 오픈소스 모델과 상용 모델 모두가 동일한 문단 단위 환경에서 평가받으며, 이 평가 결과는 이후 기계 번역 연구의 기준 지표로 널리 활용됩니다.
