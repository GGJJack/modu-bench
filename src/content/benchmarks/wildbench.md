---
benchmarkId: wildbench
domain: llm
status: published
updated: 2026-08-10
sources:
  - https://github.com/allenai/WildBench
  - https://huggingface.co/spaces/allenai/WildBench
organization: allenai
highlights:
  - "실제 사용자 환경(in the wild)의 도전적인 과제 기반 평가 (v2)"
  - "GPT-4-turbo와 Claude-3-Opus를 활용한 체크리스트 기반 개별 점수(WB-Score) 및 승률(WB-Reward) 계산"
  - "길이 편향 완화(Length Bias Mitigation)를 위한 커스텀 페널티 시스템 도입"
---

# WildBench

## 개요
WildBench는 AllenAI에서 개발한 벤치마크로, 실제 사용자들이 경험하는 도전적인 과제들을 기반으로 대규모 언어 모델(LLM)의 성능을 평가합니다. 현재 v2가 공개되었으며 합성된 데이터가 아닌 실제 환경(in the wild)의 복잡한 명령어 및 작업(Tasks)을 통해 더욱 실질적인 모델의 능력을 측정하는 것을 목표로 합니다.

## 평가 방법
개별 모델의 절대적인 성능을 측정하는 WB Score와 모델 간의 성능을 비교하는 WB Reward-Mix를 사용합니다. 각 과제마다 GPT-4-turbo와 Claude-3-Opus를 사용하여 5~10개의 평가 체크리스트를 생성한 후, 이를 기반으로 LLM 심판(Judge)이 응답을 평가합니다. 이는 단일 심판 모델의 편향을 줄이고 평가의 해석 가능성을 높입니다.

## 한계 극복 (길이 편향 완화)
LLM 심판이 긴 응답에 더 높은 점수를 부여하는 경향(Length Bias)을 완화하기 위해, 승리한 모델의 응답이 패배한 모델의 응답보다 특정 길이(K 문자) 이상 더 긴 경우 '약간 우세(Slightly Win)' 결과를 '무승부(Tie)'로 변환하는 길이 페널티 시스템을 적용하고 있습니다.
