---
modelId: exaone-3-5-32b-instruct
domain: llm
status: published
updated: 2026-08-16
sources:
  - https://www.lgresearch.ai/blog/view?seq=507
  - https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Instruct
  - https://github.com/LG-AI-EXAONE/EXAONE-3.5
  - https://arxiv.org/abs/2412.04862
features:
  toolUse: true
  vision: false
highlights:
  - "32B 파라미터 오픈 웨이트 프론티어급 한국어/영어 대화형 언어모델"
  - "32K 컨텍스트 윈도우 및 Long-context 검색/추론 능력"
  - "독자적인 데이터 필터링 및 Alignment 기법 적용"
relatedOrganization: lg-ai-research
---

# EXAONE 3.5 32B Instruct 소개

## 개요
EXAONE 3.5 32B Instruct는 LG AI Research가 2024년 12월 공개한 320억(32B) 파라미터 규모의 오픈 웨이트(Open-weight) 대화형 언어모델이다. 한국어와 영어 모두에서 글로벌 프론티어급 성능을 목표로 개발되었으며, 연구 및 비영리 목적으로 오픈소스로 제공된다. 기존 EXAONE 3.0 대비 한국어 추론, 수학, 코드 작성, 긴 문맥(Long-context) 처리 능력이 대폭 향상되었다.

## 기술 특징
EXAONE 3.5는 고품질의 합성 데이터(Synthetic Data) 생성 및 정교한 데이터 필터링 기술을 바탕으로 사전 학습(Pre-training)되었다. 32,768(32K) 토큰의 긴 컨텍스트 윈도우를 지원하며, RAG(검색 증강 생성) 및 긴 문서 요약 과제에서 뛰어난 정보 회수(Retrieval) 성능을 발휘한다. 또한 Direct Preference Optimization (DPO)와 지도 미세조정(SFT) 기법을 결합하여 인간 선호도에 부합하고 지시 이행 능력이 높다.

## 사용 사례
EXAONE 3.5 32B Instruct는 전문적인 한국어/영어 문서 요약, 복잡한 논리적 추론이 요구되는 Q&A, 데이터 분석, 코딩 보조 시스템 구축 등 다양한 영역에 활용된다. 특히 함수 호출(Tool Use / Function Calling) 기능을 지원하여 외부 API 연동이나 시스템 자동화 에이전트 개발에 적합하다.

## 한계
32B 파라미터 크기로 인해 온디바이스(On-device) 단말기나 저사양 환경에서는 실행이 어려우며, VRAM 메모리 요구량이 높은 편이다. 상업적 이용 시에는 LG AI Research의 EXAONE AI Model License Agreement 1.1 조건 및 별도 승인 절차가 필요하다.
