---
modelId: qwen-3-235b
domain: llm
status: published
updated: 2026-05-13
sources:
  - https://qwenlm.github.io/blog/qwen3/
  - https://aws.amazon.com/bedrock/pricing/
features:
  toolUse: true
  extendedThinking: true
highlights:
  - "Qwen3 제품군의 최상위 MoE 모델 (235B 파라미터)"
  - "활성 파라미터 22B로 효율적인 고성능 추론 실현"
  - "생각 모드(Thinking Mode) 지원으로 복잡한 추론 문제 해결"
relatedOrganization: alibaba
---

# Qwen3-235B 소개

## 개요
Qwen3-235B(Qwen3-235B-A22B)는 Alibaba Cloud가 2025년 4월에 발표한 Qwen 제품군의 최신 플래그십 대규모 언어 모델입니다. 총 2350억 개의 파라미터를 보유한 혼합 전문가(Mixture-of-Experts, MoE) 아키텍처를 채택하고 있으며, 추론 시에는 이 중 220억 개의 파라미터만 활성화하여 계산 효율성을 극대화했습니다. 이 모델은 코딩, 수학 및 일반적인 지능 평가에서 DeepSeek-R1, o1, Gemini 2.5 Pro와 같은 최상위권 모델들과 경쟁할 수 있는 성능을 목표로 설계되었습니다.

## 기술 특징
Qwen3-235B의 가장 혁신적인 특징은 '하이브리드 사고 모드(Hybrid Thinking Modes)'의 도입입니다. 사용자는 복잡한 문제 해결을 위해 모델이 단계별 추론을 수행하는 '생각 모드(Thinking Mode)'와 빠른 응답을 제공하는 '비생각 모드(Non-Thinking Mode)' 중 선택할 수 있습니다. 이는 추론 예산(Inference Budget)을 유연하게 제어할 수 있게 하여, 비용 효율성과 성능 사이의 최적점을 찾도록 돕습니다. 또한, 약 36조 개의 토큰과 119개 이상의 언어 및 방언을 학습하여 강력한 다국어 능력을 보유하고 있으며, 128K 토큰의 컨텍스트 윈도우를 지원합니다.

## 사용 사례
Qwen3-235B는 최상위 수준의 코딩 능력과 수학적 추론 능력이 요구되는 복잡한 문제 해결에 최적화되어 있습니다. 강화된 도구 사용(Tool Calling) 및 MCP(Model Context Protocol) 지원을 통해 고도로 정교한 AI 에이전트 구축이 가능하며, 기업의 대규모 데이터 분석 및 다국어 비즈니스 환경에서의 커뮤니케이션 도구로 활용됩니다. 오픈 가중치 모델로서 연구자들과 개발자들이 자유롭게 성능을 검증하고 특정 도메인에 맞춰 최적화할 수 있다는 점이 큰 장점입니다.

## 한계
총 파라미터 규모가 235B에 달하기 때문에, MoE 구조로 인해 추론 시의 계산 부담은 낮지만 모델을 로드하기 위해서는 상당한 수준의 VRAM 자원이 필요합니다. 또한 '생각 모드'를 사용할 경우 답변의 정확도는 높아지지만 그만큼 응답 생성 시간이 길어질 수 있다는 점을 고려해야 합니다. Alibaba Cloud는 지속적인 업데이트를 통해 성능을 개선하고 있으나, 특정 전문 분야에서의 미세한 뉘앙스 처리나 최신 시사 정보 반영에는 한계가 있을 수 있습니다.
