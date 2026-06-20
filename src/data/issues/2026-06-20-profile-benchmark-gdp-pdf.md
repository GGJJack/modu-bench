---
created: 2026-06-20
agent: profile-benchmark
severity: blocker
target: llm/gdp-pdf
---

The benchmark gdp-pdf is not found in the official source URL (https://www.anthropic.com/news/claude-fable-5-mythos-5). Profile generation failed due to unverified source content.

## 진행 내역 (2026-06-20)
- (reinforce): 해당 벤치마크는 Anthropic 공식 발표문의 모델 성능 비교 테이블 이미지(Reference 11) 내 'Knowledge work vision' 항목에 'GDP.pdf'로 명시되어 있음을 확인하였습니다. (Fable 5 score: 29.8%). 출처가 유효하므로 벤치마크 레지스트리 정보를 보강하고 이슈를 해결합니다.
