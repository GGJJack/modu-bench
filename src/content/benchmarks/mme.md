---
benchmarkId: mme
domain: llm
status: published
updated: 2026-08-28
sources:
  - https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models
  - https://neurips.cc/virtual/2025/poster/121773
  - https://www.emergentmind.com/topics/mme-benchmark
organization: mme-authors
paperUrl: https://arxiv.org/abs/2306.13394
highlights:
  - "14개의 하위 과제로 구성된 포괄적인 다중 모달 모델 평가"
  - "수동으로 설계된 명령어-답변 쌍을 통한 데이터 유출(Data Leakage) 방지"
  - "인식(Perception)과 인지(Cognition) 능력을 동시에 측정"
---

# MME (다중 모달 평가)

## 개요
MME(A Comprehensive Evaluation Benchmark for Multimodal Large Language Models)는 다중 모달 대규모 언어 모델(MLLM)의 성능을 종합적으로 평가하기 위해 설계된 벤치마크입니다. 모델이 이미지 등의 시각 정보를 바탕으로 텍스트를 생성하는 능력 등 다양한 '창발적 능력(emergent abilities)'을 보여주고 있지만, 이를 정량적이고 객관적으로 측정할 수 있는 수단이 부족하다는 문제의식에서 출발했습니다.

## 평가 방법
평가는 총 14개의 하위 과제(subtasks)로 구성되어 있으며, 크게 '인식(Perception)'과 '인지(Cognition)' 두 가지 영역의 능력을 측정합니다. 기존 공개 데이터셋을 그대로 사용할 경우 모델이 학습 과정에서 정답을 미리 봤을(data leakage) 위험이 있기 때문에, MME 벤치마크의 평가용 명령어와 답변 쌍은 모두 연구진이 수동으로 직접 설계했습니다. 간결한 지시문 설계를 통해 프롬프트 엔지니어링에 따른 결과 변동을 줄이고, 여러 모델들을 공정하게 비교할 수 있게 한 것이 특징입니다.

## 의의 및 한계
최근 발표된 논문에 따르면 30개 이상의 최첨단 MLLM이 이 벤치마크를 통해 평가되었으며, 기존 모델들이 여전히 개선할 여지가 많음을 시사하고 있습니다. 이를 통해 향후 모델 최적화의 방향성을 제시하는 데 기여하고 있습니다. 다만, 지속적으로 발전하는 모델들의 모든 역량을 이 14개 과제만으로 완벽히 대변하기에는 한계가 있을 수 있으며, 다른 벤치마크(예: MMMU 등)와 교차 검증을 통해 종합적으로 모델을 평가하는 것이 권장됩니다.
