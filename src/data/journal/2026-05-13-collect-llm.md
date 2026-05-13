---
title: "LLM 수집 작업 (2026-05-13)"
skill: collect-llm
status: completed
---

## 작업 계획
1. 신규 모델 발견 및 등록 (3~5건): Gemma 3, Qwen3, Kimi K2.5, NVIDIA Nemotron 3 Nano 등 등록
2. 기존 모델 누락 메타데이터 보강 (3~5건): `deepseek-v3.2`, `qwen-3-235b`, `glm-5`, `gemma-3-27b`, `llama-4-scout-17b` 등 보강
3. 변경 사항 기록 및 검증

## 발견 및 보강 기록
| 모델 ID | 필드 | 변경 내용 | 출처 |
| :--- | :--- | :--- | :--- |
| gemma-3-4b | 신규 등록 | Google Gemma 3 4B (dense), 128k, $0.04/$0.08 | https://aws.amazon.com/bedrock/pricing/ |
| gemma-3-12b | 신규 등록 | Google Gemma 3 12B (dense), 128k, $0.09/$0.29 | https://aws.amazon.com/bedrock/pricing/ |
| kimi-k2.5 | 신규 등록 | Moonshot AI Kimi K2.5, 128k, $0.6/$3.0 | https://aws.amazon.com/bedrock/pricing/ |
| qwen-3-30b-a3b | 신규 등록 | Alibaba Cloud Qwen3-30B-A3B (3B active MoE), 128k, $0.1545/$0.618 | https://qwenlm.github.io/blog/qwen3/ |
| nvidia-nemotron-3-nano | 신규 등록 | NVIDIA Nemotron 3 Nano 30B A3B (MoE), 128k, $0.06/$0.24 | https://aws.amazon.com/bedrock/pricing/ |
| deepseek-v3.2 | 보강 | parameterSize: DeepSeek-V3.2 (MoE), 128k, $0.62/$1.85 | https://aws.amazon.com/bedrock/pricing/ |
| qwen-3-235b | 보강 | parameterSize: 235B (22B active) MoE, 128k, $0.2266/$0.9064 | https://qwenlm.github.io/blog/qwen3/ |
| glm-5 | 보강 | parameterSize: GLM-5 (MoE), 128000, pricing: $1.0/$3.2 | https://aws.amazon.com/bedrock/pricing/ |
| gemma-3-27b | 보강 | parameterSize: 27B (dense), 128k, $0.23/$0.38 | https://aws.amazon.com/bedrock/pricing/ |
| qwen-3-next-80b | 보강 | parameterSize: 80B (3B active) MoE, 128k, $0.15/$1.2 | https://aws.amazon.com/bedrock/pricing/ |
| llama-4-maverick-17b | 보강 | parameterSize: 17B (MoE) | https://aws.amazon.com/bedrock/pricing/ |
| llama-4-maverick-8b | 보강 | parameterSize: 8B (MoE) | https://aws.amazon.com/bedrock/pricing/ |
| llama-4-scout-17b | 보강 | parameterSize: 17B (dense) | https://aws.amazon.com/bedrock/pricing/ |
| llama-4-scout-8b | 보강 | parameterSize: 8B (dense) | https://aws.amazon.com/bedrock/pricing/ |

## 검증 결과
- `bun run skills/manage-model/scripts/model.ts get` 명령을 통해 모든 변경 사항이 반영되었음을 확인했습니다.
- Llama 4 계열(Maverick, Scout) 및 Qwen3 계열의 파라미터 사이즈를 보강하였습니다.
- `bun run build`를 통해 프로젝트 빌드 정상 여부를 확인했습니다.
