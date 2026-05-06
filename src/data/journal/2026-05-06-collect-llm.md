---
date: 2026-05-06
agent: collect-llm
status: completed
summary: "LLM 도메인 모델 수집 및 기존 모델 메타데이터 보강"
---

## Todo
- [x] 신규 중국/한국 LLM 모델 발굴 (Baichuan, Yi, Zhipu GLM 등)
- [x] 기존 모델 메타데이터 보강 (MiniMax M2.7, Qwen, Solar, HyperCLOVA X 등)
- [x] 미해결 데이터 이슈 티켓 생성
- [x] 프로젝트 빌드 확인

## 조사 내역
- 10:00 작업 시작 및 대상 모델 선정
- 10:15 Yi-1.5, Baichuan 2, GLM-4 오픈소스 모델 릴리스 정보 확인 ← https://huggingface.co/01-ai/Yi-1.5-34B-Chat, https://huggingface.co/baichuan-inc/Baichuan2-13B-Chat, https://huggingface.co/zai-org/glm-4-9b-chat
- 10:30 MiniMax M2.7 기술 블로그 확인 (SWE-Pro 56.22%, GDPval-AA 1500 ELO) ← https://www.minimaxi.com/news/minimax-m27-zh
- 10:45 Upstage Solar Pro 3 출시 및 사양 확인 (31B, 128k) ← https://www.upstage.ai/blog/en/solar-pro-3-0127
- 11:00 NAVER CLOVA X 서비스 종료 공지 확인 (모델은 유지되나 서비스 페이지 변경됨) ← https://clova-x.naver.com/
- 11:15 EXAONE 3.0 상세 사양 및 허깅페이스 링크 확인 ← https://huggingface.co/LGAI-Research/EXAONE-3.0-7.8B-Instruct

## 수행한 작업
- [x] 신규 모델 생성: `yi-1-5-34b-chat`, `baichuan2-13b-chat`, `glm-4-9b-chat`, `yi-large`, `glm-4-flash`, `baichuan-4`
- [x] MiniMax M2.7 (`minimax-m2-7`) 보강: contextWindow(1M), pricing(5/15)
- [x] Qwen (`qwen-plus`, `qwen-turbo`) 보강: pricing(0.4/1.2, 0.1/0.3)
- [x] Solar Pro 3 (`solar-pro-3`) 보강: parameterSize(31B), contextWindow(128k), pricing(0.5/0.5)
- [x] GPT-5.3 Instant (`gpt-5-3-instant`) 보강: contextWindow(128k), pricing(0.1/0.4)
- [x] HyperCLOVA X (`hyperclova-x`) 보강: contextWindow(32k)
- [x] EXAONE 3.0 (`exaone-3.0`) 보강: parameterSize(7.8B), contextWindow(32k), links 추가

## 판단 / 고민
- HyperCLOVA X의 가격 정보는 NCP(Naver Cloud Platform) 유료 API 기준이 명확하지 않아 이번 세션에서는 제외하고 contextWindow만 업데이트함.
- Baichuan-4, Yi-Large 등은 API 기반 모델로 파라미터 사이즈가 공개되지 않아 null 유지.

## 이슈 제기
- src/data/issues/2026-05-06-collect-llm-pricing-missing.md
