---
modelId: lfm2-5-1-2b-instruct
domain: llm
status: published
updated: 2026-09-10
sources:
  - https://www.liquid.ai/models
  - https://www.liquid.ai/blog/introducing-lfm2-5-the-next-generation-of-on-device-ai
  - https://huggingface.co/LiquidAI/LFM2.5-1.2B-Instruct
features:
  toolUse: true
  vision: false
highlights:
  - "1.2B 파라미터 경량 온디바이스 지시 이행 모델"
  - "28T 토큰 사전학습 및 다단계 RL 적용"
  - "IFEval 및 BFCLv3 도구 사용 상위권 성적"
---

# LFM2.5-1.2B-Instruct 소개

## 개요
LFM2.5-1.2B-Instruct는 Liquid AI가 개발한 1.2B 파라미터 규모의 온디바이스 전용 경량 언어 모델입니다. 스마트폰, 모바일 NPU, 차량용 인포테인먼트 등 연산 및 메모리 자원이 제한된 에지 기기에서 빠르게 동작하도록 설계되었습니다.

기존 LFM2 아키텍처를 기반으로 사전학습 토큰 수를 10T에서 28T 토큰으로 확장하고, 대규모 다단계 강화학습(Reinforcement Learning) 및 선호도 정렬(Preference Alignment) 과정을 거쳐 구축되었습니다.

## 기술 특징
LFM2.5-1.2B-Instruct는 총 11억 7천만(1.17B) 파라미터를 보유하며, 16개 레이어(10개의 이중 게이트 컨볼루션 블록 및 6개의 GQA 블록)로 구성된 하이브리드 구조를 사용합니다. 컨텍스트 윈도우는 최대 32,768 토큰을 지원합니다.

지시 이행(Instruction Following) 및 도구 사용(Tool Use) 능력이 대폭 향상되어 IFEval 벤치마크 86.23점, BFCLv3 도구 사용 벤치마크 49.12점을 기록하는 등 동급 1B~2B 언어 모델(Llama 3.2 1B Instruct, Gemma 3 1B IT 등) 대비 우수한 성적을 보여줍니다. 또한 1GB 미만의 저메모리 환경에서 빠른 추론 속도를 제공하며, llama.cpp, vLLM, MLX, ONNX 등 다양한 추론 프레임워크와 호환됩니다.

## 사용 사례
공식 문서에 명시된 주요 사용 사례는 다음과 같습니다:
- 에지 기기 기반 오프라인 코파일럿 및 생산성 보조 도구
- 차량 내 음성 및 지시 이행 인포테인먼트 에이전트
- 데이터 추출 및 검색 증강 생성(RAG) 파이프라인
- 파이썬 함수 호출 기반 도구 사용(Tool Use) 에이전트

## 한계
1.2B 파라미터의 경량 모델 특성상 지식 집약적인 질문 답변(Knowledge-intensive tasks) 및 복잡한 프로그래밍 코딩 작업에는 권장되지 않습니다. 깊은 정밀 지식이 요구되는 영역에서는 수십B 이상의 고성능 모델이나 외부 지식 기반 RAG 체계와 연동하여 사용하는 것이 적합합니다.
