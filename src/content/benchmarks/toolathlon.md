---
benchmarkId: toolathlon
domain: llm
status: published
updated: 2026-05-15
sources:
  - "https://huggingface.co/datasets/hkust-nlp/Toolathlon"
  - "https://github.com/hkust-nlp/Toolathlon"
  - "https://arxiv.org/abs/2510.25726"
organization: hkust-nlp
paperUrl: "https://arxiv.org/abs/2510.25726"
highlights:
  - "현실 환경에서 600개 이상의 다양한 도구(tools)를 사용하는 능력을 평가"
  - "이메일, 캘린더 관리, 데이터베이스 모니터링 등 복잡하고 다단계의 장기(long-horizon) 워크플로우를 테스트"
  - "108개의 수작업 또는 큐레이션된 태스크와 Model Context Protocol(MCP) 서버 기반의 도구들을 포함"
---

# Toolathlon

## 개요
Toolathlon(Tool Decathlon)은 언어 에이전트(Language Agents)가 다양하고 현실적이며 긴 수행 과정(long-horizon)을 요구하는 태스크를 얼마나 잘 수행하는지 평가하기 위한 벤치마크입니다. 단순화된 태스크나 제한된 도메인을 넘어서, 일상적인 플랫폼(Google Calendar, Notion 등)부터 전문적인 소프트웨어(WooCommerce, Kubernetes, BigQuery 등)까지 아우르는 32개의 소프트웨어 애플리케이션과 604개의 도구를 포함합니다.

## 평가 방법
평가에는 108개의 태스크가 포함되며, 태스크를 완료하기 위해 에이전트는 평균 약 20회의 턴에 걸쳐 여러 앱과 도구들을 상호작용해야 합니다. 초기 환경 상태는 실제 소프트웨어 환경(예: 수십 명의 학생이 등록된 Canvas 강좌, 실제 재무 스프레드시트 등)을 반영하여 다양하게 설정됩니다. 각 태스크는 전용 평가 스크립트를 통해 엄격하게 검증 및 채점됩니다. (성공률 % 측정)

## 의의 및 한계
기존의 도구 사용(tool use) 벤치마크들이 제한된 환경의 짧은 상호작용만을 평가했다면, Toolathlon은 실제 복잡한 워크플로우에서 모델이 여러 도구를 결합해 장기적인 목표를 달성할 수 있는지를 평가합니다. 이를 통해 현재 최고 수준(SOTA)의 모델들조차 실세계의 복잡한 태스크에서는 아직 낮은 성공률을 보인다는 점을 입증하고 향후 연구의 지향점을 제시합니다.
