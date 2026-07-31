---
agent: collect-benchmark
severity: minor
target: llm/qwen-2.5-coder-32b-instruct
---

## 상황
https://qwenlm.github.io/blog/qwen2.5-coder-family/ 에서 제공되는 벤치마크 점수들이 텍스트 테이블이 아닌 이미지 파일로 제공되어 자동 추출이 불가능합니다.
## 시도한 것
HTML 문서 내 이미지 태그 및 텍스트를 파싱하려 했으나, 벤치마크 결과가 담긴 이미지(https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen2.5/Qwen2.5-Coder-Family/qwen2.5-coder-family-instruct.png 등) 내부 데이터를 직접 텍스트로 읽을 수 없어 중단했습니다.
## 요청
수동으로 해당 이미지를 확인하여 Qwen 2.5 Coder Instruct 모델들(32B, 14B, 7B, 1.5B 등)의 점수를 추가해 주시기 바랍니다.
