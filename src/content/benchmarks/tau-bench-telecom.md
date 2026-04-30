---
benchmarkId: tau-bench-telecom
domain: llm
status: published
updated: 2026-04-30
sources:
  - https://github.com/sierra-research/tau-bench
  - https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5
highlights:
  - "실제 비즈니스 시나리오에서의 에이전트 도구 사용 능력 측정"
  - "통신(Telecom) 및 소매(Retail) 도메인 시뮬레이션 제공"
  - "긴 호흡의 작업 수행 및 다단계 추론 평가"
---

# Tau-bench (Telecom)

## 개요
Tau-bench는 Sierra에서 공개한 벤치마크로, 거대 언어 모델(LLM)이 에이전트로서 복잡한 실세계 비즈니스 시나리오를 얼마나 잘 처리하는지 평가합니다. 특히 `tau-bench-telecom`은 통신 서비스 도메인에서의 상담, 문제 해결, 도구 활용 능력을 측정합니다.

## 특징
- **도구 사용(Tool Use)**: API 호출을 통해 사용자의 요청을 해결하는 과정을 직접 시뮬레이션합니다.
- **다단계 추론**: 한 번의 답변이 아닌, 여러 차례의 대화와 도구 호출이 필요한 긴 호흡의 작업을 포함합니다.
- **실무 중심**: 실제 고객 센터나 비즈니스 워크플로우에서 발생할 수 있는 현실적인 시나리오를 기반으로 합니다.

## 평가 수치
- 점수는 일반적으로 성공률(Success Rate) 또는 유사한 지표로 100점 만점으로 환산되어 기재됩니다.
