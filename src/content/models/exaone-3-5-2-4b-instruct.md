---
modelId: exaone-3-5-2-4b-instruct
domain: llm
status: published
updated: 2026-08-22
sources:
  - https://www.lgresearch.ai/blog/view?seq=507
  - https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-2.4B-Instruct
  - https://github.com/LG-AI-EXAONE/EXAONE-3.5
  - https://arxiv.org/abs/2412.04862
features:
  toolUse: true
  vision: false
highlights:
  - "2.4B 파라미터 모바일 및 온디바이스 최적화 한국어/영어 대화형 언어모델"
  - "32K 컨텍스트 윈도우 지원 및 초경량 리소스 환경 대응"
  - "동일 파라미터 체급 대비 최고 수준의 실용적 지시 이행 능력"
relatedOrganization: lg-ai-research
---

# EXAONE 3.5 2.4B Instruct 소개

## 개요
EXAONE 3.5 2.4B Instruct는 LG AI Research가 2024년 12월 공개한 경량 대화형 언어모델로, 자원이 제한된 모바일 환경이나 소형 에지 디바이스 배포에 최적화되어 있다. 임베딩 레이어를 제외한 실질 파라미터는 약 21억 4천만 개(2.14B) 수준이며, 32B 및 7.8B 등 상위 모델 라인업과 동일한 고품질 한국어 및 영어 데이터셋과 Alignment 기술이 적용되었다.

## 기술 특징
EXAONE 3.5 2.4B Instruct는 30개의 트랜스포머 레이어와 GQA(Grouped-Query Attention, 32 Q-heads / 8 KV-heads) 구조를 사용하며, 102,400개의 어휘(Vocab Size) 크기를 갖는다. 상위 모델들과 달리 Tie Word Embeddings 방식을 적용하여 메모리 사용량을 최소화하였으며, 경량 모델임에도 32,768(32K) 토큰 길이의 장문 컨텍스트 처리를 안정적으로 지원한다.

## 사용 사례
모바일 앱 내 로컬 AI 비서, 온디바이스 챗봇, 에지 컴퓨팅 기반의 실시간 요약 및 대화 보조 도구로 유용하게 활용된다. 또한 vLLM, SGLang, llama.cpp, TensorRT-LLM 등 다양한 추론 프레임워크와 AWQ/GGUF 양자화 모델을 공식 제공하여 다양한 디바이스 환경에 손쉽게 탑재할 수 있다.

## 한계
복잡한 수리적 논리 추론이나 전문 학술 영역의 깊이 있는 질문에서는 상위 체급(7.8B, 32B) 모델 대비 출력이 간결하거나 일부 추론 오류가 발생할 수 있다. 연구 및 비영리 목적으로 공개된 연구용 오픈 웨이트 모델로서 상업적 이용 시 EXAONE AI Model License Agreement 1.1 - NC 라이선스 약관의 준수 여부를 확인해야 한다.
