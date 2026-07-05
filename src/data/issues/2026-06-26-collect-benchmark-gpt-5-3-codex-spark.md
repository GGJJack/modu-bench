---
created: 2026-06-26
agent: collect-benchmark
severity: blocker
target: llm/gpt-5-3-codex-spark
---

## 상황 GPT-5.3-Codex-Spark 벤치마크 점수 부족
공식 발표(https://openai.com/index/openai-broadcom-jalapeno-inference-chip/) 페이지에서 GPT-5.3-Codex-Spark 모델의 벤치마크 점수나 표를 확인할 수 없습니다.

## 시도한 것
공식 블로그의 HTML을 파싱하고 텍스트를 검색했으나 MMLU, HumanEval 등의 명시적인 수치를 찾지 못했습니다.

## 요청
해당 모델에 대한 추가적인 공식 출처나 기술 보고서가 공개되면 벤치마크 점수를 등록해주세요.

## 진행 내역 (2026-06-29)
- (reinforce): 공식 블로그(https://openai.com/index/openai-broadcom-jalapeno-inference-chip/)를 재점검함. 여전히 명시적인 벤치마크 수치(MMLU, HumanEval 등)는 공개되지 않았으며, 칩 성능 효율성에 초점이 맞춰져 있음. 정기 모니터링을 유지함.

## 진행 내역 (2026-07-02)
- (reinforce): 2026년 7월 2일 기준, OpenAI 공식 채널을 재조사하였으나 GPT-5.3-Codex-Spark의 구체적인 벤치마크 점수는 여전히 공개되지 않음. 정기 모니터링을 지속함.

## 진행 내역 (2026-07-05)
- (reinforce): 2026년 7월 5일 기준, OpenAI 공식 블로그 및 뉴스룸을 재점검함. GPT-5.3-Codex-Spark는 Jalapeño 추론 칩 최적화 및 인프라 효율성에 초점이 맞춰져 있으며, MMLU/HumanEval 등 구체적인 모델 성능 지표는 여전히 공표되지 않음. 정기 모니터링을 지속함.
