---
modelId: qwen3-0.6b
domain: llm
status: published
updated: 2026-10-28
sources:
  - https://qwenlm.github.io/blog/qwen3/
  - https://huggingface.co/Qwen/Qwen3-0.6B
  - https://arxiv.org/abs/2505.09388
features:
  toolUse: true
  vision: false
highlights:
  - "총 파라미터 0.6B (임베딩 제외 0.44B)의 초경량 소형 언어 모델"
  - "사고 모드(Thinking Mode)와 일반 대화 모드(Non-Thinking Mode) 간 자유로운 전환 지원"
  - "32K 컨텍스트 윈도우 및 100개 이상의 다국어 처리 지원"
relatedOrganization: alibaba
---

# Qwen3-0.6B 소개

## 개요
Qwen3-0.6B는 알리바바 클라우드(Alibaba Cloud)가 2025년 4월 공개한 Qwen3 시리즈의 초경량 고성능 소형 언어 모델(SLM)이다. 총 6억 개(0.6B)의 파라미터를 가지며, 임베딩 레이어를 제외한 파라미터 수는 약 4억 4천만 개(0.44B) 수준으로 극도의 리소스 효율성을 요구하는 엣지 디바이스 및 로컬 인퍼런스 환경에 최적화되어 있다. 공식 모델 카드(https://huggingface.co/Qwen/Qwen3-0.6B)에 명시된 바와 같이 28개의 레이어와 Grouped-Query Attention(GQA) 아키텍처를 적용하여 연산 효율을 높였다.

Qwen3-0.6B는 단일 모델 내에서 추론 성능을 강화하는 '사고 모드(Thinking Mode)'와 빠르게 응답하는 '일반 대화 모드(Non-Thinking Mode)'를 스위칭 형태로 모두 지원한다. Qwen3 공식 블로그(https://qwenlm.github.io/blog/qwen3/) 및 기술 보고서(https://arxiv.org/abs/2505.09388)에 따르면, 동급 매개변수를 가진 기존 모델 대비 추론, 코드 생성, 다국어 처리 능력이 크게 향상되었다.

## 기술 특징
Qwen3-0.6B는 32,768 토큰(32K)의 컨텍스트 길이를 기본 제공하며, 하드웨어 성능 및 프롬프트에 따라 최대 38,912 토큰까지 긴 출력을 생성할 수 있다. 프롬프트 단계에서 `enable_thinking` 옵션을 설정하거나 사용자 입력 내 `/think`, `/no_think` 태그를 활용해 복잡한 논리·수학 문제 해결을 위한 추론 과정 생성 여부를 동적으로 제어할 수 있다.

또한 100개 이상의 언어 및 방언을 지원하며, 툴 호출(Tool Calling)과 도구 연동을 위한 에이전트(Agentic Use) 기능이 대폭 강화되었다. Qwen-Agent 등 에이전트 프레임워크와의 결합을 통해 도구 사용 정밀도를 극대화할 수 있다.

## 사용 사례
Qwen3-0.6B는 온디바이스 AI, 모바일 애플리케이션 내 실시간 텍스트 생성, 경량화된 에이전트 서비스 등에 적합하다. vLLM, SGLang, Ollama, LMStudio 등 다양한 오픈소스 인퍼런스 엔진 및 포맷을 지원하여 로컬 환경에서 손쉽게 배포할 수 있다.

## 한계
소형 매개변수 구조 특성상 매우 복잡한 초고난도 추론 시 반복 출력(Endless Repetition) 현상이 발생할 수 있다. 공식 기술 가이드(https://huggingface.co/Qwen/Qwen3-0.6B#best-practices)에서는 이를 방지하기 위해 `presence_penalty`를 1.5로 설정하거나 템퍼러처 조절 등의 디코딩 파라미터 최적화를 권장한다.
