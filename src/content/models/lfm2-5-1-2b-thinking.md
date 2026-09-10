---
modelId: lfm2-5-1-2b-thinking
domain: llm
status: published
updated: 2026-09-10
sources:
  - https://www.liquid.ai/models
  - https://www.liquid.ai/blog/lfm2-5-1-2b-thinking-on-device-reasoning-under-1gb
  - https://huggingface.co/LiquidAI/LFM2.5-1.2B-Thinking
features:
  toolUse: true
  vision: false
highlights:
  - "1GB 미만(약 900MB) 메모리 소요 온디바이스 추론 모델"
  - "생각 사슬(Thinking Trace) 기반 추론 능력 강화"
  - "Doom Looping 현상을 방지하는 커리큘럼 RLVR 및 DPO 학습법"
---

# LFM2.5-1.2B-Thinking 소개

## 개요
LFM2.5-1.2B-Thinking은 Liquid AI가 개발한 1.2B 파라미터 규모의 온디바이스 전용 추론(Reasoning) 모델입니다. 스마트폰 및 에지 기기에서 약 900MB 미만의 메모리 공간만 차지하며, 오프라인 환경에서도 빠른 속도로 고성능 단계별 추론 능력을 수행하도록 특화되었습니다.

최종 응답을 출력하기 전 생각 과정(Thinking Trace)을 먼저 생성함으로써 수학 문제 해결, 지시 이행, 도구 활용 등 에이전트성 작업의 정밀도를 대폭 끌어올렸습니다.

## 기술 특징
LFM2.5-1.2B-Thinking은 28T 토큰의 사전학습 체크포인트를 바탕으로 SFT, DPO 및 커리큘럼 기반 GRPO 방식의 비검증 강화학습(RLVR)을 적용하여 훈련되었습니다. 소형 추론 모델에서 자주 발생하는 무한 루프("Doom Looping") 문제를 방지하기 위해 DPO 선호도 데이터에 무한 루프 응답을 거절쌍으로 포함하고 n-gram 패널티를 적용하여 루프 발생 비율을 15.74%에서 0.36%로 대폭 축소했습니다.

벤치마크 평가 결과 MATH-500 87.96점, Multi-IF 69.33점, BFCLv3 도구 사용 56.97점, GSM8K 85.60점을 기록하여 LFM2.5-1.2B-Instruct 대비 추론 및 수학 능력이 급격히 향상되었습니다. 파라미터가 40% 더 많은 Qwen3-1.7B(Thinking mode)와 대등하거나 뛰어난 성능을 발휘하면서도 출력 토큰 수를 효율적으로 줄였습니다.

## 사용 사례
공식 문서에 명시된 주요 사용 사례는 다음과 같습니다:
- 모바일 및 에지 기기에서의 오프라인 멀티스텝 추론 및 문제 해결
- 시퀀스 도구 호출 계획 수립 및 결과 검증이 필요한 에이전트(Agentic) 작업
- 복잡한 계산 및 논리 검증을 요구하는 오프라인 수학/프로그래밍 보조
- 1GB 이하 극저메모리 환경의 온디바이스 에이전트 배포

## 한계
생각 과정(Thinking Trace) 생성이 수반되므로 일반적인 대화, 일상적인 채팅, 창의적 글쓰기 작업에는 추론 지연이 발생할 수 있어 Instruct 모델(LFM2.5-1.2B-Instruct) 사용이 권장됩니다. 또한 지식 집약적인 일반 상식 퀴즈 질문 답변에는 파라미터 한계가 존재합니다.
