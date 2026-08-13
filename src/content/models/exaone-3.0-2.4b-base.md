---
modelId: exaone-3.0-2.4b-base
domain: llm
status: published
updated: 2026-08-13
sources:
  - https://huggingface.co/LGAI-Research/EXAONE-3.0-2.4B-Base
  - https://www.lgresearch.ai/models/exaone
  - https://www.lgresearch.ai/blog/view?seq=461
  - https://github.com/LG-AI-Research/EXAONE-3.0
  - https://arxiv.org/abs/2408.03541
features:
  toolUse: false
  vision: false
highlights:
  - "LG AI연구원이 독자 개발한 2.4B 파라미터 규모의 고성능 다국어 사전 학습(Pre-trained) 기저(Base) 모델"
  - "한국어와 영어 중심의 8조 개에 달하는 대규모 고품질 데이터 학습을 통해 강력한 기초 자연어 이해 및 표상력 제공"
  - "GQA(Grouped Query Attention) 기술 및 32K(32,768) 토큰 문맥 지원으로 극도로 경제적인 추론과 가볍고 빠른 에지 최적화 완비"
relatedOrganization: lg-ai-research
---

# EXAONE 3.0 2.4B Base 소개

## 개요
EXAONE 3.0 2.4B Base는 LG AI연구원이 2024년 8월 자체 개발하여 전격 공개한 실용주의 인공지능(Pragmatic AI) 기저 생태계의 대표적인 초경량 사전 학습(Pre-trained) 기반 기초(Foundation) 언어 모델입니다. 이 모델은 지시 사항 이행(Instruction-tuning) 단계를 거치기 이전의 순수한 다음 단어 예측(Next-token prediction) 신경망 가중치 상태를 가지고 있어, 특정 대화 템플릿에 구속되지 않고 방대한 원천 문맥 흐름을 유려하게 이해하고 이어 쓰는 능력이 탁월합니다. 연구자 및 기업 엔지니어들에게 초소형 모델 빌딩을 위한 무결한 뼈대 모델을 선사하며, 학술 연구 및 다양한 비상업적 혁신 도전을 위해 자체적인 오픈 라이선스 하에 배포되고 있습니다.

## 기술 특징
이 모델은 한국어와 영어, 그리고 실무 소스 코드를 종합적으로 아우르는 고정밀 정제 8조(8 Trillion) 토큰 규모의 초거대 코퍼스를 학습하여 매개변수 대비 독보적인 지식 밀도를 자랑합니다. 디코더 전용(Decoder-only) 아키텍처 위에서 GQA(Grouped Query Attention) 및 회전식 위치 임베딩(RoPE) 기술을 내재화해 가중치 연산 부담을 비약적으로 줄이고, 최대 32,768(32K) 토큰에 달하는 대용량 컨텍스트 윈도우를 기본 하드웨어 리소스에서 안정적으로 전용할 수 있도록 최적화했습니다. 지시어 모델(Instruct)로 정밀 조정하기 이전 단계임에도 불구하고, 기저 언어 지능 평가 및 다국어 공통 상식 벤치마크 평가에서 동급 체급의 글로벌 최고 수준 기초 역량을 고루 증명한 정교한 구조적 특징을 지닙니다.

## 사용 사례
EXAONE 3.0 2.4B Base는 특정 대화 양식에 편향되어 있지 않으므로, 개발자가 원하는 고유 도메인의 전용 대화 세트나 미세 튜닝(Fine-tuning) 가이드라인을 직접 주입하여 커스텀 인스트럭트 모델을 커스터마이징하고 생성하기에 가장 이상적인 도구로 각광받습니다. 특히 모바일 기기, 임베디드 단말, 소형 자율 비서 등의 온디바이스(On-device) 환경이나 단일 저사양 GPU 인프라 내에 완벽하게 적재되어 특정 산업 도메인의 전문 어휘집(Glossary) 사전 튜닝, 소규모 자연어 임베딩 추출, 문법 정정 알고리즘 기저 엔진 등으로 폭넓게 운용됩니다. 이 외에도 소량의 프롬프트 예시(Few-shot context)를 통한 패턴 제어나 이기종 모델 간 지식 증류(Knowledge distillation)를 위한 학생 모델(Student model) 등으로 활용성이 무궁무진합니다.

## 한계
이 모델은 사전 학습 전용 기저(Base) 모델로 직접적인 질의응답이나 일상 대화, 명령 이행 작업을 수행하도록 지시할 경우 유의미한 답변 대신 대화 프롬프트를 뒤이어 계속 작성해 나가는 문장 자동 완성(Autocomplete) 현상을 겪게 되므로 실 서비스에 즉시 연동하기 위해서는 반드시 추가적인 지시 미세조정(SFT) 혹은 선호도 정렬(RLHF) 단계가 요구됩니다. 또한, 24억 매개변수의 초경량 스펙 특성상 극도로 조밀한 수리 연산이나 복잡성이 극대화된 멀티스텝 알고리즘 논증 단계에서는 거대 모델 대비 오차가 발생하기 쉬우며, 텍스트 일체형 토크나이저 구조로 설계되어 있어 추가 기능 탑재 없이 단독으로 멀티모달(Vision, Audio) 태스크를 동시 소화하는 구조적인 한계가 있습니다.
