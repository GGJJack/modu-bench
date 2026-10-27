---
modelId: qwen3-30b-a3b
domain: llm
status: published
updated: 2026-10-27
sources:
  - https://qwenlm.github.io/blog/qwen3/
  - https://huggingface.co/Qwen/Qwen3-30B-A3B
  - https://github.com/QwenLM/Qwen3
features:
  toolUse: true
  extendedThinking: true
highlights:
  - "Qwen3 제품군의 경량 혼합 전문가(MoE) 언어 모델 (총 30B, 활성 3B 파라미터)"
  - "생각 모드(Thinking)와 비생각 모드(Non-Thinking)의 하이브리드 추론 지원"
  - "YaRN 스케일링을 통한 최대 128K(131,072) 토큰 컨텍스트 확장"
relatedOrganization: alibaba
---

# Qwen3-30B-A3B 소개

## 개요
Qwen3-30B-A3B는 Alibaba Cloud Qwen 팀이 2025년 4월에 공개한 Qwen3 제품군의 효율 지향형 혼합 전문가(Mixture-of-Experts, MoE) 언어 모델입니다. 전체 305억 개의 파라미터 중 추론 시 토큰 당 33억 개의 활성 파라미터(128개 전문가 중 8개 라우팅)만을 선택적으로 활용하는 아키텍처 구조를 갖추고 있어, 대형 모델 수준의 높은 성능을 매우 낮은 연산 및 메모리 비용으로 제공합니다. 이 활성 파라미터 규모는 이전 세대 추론 전문 모델인 QwQ-32B의 10분의 1 수준에 불과하지만, 수학, 코딩, 상식 논리 추론 분야에서 이를 뛰어넘는 탁월한 효율성을 입증했습니다.

## 기술 특징
Qwen3-30B-A3B는 '생각 모드(Thinking Mode)'와 '비생각 모드(Non-Thinking Mode)'를 자유롭게 동적 전환할 수 있는 하이브리드 추론 제어 기능을 지원합니다. 생각 모드에서는 문제 해결 전 복잡한 연속 사고 과정(`<think>...</think>`)을 거쳐 높은 고난도 문제 해결력을 발휘하며, 필요 시 `enable_thinking=False` 옵션이나 `/no_think` 태그를 활용하여 즉각적인 응답을 유도할 수 있습니다. 119개 언어 및 방언에 달하는 약 36조 개의 토큰으로 3단계 사전 훈련을 거쳤으며, 48개 레이어와 GQA(32 Q-heads / 4 KV-heads) 구조, 그리고 YaRN(Yet Another RoPE Extension) 기술을 통해 최대 131,072(128K) 토큰의 장문 맥락을 처리할 수 있습니다.

## 사용 사례
Qwen3-30B-A3B는 적은 활성 파라미터 덕분에 vLLM, SGLang과 같은 고성능 서빙 엔진이나 Ollama, LMStudio, llama.cpp, MLX 등 로컬 추론 환경에 적합합니다. Qwen-Agent 및 MCP(Model Context Protocol) 인터페이스 지원으로 도구 호출(Tool Calling)과 외부 데이터 연동 기반의 에이전트 구축이 용이하며, 다국어 번역, 소스코드 생성, 요약, 사내 지식 기반 자동화 시스템 구축 등 폭넓은 실무 영역에 활용됩니다.

## 한계
3B라는 적은 활성 파라미터로 인해 235B 체급의 대형 스케일 모델 대비 아주 복잡하고 깊은 전문적 학술 지식이 필요한 영역에서는 응답 정밀도가 상대적으로 약할 수 있습니다. 또한 생각 모드로 동작할 경우 추론 토큰 생성을 위해 단답형 대화 대비 추가 시간 및 컴퓨팅 자원이 소비되며, 128K 초장문 맥락 연산 시 static YaRN 설정으로 인해 짧은 문맥 질의응답에서 유의할 필요가 있습니다.
