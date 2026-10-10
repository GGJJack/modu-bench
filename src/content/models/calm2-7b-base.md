---
modelId: calm2-7b-base
domain: llm
status: published
updated: 2026-10-10
sources:
  - https://www.cyberagent.co.jp/
  - https://huggingface.co/cyberagent/calm2-7b-base
  - https://arxiv.org/abs/2302.13971
features:
  toolUse: false
  vision: false
highlights:
  - "7B 파라미터 및 32K 확장 컨텍스트 지원 베이스 모델"
  - "CyberAgent에서 자체 구축한 사전학습(Pre-trained) 일본어 대양 언어 모델"
relatedOrganization: cyberagent
---

# CALM2 7B Base 소개

## 개요
CALM2 7B Base(CyberAgentLM2-7B-Base)는 일본의 대표 IT 기업인 사이버에이전트(CyberAgent)에서 개발하고 공개한 70억(7B) 파라미터 규모의 사전학습(Pre-trained) 기반 Causal Language Model이다. CyberAgentLM 시리즈의 2세대 베이스 모델에 해당한다.

이 모델은 일본어 및 영어 텍스트 자원을 대량 수집하여 처음부터(from scratch) 사전학습되었으며, 파인튜닝이나 인스트럭션 미세조정을 수행하기 전 기초 모델(Foundation model) 역할을 담당한다.

## 기술 특징
CALM2 7B Base는 Causal LM 트랜스포머 아키텍처를 기반으로 설계되었으며, 최대 32,768(32K) 토큰 길이의 장문 컨텍스트 윈도우를 기본 탑재하고 있다. 이를 통해 대용량 문서나 수백 단락의 긴 텍스트 입력 맥락을 안정적으로 처리한다.

HuggingFace Transformers 규격을 준수하며 Apache-2.0 오픈소스 라이선스로 배포되어 연구자 및 개발자가 자체 프라이빗 데이터로 자유롭게 추가 미세조정(SFT, DPO 등)을 수행할 수 있는 높은 확장성을 제공한다.

## 사용 사례
CALM2 7B Base는 특정 도메인(금융, 의료, 법률 등)에 특화된 일본어 LLM을 구축하고자 하는 기업의 기초 사전학습 모델로 널리 쓰인다. 지시 이행 데이터셋이나 대화형 데이터를 결합하여 태스크 특화 인스트럭션 모델로 파인튜닝할 수 있다.

또한 32K의 넓은 컨텍스트 창을 활용하여 장문 문서의 특징 추출, 텍스트 임베딩 모델 개발, 문서 생성 및 분석 연구에 기초 모델로 활용할 수 있다.

## 한계
CALM2 7B Base는 지시 미세조정(Instruction tuning)이나 RLHF 과정이 거쳐지지 않은 순수 베이스 모델이므로 프롬프트 지시에 직접 응답하기보다는 문장 이어쓰기 형태로 작동하는 경향이 있다. 따라서 대화형 챗봇 등에 즉시 적용하려면 미세조정이 필수적이다.

아울러 일본어와 영어 위주의 사전학습 데이터를 사용하였으므로 한국어를 포함한 기타 다국어 텍스트 처리에는 다소 제한이 존재한다.
