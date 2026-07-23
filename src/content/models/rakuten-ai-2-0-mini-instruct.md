---
modelId: rakuten-ai-2-0-mini-instruct
domain: llm
status: published
updated: 2026-07-23
sources:
  - https://huggingface.co/Rakuten/RakutenAI-2.0-mini-instruct
  - https://huggingface.co/Rakuten
  - https://ai.rakuten.com/
features:
  fineTuning: true
  toolUse: false
  vision: false
highlights:
  - "라쿠텐 그룹이 독자 개발한 20억 파라미터(2B) 규모의 초경량 일본어/영어 특화 지시 이행(Instruct) 모델"
  - "정교한 인스트럭션 튜닝과 정렬(Alignment) 기법을 적용하여 높은 지시 수행 및 대화 정밀도 달성"
  - "메모리 제약이 극심한 모바일, 온디바이스, 임베디드 엣지 컴퓨팅 환경에 최적화"
relatedOrganization: rakuten
---

# RakutenAI-2.0-mini-instruct 소개

## 개요
RakutenAI-2.0-mini-instruct는 일본의 대표 글로벌 기술 대기업인 라쿠텐 그룹(Rakuten Group, Inc.)이 독자 구축한 20억 파라미터(2B) 규모의 초경량 일본어 및 영어 특화 지시 이행(Instruct) 대규모 언어 모델입니다. 2025년 2월 26일에 정식 출시된 본 모델은 앞서 공개되었던 사전 학습 파운데이션 모델인 'RakutenAI-2.0-mini'를 기반으로 개발되었습니다. 다양한 대화 맥락과 사용자 지시사항을 정밀하게 수행하도록 고안되었으며, 오픈소스 커뮤니티 및 로컬 개발 환경 활성화를 위해 Apache-2.0 라이선스로 전면 개방되었습니다.

## 기술 특징
본 모델은 초경량 2B급 아키텍처임에도 불구하고, 대형 모델에 필적하는 자연스러운 지시 수행(Instruction Following) 능력을 갖추기 위해 고도의 사후 학습(Post-training) 파이프라인을 거쳤습니다. 특히 지도 미세 조정(SFT)과 인간 피드백 기반 강화학습(RLHF) 혹은 이에 준하는 정렬(Alignment) 알고리즘을 융합하여 질문의 의도를 신속하게 파악합니다. 라쿠텐이 최적화한 48k 크기의 일본어 토크나이저를 공유하므로 텍스트 인코딩 및 디코딩 과정에서 탁월한 처리 속도와 효율적인 컨텍스트 활용이 가능합니다.

## 사용 사례
RakutenAI-2.0-mini-instruct는 모바일 앱 내부의 실시간 지능형 비서, 오프라인 임베디드 시스템용 스마트 제어 엔진, 경량 요약 및 업무 보조 자동화 도구 등 저지연과 고효율이 필수적인 온디바이스(On-device) 시나리오에 완벽하게 부합합니다. 트랜스포머(Transformers) 라이브러리 및 llama.cpp 등 다양한 경량 런타임 환경과의 호환성이 높아, 개발자들은 개인 PC나 단일 엣지 장비에서도 단 몇 줄의 코드만으로 실시간 대화 및 태스크 자동화 솔루션을 구축해 낼 수 있습니다.

## 한계
모델의 구조적 파라미터 크기가 2B(20억) 수준으로 압축된 만큼, 방대한 다중 도메인 상식이나 정교한 논리 연산, 고난도의 수학적 및 코딩 추론 등 고부하 작업에서는 7B 이상의 중형 모델들에 비해 답변의 완성도가 떨어질 수 있습니다. 또한 이미지, 음성, 영상과 같은 비정형 멀티모달(Multimodal) 정보의 입출력을 지원하지 않으므로, 복합 멀티모달 파이프라인 연계를 위해서는 외부 별도 전용 모델과의 유기적 통합 설계가 필수적으로 요구됩니다.
