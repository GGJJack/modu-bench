---
benchmarkId: cruxeval
domain: llm
status: draft
updated: 2026-09-15
sources:
  - https://crux-eval.github.io/
highlights:
  - "코드의 실행 결과를 예측하고 추론하는 능력을 평가"
  - "Code Reasoning, Understanding, and Execution Evaluation"
---

# CRUXEval

## 개요
CRUXEval(Code Reasoning, Understanding, and Execution Evaluation)은 코드의 실행 결과를 예측하고 추론하는 능력을 평가하는 벤치마크입니다.

## 벤치마크 목적
The code LM community primarily relies on benchmarks like HumanEval and MBPP, which test the ability to generate short code snippets from natural language specifications. Many efforts overfit to these benchmarks without necessarily improving other fundamentally important abilities of code models such as reasoning about code execution. When it comes to reasoning about code, GPT-4 still seems to have a huge edge over other models but still consistently fails on some surprisingly simple Python programs.
