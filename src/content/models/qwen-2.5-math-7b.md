---
modelId: qwen-2.5-math-7b
domain: llm
status: published
updated: 2026-10-31
sources:
  - https://qwenlm.github.io/blog/qwen2.5-math/
  - https://huggingface.co/Qwen/Qwen2.5-Math-7B
  - https://github.com/QwenLM/Qwen2-Math
  - https://arxiv.org/abs/2409.12122
features:
  fineTuning: true
highlights:
  - "Qwen2.5 기반 수학 특화 7B 사전학습 베이스 언어모델"
  - "1조 개(1T+) 이상의 고품질 수리 데이터 코퍼스로 사전학습"
  - "GSM8K, MATH, GaoKao 등 다양한 수학 벤치마크에서 우수한 기초 추론 성능"
relatedOrganization: alibaba
---

# Qwen2.5-Math-7B 소개

## 개요
Qwen2.5-Math-7B는 알리바바 클라우드(Alibaba Cloud)가 2024년 9월 19일 공개한 수학 전문 오픈소스 베이스 대형 언어 모델입니다. Qwen2.5의 뛰어난 언어 이해 및 코드 생성 기초 능력을 바탕으로 초기화되었으며, 70억(7B) 파라미터 규모를 가집니다. 지시어 미세조정(Instruct) 모델의 기반이 되는 베이스 모델로서, 수학 문제 해결 및 수리 도메인 특화 미세조정(Fine-tuning)을 위한 기초 모델로 설계되었습니다.

## 기술 특징
기존 Qwen2-Math에서 사용된 데이터셋보다 확장된 1조 개(1T) 이상의 토큰으로 구성된 Qwen Math Corpus v2를 통해 사전학습되었습니다. Qwen2-Math-72B-Instruct 모델을 활용해 합성한 고품질 수학 데이터와 웹 문서, 수학 도서, 코드 데이터셋을 대규모로 정제하여 주입했습니다. 기본 컨텍스트 길이는 4,096 토큰이며, 영어뿐만 아니라 중국어 수리 문제에 대한 기초 이해력과 수식 완성 능력이 크게 향상되었습니다.

## 사용 사례
Qwen2.5-Math-7B는 도메인 특화 지시어 미세조정(SFT), 수리 연구용 어댑터(LoRA/QLoRA) 개발, 그리고 고난도 과학·공학 계산 파이프라인의 시작점으로 활용됩니다. 또한 Few-shot 프롬프팅 방식을 통해 수학적 수식 완성, 증명 생성 연구 및 교육용 수학 데이터 합성 실험에 쓰입니다.

## 한계
이 모델은 대화형 정렬이나 지시어 준수 학습이 적용되지 않은 사전학습(Base) 모델이므로, 질문-답변 형태의 대화나 복잡한 지시문 직접 수행에는 적합하지 않고 추가 미세조정이 필요합니다. 기본 컨텍스트 길이가 4,096 토큰으로 제한되어 있어 장문의 기술 보고서나 논문 전체를 한 번에 처리하기에는 제한이 있습니다. 또한 수리 텍스트 및 수식 처리에 집중되어 시각 자료나 다중 모달 입력을 직접 처리할 수 없습니다.
