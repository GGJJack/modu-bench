---
benchmarkId: speaker-similarity
domain: tts
status: published
updated: 2026-08-04
sources:
  - https://arxiv.org/abs/2305.07243
  - https://github.com/neonbjb/tortoise-tts
paperUrl: https://arxiv.org/abs/2305.07243
highlights:
  - "원본 화자와 음성 합성(TTS) 모델이 생성한 음성 간의 유사성 측정"
  - "코사인 유사도(Cosine Similarity)를 기반으로 한 평가"
  - "목소리 복제(Voice Cloning) 성능의 핵심 지표"
---

# Speaker Similarity

## 개요
Speaker Similarity(화자 유사도)는 음성 합성(Text-to-Speech, TTS) 기술, 특히 목소리 복제(Voice Cloning) 작업에서 원본 화자의 목소리와 모델이 생성한 목소리가 얼마나 유사한지를 정량적으로 측정하는 벤치마크 지표입니다. Tortoise TTS와 같은 최신 다중 화자 음성 합성 시스템의 성능을 평가하는 데 널리 사용됩니다.

## 평가 방법
원본 오디오 샘플과 합성된 오디오 샘플의 음향적 특성(음색, 억양 등)을 추출하여 두 오디오 간의 **코사인 유사도(Cosine Similarity)** 를 계산합니다. 주로 스피커 임베딩 모델(예: WavLM, ECAPA-TDNN 등)을 사용하여 오디오의 화자 고유 특성을 벡터 형태로 변환한 뒤 비교를 수행합니다.

## 점수 해석
결과 값은 코사인 유사도에 따라 0에서 1 사이의 범위로 나타나거나 일정 배율로 스케일링된 값을 가질 수 있습니다. 값이 1에 가까울수록(Higher is better) 모델이 생성한 음성이 원본 화자의 목소리와 매우 흡사함을 의미합니다. 반대로 점수가 낮으면 합성된 음성의 음색이 원본과 다르거나 부자연스럽다는 것을 시사합니다.
