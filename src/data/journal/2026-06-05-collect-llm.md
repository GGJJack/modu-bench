---
date: 2026-06-05
agent: collect-llm
status: completed
summary: "xAI 신규 모델 등록 및 NAVER Cloud, Google 기존 모델 보강 완료"
---

## Todo
- [x] 저널 파일 생성
- [x] 신규 모델 검색 (OpenAI, Anthropic, Google, xAI, Naver 등)
- [x] 기존 모델 (hcx-007, alphaevolve 등) 보강
- [x] 신규 모델 (grok-imagine-video-1.5-preview) 등록
- [x] 결과 요약 및 저널 업데이트

## 조사 내역
- 01:00 작업 시작
- OpenAI: `gpt-rosalind` (2026-06-03), `rosalind-biodefense` (2026-05-29) 뉴스 확인. `Codex` (2026-06-02) 서비스 업데이트 확인.
- Anthropic: `Claude Opus 4.8` (2026-05-28) 출시 확인 (이미 등록됨).
- Google: `Gemini 3.5 Flash` (2026-05-19), `Gemini 3.5 Pro` (2026-06-01) 확인 (이미 등록됨). `AlphaEvolve` (2026-05-26) 발견.
- xAI: `Grok Imagine 1.5 Preview` (2026-06-03) 이미지-비디오 모델 발견. `Composer 2.5` (2026-06-01) 확인 (이미 등록됨).
- NAVER Cloud: `HCX-007` 가격 정보 확인 ($0.5/$2.0 per 1M tokens).

## 수행한 작업
- [x] xAI 신규 이미지-비디오 모델 등록: `grok-imagine-video-1.5-preview` (2026-06-03) ← https://x.ai/news/grok-imagine-1-5
- [x] NAVER Cloud `hcx-007` 정보 보강: Pricing $0.5/$2.0 ← https://www.ncloud.com/product/ai/clovaStudio
- [x] Google `alphaevolve` 정보 보강: Release Date 2026-05-26 및 공식 링크 업데이트 ← https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/
- [x] OpenAI `gpt-rosalind`, `rosalind-biodefense`, Inception Labs `mercury-2` 사양 재검토 (확정된 사양 부재로 null 유지)

## 판단 / 고민
- `gpt-rosalind` 및 `rosalind-biodefense`는 공식 뉴스로 출시가 확인되었으나, 구체적인 가격 및 컨텍스트 윈도우 사양이 명시된 공개 문서를 확보하지 못해 추측성 데이터 입력을 배제하고 null 상태를 유지함.
- `Mistral Vibe`는 에이전트 서비스 업데이트이며 모델 아키텍처 변경이 아니므로 등록 제외 원칙을 고수함.
- `AlphaEvolve`는 기존에 5월 6일로 등록되어 있었으나, 최신 기술 리포트 및 블로그 게시일인 5월 26일로 업데이트하고 링크를 보강함.

## 이슈 제기
- [ ] OpenAI `gpt-rosalind` 시리즈의 상세 API 사양(Pricing, Context Window) 공식 문서 확인 필요.
