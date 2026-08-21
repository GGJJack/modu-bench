---
modelId: exaone-3-5-32b-instruct
domain: llm
status: published
updated: 2026-08-21
sources:
  - https://www.lgresearch.ai/blog/view?seq=507
  - https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Instruct
  - https://arxiv.org/abs/2412.04862
  - https://github.com/LG-AI-EXAONE/EXAONE-3.5
features:
  toolUse: true
  vision: false
highlights:
  - "32B 파라미터 오픈 쿼드링구얼/바이링구얼 지시 이행 모델"
  - "최대 32,768(32K) 토큰의 컨텍스트 윈도우 지원"
  - "한국어 영역 성능 강화 및 실무 중심 언어 이해 능력 탑재"
relatedOrganization: lg-ai-research
---

# EXAONE 3.5 32B Instruct 소개

## 개요
EXAONE 3.5 32B Instruct는 LG AI Research에서 개발하여 오픈소스로 공개한 지시 이행(Instruction-tuned) 언어 모델 시리즈 중 가장 강력한 성능을 자랑하는 32B 파라미터 모델이다. 한국어와 영어 두 개 언어를 기본으로 지원하며, 실제 업무 환경과 복잡한 지시문 이행에 최적화된 아키텍처 및 학습 절차를 적용하였다. 특히 오픈소스 라이선스(EXAONE AI Model License Agreement 1.1 - NC)를 적용하여 연구 및 비상업적 목적의 응용이 활발히 이뤄질 수 있도록 지원하고 있다.

## 기술 특징
EXAONE 3.5 32B Instruct는 총 64개의 트랜스포머 레이어와 GQA(Grouped Query Attention, 40 Q-heads, 8 KV-heads) 구조를 활용하여 메모리 효율성을 극대화하였다. 입력 컨텍스트 길이는 최대 32,768(32K) 토큰을 지원하여 긴 문서 이해 및 멀티턴 대화 성능이 뛰어나다. 또한 MT-Bench, LiveBench, AlpacaEval, Arena-Hard 등 주요 실무형 평가 지표뿐만 아니라 KoMT-Bench 및 LogicKor 등 한국어 전용 벤치마크에서도 동일 크기의 글로벌 선도 모델(Qwen 2.5 32B, Gemma 2 27B 등)과 대등하거나 우수한 성적을 나타낸다.

## 사용 사례
이 모델은 한국어 및 영어로 작성된 복잡한 문서 요약, 질의응답, 코드 작성 및 도구 활용(Tool Use) 시나리오에 적합하다. vLLM, SGLang, TensorRT-LLM, llama.cpp, Ollama 등 다양한 추론 프레임워크와 호환되어 엔터프라이즈 내부 구축이나 연구용 워크로드에 쉽게 배포할 수 있다.

## 한계
32B 파라미터의 고성능 모델 특성상 단일 고성능 GPU(예: A100/H100) 또는 양자화(AWQ, GGUF) 기술을 적용한 배포 환경이 권장된다. 또한 통계적 확률에 기반한 언어 생성 방식 특성상 최신 정보에 대한 환각(Hallucination) 현상이 발생할 수 있으므로, 정확성이 요구되는 실무 적용 시 RAG(검색 증강 생성) 또는 검증 도구와 함께 사용하는 것이 바람직하다.
