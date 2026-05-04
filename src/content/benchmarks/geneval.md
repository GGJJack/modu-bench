---
benchmarkId: geneval
domain: image-gen
status: published
updated: 2026-05-04
sources:
  - https://arxiv.org/abs/2310.11513
paperUrl: https://arxiv.org/abs/2310.11513
highlights:
  - "객체 중심(Object-Focused)의 텍스트-이미지 정합성 평가 프레임워크"
  - "객체 동시 등장, 위치, 개수, 색상 등 구성적(compositional) 속성 평가"
---

# GenEval

## 개요
GenEval은 텍스트-이미지 정합성을 세밀하게 평가하기 위한 객체 중심(Object-Focused)의 프레임워크입니다. FID나 CLIPScore와 같은 전체적인 이미지 품질 지표의 한계를 보완하여, 모델이 복잡한 프롬프트 내의 구성적 속성(compositionality)을 얼마나 잘 반영하는지 측정합니다.

## 평가 방법
객체의 동시 등장(co-occurrence), 위치(position), 개수(count), 색상(color) 등 다양한 구성적 속성을 평가합니다. 최신 객체 탐지(object detection) 모델을 활용해 생성된 이미지 내의 객체와 속성을 추출하고, 이것이 주어진 텍스트 프롬프트와 일치하는지 자동화된 파이프라인을 통해 검증합니다. 평가 결과는 프롬프트 속성을 정확하게 반영한 비율(%)로 산출됩니다.
