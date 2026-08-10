---
benchmarkId: komt-bench
domain: llm
status: published
updated: 2026-08-10
sources:
  - https://github.com/LG-AI-EXAONE/KoMT-Bench
organization: lg-ai-exaone
highlights:
  - "한국어 지시문 준수 능력(Instruction-following capability) 평가"
  - "MT-Bench를 한국어의 특성과 문화적 뉘앙스를 반영하여 번역 및 수정"
  - "EXAONE 3.0 7.8B Technical Report 에서 활용됨"
---

# KoMT-Bench

## 개요
KoMT-Bench는 LG AI Research에서 구축한 언어 모델의 한국어 지시문 준수(Instruction-following) 능력을 평가하기 위한 공식 벤치마크입니다. 이 벤치마크는 EXAONE 3.0 7.8B Instruction-Tuned Language Model의 기술 보고서에서 평가 목적으로 사용되었습니다.

## 평가 방법
기존의 다중턴 대화 평가 벤치마크인 MT-Bench의 데이터셋을 한국어로 번역하고, 단순한 번역을 넘어 한국어의 언어적 특성과 한국의 문화적 뉘앙스를 반영하기 위해 일부 질문들을 수정 및 최적화하여 개발되었습니다.

## 데이터 구성
평가 데이터는 글쓰기(Writing) 등 다양한 범주의 멀티턴(다중 턴) 질의응답으로 구성되어 있습니다. 원본 MT-Bench와 동일한 구조를 가지되, 한국어 환경에 맞게 질문 내용이 세밀하게 조정되어 모델의 실질적인 한국어 이해 및 생성 능력을 심도 있게 측정합니다.
