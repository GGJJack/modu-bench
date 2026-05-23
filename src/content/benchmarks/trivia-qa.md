---
benchmarkId: trivia-qa
domain: llm
status: published
updated: 2026-05-23
sources:
  - "https://arxiv.org/abs/1705.03551"
  - "http://nlp.cs.washington.edu/triviaqa/"
  - "https://en.wikipedia.org/wiki/University_of_Washington"
organization: university-of-washington
paperUrl: "https://arxiv.org/abs/1705.03551"
highlights:
  - "650K개 이상의 질문-답변-증거 트리플 포함"
  - "위키피디아 및 웹 데이터 기반의 독해 및 상식 평가"
  - "트리비아 애호가들이 작성한 고품질 데이터셋"
---

# TriviaQA

## 개요
TriviaQA는 위키피디아 및 웹 데이터를 기반으로 한 대규모 독해 및 상식 평가 벤치마크이다. 트리비아 애호가들이 작성한 95K개의 질문-답변 쌍과 질문당 평균 6개의 독립적으로 수집된 증거 문서를 포함하여, 총 650K개 이상의 질문-답변-증거 트리플을 제공한다. University of Washington 연구진에 의해 2017년에 발표되었다.

## 평가 방법
비교적 복잡하고 구성적인 질문들을 특징으로 하며, 질문과 정답-증거 문장 간의 구문론적, 어휘적 다양성이 크다. 정답을 찾기 위해 여러 문장을 교차 추론해야 하는 과제를 제시한다. 오픈 도메인 질문 응답(Open-domain QA) 및 기계 독해(Reading Comprehension) 모델의 성능을 평가하는 데 널리 사용된다.

## 점수 해석
주로 정확도(Accuracy) 지표를 사용하여 평가하며, Exact Match (EM) 및 F1 Score를 통해 모델의 예측 답변이 정답과 얼마나 일치하는지를 측정한다. 점수가 높을수록(Higher is Better) 더 복잡한 문맥에서 상식과 독해 능력을 잘 발휘하는 우수한 모델임을 의미한다.
