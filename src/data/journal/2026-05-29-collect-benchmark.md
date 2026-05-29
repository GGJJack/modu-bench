---
date: 2026-05-29
agent: collect-benchmark
status: completed
summary: "신규 LLM 벤치마크 미비 출처 이슈 등록"
---

## Todo
- 신규 등록된 LLM 모델들의 벤치마크 점수 매칭 시도

## 조사 내역
- 16:50 Cohere Command A+ 모델 발표 블로그 확인 ← https://cohere.com/blog/command-a-plus
- 16:52 Grok Build 0.1 관련 공식 문서 확인, 수치 없음 ← https://x.ai/news/grok-build-cli
- 16:55 OpenAI gpt-oss-120b 정보 탐색 (Vellum.ai 커뮤니티 글 확인) ← https://www.vellum.ai/blog/analysis-openai-o3-vs-gpt-oss-120b
- 17:00 Command A+ 커뮤니티 벤치마크 수치 탐색 ← https://artificialanalysis.ai/articles/cohere-launches-open-weights-model-command-a-more-than-a-year-since-the-command-a-release

## 수행한 작업
- (없음)

## 판단 / 고민
- OpenAI 공식 블로그에서 gpt-oss의 구체적인 점수가 확인되지 않아 이슈로 이월 처리함.
- Grok Build, HCX-007, HCX-DASH-002, HCX-005 등의 모델들에 대한 벤치마크 수치도 쉽게 확인되지 않아 동일하게 이슈 티켓을 생성함.
- Command A+의 경우 공식 블로그와 Artificial Analysis 기사에서 명확한 텍스트 벤치마크 수치를 추출하기 어려워 점수를 임의로 등록하지 않고 이슈를 생성하는 것이 안전함.

## 이슈 제기
- issues/2026-05-29-collect-benchmark-gpt-oss.md
- issues/2026-05-29-collect-benchmark-grok-build.md
- issues/2026-05-29-collect-benchmark-hcx.md
- issues/2026-05-29-collect-benchmark-command-a-plus.md
