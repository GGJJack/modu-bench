---
modelId: solar-10.7b-instruct
domain: llm
status: published
updated: 2026-10-03
sources:
  - https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0
  - https://arxiv.org/abs/2312.15166
  - https://www.upstage.ai/
features:
  toolUse: true
  vision: false
highlights:
  - "DUS(Depth-Up Scaling) 기술로 Llama 2 7B 기반 레이어를 확장하여 구축한 10.7B 경량 인스트럭션 모델"
  - "Hugging Face Open LLM Leaderboard에서 공개 당시 최고 수준의 튜닝 성능 기록"
  - "한국어 및 영어 지시 이행 능력이 뛰어나 온프레미스 및 엔터프라이즈 RAG 구축에 적합"
relatedOrganization: upstage
---

# Solar 10.7B Instruct 소개

## 개요
Solar 10.7B Instruct(솔라 10.7B 인스트럭트)는 대한민국 인공지능 기업 업스테이지(Upstage)가 2023년 12월 공개한 경량 매개변수 기반 고성능 지시 이행 언어 모델입니다. 107억 개(10.7B)의 파라미터를 갖춘 이 모델은 미세 조정 및 인스트럭션 튜닝 과정을 거쳐 사용자의 다양한 질의와 복잡한 지시 사항을 정밀하게 수행하도록 최적화되었습니다. 소형 체급임에도 불구하고 대형 언어 모델 수준의 지능적 성능을 보여주며 오픈소스 LLM 생태계에서 주목받는 독자 모델로 자리매김했습니다.

## 기술 특징
Solar 10.7B Instruct의 핵심 기술적 기반은 업스테이지가 고안한 Depth-Up Scaling(DUS) 아키텍처 확장 기법입니다. DUS 기법은 기존 7B 체급 사전 학습 모델의 레이어를 복제 및 재구성하여 성능 저하 없이 모델 용량을 10.7B로 업스케일링하는 방법입니다. 이를 통해 처음부터 모델 전체를 사전 학습하는 대규모 연산 비용을 아끼면서도 높은 지능 밀도를 확보했습니다. 또한 정밀한 지시 이행(Instruction Following) 및 정렬(Alignment) 후처리를 거쳐 Hugging Face Open LLM Leaderboard에서 상위권 성능을 기록했습니다.

## 사용 사례
Solar 10.7B Instruct는 매개변수 크기가 비교적 작고 연산 효율성이 뛰어나 온프레미스(On-premise) 환경 및 엔터프라이즈 사내 인프라 구축에 널리 활용됩니다. 대표적으로 사내 문서 검색 및 질의응답을 위한 RAG(Retrieval-Augmented Generation) 시스템, 고객 응대 가상 비서, 문서 요약 및 분류 작업 등에 적합합니다. 특히 한국어와 영어 텍스트 처리 능력이 뛰어나 보안이 중요한 공공 및 금융 분야의 자체 LLM 도입에 유용하게 쓰입니다.

## 한계
10.7B 매개변수 체급 한계로 인해 극도로 복잡한 다단계 추론이나 대규모 코드베이스 분석 작업에서는 초대형 플래그십 모델 대비 한계가 존재합니다. 또한 텍스트 전용 언어 모델로서 이미지나 음성 등 멀티모달 입력 처리 기능은 지원하지 않으며, 기본 컨텍스트 윈도우 크기가 4,096 토큰으로 제한되어 있어 매우 긴 단일 문서를 한 번에 처리할 때는 입력 분할 처리가 필요합니다.
