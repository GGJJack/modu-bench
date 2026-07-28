---
benchmarkId: wer-tts
domain: tts
status: published
updated: 2026-07-28
sources:
  - https://arxiv.org/abs/2305.07243
paperUrl: https://arxiv.org/abs/2305.07243
---

# WER (TTS)

## 개요
생성 음성을 STT(Speech-to-Text)로 전사한 후 원본 텍스트와 비교한 단어 오류율(Word Error Rate)을 측정하는 벤치마크 지표입니다. 음성 합성(TTS) 모델이 텍스트를 얼마나 정확하게 발음하는지, 즉 명료도(intelligibility)를 평가하는 데 사용됩니다. 이 논문에서는 자기회귀 트랜스포머와 DDPM을 음성 합성에 적용한 TorToise 시스템의 성능을 평가하는 맥락에서 활용되었습니다.

## 평가 방법
값이 낮을수록 단어 오류율이 적어 모델 성능이 우수함을 의미합니다.
