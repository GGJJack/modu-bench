---
modelId: exaone-3-5-7-8b-instruct
domain: llm
status: published
updated: 2026-08-16
sources:
  - https://www.lgresearch.ai/blog/view?seq=507
  - https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct
  - https://github.com/LG-AI-EXAONE/EXAONE-3.5
  - https://arxiv.org/abs/2412.04862
features:
  toolUse: true
  vision: false
highlights:
  - "7.8B 파라미터 경량화 한국어/영어 대화형 언어모델"
  - "32K 컨텍스트 윈도우 및 효율적인 추론 성능"
  - "실용적 에이전트 및 서비스 구축에 최적화"
relatedOrganization: lg-ai-research
---

# EXAONE 3.5 7.8B Instruct 소개

## 개요
EXAONE 3.5 7.8B Instruct는 LG AI Research가 2024년 12월 발표한 78억(7.8B) 파라미터 규모의 실용적인 경량 대화형 오픈 웨이트 언어모델이다. 32B 모델과 동일한 최고 수준의 데이터 필터링 및 Alignment 기술이 적용되어, 단일 GPU 환경에서도 우수한 성능과 빠른 추론 속도를 제공한다.

## 기술 특징
7.8B 파라미터 규격임에도 32,768(32K) 토큰 컨텍스트 윈도우를 완벽히 지원하며, 효율적인 메모리 사용량으로 우수한 한국어 및 영어 지시 이행 능력을 발휘한다. 지도 미세조정(SFT)과 DPO 학습을 통해 안전성과 유용성을 균형 있게 확장하였으며, 긴 문서 처리나 Q&A에서 안정된 출력 품질을 보장한다.

## 사용 사례
단일 가상 서버나 온프레미스 경량 인프라에서 효율적으로 동작하므로, 고객지원 실시간 챗봇, 사내 문서 간이 검색/요약, 에이전트 연동용 LLM 엔드포인트 구축에 적극 활용된다. Tool Use(함수 호출) 지원을 통해 복잡한 오케스트레이션 로직 구현도 가능하다.

## 한계
32B 이상의 대형 모델에 비해 초고난도 수학 공식 증명이나 복잡한 다단계 추론에서는 성능 제약이 존재할 수 있다. 비영리/연구 목적으로 공개되어 commercial 사용 시 라이선스 준수 요구사항을 점검해야 한다.
