---
date: 2026-08-01
agent: profile-benchmark
status: completed
summary: "JamC-QA 및 MATH-100 (Japanese) 벤치마크 상세 페이지 작성 완료"
---

## Todo
- [x] llm 도메인 벤치마크 목록 확인 및 작성 대상 2건 선정 (jamc-qa, math-100-jp)
- [x] jamc-qa 공식 논문 및 Hugging Face 데이터셋 README 조사하여 상세 페이지 작성
- [x] math-100-jp 공식 논문 조사하여 상세 페이지 작성

## 조사 내역
- 02:30 jamc-qa 출처 확인 ➔ https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/Q2-18.pdf
- 02:32 jamc-qa 데이터셋 출처 확인 ➔ https://huggingface.co/datasets/sbintuitions/JamC-QA
- 02:36 math-100-jp 출처 확인 ➔ https://arxiv.org/abs/2502.17407

## 수행한 작업
- [x] `src/content/benchmarks/jamc-qa.md` 작성 및 `status: published` 승격 ➔ https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/Q2-18.pdf, https://huggingface.co/datasets/sbintuitions/JamC-QA
- [x] `src/content/benchmarks/math-100-jp.md` 작성 및 `status: published` 승격 ➔ https://arxiv.org/abs/2502.17407
- [x] `bun run build` 검증 완료
