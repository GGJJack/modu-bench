---
modelId: llm-jp-3-3.7b
domain: llm
status: published
updated: 2026-08-18
sources:
  - https://huggingface.co/llm-jp/llm-jp-3-3.7b
  - https://llm-jp.nii.ac.jp/
  - https://github.com/llm-jp/llm-jp-3
features:
  toolUse: false
  vision: false
highlights:
  - "일본 국립정보학연구소(NII) 산하 LLM-jp 연구개발센터 제작"
  - "총 2.1T 토큰 사전학습 (일본어 Common Crawl, WARP, Wikipedia 등)"
  - "Unigram byte-fallback 기반 llm-jp-tokenizer v3.0 토크나이저 적용"
relatedOrganization: llm-jp
---

# LLM-jp-3 3.7B 소개

## 개요
LLM-jp-3 3.7B는 일본 국립정보학연구소(NII)의 대규모 언어 모델 연구개발센터(Research and Development Center for Large Language Models)가 개발하여 2024년 10월 23일에 공개한 오픈소스 한국어/일본어/영어 지원 대규언어모델의 3.7B 파라미터 베이스 모델이다. 이 모델은 일본 학술 및 산업계 공동 연구체인 LLM-jp 프로젝트의 3세대 모델 시리즈에 속하며, 총 2.1조(2.1T) 토큰으로 사전학습을 진행하여 우수한 일본어 표현력과 기초 언어 이해 능력을 제공하도록 설계되었다.

## 기술 특징
LLM-jp-3 3.7B는 28개 레이어, 히든 사이즈 3,072, 어텐션 헤드 24개 구조로 총 3,171,068,928개의 비임베딩 파라미터와 611,844,096개의 임베딩 파라미터를 갖춘 Transformer 기반 오토레그레시브 언어모델이다. 사전학습 데이터셋은 일본어 Wikipedia, Common Crawl, WARP(웹/PDF/HTML), Kaken 학술 DB 약 1조 토큰과 영어 Dolma/Wikipedia 8,800억 토큰, The Stack 코드 데이터 1,141억 토큰, 기타 학술자료로 구성되어 있다. 토크나이저는 Unigram byte-fallback 기반의 `llm-jp-tokenizer v3.0`을 채택하여 일본어 어휘 표현 효율성을 향상시켰다.

## 사용 사례 및 평가
LLM-jp-3 3.7B는 고성능 일본어 텍스트 생성, 학술/웹 텍스트 분석, 그리고 다운스트림 인스트럭션 튜닝을 위한 고품질 베이스 모델로 활용된다. 일본어 대화 및 태스크 평가 벤치마크인 `llm-jp-eval (v1.3.1)` 평균 점수에서 0.4231을 기록하였으며, 인스트럭션 파인튜닝 버전인 `llm-jp-3-3.7b-instruct`의 베이스로 작동하여 Japanese MT Bench 등에서 우수한 일본어 응답 성능을 보였다.

## 한계
이 모델은 안전성 및 인간 의도 정렬(Alignment) 조율이 거치지 않은 사전학습(Pre-trained) 베이스 모델이므로, 대화형 가상 비서나 프로덕션 환경에 바로 투입하기 전에 인스트럭션 튜닝 및 부적절한 출력 방지를 위한 추가적인 정렬 작업이 필요하다.
