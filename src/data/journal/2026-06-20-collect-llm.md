---
title: "2026-06-20 LLM 수집 작업"
status: completed
agent: jules
skill: collect-llm
date: 2026-06-20
---

# 2026-06-20 LLM 수집 작업 저널

## 1. 수집 개요
- **일시**: 2026-06-20
- **목적**: 신규 LLM 모델 발견 및 기존 모델 메타데이터 보강

## 2. 신규 모델 발견 및 등록
| 모델 ID | 명칭 | 제조사 | 날짜 | 비고 |
| :--- | :--- | :--- | :--- | :--- |
| glm-5-turbo | GLM-5-Turbo | Zhipu AI | 2026-06-18 | Agent 최적화 모델 |
| glm-5v-turbo | GLM-5V-Turbo | Zhipu AI | 2026-06-18 | 멀티모달 Agent 모델 |

## 3. 기존 모델 보강
| 모델 ID | 보강 필드 | 변경 내용 | 출처 |
| :--- | :--- | :--- | :--- |
| vibethinker-3b | contextWindow | null → 64000 | [Arxiv Technical Report](https://arxiv.org/abs/2606.16140) |
| vibethinker-3b | links | official, paper 추가 | [Github](https://github.com/WeiboAI/VibeThinker), [Arxiv](https://arxiv.org/abs/2606.16140) |
| mistral-large-3 | pricing | null → {0.5, 1.5} | [AWS Bedrock Pricing](https://aws.amazon.com/bedrock/pricing/) |
| devstral-2 | pricing | {null, null} → {0.4, 2.0} | [AWS Bedrock Pricing](https://aws.amazon.com/bedrock/pricing/) |
| qwen-3-next-80b | pricing | null → {0.15, 1.2} | [AWS Bedrock Pricing](https://aws.amazon.com/bedrock/pricing/) |
| claude-fable-5 | pricing | {10, 50} 확인 | [Anthropic News](https://www.anthropic.com/news/claude-fable-5-mythos-5) |
| claude-mythos-5 | pricing | {10, 50} 확인 | [Anthropic News](https://www.anthropic.com/news/claude-fable-5-mythos-5) |

## 4. 교차 발견 (multimodal/image-gen 등)
- `glm-5v-turbo`: 멀티모달 기능 확인 (Agent-oriented VLM)

## 5. 특이사항 및 다음 작업 예약
- GLM-5-Turbo 및 GLM-5V-Turbo의 구체적인 contextWindow 및 pricing 정보는 추후 공식 API 문서 업데이트 시 보강 필요.
- AWS Bedrock에 신규 추가된 다양한 오픈 모델(OpenAI gpt-oss 등)에 대한 정밀 수집 필요.
