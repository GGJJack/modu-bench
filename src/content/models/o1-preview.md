---
modelId: o1-preview
domain: llm
status: published
updated: 2026-09-03
sources:
  - https://openai.com/index/introducing-openai-o1-preview/
  - https://platform.openai.com/docs/guides/reasoning
  - https://developers.openai.com/api/docs/guides/reasoning
features:
  toolUse: true
  extendedThinking: true
highlights:
  - "OpenAI가 선보인 생각하는 연산 아키텍처 기반 혁신적 추론(Reasoning) 모델"
  - "강화 학습 기반의 비공개 사고 체인(CoT)으로 수학(AIME), 과학(GPQA), 코딩(Codeforces) 최상위 성능 기록"
  - "128K 컨텍스트 윈도우 지원 및 정교한 문제 자가 수정(Self-correction) 능력 탑재"
relatedOrganization: openai
---

# OpenAI o1-preview 소개

## 개요
OpenAI o1-preview는 2024년 9월 12일 OpenAI가 공식 발표한 생각하는 파라다임 기반의 플래그십 추론(Reasoning) 언어 모델입니다 ([OpenAI o1 Announcement](https://openai.com/index/introducing-openai-o1-preview/)). 기존의 일반 대화형 LLM들이 사용자의 프롬프트 입력에 대해 즉각적으로 답변 토큰을 생성했던 방식과 달리, o1-preview는 응답을 출력하기 전 내부적으로 충분한 '생각 시간(Think time)'을 갖고 문제를 다각도로 분석하여 최선의 해법을 탐색합니다 ([OpenAI Reasoning Guide](https://platform.openai.com/docs/guides/reasoning)). 고난도 수학, 박사급 학례 과학 지식, 복잡한 알고리즘 디버깅 등 극도의 논리적 엄밀성이 요구되는 도메인에서 사람에 준하거나 상회하는 수준의 정밀한 추론 능력을 제공합니다.

## 기술 특징
o1-preview의 핵심 기술적 근간은 대규모 강화 학습(Reinforcement Learning, RL)을 통해 훈련된 내부 사고 체인(Chain of Thought, CoT) 구조입니다 ([OpenAI Reasoning Guide](https://platform.openai.com/docs/guides/reasoning)). 모델은 최종 답변을 제시하기 전 비공개 사고 토큰(Reasoning Tokens)을 내부적으로 생성하면서 문제 요구사항을 세부 단계로 분해하고, 가설을 수립 및 검증하며 연산 도중 발생한 오류를 자가 수정(Self-correction)합니다. 128,000 토큰(128K)의 풍부한 컨텍스트 윈도우를 지원하며, 국제수학올림피아드 예선(AIME) 및 물리/화학/생물 복합 지식을 평가하는 GPQA Diamond 벤치마크, 그리고 코딩 경쟁 플랫폼 Codeforces 등에서 이전 세대 모델들을 크게 압도하는 전무후무한 성적을 거두었습니다 ([OpenAI Developers Docs](https://developers.openai.com/api/docs/guides/reasoning)).

## 사용 사례
o1-preview는 정교한 논리 검증이 핵심인 고난도 소프트웨어 아키텍처 설계, 복잡한 리팩토링, 알고리즘 최적화, 그리고 학술 연구 분야에 유용하게 쓰입니다 ([OpenAI o1 Announcement](https://openai.com/index/introducing-openai-o1-preview/)). 개발자들은 대단위 코드베이스에서 발생하는 다단계 레이스 조건(Race condition)이나 보안 허점을 디버깅할 때 o1-preview의 사고 체인을 활용하여 정밀한 원인 분석을 도출합니다. 데이터 과학자 및 연구원들 역시 복잡한 통계 가설 검증, 양자 물리학 수식 유도, 생명과학 문헌의 논리 정합성 검토 및 자동화 에이전트 실행 파이프라인의 컨트롤러로 활발하게 도입하고 있습니다.

## 한계
o1-preview는 수학·과학·코딩 등 하드코어 추론 연산에 고도로 특화되어 있으므로, 단순 문맥 요약이나 문체 변환, 일반적인 대화 및 인문 상식 질의에서는 추론 토큰 소모 대비 가성비가 떨어질 수 있습니다 ([OpenAI Developers Docs](https://developers.openai.com/api/docs/guides/reasoning)). 사고 토큰(Reasoning Tokens)이 API 응답의 출력 한도 및 비용에 합산되므로, 추론 요구도가 적은 일상적 업무에 적용 시 높은 API 단가 및 응답 대기 시간(Latency) 부담이 발생합니다. 아울러 초기 프라이어터리 텍스트 추론 엔진으로 출시되어 이미지·음성 데이터를 직접 처리하는 시각/음성 멀티모달 기능이나 스트리밍 중 실시간 개입 기능 등은 제한적입니다.
