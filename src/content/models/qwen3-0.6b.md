---
modelId: qwen3-0.6b
domain: llm
status: published
updated: 2026-10-26
sources:
  - https://qwenlm.github.io/blog/qwen3/
  - https://huggingface.co/Qwen/Qwen3-0.6B
  - https://github.com/QwenLM/Qwen3
features:
  toolUse: true
  extendedThinking: true
highlights:
  - "총 0.6B(비임베딩 0.44B) 파라미터 기반의 초경량 언어 모델"
  - "생각 모드(Thinking Mode)와 비생각 모드(Non-Thinking Mode) 하이브리드 추론 지원"
  - "최대 32,768(32K) 토큰 컨텍스트 및 GQA(Grouped Query Attention) 적용"
relatedOrganization: alibaba
---

# Qwen3-0.6B 소개

## 개요
Qwen3-0.6B는 Alibaba Cloud Qwen 팀이 2025년 4월 공개한 Qwen3 시리즈의 초경량 덴스(Dense) 언어 모델입니다. 총 6억 개의 파라미터(비임베딩 파라미터 4억 4천만 개)와 28개 레이어 아키텍처로 구성되어 있으며, 극도로 제한된 컴퓨팅 자원을 사용하는 에지 디바이스, 모바일 단말, 로컬 임베디드 환경에서도 효율적으로 동작하도록 설계되었습니다. 소형 체급임에도 불구하고 이전 세대 상위 파라미터 모델 수준에 필적하는 언어 이해 및 추론 성능을 제공합니다.

## 기술 특징
Qwen3-0.6B는 Qwen3 제품군 특유의 하이브리드 추론 메커니즘을 그대로 탑재하여, 단일 모델 내에서 '생각 모드(Thinking Mode)'와 '비생각 모드(Non-Thinking Mode)'를 자유롭게 전환할 수 있습니다. 생각 모드에서는 단계별 사고 과정(Chain-of-Thought)을 통해 연산 예산을 할당하고 수학, 코드, 논리 문제를 정확하게 해결하며, 비생각 모드에서는 실시간 질의응답을 빠르게 연산합니다. 36조 토큰 규모의 다국어 사전 훈련 및 강화학습(RL) 기반 후속 훈련을 거쳤으며, 16개 Query 헤드와 8개 KV 헤드로 구성된 GQA(Grouped Query Attention)를 도입하여 32,768(32K) 토큰 맥락 처리 시 메모리 오버헤드를 최적화했습니다.

## 사용 사례
Qwen3-0.6B는 적은 메모리(VRAM/RAM) 점유율을 바탕으로 스마트폰, 단말 디바이스, IoT 장비 내 온디바이스 AI 서비스 구축에 적합합니다. vLLM, SGLang, Ollama, LMStudio, llama.cpp 등 다양한 로컬/서버 추론 프레임워크를 지원하며, Qwen-Agent 및 MCP(Model Context Protocol) 연동을 통한 경량 에이전트 툴 호출(Tool Use), 텍스트 생성, 다국어 번역, 자동 요약 과제에 용이하게 활용할 수 있습니다.

## 한계
0.6B라는 극소형 파라미터 한계로 인해, 복잡도가 매우 높은 전문 학술 경진대회급 문제나 수십 단계의 장기 연쇄 추론(Long-Horizon Reasoning) 과정에서는 대형 모델 대비 환각 현상이나 디테일 부족 현상이 발생할 수 있습니다. 또한 연속적인 생각 모드 생성 시 반복 문장이 발생하는 것을 방지하기 위해 권장 프롬프트 세팅 및 샘플링 파라미터(Temperature=0.6, TopP=0.95, presence_penalty 등) 준수가 권장됩니다.
