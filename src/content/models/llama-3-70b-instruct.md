---
modelId: llama-3-70b-instruct
domain: llm
status: published
updated: 2026-11-10
sources:
  - https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct
  - https://github.com/meta-llama/llama3/blob/main/MODEL_CARD.md
  - https://arxiv.org/abs/2407.21783
  - https://llama.meta.com/llama3/license
features:
  toolUse: true
  vision: false
highlights:
  - "Meta가 2024년 4월 공개한 70B 규모 오픈 가중치 지시 튜닝(Instruction-tuned) 플래그십 모델"
  - "15조 토큰 이상의 대규모 공개 코퍼스로 사전 훈련 및 GQA(Grouped-Query Attention) 적용"
  - "MMLU 82.0, HumanEval 81.7, GSM-8K 93.0을 달성하며 상용 폐쇄형 모델에 준하는 추론 성능 입증"
relatedOrganization: meta
---

# Llama 3 70B Instruct 소개

## 개요
Llama 3 70B Instruct(Meta-Llama-3-70B-Instruct)는 메타(Meta)가 2024년 4월 18일 공식 출시한 3세대 Llama 오픈 가중치 대규모 언어 모델 라인업의 플래그십 대화형 모델입니다 ([Meta Llama 3 Model Card](https://github.com/meta-llama/llama3/blob/main/MODEL_CARD.md)). 사전 훈련 가중치에 지도 미세 조정(SFT)과 인간 피드백 기반 강화학습(RLHF)을 정밀하게 적용하여 대화 상호작용 및 지시 준수 능력에 최적화되었습니다 ([HuggingFace Meta-Llama-3-70B-Instruct](https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct)). 공개 당시 오픈소스 진영뿐 아니라 상용 폐쇄형 프론티어 LLM들과 대등한 추론 및 코딩 벤치마크 결과를 보여주며 전 세계 엔터프라이즈와 연구 생태계의 오픈 AI 표준으로 자리매김했습니다 ([The Llama 3 Herd of Models](https://arxiv.org/abs/2407.21783)).

## 기술 특징
Llama 3 70B Instruct는 최적화된 오토레그레시브 트랜스포머(Auto-regressive Transformer) 아키텍처를 기반으로 설계되었습니다 ([Meta Llama 3 Model Card](https://github.com/meta-llama/llama3/blob/main/MODEL_CARD.md)). 사전 훈련에는 15조(15 Trillion) 개 이상의 방대한 고품질 공개 텍스트 및 코드 데이터가 투입되었으며, 128K 어휘 크기의 토크나이저와 시퀀스 길이 8,192(8K) 토큰의 컨텍스트 윈도우를 지원합니다. 추론 효율성 및 KV 캐시 메모리 절감을 위해 GQA(Grouped-Query Attention)를 기본 적용했습니다. 정렬 단계에서는 과도한 거부(False Refusal)를 대폭 완화하여 유용성(Helpfulness)과 안전성(Safety) 간의 균형을 극대화하였으며, 다중 턴 대화, 함수/도구 호출(Tool Use), 복잡한 수학 및 프로그래밍 추론에서 뛰어난 정확도를 발휘합니다.

## 사용 사례
Llama 3 70B Instruct는 엔터프라이즈 사내 독립형 인프라 구축, 지능형 AI 에이전트, RAG(검색 증강 생성) 시스템 및 복잡한 코드 작성 보조 도구로 광범위하게 도입됩니다 ([HuggingFace Meta-Llama-3-70B-Instruct](https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct)). 지시 준수력이 탁월하여 데이터 변환, 구조화된 JSON 출력 생성, 멀티스텝 작업 계획 수립에 강점을 가집니다. 또한 Meta Llama 3 Community License에 따라 월간 활성 사용자 7억 명 이하의 기업과 연구자들에게 상업적 활용 및 파생 모델 개발이 허용되어, 도메인 특화 경량 모델 증류(Knowledge Distillation)의 교사 모델(Teacher Model)로도 널리 활용됩니다 ([Llama 3 Community License](https://llama.meta.com/llama3/license)).

## 한계
이 모델은 700억(70B) 매개변수를 지니고 있어 단일 소비자용 GPU에서 실행하기 어려우며, 원활한 서빙 및 서빙 지연 시간 단축을 위해 다중 GPU 클러스터 또는 4-bit/8-bit 양자화 기법(AWQ, GPTQ 등)이 요구됩니다 ([HuggingFace Meta-Llama-3-70B-Instruct](https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct)). 기본 컨텍스트 윈도우가 8,192 토큰으로 제한되어 10만 토큰 이상의 초대형 문서 전체를 한 번에 입력하는 데 제약이 있습니다. 공식 학습 및 안전 평가는 영어 중심으로 수행되었으므로 영어가 아닌 다국어 환경에서는 답변 자연스러움이나 지식 밀도에 편차가 발생할 수 있으며, 순수 텍스트 모델로서 이미지나 오디오 입력을 직접 해석하지 못합니다.
