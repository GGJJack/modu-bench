---
modelId: qwen2-72b-instruct
domain: llm
status: published
updated: 2026-11-08
sources:
  - https://qwenlm.github.io/blog/qwen2/
  - https://huggingface.co/Qwen/Qwen2-72B-Instruct
  - https://arxiv.org/abs/2407.10671
features:
  toolUse: true
  vision: false
  fineTuning: true
highlights:
  - "총 72.7B 파라미터 기반 Alibaba Cloud Qwen 팀의 2세대 플래그십 오픈 가중치 언어 모델"
  - "GQA(Grouped Query Attention) 전면 도입 및 YaRN 기반 최대 128K 토큰 초장문 컨텍스트 지원"
  - "MMLU 82.3, HumanEval 86.0, MT-Bench 9.12 등 주요 벤치마크에서 Llama-3-70B-Instruct 대등 이상 성능 달성"
relatedOrganization: alibaba
---

# Qwen2 72B Instruct 소개

## 개요
Qwen2 72B Instruct는 알리바바 클라우드(Alibaba Cloud) Qwen 팀이 2024년 6월 7일 공식 발표한 차세대 주력 오픈 가중치 지시 이행(Instruction-tuned) 언어 모델입니다 ([Qwen2 Announcement Blog](https://qwenlm.github.io/blog/qwen2/)). 전작인 Qwen1.5 시리즈에서 축적된 데이터 정제 기술과 모델 아키텍처 노하우를 집약하여 개발되었으며, 총 72.71B(비임베딩 70.21B) 파라미터를 갖춘 Dense 디코더 트랜스포머 구조를 채택하고 있습니다 ([Qwen2 Technical Report](https://arxiv.org/abs/2407.10671)).

이 모델은 영어와 중국어뿐만 아니라 한국어, 일본어, 독일어, 프랑스어 등 27개 이상의 추가 언어 데이터를 대규모로 학습하여 다국어 이해 및 번역 성능이 획기적으로 개선되었습니다 ([Qwen2 Announcement Blog](https://qwenlm.github.io/blog/qwen2/)). 주요 벤치마크 평가에서 동급 오픈소스 대표 모델인 Llama-3-70B-Instruct를 상회하거나 대등한 수준을 기록하며, 오픈 가중치 진영의 핵심 플래그십 모델로 널리 인정받고 있습니다 ([Hugging Face Qwen2-72B-Instruct](https://huggingface.co/Qwen/Qwen2-72B-Instruct)).

## 기술 특징
Qwen2 72B Instruct는 모델 전반에 Grouped Query Attention(GQA)을 전면 적용하여 KV 캐시 메모리 사용량을 대폭 절감하고 빠른 추론 속도를 확보하였습니다 ([Qwen2 Announcement Blog](https://qwenlm.github.io/blog/qwen2/)). 활성화 함수로는 SwiGLU를 사용하며, RoPE(Rotary Position Embedding)와 QKV 바이어스를 포함한 최적화된 어텐션 구조를 채택하였습니다.

특히 장문 맥락 처리 능력이 강화되어 기본 32K 토큰 사전학습 기반에서 YaRN(Yet another RoPE extensioN) 보간 기법을 통해 최대 131,072(128K) 토큰의 긴 컨텍스트 윈도우를 안정적으로 지원합니다 ([Hugging Face Qwen2-72B-Instruct](https://huggingface.co/Qwen/Qwen2-72B-Instruct)). 바늘 찾기(Needle In A Haystack) 테스트에서 128K 전 구간 완벽에 가까운 검색 정확도를 입증하였습니다. 사후 학습(Post-training) 단계에서는 지도 미세조정(SFT), 보상 모델(RM) 학습, 온라인 DPO(Direct Preference Optimization), 정렬 세금을 최소화하는 Online Merging Optimizer를 유기적으로 결합하여 인간 가치 정렬 및 안전성을 확보하였습니다 ([Qwen2 Technical Report](https://arxiv.org/abs/2407.10671)).

## 사용 사례
Qwen2 72B Instruct는 높은 추론 역량과 확장된 컨텍스트 지원을 바탕으로 광범위한 산업 및 연구 분야에 활용됩니다 ([Hugging Face Qwen2-72B-Instruct](https://huggingface.co/Qwen/Qwen2-72B-Instruct)).
* **복잡한 코딩 및 소프트웨어 엔지니어링**: HumanEval 86.0%, LiveCodeBench 35.7%의 우수한 프로그래밍 성능을 바탕으로 코드 리팩토링, 버그 분석, 단위 테스트 작성을 수행합니다.
* **초장문 문서 분석 및 엔터프라이즈 RAG**: 128K 토큰의 입력 길이를 활용하여 수백 페이지에 달하는 금융 보고서, 법률 계약서, 기술 논문의 요약 및 질문 답변 파이프라인을 구축할 수 있습니다.
* **고급 대화형 에이전트 및 외부 도구 연동**: IFEval 프롬프트 엄격 정확도 77.6% 및 MT-Bench 9.12점을 기록하여 엄격한 지시 준수와 외부 API 호출(Function Calling)이 필수적인 자율 에이전트 서비스에 적합합니다.

## 한계
Qwen2 72B Instruct는 대규모 72.7B 파라미터를 탑재하고 있어 원활한 서빙 및 추론을 위해 고사양 GPU(A100/H100 80GB 등) 클러스터 또는 AWQ/GPTQ 등 4비트 양자화 기법의 적용이 필수적입니다 ([Hugging Face Qwen2-72B-Instruct](https://huggingface.co/Qwen/Qwen2-72B-Instruct)). 또한 본 모델은 텍스트 중심 디코더 모델로 이미지, 오디오, 비디오를 직접 입력받는 멀티모달 네이티브 입력은 지원하지 않으며, 라이선스는 Apache 2.0으로 전환된 하위 모델들과 달리 독자적인 Tongyi Qianwen Research License가 적용되므로 대규모 상업적 활용 시 이용 약관 준수가 필요합니다 ([Qwen2 Announcement Blog](https://qwenlm.github.io/blog/qwen2/)).
