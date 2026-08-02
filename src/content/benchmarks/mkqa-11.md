---
benchmarkId: mkqa-11
domain: llm
status: draft
updated: 2026-08-02
sources:
  - https://www.liquid.ai/blog/lfm2-5-retrievers
highlights:
  - "Cross-lingual open-domain QA dataset"
  - "11개 지원 언어 전반에 걸친 교차 언어 검색 성능 평가"
---

# MKQA-11 (Recall@20)

## 개요
MKQA-11은 언어 간 경계를 넘나드는 오픈 도메인 질문 답변(QA) 능력을 평가하기 위한 데이터셋입니다.

## 평가 방법
언어 간의 정보 검색 및 답변 추출 능력을 Recall@20 지표를 통해 측정합니다.

## 활용 및 의의
11개 지원 언어(ar, de, en, es, fr, it, ja, ko, no, pt, sv) 전반에 걸쳐 교차 언어 오픈 도메인 QA 능력을 평가하여 모델이 언어 경계를 넘어 관련 문서를 검색할 수 있는지(cross-lingual open-domain QA)를 테스트합니다.
