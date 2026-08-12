---
date: 2026-08-12
agent: collect-benchmark
status: completed
summary: "baichuan-7b, baichuan-13b-base, baichuan-13b-chat 모델 벤치마크 점수 등록 및 solar-10.7b-base, exaone-3.0-7.8b-base 벤치마크 이슈 생성"
---

## Todo
- [x] baichuan-7b 벤치마크 점수 등록
- [x] baichuan-13b-base 벤치마크 점수 등록
- [x] baichuan-13b-chat 벤치마크 점수 등록
- [x] solar-10.7b-base 벤치마크 점수 등록 (지표 부재로 이슈 생성)
- [x] exaone-3.0-7.8b-base 벤치마크 점수 등록 (접근 불가로 이슈 생성)

## 조사 내역
- 01:30 baichuan-7b 벤치마크 점수 확보 ← https://huggingface.co/baichuan-inc/Baichuan-7B
- 01:35 baichuan-13b-base 벤치마크 점수 확보 ← https://huggingface.co/baichuan-inc/Baichuan-13B-Chat
- 01:35 baichuan-13b-chat 벤치마크 점수 확보 ← https://huggingface.co/baichuan-inc/Baichuan-13B-Chat
- 01:40 solar-10.7b-base 벤치마크 점수 조사 (H6 외 표준 지표 없음) ← https://huggingface.co/upstage/SOLAR-10.7B-v1.0
- 01:45 exaone-3.0-7.8b-base 벤치마크 점수 조사 (401 에러 및 GitHub에 점수 없음) ← https://huggingface.co/LGAI-Research/EXAONE-3.0-7.8B-Base

## 수행한 작업
- [x] baichuan-7b 점수 추가 (mmlu) ← https://huggingface.co/baichuan-inc/Baichuan-7B
- [x] baichuan-7b 점수 추가 (c-eval) ← https://huggingface.co/baichuan-inc/Baichuan-7B
- [x] baichuan-13b-base 점수 추가 (c-eval, mmlu, cmmlu) ← https://huggingface.co/baichuan-inc/Baichuan-13B-Chat
- [x] baichuan-13b-chat 점수 추가 (c-eval, mmlu, cmmlu) ← https://huggingface.co/baichuan-inc/Baichuan-13B-Chat
- [x] issues/2026-08-12-collect-benchmark-solar.md 이슈 생성
- [x] issues/2026-08-12-collect-benchmark-exaone.md 이슈 생성
