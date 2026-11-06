---
modelId: phi-1
domain: llm
status: published
updated: 2026-11-06
sources:
  - https://huggingface.co/microsoft/phi-1
  - https://arxiv.org/abs/2306.11644
  - https://www.microsoft.com/en-us/research/publication/textbooks-are-all-you-need/
features:
  toolUse: false
highlights:
  - "1.3B 파라미터 소형 트랜스포머 언어 모델"
  - "Textbooks Are All You Need 논문 기반 고품질 교과서형 합성 데이터 학습"
  - "HumanEval 50.6% 및 MBPP 55.5% pass@1 달성"
  - "MIT 라이선스"
relatedOrganization: microsoft
---

# Phi-1 소개

## 개요
Phi-1은 2023년 6월 Microsoft Research가 발표한 1.3B 파라미터 규모의 코드 특화 소형 트랜스포머 언어 모델입니다. "Textbooks Are All You Need"라는 패러다임을 최초로 제시하며, 방대한 양의 일반 웹 크롤링 데이터 대신 엄선된 고품질 데이터와 합성 생성된 교과서형 텍스트로도 대규모 언어 모델에 필적하는 코딩 성능을 낼 수 있음을 입증했습니다.

단 8대의 A100 GPU로 4일간 학습되었음에도 불구하고, Phi-1은 HumanEval 벤치마크에서 50.6%, MBPP에서 55.5%의 pass@1 정확도를 달성하여 모델 크기 대비 뛰어난 효율성을 보여주었습니다.

## 기술 특징
Phi-1은 표준적인 디코더 전용(Decoder-only) 트랜스포머 아키텍처를 기반으로 하며, 총 540억 토큰(중복 제거 시 70억 유니크 토큰)을 학습에 활용했습니다.

1. **학습 데이터 구성**:
   - The Stack v1.2에서 선별된 고품질 파이썬 코드 및 StackOverflow의 선별된 Q&A 데이터셋 (약 60억 토큰)
   - GPT-3.5(`gpt-3.5-turbo-0301`)를 활용하여 합성 생성한 교과서 및 실습 문제 데이터셋 (약 10억 토큰)
   - 파이썬 프로그래밍 문제 해결 능력을 집중적으로 연마하기 위한 파이썬 연습문제 중심의 미세 조정(Fine-tuning) 데이터셋
2. **소형 모델에서의 창발적 능력(Emergent Properties)**:
   단순 문법 완성을 넘어 복잡한 알고리즘 논리와 다단계 코드 생성 능력을 보이며, 크기가 작은 모델에서도 학습 데이터의 품질이 지능 발현에 결정적 역할을 한다는 점을 규명했습니다.

## 사용 사례
Phi-1은 제한된 컴퓨팅 자원을 가진 엣지 디바이스나 로컬 개발 환경에서 파이썬 코드 작성 및 알고리즘 학습 보조 도구로 유용합니다.

- 파이썬 함수 작성 및 주석 기반의 코드 완성 (Code generation from docstrings)
- 알고리즘 문제 해결 및 기본 프로그래밍 실습 가이드
- 소형 모델의 추론 능력 및 합성 데이터 학습 방법론을 연구하기 위한 학술 연구 베이스라인

## 한계
Phi-1은 주로 파이썬 언어 및 기본 표준 라이브러리(`typing`, `math`, `random`, `collections`, `datetime`, `itertools` 등)에 집중되어 훈련되었습니다.

- 파이썬 외의 다른 프로그래밍 언어나 비표준 외부 라이브러리 활용 시 할루시네이션(잘못된 API 호출)이 발생할 수 있습니다.
- 일반적인 대화나 복잡한 자연어 상식 질문에 대해서는 성능이 제한적이며, 지시문 준수(Instruction following)를 위한 RLHF(인간 피드백 기반 강화학습)가 적용되지 않았습니다.
- 생성된 코드에 보안 취약점(디렉터리 순회, 입력값 검증 부재 등)이 포함될 수 있으므로 실제 프로덕션 환경 도입 전 철저한 코드 검증이 필수적입니다.
