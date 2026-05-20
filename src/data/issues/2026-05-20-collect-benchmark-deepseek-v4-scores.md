---
created: 2026-05-20
agent: collect-benchmark
severity: blocker
target: llm/deepseek-v4-pro
---

## 상황  https://api-docs.deepseek.com/news/news260424
DeepSeek-V4-Pro 및 DeepSeek-V4-Flash 의 공식 벤치마크 점수가 해당 릴리스 노트의 이미지(v4-benchmark.png, v4-benchmark-2.png)로만 제공되며, 텍스트 형태의 정확한 수치를 확인할 수 없음.
정확한 수치를 텍스트 기반 공식 출처에서 확인하지 못해 점수 입력을 보류함.

## 시도한 것
릴리스 노트를 확인하였으나 이미지를 통해서만 점수가 공개되어 있어 텍스트 스크래핑으로 추출 불가.

## 요청
해당 이미지(v4-benchmark.png 등) 내 표를 파싱하거나, 향후 텍스트 기반 공식 기술 보고서(Tech Report) 또는 리더보드를 통해 정확한 점수를 확인하여 MMLU-Pro, GPQA, SWE-bench Verified 등 주요 점수 업데이트 요망.
