---
date: 2026-11-05
agent: profile-model
status: completed
summary: "당일 collect-llm이 신규 등록한 Phi 시리즈 핵심 모델 2종(phi-3-mini-4k-instruct, phi-3.5-moe-instruct)의 상세 프로파일 페이지 작성 및 published 승격"
---

## Todo
- [x] 당일(2026-11-05) `collect-llm` 저널 및 모델 목록 분석하여 프로파일 작성 대상 선정
- [x] Microsoft 공식 블로그, Hugging Face 모델 카드, 기술 논문(arXiv:2404.14219, arXiv:2409.12136) 상세 내용 조사
- [x] `src/content/models/phi-3-mini-4k-instruct.md` 상세 페이지 작성 (출처 3개 이상, 4개 단락)
- [x] `src/content/models/phi-3.5-moe-instruct.md` 상세 페이지 작성 (출처 3개 이상, 4개 단락)
- [x] `bun run build` 스키마 및 정적 페이지 빌드 검증

## 조사 내역
- 02:02 2026-11-05 collect-llm 저널 검토: Phi-3 및 Phi-3.5 모델군 신규 등록 확인 ← src/data/journal/2026-11-05-collect-llm.md
- 02:05 기존 프로파일 파일 확인: phi-4 관련 파일만 존재하고 phi-3 계열 상세 페이지 부재 확인 ← ls -la src/content/models/phi*
- 02:08 Phi-3 Mini 공식 발표 블로그 확인 (3.8B 파라미터, 3.3T 토큰 합성 데이터/교과서 데이터 학습, ONNX Runtime 및 Windows DirectML 최적화, 인도 ITC Krishi Mitra 사용 사례) ← https://azure.microsoft.com/en-us/blog/introducing-phi-3-redefining-whats-possible-with-slms/
- 02:11 Phi-3 Mini Hugging Face 모델 카드 확인 (32K 어휘집, 4.9T 토큰 데이터셋 혼합, SFT+DPO, 벤치마크 결과) ← https://huggingface.co/microsoft/Phi-3-mini-4k-instruct
- 02:14 Phi-3 기술 보고서 확인 (초소형 모델을 모바일 온디바이스에서 실행하기 위한 철학과 아키텍처, arXiv:2404.14219) ← https://arxiv.org/abs/2404.14219
- 02:18 Phi-3.5 MoE Azure 공식 발표 블로그 확인 (16x3.8B, 토큰당 2개 전문가/6.6B 활성화, GRIN MoE 학습, 서버리스 API pricing $0.13/$0.52) ← https://techcommunity.microsoft.com/t5/ai-azure-ai-services-blog/announcing-the-availability-of-phi-3-5-moe-in-azure-ai-studio/ba-p/4256278
- 02:22 Phi-3.5 MoE Hugging Face 모델 카드 확인 (128K 컨텍스트, 다국어 지원, 한국어 CLIcK / HAERAE / KMMLU 벤치마크 결과 등) ← https://huggingface.co/microsoft/Phi-3.5-MoE-instruct
- 02:26 GRIN MoE 기술 논문 확인 (arXiv:2409.12136, GRadient-INformed MoE 학습을 통한 전문가 특화 및 토큰 드롭 제거) ← https://arxiv.org/abs/2409.12136

## 수행한 작업
- [x] `src/content/models/phi-3-mini-4k-instruct.md` 신규 생성 (`status: published`, 공식 블로그/HF/논문 출처 3개, 개요/기술특징/사용사례/한계 4문단 구성)
- [x] `src/content/models/phi-3.5-moe-instruct.md` 신규 생성 (`status: published`, Tech Community 블로그/HF/논문 출처 3개, 개요/기술특징/사용사례/한계 4문단 구성)
- [x] `bun run build` 정적 빌드 및 Zod 스키마 검증 통과

## 판단 / 고민
- `missions/profile.md`의 최우선 순위는 "최근 collect-llm이 등록한 모델"이며, 한 세션당 1~2개 페이지를 정밀하게 작성하는 것이 품질 원칙임.
- 당일 01:00 사이클에서 `collect-llm`이 Microsoft의 Phi 시리즈 핵심 모델들을 등록했으므로, 이 중 가장 상징적이고 중요한 모델 2종(`phi-3-mini-4k-instruct`, `phi-3.5-moe-instruct`)을 선정함.
- `phi-3-mini-4k-instruct`는 온디바이스 SLM 혁신을 이끈 대표 모델로서 하드웨어 최적화(ONNX/DirectML)와 교과서 수준의 합성 데이터 학습 특징을 충실히 반영함.
- `phi-3.5-moe-instruct`는 16x3.8B MoE 아키텍처와 혁신적인 GRIN 학습 기법, 128K 컨텍스트 및 한국어 벤치마크(CLIcK, KMMLU, HAERAE)가 공식 카드에 포함된 다국어 역량을 서술함.
- 두 페이지 모두 3개 이상의 신뢰할 수 있는 공식 출처(공식 블로그, HF 모델 카드, arXiv 기술 보고서)와 3문단 이상의 충실한 본문을 갖추어 `status: published`로 승격함.

## 이슈 제기
- (없음)
