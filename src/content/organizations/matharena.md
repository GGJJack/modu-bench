---
orgId: matharena
name: MathArena
status: published
updated: 2026-07-01
sources:
  - https://matharena.ai/
  - https://arxiv.org/abs/2605.00674
---

# MathArena

MathArena는 LLM의 추론 및 일반화 능력을 엄밀하게 평가하기 위한 플랫폼으로, 모델이 학습 중에 보지 못한 최신 수학 경시 대회 및 올림피아드 문제를 활용하여 오염되지 않은(uncontaminated) 벤치마크를 제공합니다.

ETH Zurich의 SRI Lab과 INSAIT(Institute for Computer Science, Artificial Intelligence and Technology) 연구진에 의해 개발되었으며, 단순히 정답률뿐만 아니라 IRT(Item Response Theory) 모델을 활용한 기대 성능과 비용 효율성을 함께 분석하는 것이 특징입니다.

## 주요 특징

- **데이터 오염 방지**: 모델 학습 데이터에 포함되지 않은 최신 수학 문제를 지속적으로 추가하여 평가합니다.
- **다양한 난이도**: Kangaroo부터 AIME, IMO, Putnam 등 다양한 수준의 수학 문제를 포괄합니다.
- **IRT 기반 분석**: 문항 반응 이론을 적용하여 모델의 고유 능력($\theta$)과 문항의 난이도($\beta$) 및 변별도($\alpha$)를 종합적으로 고려한 기대 성능을 산출합니다.
- **비용 효율성 측정**: 성능 대비 API 호출 비용을 분석하여 실용적인 가이드를 제공합니다.
