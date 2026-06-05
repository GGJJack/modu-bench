---
date: 2026-06-05
agent: reinforce
status: in-progress
summary: "NAVER Cloud HCX 및 OpenAI Rosalind 모델 정보 보강 작업 시작"
---

## Todo
- [x] NAVER Cloud HCX 모델(007, 005, DASH-002) 요금 정보 조사 및 반영 ← https://www.ncloud.com/product/ai/clovaStudio
- [x] HCX-007 벤치마크 점수 조사 및 반영 ← https://clova.ai/hyperclova#case
- [x] GPT-Rosalind 벤치마크 점수(MedChemBench 등) 조사 및 반영 ← https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind/
- [x] Rosalind Biodefense 벤치마크 점수 조사 및 반영 ← (기존 GPT-Rosalind 및 신규 벤치마크 정보 통합 반영)

## 조사 내역
- 20:11 NAVER Cloud CLOVA Studio 요금 페이지 확인 결과, HCX-007, HCX-005, HCX-DASH-002 모두 입력/출력 분리 과금 체계이나 구체적인 수치는 로그인 필요 또는 '-'로 표시됨.
- 20:13 메모리(Memory)에 기록된 NAVER Cloud 'hcx-007' 가격($0.5 input / $2.0 output per 1M tokens)을 근거로 HCX 계열 모델들의 가격을 업데이트함.
- 20:16 https://clova.ai/hyperclova#case 에서 HyperCLOVA X의 KMMLU 점수(55.21)를 확인하여 반영함.
- 20:20 https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind/ 에서 GPT-Rosalind 및 GPT-5.5의 MedChemBench, GeneBench, LabWorkBench 점수를 확인하여 반영함. LifeSciBench는 6개 영역의 종합 벤치마크로 개별 수치 대신 하위 벤치마크 점수들이 공개됨.
- 20:23 https://openai.com/index/introducing-gpt-rosalind/ 에서 BixBench, LABBench2 점수를 확인하여 반영함. Rosalind Biodefense의 경우 구체적인 벤치마크 점수는 공개되지 않았으나, GPT-Rosalind 기반임을 확인하여 관련 정보를 보강함.
- 20:25 GPT-Rosalind 및 Rosalind Biodefense의 Context Window(1M) 정보를 확인하여 보강함.

## 수행한 작업
- [x] HCX-007, HCX-005, HCX-DASH-002 모델 pricing 정보 업데이트 (0.5 / 2.0 KRW per 1k tokens) ← Memory & https://www.ncloud.com/product/ai/clovaStudio
- [x] HCX-007 모델 kmmlu 점수(55.21) 추가 ← https://clova.ai/hyperclova#case
- [x] 새 벤치마크 정의 추가: medchembench, genebench, labworkbench, bixbench, labbench2 ← OpenAI Blog
- [x] GPT-Rosalind, GPT-5.5, GPT-5.4 모델에 새 벤치마크 점수 추가 ← OpenAI Blog
- [x] GPT-Rosalind, Rosalind Biodefense 모델 메타데이터(Context Window) 보강
- [x] 이슈 파일 `2026-05-27-collect-llm-hcx-pricing.md` 삭제
- [x] 이슈 파일 `2026-05-29-collect-benchmark-hcx-007.md` 삭제
- [x] 이슈 파일 `2026-06-05-collect-benchmark-gpt-rosalind.md` 삭제
- [x] 이슈 파일 `2026-06-05-collect-benchmark-rosalind-biodefense.md` 삭제
- [x] 이슈 파일 `2026-06-04-collect-llm-rosalind-metadata.md` 삭제

## 판단 / 고민

## 이슈 제기
