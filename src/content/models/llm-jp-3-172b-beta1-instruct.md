---
modelId: llm-jp-3-172b-beta1-instruct
domain: llm
status: published
updated: 2026-09-27
sources:
  - https://huggingface.co/llm-jp/llm-jp-3-172b-beta1-instruct
  - https://llm-jp.nii.ac.jp/
  - https://github.com/llm-jp/llm-jp-3
features:
  toolUse: false
  vision: false
highlights:
  - "일본 국립정보학연구소(NII) 및 GENIAC 주도로 개발된 172B 대규모 언어 모델"
  - "700B 토큰 사전 학습 및 고품질 일본어/영어 지시이행 데이터셋으로 파인튜닝"
relatedOrganization: nii
---

# LLM-jp-3 172B beta1 Instruct 소개

## 개요
LLM-jp-3 172B beta1 Instruct는 일본 국립정보학연구소([NII](https://www.nii.ac.jp/en/))의 대규모 언어 모델 연구개발센터(Research and Development Center for Large Language Models)가 주도하고 일본 경제산업성(METI)의 [GENIAC](https://www.meti.go.jp/policy/mono_info_service/geniac/index.html) 프로젝트의 지원을 받아 개발된 1720억 파라미터 규모의 오픈소스 대형 언어 모델입니다 ([Hugging Face Model Card](https://huggingface.co/llm-jp/llm-jp-3-172b-beta1-instruct)).

본 모델은 일본의 연구기관 및 기업들이 공동 참여하는 [LLM-jp](https://llm-jp.nii.ac.jp/) 컨소시엄의 3세대 베이스 모델 라인업 중 가장 대규모 플래그십 파라미터를 자랑하며, 일본어 오픈소스 생태계의 기술적 기준점(baseline)을 한 단계 높이기 위해 출시되었습니다.

## 기술 특징
LLM-jp-3 172B beta1 Instruct는 96개 레이어와 12288 히든 차원, 96개 어텐션 헤드 아키텍처를 특징으로 하는 172B 디코더 전용 Transformer 구조를 채택하고 있으며, 컨텍스트 길이는 4,096 토큰을 지원합니다 ([Hugging Face Model Card](https://huggingface.co/llm-jp/llm-jp-3-172b-beta1-instruct)).

사전 학습에는 웹 크롤링 데이터(Common Crawl, WARP) 및 학술 연구 데이터(Kaken), Wikipedia, 코드 데이터(The Stack), 영어 및 한국어/중국어 코퍼스를 포함한 총 700B 토큰의 혼합 데이터셋이 활용되었습니다 ([LLM-jp GitHub](https://github.com/llm-jp/llm-jp-3)).

지시이행 파인튜닝(Instruction Tuning) 단계에서는 수동 검증된 일본어 지시 데이터셋인 `ichikara-instruction-004-002`, 안전성 특화 데이터인 `answer-carefully-001`, 그리고 DeepL 번역 코퍼스 및 Aya Dataset 등이 적용되어 고품질 대화 및 지시 수행 능력을 갖추었습니다 ([Hugging Face Model Card](https://huggingface.co/llm-jp/llm-jp-3-172b-beta1-instruct)).

## 사용 사례
LLM-jp-3 172B beta1 Instruct는 대규모 가온프레미스 인프라나 vLLM, SGLang과 같은 고성능 서빙 엔진 기반에서 연구 개발 및 서비스 프로토타이핑 목적으로 활용됩니다 ([Hugging Face Model Card](https://huggingface.co/llm-jp/llm-jp-3-172b-beta1-instruct)).

특히 학술 연구나 비영리 연구 프로젝트, 독자적인 고성능 일본어 챗봇 시스템 구축 및 도메인 특화 추가 파인튜닝의 기반 모델로 널리 사용될 수 있습니다 ([LLM-jp Official Site](https://llm-jp.nii.ac.jp/)).

## 한계
본 모델은 초기 연구 개발 단계에서 출시된 Beta 버전으로, 대중에 널리 서빙되기 위한 인간 정렬(RLHF) 및 범용적인 안전성 필터링 조치가 완전하지 않을 수 있습니다 ([Hugging Face Model Card](https://huggingface.co/llm-jp/llm-jp-3-172b-beta1-instruct)).

또한 172B라는 초대형 파라미터 규격으로 인해 최소 Multi-GPU 인프라(bfloat16 기준 수백 GB VRAM)를 요구하며, 기본 컨텍스트 길이가 4,096 토큰으로 제한되어 초대형 문서 처리 시 별도의 인덱싱 및 RAG 아키텍처가 결합되어야 합니다.
