---
benchmarkId: mt-bench
domain: llm
status: published
updated: 2026-04-30
sources:
  - https://arxiv.org/abs/2306.05685
  - https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge
  - https://lmsys.org/blog/2023-06-22-leaderboard/
organization: lmsys
paperUrl: https://arxiv.org/abs/2306.05685
highlights:
  - "GPT-4를 심판으로 활용하는 멀티턴 평가"
  - "80개의 개방형 질문으로 구성된 챌린징 데이터셋"
  - "인간의 선호도와 80% 이상의 일치율 확인"
---

# MT-Bench

## 개요
MT-Bench는 챗봇 어시스턴트의 품질을 평가하기 위해 설계된 멀티턴 개방형 질문 세트입니다. GPT-4와 같은 강력한 대규모 언어 모델(LLM)을 심판(LLM-as-a-judge)으로 활용하여 다른 모델의 답변 품질을 자동 평가하는 방식을 제안합니다. [1]

## 평가 방법
총 80개의 다양한 카테고리(예: 추론, 코딩, 수학 등)에 대한 개방형 질문으로 구성되어 있으며, 각 질문에 대해 챗봇이 생성한 응답을 1점에서 10점 사이의 점수로 평가합니다. GPT-4 심판은 개별 답변에 점수를 매기는 단일 답변 채점(single-answer grading) 방식 또는 두 모델의 답변을 비교하여 승패를 결정하는 쌍별 비교(pairwise comparison) 방식을 모두 지원합니다. [1]

## 인간 선호도와의 일치
연구진은 Chatbot Arena와 같은 크라우드소싱 플랫폼에서 수집한 3만 건 이상의 대화 및 인간 선호도 데이터와 3천 건의 전문가 투표를 바탕으로 분석을 진행했습니다. 그 결과, GPT-4 심판의 평가는 인간이 평가한 결과와 80% 이상의 높은 일치율을 보였습니다. 이는 인간들 사이의 의견 일치 수준과 맞먹는 수치입니다. [1]

## 데이터셋 및 코드
MT-Bench 데이터 세트, 모델 답변, GPT-4의 평가 결과 및 인간의 주석 데이터는 모두 오픈소스로 공개되어 있으며, 평가는 FastChat 라이브러리의 `llm_judge` 패키지를 통해 실행할 수 있습니다. [1][2]

---
출처:
[1] https://arxiv.org/abs/2306.05685
[2] https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge
