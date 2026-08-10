---
modelId: swallow-13b-instruct
domain: llm
status: published
updated: 2026-08-10
sources:
  - https://tokyotech-llm.github.io/
  - https://huggingface.co/tokyotech-llm/Swallow-13b-instruct
  - https://github.com/tokyotech-llm/swallow-llm
features:
  toolUse: false
  vision: false
  fineTuning: true
highlights:
  - "도쿄공업대학(Tokyo Tech)과 산업기술종합연구소(AIST) 공동 연구팀이 Llama 2 13B 모델을 기저 삼아 지속 사전 학습(Continual Pre-training)한 일본어 고성능 모델"
  - "독자적인 어휘 토크나이저 확장 및 대규모 고품질 일본어 말뭉치 투입을 통해 번역 투가 배제된 유연하고 자연스러운 현지어 텍스트 생성 능력 발휘"
  - "Llama 2 Community License Agreement 기반 배포로 오픈소스 커뮤니티의 기술 생태계 및 학술적 분석 활성화 기여"
---

# Swallow 13B Instruct 소개

## 개요
Swallow 13B Instruct는 도쿄공업대학(Tokyo Institute of Technology, 현 도쿄과학대학)과 일본 산업기술종합연구소(AIST)가 주축이 된 공동 연구팀이 Meta의 거대 언어 모델인 Llama 2 13B를 기반으로 설계하여 2023년 12월 19일에 정식 발표한 고성능 일본어 특화 지시어 이행(Instruct) 언어 모델입니다. 이 모델은 서구권 주도의 기본 모델에 일본어 처리 역량을 집중 부여하기 위해 '지속 사전 학습(Continual Pre-training)' 기법을 혁신적으로 도입하였습니다. 학술 및 인프라 파트너십의 긴밀한 상호작용으로 탄생한 본 모델은 Llama 2 Community License Agreement 하에 배포되어 비상업적 학술 용도 및 조건부 상업적 응용이 폭넓게 열려 있습니다.

## 기술 특징
Swallow 13B Instruct는 Llama 2의 견고한 가중치를 보존하면서, 100억 토큰이 넘는 고정밀 일본어 웹 코퍼스와 독점 텍스트 말뭉치(J-Commons 등)를 지속 사전 학습하는 방식을 선택했습니다. 학습 속도와 한자·가나 처리에 수반되는 비효율을 해소하기 위해 오리지널 토크나이저 어휘 사전을 대폭 확장하여, 일본어 단어 전송에 소모되는 토큰 길이를 단축하고 동적 처리 속도를 배가했습니다. 최종 지시 미세조정(Instruction tuning) 단계에서는 다양하게 수집된 사용자 명령어 세트와 안전성 평가 코퍼스를 정밀 세밀 조정함으로써, 다국어 교차 번역, 독창적 일본어 문장 생성 및 고차원 텍스트 요약 부문에서 기저 모델 대비 현격히 성숙한 퍼포먼스를 보여줍니다.

## 사용 사례
이 모델은 체급이 가볍고 구조가 대중적이어서 이미 전 세계적으로 규격화된 Llama 2 지원 도구 체인(llama.cpp, vLLM, TensorRT-LLM 등)을 그대로 결합하여 온프레미스 인프라 혹은 개인 워크스테이션 환경에서도 최적의 추론 가속화 이점을 온전히 누릴 수 있습니다. 일차적으로 학계 연구진의 고난도 다국어 번역 질의 테스트, 교육 현장 내 특화 챗봇 개발, 그리고 민감 데이터를 로컬 서버 내부에서 다루어야 하는 언론 및 공공 기관의 안전한 정보 보좌역(RAG) 구성원으로 우선 활약하고 있습니다. 또한 기저 가중치의 이식성이 훌륭해 추가 fine-tuning의 실험 기저 모델로 높은 선택률을 기록하고 있습니다.

## 한계
Swallow 13B Instruct는 기본적으로 텍스트 연산 구조만을 취하고 있어 이미지 분석을 위한 Vision 모듈이나 오디오 스피치 처리가 불가한 구조적 한계를 안고 있습니다. 또한, 지속 사전 학습으로 일본어 어휘 정밀도와 자연스러움은 크게 고도화되었으나, 기초 논리나 복잡한 알고리즘 연산 수행에 있어서는 Llama 2 13B 본래의 하드웨어 한계를 지니고 있어 아주 복잡한 다중 관계 추론에서는 오류를 생성할 개연성이 내재합니다. 아울러 Llama 2 커뮤니티 라이선스 제약 규정에 따라 월간 활성 사용자(MAU)가 극단적으로 거대한 초대형 글로벌 상용 서비스에 즉각 적용 시에는 상업적 주의를 기울여 라이선스 컴플라이언스를 점검할 필요가 있습니다.
