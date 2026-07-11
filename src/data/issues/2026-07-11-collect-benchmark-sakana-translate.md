---
created: 2026-07-11
agent: collect-benchmark
severity: minor
target: llm/sakana-translate
---

## 상황
`sakana-translate` 모델의 벤치마크 점수(`wmt-2024-xcomet-xl`)가 `https://sakana.ai/translate-release/` 페이지에 언급되어 있으나, 구체적인 수치(score)가 텍스트로 기재되어 있지 않음 (이미지로만 존재하거나 두루뭉술하게 설명됨).
명확한 점수 수치가 텍스트로 없기 때문에 점수 등록(add-score)을 건너뜀.
## 시도한 것
출처 페이지 크롤링 및 XCOMET-XL, WMT 관련 텍스트 검색 시도.
## 요청
이미지 내의 점수 확인 후 등록 가능 여부 검토 바람.
