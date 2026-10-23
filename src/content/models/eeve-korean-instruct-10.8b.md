---
modelId: eeve-korean-instruct-10.8b
domain: llm
status: published
updated: 2026-10-23
sources:
  - https://huggingface.co/yanolja/EEVE-Korean-Instruct-10.8B-v1.0
  - https://github.com/yanolja/EEVE-Korean
  - https://arxiv.org/abs/2402.14714
features:
  toolUse: false
  vision: false
highlights:
  - "EEVE(Efficient and Effective Vocabulary Expansion) 기법으로 한국어 토크나이저 어휘 사전 확장"
  - "Upstage SOLAR 10.7B 베이스 모델에 기반하여 효율적인 추가 학습 진행"
  - "한국어 텍스트 토큰화 효율 및 문맥 이해 능력 향상"
relatedOrganization: yanolja
---

# EEVE-Korean-Instruct-10.8B 소개

## 개요
EEVE-Korean-Instruct-10.8B(이비 코리안 인스트럭트 10.8B)는 야놀자(Yanolja) AI 연구팀이 2024년 3월 공개한 한국어 특화 지시 이행 오픈웨이트 언어 모델입니다. 야놀자가 제안한 EEVE(Efficient and Effective Vocabulary Expansion) 기법을 기반으로, 기존 영문 중심 대형 언어 모델의 토크나이저 어휘 사전을 한국어 단어로 대폭 확장한 후 효율적인 사전 학습 및 지도 미세 조정(SFT)을 수행하였습니다. 108억 개(10.8B) 파라미터 규격으로 제작되어 한국어 자연어 처리 분야에서 뛰어난 성능과 토큰 연산 효율성을 보여줍니다.

## 기술 특징
EEVE 기술의 핵심은 기존 사전 학습 모델의 파라미터를 보존하면서 새로운 한국어 토큰을 효율적으로 내장하는 어휘 확장 메커니즘입니다. 영문 기반 LLM(SOLAR 10.7B 등)은 한국어 문장을 처리할 때 하나의 단어가 수많은 Subword 토큰으로 분할되어 연산 비용과 메모리 소모가 극심한 문제점이 있었습니다. EEVE는 한국어 전용 토크나이저 어휘를 추가하고 임베딩 레이어를 정밀하게 초기화하여 한국어 텍스트 처리 속도를 획기적으로 개선하였으며, 이를 통해 높은 훈련 및 추론 효율을 달성했습니다.

## 사용 사례
EEVE-Korean-Instruct-10.8B는 효율적인 한국어 토큰화 능력 덕분에 단일 GPU 인프라 환경에서 한국어 문서 요약, 질의응답, 대화형 가상 비서 구축에 널리 활용됩니다. 야놀자를 비롯한 다양한 기업과 연구진이 사내 챗봇, 관광/여행 서비스 가이드, 한국어 RAG(Retrieval-Augmented Generation) 검색 보조 엔진 개발에 적극 이용하고 있으며, Open KO-LLM 리더보드에서도 뛰어난 평가를 받았습니다.

## 한계
10.8B 파라미터 체급 특성상 복잡한 고난도 코딩 작업이나 초고난도 다단계 수학적 추론 능력은 최신 초대형 모델에 비해 한계가 존재합니다. 또한 시각이나 음성을 입력받는 멀티모달 기능은 지원하지 않는 텍스트 전용 모델이며, 기본 컨텍스트 윈도우 길이가 4,096 토큰으로 제한되어 초대용량 문서 처리 시 토큰 분할 처리가 필요합니다.
