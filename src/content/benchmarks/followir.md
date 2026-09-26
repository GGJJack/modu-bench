---
benchmarkId: followir
domain: llm
status: draft
updated: 2026-09-26
sources:
  - https://arxiv.org/abs/2403.15246
organization: johns-hopkins-university
paperUrl: https://arxiv.org/abs/2403.15246
highlights:
  - "Evaluating and Teaching Information Retrieval Models to Follow Instructions"
---

# FollowIR

## 개요
최신 대규모 언어 모델(LLM)들은 사용자의 다양하고 복잡한 명령(instruction)을 효과적으로 수행할 수 있지만, 이를 기반으로 하는 기존의 정보 검색(Information Retrieval, IR) 모델들은 검색 쿼리와 함께 상세한 지시사항을 처리하는 데 한계를 보입니다. FollowIR은 이러한 정보 검색 시스템이 실제 환경에서 주어지는 복잡한 명령어를 얼마나 잘 이해하고 따르는지 평가하고 학습시키기 위한 데이터셋 및 벤치마크입니다.

## 평가 방법
이 벤치마크는 전문 평가자들이 검색 시스템을 테스트하기 위해 작성했던 세부 지시사항(narratives)을 활용하여 구성되었습니다. TREC(Text REtrieval Conference)의 공유 태스크에서 큐레이션된 3개의 컬렉션을 바탕으로, 각 쿼리당 수백에서 수천 개의 라벨링된 문서를 제공합니다. 이를 통해 모델이 새로운 쌍별(pairwise) 평가 프레임워크를 기반으로 검색 명령을 얼마나 정확히 따르는지 객관적으로 측정할 수 있습니다.

## 한계 및 성과
평가 결과, 기존 검색 모델들은 지시사항을 온전히 이해하기보다는 단순 키워드 매칭 위주로 동작하여 장문의 정보 요구를 충족하지 못하는 것으로 나타났습니다. 반면 연구진이 새롭게 훈련한 FollowIR-7B 모델은 제공된 학습 세트로 미세 조정(fine-tuning)을 거친 후, 복잡한 명령어를 이해하고 처리하는 능력에서 유의미한 성능 향상을 입증하며 IR 모델의 발전 가능성을 보여주었습니다.
