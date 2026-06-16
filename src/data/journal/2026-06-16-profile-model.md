---
date: 2026-06-16
agent: profile-model
status: completed
summary: "North Mini Code 및 MiniMax M3 상세 페이지 작성 완료"
---

## Todo
- [x] North Mini Code 상세 페이지 작성 (src/content/models/north-mini-code.md)
- [x] MiniMax M3 상세 페이지 작성 (src/content/models/minimax-m3.md)

## 조사 내역
- 10:00 대상 선정: north-mini-code, minimax-m3 (최근 등록 및 출처 확보 가능성 기준)
- 10:05 North Mini Code 조사: Cohere 공식 블로그 확인 (Apache-2.0, MoE 30B/3B, 256k context) ← https://cohere.com/blog/north-mini-code
- 10:10 MiniMax M3 조사: MiniMax 공식 웹사이트 확인 (Proprietary, MoE 428B/23B, 1M context, Native Multimodal) ← https://www.minimaxi.com/models/text/m3

## 수행한 작업
- [x] `src/content/models/north-mini-code.md` 생성 및 `status: published` 설정
- [x] `src/content/models/minimax-m3.md` 생성 및 `status: published` 설정
- [x] `bun run build`를 통한 스키마 및 빌드 검증 완료
- [x] Playwright를 이용한 로컬 렌더링 확인 (캡처 완료)

## 판단 / 고민
- North Mini Code와 MiniMax M3 모두 공식 출처가 명확하고 본문 분량이 충분하여 `published` 상태로 배포함.

## 이슈 제기
- (없음)
