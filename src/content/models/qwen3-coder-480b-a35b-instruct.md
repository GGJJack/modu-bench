---
modelId: qwen3-coder-480b-a35b-instruct
domain: llm
status: published
updated: 2026-09-12
sources:
  - https://qwenlm.github.io/blog/qwen3-coder/
  - https://github.com/QwenLM/Qwen3-Coder
  - https://huggingface.co/Qwen
features:
  toolUse: true
  vision: false
highlights:
  - "총 480B 파라미터 / 활성 35B MoE 아키텍처"
  - "기본 256K 및 YaRN 보간 시 최대 1M 컨텍스트 지원"
  - "Long-horizon Agent RL 기반 에이전트 코딩 및 SWE-Bench 최적화"
relatedOrganization: alibaba
---

# Qwen3-Coder-480B-A35B-Instruct 소개

## 개요
Qwen3-Coder-480B-A35B-Instruct는 알리바바 클라우드 Qwen 팀이 2025년 7월에 공개한 코딩 및 에이전트 작업 특화 대형 언어 모델입니다. 총 480억(480B)개의 파라미터 중 요청당 35억(35B)개의 파라미터가 활성화되는 혼합 전문가(Mixture-of-Experts, MoE) 구조를 취하고 있습니다.

이 모델은 기본적으로 256K 토큰의 길이를 지원하며, YaRN 등의 보간 기법을 통해 최대 1M 토큰까지 컨텍스트 확장이 가능합니다. 에이전트 코딩, 브라우저 활용, 도구 연동 분야에서 오픈소스 모델 기준 최고 수준의 성능을 제공하며 Claude Sonnet 4 등 상용 모델과 대등한 역량을 제시하도록 설계되었습니다.

## 기술 특징
Qwen3-Coder는 7.5조(7.5T) 토큰 데이터셋으로 사전 학습되었으며, 이 중 코드 데이터 비중이 70%에 달합니다. 사전 학습 시 Qwen2.5-Coder를 활용해 노이즈 데이터를 정제하고 합성 데이터를 생성함으로써 데이터 품질을 향상시켰습니다.

Post-Training 단계에서는 코드 실행 결과 기반의 강화학습(Code RL)과 다중 턴 상호작용 기반의 Long-Horizon Agent RL이 도입되었습니다. 알리바바 클라우드 인프라를 바탕으로 20,000개의 독립적인 환경을 병렬로 구동하여 실제 소프트웨어 엔지니어링 작업(SWE-Bench Verified 등)에서 뛰어난 도구 활용 및 계획 수립 성능을 구현했습니다.

## 주요 기능 및 사용 사례
Qwen3-Coder-480B-A35B-Instruct는 에이전트 환경 및 개발 도구와의 유기적인 연동을 지원합니다.
* **Qwen Code CLI**: 오픈소스로 제공되는 전용 CLI 도구로, 터미널 환경에서 다중 도구 연동 코딩 작업을 자동 수행할 수 있습니다.
* **Claude Code 및 Cline 연동**: DashScope API를 통해 Claude Code 터미널 도구 및 Cline VS Code 확장 등 주요 개발 프레임워크와 직접 호환됩니다.
* **리포지토리 단위 작업**: 256K 이상의 넓은 컨텍스트 창을 활용하여 대규모 프로젝트 전체 분석, PR 검토 및 복합적인 버그 수정 작업을 지원합니다.

## 한계
총 480B 규모의 MoE 아키텍처 특성상 분산 추론 환경 및 대용량 VRAM 메모리가 요구됩니다. 또한 본 모델은 텍스트 및 코드 전용 인스트럭트 모델로, 이미지 및 영상 분석과 같은 비전(Vision) 입력은 지원하지 않습니다.
