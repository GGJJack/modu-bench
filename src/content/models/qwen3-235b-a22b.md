---
modelId: qwen3-235b-a22b
domain: llm
status: published
updated: 2026-10-27
sources:
  - https://qwenlm.github.io/blog/qwen3/
  - https://huggingface.co/Qwen/Qwen3-235B-A22B
  - https://github.com/QwenLM/Qwen3
features:
  toolUse: true
  extendedThinking: true
highlights:
  - "Qwen3 플래그십 혼합 전문가(MoE) 언어 모델 (총 235B, 활성 22B 파라미터)"
  - "DeepSeek-R1, o1, o3-mini 등 상위 모델에 대등한 고성능 하이브리드 추론"
  - "YaRN 스케일링을 통한 최대 128K(131,072) 토큰 컨텍스트 지원"
relatedOrganization: alibaba
---

# Qwen3-235B-A22B 소개

## 개요
Qwen3-235B-A22B는 Alibaba Cloud Qwen 팀이 2025년 4월에 공개한 Qwen3 시리즈의 플래그십 오픈 웨이트 혼합 전문가(Mixture-of-Experts, MoE) 언어 모델입니다. 전체 2,350억 개의 파라미터 중 토큰 당 220억 개의 활성 파라미터(128개 전문가 중 8개 활성화)를 구동하는 구조로 설계되었습니다. 수학, 코딩, 복잡 논리 및 종합 능력 벤치마크 평가에서 DeepSeek-R1, OpenAI o1, o3-mini, Grok-3, Gemini-2.5-Pro와 같은 세계 최정상급 프론티어 모델들과 대등한 성능을 발휘합니다.

## 기술 특징
Qwen3-235B-A22B는 단일 모델 내에서 '생각 모드(Thinking Mode)'와 '비생각 모드(Non-Thinking Mode)'를 동적으로 스위칭하는 차세대 하이브리드 추론 기술을 탑재했습니다. 복잡한 고난도 문제에서는 깊은 연쇄 사고 과정(`<think>...</think>`)을 거쳐 추론 정확도를 극대화하며, 속도가 중요한 대화에서는 비생각 모드로 실시간에 가까운 빠른 출력을 제공합니다. 119개 언어/방언을 아우르는 약 36조 토큰의 대규모 3단계 사전 훈련과 Cold-Start, RL, Thinking Mode Fusion, General RL로 이어지는 4단계 후속 훈련(Post-Training)을 거쳤으며, 94개 레이어 아키텍처와 YaRN 스케일링을 통해 최대 131,072(128K) 토큰의 가변 컨텍스트를 안정적으로 지원합니다.

## 사용 사례
Qwen3-235B-A22B는 높은 지능 수준과 우수한 인적 선호도 정렬 성능을 바탕으로 연구 기관, 기업체 온프레미스 및 대규모 클라우드 서비스 구축에 적합합니다. Qwen-Agent 및 MCP(Model Context Protocol) 지원을 통해 복잡한 멀티스텝 자율 에이전트, 고도화된 소프트웨어 엔지니어링 자동화(SWE-bench 등), 과학/수학 학술 연구 보조, 다국어 기업용 지식 관리 시스템 구축에 강력한 역량을 발휘합니다. SGLang, vLLM 등의 분산 서빙 프레임워크를 활용해 다중 GPU(Tensor Parallelism) 환경에 효과적으로 배포할 수 있습니다.

## 한계
전체 파라미터 규모가 235B에 달하므로 최소 8개 이상의 고성능 데이터센터 GPU(예: A100/H100/H200) 분산 인프라가 필수적이며 단일 GPU 단말에서는 운용이 불가능합니다. 또한 생각 모드 구동 시 복잡한 문제에 대한 심층 추론 토큰이 많이 생성되어 응답 지연(Latency)이 늘어날 수 있으며, 올바른 출력을 위해 권장 샘플링 매개변수(Temperature 0.6, TopP 0.95, TopK 20) 설정 및 greedy decoding 자제가 권장됩니다.
