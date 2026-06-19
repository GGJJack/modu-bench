---
modelId: vibethinker-3b
domain: llm
status: published
updated: 2026-06-19
sources:
  - https://huggingface.co/WeiboAI/VibeThinker-3B
  - https://github.com/WeiboAI/VibeThinker
  - https://arxiv.org/abs/2606.16140
features:
  toolUse: false
  vision: false
highlights:
  - "3B 규모로 671B~1T 규모의 거대 모델급 추론 성능 달성"
  - "AIME26 94.3, IMO-AnswerBench 76.4 등 검증 가능한 추론 벤치마크 SOTA"
  - "Spectrum-to-Signal Principle(SSP) 기반의 효율적인 사후 학습 방법론 적용"
relatedOrganization: weibo-ai
---

# VibeThinker-3B 소개

## 개요
VibeThinker-3B는 웨이보AI(WeiboAI)가 2026년 6월에 공개한 30억 파라미터(3B) 규모의 소형 고성능 추론 모델입니다. 이 모델은 '검증 가능한 추론(Verifiable Reasoning)' 능력이 모델의 크기에만 의존하지 않는다는 '매개변수 압축-커버리지 가설'을 바탕으로 개발되었습니다. 3B라는 컴팩트한 크기에도 불구하고 수학, 코딩, STEM 분야에서 600B 파라미터 이상의 DeepSeek V3나 1T 파라미터급의 Kimi K2.5와 대등한 수준의 성능을 보여주며 소형 언어 모델(SLM)의 한계를 넓혔습니다.

## 기술 특징
VibeThinker-3B는 Qwen2.5-Coder-3B를 기반으로 WeiboAI가 독자적으로 고안한 'Spectrum-to-Signal Principle(SSP)' 파이프라인을 통해 학습되었습니다. 이 과정은 커리큘럼 기반의 2단계 지도 학습(SFT), 다중 도메인 추론 강화 학습(RL), 그리고 오프라인 자가 증류(Self-Distillation) 과정을 포함합니다. 특히 추론 단계에서 'CLR(Claim-Level Reliability Assessment)'이라는 테스트 시간 스케일링 전략을 도입하여 정답 검증이 가능한 태스크에서의 정확도를 추가로 향상시켰습니다. 64K 컨텍스트 윈도우를 지원하며, 긴 추론 경로를 유지하면서도 높은 정확도를 보장합니다.

## 사용 사례
이 모델은 수학 문제 풀이, 경진대회용 프로그래밍(LeetCode 스타일), 복잡한 논리 추론이 필요한 STEM 작업에 최적화되어 있습니다. 실제 LeetCode 위클리 콘테스트에서 96.1%의 수락률을 기록하는 등 실무적인 코딩 문제 해결 능력을 입증했습니다. 낮은 컴퓨팅 자원에서도 구동 가능하면서도 고도의 지능이 필요한 온디바이스 AI 서비스나, 정답이 명확히 존재하는 전문 지식 검증 봇 등으로 활용하기에 적합합니다.

## 한계
VibeThinker-3B는 수학과 코딩 등 '정답 확인이 가능한' 추론 태스크에 고도로 특화되어 설계되었습니다. 따라서 에이전트 호출(Tool-calling)이나 복잡한 API 연동, 자율 코딩 에이전트 작업에는 공식적으로 권장되지 않습니다. 또한 방대한 오픈 도메인 지식이나 일반적인 창의적 대화, 장기적인 문맥 유지가 필요한 시나리오에서는 수천억 파라미터 규모의 범용 모델에 비해 정보량과 커버리지가 부족할 수 있습니다.
