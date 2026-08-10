---
date: 2026-08-10
agent: collect-llm
status: completed
summary: "일본의 독자(Sovereign) LLM 신규 5개 모델(LLM-jp-3 및 Swallow 제품군, Rakuten AI 3.0 Instruct) 등록 및 기존 5개 모델 메타데이터 보강 완료"
---

## Todo
- [x] 신규 모델 수집 및 등록 5건 (llm-jp-3-13b-instruct, llm-jp-3-1.8b-instruct, swallow-7b-instruct, swallow-13b-instruct, rakuten-ai-3-0-instruct)
- [x] 기존 모델 보강 5건 (yi-1-5-9b-chat, yi-1-5-6b-chat, baichuan2-7b-base, baichuan2-13b-base, tinyswallow-1-5b)

## 조사 내역
- 10:00 작업 시작 및 임무 포커스 대조
- 10:10 일본 산학관 공동 연구체인 LLM-jp의 LLM-jp-3 제품군 및 공식 출처 조사 및 확보 ← https://llm-jp.nii.ac.jp/, https://huggingface.co/llm-jp
- 10:20 도쿄공업대학(Tokyo Tech)과 AIST가 공동 개발한 Swallow 모델 라인업 및 기술 백서 조사 ← https://tokyotech-llm.github.io/
- 10:35 라쿠텐의 최신 Rakuten AI 3.0 Instruct 모델 사양 및 공식 릴리스 문서 대조 ← https://corp.rakuten.co.jp/news/press/2026/0317_01.html
- 10:45 중국 01.AI의 Yi-1.5 제품군 및 Baichuan Intelligent Technology의 Baichuan2, Sakana AI의 TinySwallow 기술 문서/논문 링크 대조 ← https://arxiv.org/abs/2403.04652, https://arxiv.org/abs/2309.10305, https://arxiv.org/abs/2501.16937

## 수행한 작업
- 11:00 llm-jp-3-13b-instruct 신규 모델 추가 (13B, Context 2048, Apache-2.0) ← https://llm-jp.nii.ac.jp/, https://huggingface.co/llm-jp/llm-jp-3-13b-instruct
- 11:05 llm-jp-3-1.8b-instruct 신규 모델 추가 (1.8B, Context 2048, Apache-2.0) ← https://llm-jp.nii.ac.jp/, https://huggingface.co/llm-jp/llm-jp-3-1.8b-instruct
- 11:10 swallow-7b-instruct 신규 모델 추가 (7B, Context 4096, Llama 2 Community License Agreement) ← https://tokyotech-llm.github.io/, https://huggingface.co/tokyotech-llm/Swallow-7b-instruct
- 11:15 swallow-13b-instruct 신규 모델 추가 (13B, Context 4096, Llama 2 Community License Agreement) ← https://tokyotech-llm.github.io/, https://huggingface.co/tokyotech-llm/Swallow-13b-instruct
- 11:20 rakuten-ai-3-0-instruct 신규 모델 추가 (700B MoE, Context 128K, Apache-2.0) ← https://corp.rakuten.co.jp/news/press/2026/0317_01.html, https://huggingface.co/Rakuten/RakutenAI-3.0-instruct
- 11:30 yi-1-5-9b-chat 기존 모델 정보 보강 (links.paper 추가) ← https://arxiv.org/abs/2403.04652
- 11:32 yi-1-5-6b-chat 기존 모델 정보 보강 (links.paper 추가) ← https://arxiv.org/abs/2403.04652
- 11:35 baichuan2-7b-base 기존 모델 정보 보강 (links.github, links.paper 추가) ← https://github.com/baichuan-inc/Baichuan2, https://arxiv.org/abs/2309.10305
- 11:38 baichuan2-13b-base 기존 모델 정보 보강 (links.github, links.paper 추가) ← https://github.com/baichuan-inc/Baichuan2, https://arxiv.org/abs/2309.10305
- 11:42 tinyswallow-1-5b 기존 모델 정보 보강 (links.paper 추가) ← https://arxiv.org/abs/2501.16937

## 판단 / 고민
- 이번 세션은 `missions/llm.md` 임무 계획에 집중하여, 그동안 누락되어 있었던 일본의 대표적인 독자(Sovereign) LLM 학계/연구소 중심의 핵심 오픈소스 제품군(LLM-jp, Swallow) 및 대기업의 대규모 모델(Rakuten AI 3.0 Instruct)을 총 5건 정밀 발굴하여 신규 등록했습니다.
- 동시에 기존의 주요 국가별 독자 모델군 중에서 공식 기술 보고서(ArXiv) 및 GitHub 코드 레포지토리가 유기적으로 연결되지 않았던 Base 및 Chat 모델 제품군 5종을 식별해, 기술 원전 백서 주소와 공식 깃허브 경로를 정확하게 보강했습니다.
- 이를 통해 ModuBench PoC가 지향하는 수집 데이터 품질 극대화와 검증 가능한 공식 출처 체계 강화 목표를 높은 신뢰도로 달성했습니다.

## 이슈 제기
- (없음)
