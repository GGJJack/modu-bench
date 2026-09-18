---
modelId: exaone-3.0-32b-instruct
domain: llm
status: published
updated: 2026-09-18
sources:
  - https://www.lgresearch.ai/models/exaone
  - https://huggingface.co/LGAI-Research/EXAONE-3.0-32B-Instruct
  - https://github.com/LG-AI-Research/EXAONE-3.0
  - https://arxiv.org/abs/2408.03541
features:
  toolUse: true
  vision: false
highlights:
  - "LG AI연구원이 2024년 10월 공개한 32B 파라미터 오픈소스 지시어 미세조정(Instruct) 모델"
  - "32,768(32K) 토큰 컨텍스트 윈도우 및 GQA 아키텍처 기반 효율적 추론 지원"
  - "한국어 및 영어 고품질 데이터 학습을 통해 동 체급 글로벌 최상위권 스코어 달성"
relatedOrganization: lg-ai-research
---

# EXAONE 3.0 32B Instruct 소개

## 개요
EXAONE 3.0 32B Instruct는 LG AI연구원이 2024년 10월에 공식 공개한 32B(320억) 파라미터 규모의 고성능 지시 이행(Instruction-tuned) 언어 모델입니다. 앞서 공개된 EXAONE 3.0 2.4B 및 7.8B 경량 모델에 이어, 중대형 파라미터 체급에서 글로벌 최정상급 지능과 실무 지시 수행 능력을 제공하기 위해 개발되었습니다. 연구 및 비상업적 목적으로 전면 공개된 EXAONE AI Model License Agreement 1.0 규격을 따르며, LG AI연구원의 '실용주의 AI(Pragmatic AI)' 기조 아래 고도화된 한국어 및 영어 이중 언어(Bilingual) 역량을 제공합니다.

## 기술 특징
EXAONE 3.0 32B Instruct는 GQA(Grouped Query Attention) 기술을 적용하여 32B의 거대한 매개변수 규모에도 불구하고 추론 시 VRAM 소모와 쿼리 처리 지연 시간을 효과적으로 최소화하였습니다. 입력 컨텍스트는 최대 32,768(32K) 토큰까지 확장 지원되어 복잡한 긴 문서의 정밀 요약 및 다단계 대화 맥락을 안정적으로 처리합니다. 사전 학습 과정에는 엄선된 고품질 한국어 및 영어 데이터셋이 투입되었으며, 고도화된 SFT(Supervised Fine-Tuning) 및 DPO(Direct Preference Optimization) 얼라인먼트를 거쳐 지시문 준수 능력, 수학적 논리 추론, 코드 작성 및 도구 활용(Tool Use) 능력이 대폭 끌어올려졌습니다.

## 사용 사례
32B 파라미터급의 고성능 지능을 바탕으로 엔터프라이즈 사내 구축형 AI 서비스, 금융 및 법률 등 전문 도메인 문서 정밀 분석, 복잡한 사내 RAG(검색 증강 생성) 시스템의 메인 인퍼런스 엔진으로 적합합니다. vLLM, SGLang, TensorRT-LLM, Ollama 등 최신 글로벌 추론 프레임워크와 완벽하게 호환되어 단일 고성능 GPU(A100, H100 등) 서버나 양자화(AWQ, GGUF)를 거친 온프레미스 인프라 환경에 유연하게 배포 및 운용할 수 있습니다.

## 한계
32B 파라미터 크기 특성상 원본 FP16/BF16 가중치 기반 추론 시 상당한 메모리 자원(최소 64GB 이상 VRAM)을 요구하므로, 초소형 온디바이스 단말이나 단일 소형 GPU 환경에서는 양자화 기술 적용이 필수적입니다. 또한 본 모델은 시각, 음성 등 멀티모달 모달리티를 지원하지 않는 순수 텍스트 언어 모델입니다. 사실 관계 검증이 엄격히 요구되는 분야에서는 최신 정보에 대한 할루시네이션(환각) 가능성을 보완하기 위해 외부 지식 베이스 검색 결합 및 독립 가드레일 장치가 병행되어야 합니다.
