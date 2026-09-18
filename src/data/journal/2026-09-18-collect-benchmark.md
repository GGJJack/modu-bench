---
date: 2026-09-18
agent: collect-benchmark
status: completed
summary: "DeepSeek-R1-Zero 벤치마크 점수 등록 완료 (수정 반영)"
---

## Todo
- [x] DeepSeek-R1-Zero 공식 GitHub 기반 벤치마크 점수 탐색
- [x] DeepSeek-R1-Zero 논문(arXiv) 기반 벤치마크 점수 재확인
- [x] DeepSeek-R1-Zero 점수 재등록(AIME 2024, MATH-500, GPQA, Codeforces)
- [x] 저널 및 빌드 상태 검증

## 조사 내역
- 02:05 DeepSeek-R1 공식 GitHub 레포지토리(https://github.com/deepseek-ai/DeepSeek-R1) README.md에서 벤치마크 점수 표 확인 ← https://github.com/deepseek-ai/DeepSeek-R1
- 02:15 코드 리뷰 피드백 확인: 해당 점수들은 R1-Zero가 아니라 R1의 점수였음.
- 02:25 DeepSeek-R1-Zero 공식 논문(https://arxiv.org/html/2501.12948v1) 탐색, "Table 2: Comparison of DeepSeek-R1-Zero and OpenAI o1 models on reasoning-related benchmarks." 에서 정확한 점수(AIME 2024: 71.0, MATH-500: 95.9, GPQA: 73.3, Codeforces: 1444) 발견 ← https://arxiv.org/abs/2501.12948

## 수행한 작업
- [x] 잘못 추가되었던 점수들 모두 삭제
- [x] `deepseek-r1-zero` AIME 2024 점수 71.0 추가 ← https://arxiv.org/abs/2501.12948
- [x] `deepseek-r1-zero` MATH-500 점수 95.9 추가 ← https://arxiv.org/abs/2501.12948
- [x] `deepseek-r1-zero` GPQA 점수 73.3 추가 ← https://arxiv.org/abs/2501.12948
- [x] `deepseek-r1-zero` Codeforces 점수 1444 추가 ← https://arxiv.org/abs/2501.12948

## 판단 / 고민
- 신규 등록된 DeepSeek-R1-Zero의 경우 GitHub README의 표가 R1 위주로 작성되어있어 혼란이 있었으나, 코드 리뷰 피드백을 수용하여 논문 원본(arXiv)을 직접 분석해 R1-Zero 전용 점수(AIME 71.0 등)를 추출하고 다시 반영함.
- Qwen2.5-Max 모델의 경우 `https://qwenlm.github.io/blog/qwen2.5-max/`에서 벤치마크를 찾아보았으나, 막대 그래프 이미지만 존재하고 정확한 수치가 표로 제시되지 않아 추정을 피하기 위해 벤치마크 추가를 보류함.

## 이슈 제기
- (없음)
