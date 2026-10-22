---
benchmarkId: jhumaneval
domain: llm
status: published
updated: 2026-10-22
sources:
  - https://huggingface.co/datasets/kogi-jwu/jhumaneval
organization: kogi-jwu
highlights:
  - "일본어 코드 생성 평가"
---

# JHumanEval

## 개요
JHumanEval(Japanese Hand-Translated HumanEval)은 LLM의 코드 생성 능력을 평가하는 표준 벤치마크인 HumanEval의 일본어 번역판입니다.

기계번역(DeepL, GPT-4) 결과를 바탕으로 일본인 프로그래머가 모든 내용을 검수 및 수정하여, 실제 코드를 작성할 수 있도록 퀄리티를 높였습니다.

## 평가 방법
원본 HumanEval과 마찬가지로 Python 프로그래밍 문제를 다루며, 프롬프트나 함수 시그니처에 포함된 일본어 독스트링(Docstring)과 주석을 바탕으로 기능에 맞는 코드를 완성하게 됩니다.

의도적으로 원본 영어 HumanEval에 있던 오류(불완전한 설명 등)는 그대로 유지하여, 불완전한 문서화 환경에서의 코드 생성 능력을 함께 측정하도록 설계되었습니다.

## 점수 해석
Pass@1, Pass@10 등 원본 HumanEval과 동일한 방식으로 생성된 코드의 정확도를 측정합니다. 점수가 높을수록 일본어 지시문을 정확히 이해하고 올바른 Python 코드를 작성할 수 있음을 나타냅니다.

## 한계와 비판
기존 데이터셋 번역의 한계로 인해, 원본 HumanEval이 가지는 단점과 편향을 그대로 물려받습니다. 또한 파이썬(Python)에 집중되어 있어 타 언어 생성 능력을 일반화하기는 어렵습니다.
