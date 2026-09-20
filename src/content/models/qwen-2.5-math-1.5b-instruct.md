---
modelId: qwen-2.5-math-1.5b-instruct
domain: llm
status: published
updated: 2026-09-20
sources:
  - https://qwenlm.github.io/blog/qwen2.5-math/
  - https://huggingface.co/Qwen/Qwen2.5-Math-1.5B-Instruct
  - https://github.com/QwenLM/Qwen2-Math
  - https://arxiv.org/abs/2409.12122
features:
  toolUse: true
  vision: false
  fineTuning: true
highlights:
  - "1.54B 경량 수학 문제 해결 전문 언어모델"
  - "CoT(Thinking) 및 TIR(Tool-Integrated Reasoning) 추론 지원"
  - "영어 및 중국어 수학 벤치마크 특화"
relatedOrganization: alibaba
---

# Qwen2.5-Math-1.5B-Instruct 소개

## 개요
Qwen2.5-Math-1.5B-Instruct는 알리바바 클라우드(Alibaba Cloud)가 2024년 9월 발표한 수학 특화 소형 오픈 언어모델이다. Qwen2.5-1.5B를 기반으로 대규모 수학 관련 합성 데이터 및 풀이 데이터로 정교하게 미세조정되었으며, 15.4억(1.54B) 파라미터라는 매우 적은 파라미터 크기에도 불구하고 뛰어난 수학 문제 해결 능력을 보여준다.

## 기술 특징
자연어 사고 과정(Chain-of-Thought, CoT) 추론뿐만 아니라 파이썬(Python) 코드 실행기 연동을 통한 도구 통합 추론(Tool-Integrated Reasoning, TIR)을 지원한다. 이를 통해 복잡한 다단계 수식 계산이나 기하/통계 문제 분석 시 외부 코드 실행 결과를 활용하여 계산 오류를 극적으로 감소시킨다.

## 사용 사례
모바일 기기나 Edge AI 환경, 소형 로컬 서버에서 실행 가능한 수학 교육 보조 보조도구, 수식 자동 검증기, 지능형 튜터링 시스템으로 활용된다. 저전력/저메모리 환경에서도 빠르게 수식 풀이 과정을 생성할 수 있어 에듀테크 서비스 구축에 최적화되어 있다.

## 한계
수학 이외의 일반 대화, 창의적 글쓰기, 전문 법률/의료 문서 분석 등 일반 범용 NLU 작업에서는 성능 제약이 존재한다. 컨텍스트 윈도우는 4,096(4K) 토큰으로 제한되므로 매우 긴 문서 처리에는 적합하지 않다.
