---
modelId: solar-pro-preview-instruct
domain: llm
status: published
updated: 2026-09-14
sources:
  - https://www.upstage.ai/products/solar-pro-preview
  - https://huggingface.co/upstage/solar-pro-preview-instruct
  - https://arxiv.org/abs/2409.12186
features:
  fineTuning: true
highlights:
  - "단일 GPU(80GB VRAM) 탑재 가능한 22B 파라미터 모델"
  - "Depth Up-scaling(DUS) 기법 기반 확장 (Phi-3-medium 14B → 22B)"
  - "MMLU-Pro 52.11, IFEval 84.37 등 벤치마크 고득점 달성"
relatedOrganization: upstage
---

# Solar Pro Preview Instruct 소개

## 개요
Solar Pro Preview Instruct는 국내 인공지능 기업 업스테이지(Upstage)가 2024년 9월에 출시한 220억 파라미터(22B) 규모의 지시 이행 튜닝(Instruction-tuned) 대형 언어 모델입니다. 단일 GPU 환경(80GB VRAM 탑재 카고 카드)에서 효율적으로 구동 가능하도록 설계된 이 모델은, 30B 미만의 매개변수 체급에서 최상위권 고성능을 목표로 개발되었으며 70B 급 모델(Llama 3.1 70B 등)에 비견되는 지화 능력과 지시 수행 성능을 선보였습니다.

## 기술 특징
Solar Pro Preview Instruct는 업스테이지의 대표 기술인 깊이 확장형 업스케일링(Depth Up-scaling, DUS) 기법의 향상된 버전을 바탕으로 훈련되었습니다. 기존 14B 파라미터의 Phi-3-medium 모델을 22B로 연쇄 레이어 확장한 후 고도화된 스케줄링 전략과 정밀하게 큐레이션된 정렬 데이터셋을 통해 미세조정을 진행하였습니다. 벤치마크 평가 결과 MMLU-Pro에서 52.11, IFEval에서 84.37을 기록하는 등 지시 따라하기 및 추론 평가 분야에서 탁월한 성과를 증명했습니다. 대화 프롬프트 구조로는 ChatML 템플릿 표준을 채택하고 있습니다.

## 사용 사례 및 한계
Solar Pro Preview Instruct는 80GB VRAM을 지원하는 단일 A100/H100 GPU 장비에서 독립적인 온프레미스 인스턴스로 운용하기 매우 유용하여, 엔터프라이즈 사내 보안 환경이나 자원 제약이 있는 인프라에서 에이전트 및 대화형 AI 서비스 구축에 적합합니다. MIT 라이선스로 배포되어 연구 및 상업적 목적 모두 자유롭게 활용할 수 있습니다. 단, Preview 버전의 특성상 최대 컨텍스트 윈도우 길이가 4,090(4K) 토큰으로 제한되며 영어 중심의 사전 학습 특성으로 인해 다국어 확장성과 초대형 서류 처리 능력에는 한계가 존재합니다.
