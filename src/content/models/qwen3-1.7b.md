---
modelId: qwen3-1.7b
domain: llm
status: published
updated: 2026-10-28
sources:
  - https://qwenlm.github.io/blog/qwen3/
  - https://huggingface.co/Qwen/Qwen3-1.7B
  - https://arxiv.org/abs/2505.09388
features:
  toolUse: true
  vision: false
highlights:
  - "총 파라미터 1.7B (임베딩 제외 1.4B) 규모의 효율적인 소형 언어 모델"
  - "사고 모드(Thinking Mode)와 비사고 모드(Non-Thinking Mode) 간 자유로운 동적 전환"
  - "32K 컨텍스트 길이 지원 및 에이전트 도구 호출 능력 향상"
relatedOrganization: alibaba
---

# Qwen3-1.7B 소개

## 개요
Qwen3-1.7B는 알리바바 클라우드(Alibaba Cloud)가 2025년 4월에 출시한 Qwen3 라인업의 1.7B 규격 소형 대형 언어 모델(SLM)이다. 총 17억 개(1.7B)의 파라미터를 탑재하고 있으며, 임베딩 파라미터를 제외한 활성 매개변수 수는 약 14억 개(1.4B)이다. 공식 Hugging Face 모델 카드(https://huggingface.co/Qwen/Qwen3-1.7B) 기준 28개의 레이어와 Q-헤드 16개 / KV-헤드 8개 구조의 GQA(Grouped-Query Attention)를 적용하여 뛰어난 연산 속도와 낮은 메모리 점유율을 자랑한다.

Qwen3-1.7B는 단일 가중치 내에서 논리적 추론 능력을 극대화하는 '사고 모드(Thinking Mode)'와 속도 중심 대화를 제공하는 '비사고 모드(Non-Thinking Mode)'를 자유롭게 전환할 수 있다. Qwen3 블로그(https://qwenlm.github.io/blog/qwen3/) 및 공식 기술 보고서(https://arxiv.org/abs/2505.09388)에 명시되었듯 이전 세대 Qwen2.5 및 QwQ 시리즈 대비 상식 추론, 수학, 코드 작성 등 다방면에서 정밀한 성능 향상을 이뤄냈다.

## 기술 특징
기본 컨텍스트 길이는 32,768 토큰(32K)이며, 코드 연산 및 복잡한 추론 체인을 지원한다. 토크나이저 차원에서 `enable_thinking` 매개변수를 제어하거나 입력 텍스트 내 `/think`, `/no_think` 태그를 활용해 추론 프로세스 포함 여부를 쉽게 결정할 수 있다.

100개 이상의 다국어를 지원함과 동시에 외부 도구와의 연동성(Tool Use & Agentic Abilities)이 향상되었다. MCP(Model Context Protocol) 또는 Qwen-Agent 프레임워크와의 연동을 통해 복잡한 오케스트레이션 작업을 손쉽게 처리할 수 있다.

## 사용 사례
Qwen3-1.7B는 개발자 단말기에서의 온디바이스 에이전트, 실시간 대화형 서비스, 효율적인 RAG(검색 증강 생성) 파이프라인의 텍스트 생성기 등으로 활용될 수 있다. vLLM, SGLang, Ollama 등 다양한 서빙 프레임워크와 즉시 호환된다.

## 한계
매개변수 규모 한계로 인해 극도로 길고 정밀한 추론 과정에서 토큰 루프(반복 생성)가 일어날 위험이 존재한다. 베스트 프랙티스 안내 문서(https://huggingface.co/Qwen/Qwen3-1.7B#best-practices)에서는 권장 사양의 샘플링 파라미터(Thinking 모드 시 Temp 0.6, TopP 0.95 등) 적용 및 `presence_penalty` 수치 조정을 제안한다.
