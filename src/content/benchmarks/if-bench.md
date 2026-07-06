---
benchmarkId: if-bench
domain: llm
status: published
updated: 2026-07-06
sources:
  - https://arxiv.org/abs/2311.07911
  - https://github.com/google-research/google-research/tree/master/instruction_following_eval
organization: google-research
paperUrl: https://arxiv.org/abs/2311.07911
highlights:
  - "대형 언어 모델의 지시문 준수 능력 평가"
  - "객관적으로 검증 가능한 25가지 유형의 지시문 포함"
---

# IFBench

## 개요
IFBench(Instruction-Following Evaluation, IFEval)는 대형 언어 모델(LLM)이 자연어 지시문을 얼마나 잘 따르는지 객관적으로 평가하기 위한 벤치마크이다. 기존의 비용이 많이 들고 재현성이 떨어지는 인간 평가나, 평가자 LLM의 한계 및 편향성을 가질 수 있는 자동 평가 모델의 단점을 극복하기 위해 설계되었다.

## 평가 방법
"400단어 이상으로 작성하시오" 또는 "AI라는 키워드를 최소 3번 언급하시오"와 같이 명확하게 검증 가능한 25가지 유형의 지시문을 식별하고, 하나 이상의 검증 가능한 지시문이 포함된 약 500개의 프롬프트를 구성하여 모델의 지시문 준수 여부를 객관적으로 평가한다.

## 데이터 제공
이 벤치마크에 사용되는 평가용 프롬프트 및 관련 코드 데이터는 연구팀의 공식 GitHub 저장소(google-research)를 통해 공개되어 있어 누구나 쉽게 재현하고 평가에 활용할 수 있다.
