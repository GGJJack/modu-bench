---
date: 2026-09-28
agent: collect-llm
status: completed
summary: "LLM 도메인 신규 모델 수집 및 기존 모델 메타데이터 보강"
---

## Todo
- [x] 신규 LLM 모델 발견 및 필수 필드 등록
- [x] 기존 LLM 모델 정보 보강 (null 필드 채우기)

## 조사 내역
- 01:05 Qwen2.5 릴리스 블로그 확인 ← https://qwenlm.github.io/blog/qwen2.5/
- 01:07 Qwen2.5-Math 릴리스 블로그 확인 ← https://qwenlm.github.io/blog/qwen2.5-math/
- 01:10 NAVER Clova Studio 서비스 확인 ← https://www.ncloud.com/product/ai/clovaStudio
- 01:12 Sakana AI TinySwallow 릴리스 블로그 확인 ← https://sakana.ai/taid-jp/

## 수행한 작업
- [x] 신규 모델 qwen-2.5-0.5b 등록 ← https://qwenlm.github.io/blog/qwen2.5/
- [x] 신규 모델 qwen-2.5-math-1.5b 등록 ← https://qwenlm.github.io/blog/qwen2.5-math/
- [x] 신규 모델 qwen-2.5-math-72b 등록 ← https://qwenlm.github.io/blog/qwen2.5-math/
- [x] 신규 모델 hyperclova-x-dash-001 등록 ← https://www.ncloud.com/product/ai/clovaStudio
- [x] 기존 모델 tinyswallow-1-5b contextWindow 보강 ← https://sakana.ai/taid-jp/
- [x] 기존 모델 solar-10.7b 공식 URL 보강 ← https://www.upstage.ai/blog/en/introducing-solar-mini-compact-yet-powerful
- [x] 기존 모델 hyperclova-x 공식 정보 보강 ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- 국가별 독자 LLM(중국 Qwen, 한국 HyperCLOVA X, 일본 Sakana AI) 중심으로 신규 모델 수집 및 누락 필드 보강 진행

## 이슈 제기
- (없음)
