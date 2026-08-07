---
modelId: tinyswallow-1-5b-instruct
domain: llm
status: published
updated: 2026-08-07
sources:
  - https://huggingface.co/SakanaAI/TinySwallow-1.5B-Instruct
  - https://arxiv.org/abs/2501.16937
  - https://sakana.ai/taid-jp/
features:
  toolUse: true
  vision: false
highlights:
  - "시변 적응적 보간 증류(TAID, Temporally Adaptive Interpolated Distillation) 기법으로 탄생한 1.5B 소형 일본어 플래그십 LLM"
  - "Qwen2.5-32B-Instruct 교사 모델의 고성능 지식을 Qwen2.5-1.5B-Instruct 학생 모델에 성공적으로 증류"
  - "도쿄공업대학 Swallow 팀과 Sakana AI가 공동 기획하여 탁월한 일본어 지시 추종력 실현"
relatedOrganization: sakana-ai
---

# TinySwallow-1.5B-Instruct 소개

## 개요
TinySwallow-1.5B-Instruct는 집단지성과 자연모사형 AI 알고리즘을 선도하는 일본 도쿄의 글로벌 혁신 AI 연구 기업인 사카나 AI(Sakana AI)와 도쿄공업대학(Tokyo Tech) Swallow 팀이 협력하여 2025년 1월에 정식 공개한 고효율 초경량 일본어 특화 대화형 대형 언어 모델입니다. 이 모델은 사카나 AI가 새롭게 기획한 고도화된 지식 증류(Knowledge Distillation) 프레임워크인 TAID(시변 적응적 보간 증류) 기법을 최초로 실증한 플래그십 인스트럭션 튜닝 모델입니다. 단 15억(1.5B) 개에 불과한 지극히 콤팩트한 매개변수 규모로 가동함에도 불구하고, 32B급의 대규모 상위 모델이 가질 법한 수준 높고 정교한 일본어 대화 뉘앙스 처리 및 풍부한 상식 기반 지시 추종 성능을 보여줍니다.

## 기술 특징
TinySwallow-1.5B-Instruct의 가장 중추적인 지능 구조는 사카나 AI 연구진이 독자 고안한 '시변 적응적 보간 증류(TAID, Temporally Adaptive Interpolated Distillation)' 공정에서 기인합니다. 연구진은 강력한 상위 지능체인 Qwen2.5-32B-Instruct 모델을 교사(Teacher)로 지정하고 상대적으로 가벼운 Qwen2.5-1.5B-Instruct 모델을 학생(Student)으로 설정한 뒤, 단순 모방 학습을 넘어 시점에 맞춰 손실 값을 동적으로 조율하고 보간하는 혁신적인 지식 보전 공식을 설계하여 극도로 압축된 네트워크에 교사의 추론 경로를 성공적으로 수용시켰습니다. 추가 연구 과정에서 대규모 합성 질의 대화셋인 Gemma-2-LMSYS-Chat-1M-Synth 및 Swallow Magpie Ultra 등의 최고급 데이터셋을 연동한 집중 정렬 정제 공법을 더함으로써 가벼우면서도 빠른 최적의 텍스트 생성 파이프라인을 견고히 이룩했습니다.

## 사용 사례
TinySwallow-1.5B-Instruct는 극도로 한정된 하드웨어 리소스를 갖춘 엣지 장치나 개인 가동 노트북, 임베디드 소형 모바일 단말에서 원활하게 가동될 수 있는 최상의 솔루션입니다. 특히 대규모 다국어 LLM을 로드하기 어려운 로컬 온디바이스(On-device) 환경에서 일본어로 구성된 빠르고 부드러운 개인화 음성 비서 서비스나 인스턴트 실시간 텍스트 요약 챗봇을 가동할 때 독보적인 전력 효율과 경제성을 제공합니다. 또한 가벼운 용량을 십분 살려 학술적 목적의 자연어 처리(NLP) 연구 프로토타입 설계는 물론, 아파치 2.0 라이선스와 Gemma 규약을 정직하게 충족하는 한 상업적 비즈니스 서비스로 가동하는 데 최상의 유연함을 입증합니다.

## 한계
15억 파라미터 수준의 초경량 컴팩트 규격으로 전용 설계되었기 때문에 복잡한 다단계 다항 수학 증명이나 하이 레벨 코딩 디버깅, 다변량 고난도 논리 추론 등의 인지적 작업에서는 대형 프런티어 모델 대비 신뢰성이 급감할 수 있습니다. 또한, 이 모델은 텍스트 처리에 국한된 오토레그레시브(Autoregressive) 구조에 충실하여 다차원 음성 및 실시간 시각 데이터를 감지하는 등의 비전 처리 및 멀티모달 상호작용은 전면 불가능합니다. 일본어 이외의 한국어나 여타 제3국 외국어 처리에 있어서는 다소 부자연스러운 언어 구사와 낮은 표현 정밀도를 보일 수 있어 글로벌 크로스보더 지능으로 가동하기에는 적절치 않습니다.
