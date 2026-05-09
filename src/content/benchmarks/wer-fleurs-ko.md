---
benchmarkId: wer-fleurs-ko
domain: stt
status: published
updated: 2026-05-10
sources:
  - https://arxiv.org/abs/2205.12446
organization: google-research
paperUrl: https://arxiv.org/abs/2205.12446
highlights:
  - "102개 언어 음성 데이터셋(FLEURS) 기반 한국어 STT 평가"
  - "10~12시간 분량의 각 언어별 감독 학습 데이터 활용"
---

# WER (FLEURS Korean)

## 개요
FLEURS (Few-shot Learning Evaluation of Universal Representations of Speech)는 102개 언어에 걸친 n-way 병렬 음성 데이터셋으로, 그 중 한국어(Korean) 평가 기준입니다. 각 언어별 약 12시간 분량의 음성 데이터가 포함되어 있으며, 자동 음성 인식(ASR) 등의 벤치마크에 사용됩니다.

## 평가 방법
FLEURS 한국어 테스트셋의 음성에 대해 STT 시스템이 생성한 텍스트의 단어 오류율(WER, Word Error Rate)을 측정하여 평가합니다.
