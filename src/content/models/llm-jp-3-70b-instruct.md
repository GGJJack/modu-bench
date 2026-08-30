---
modelId: llm-jp-3-70b-instruct
domain: llm
status: published
updated: 2026-08-30
sources:
  - https://llm-jp.nii.ac.jp/
  - https://huggingface.co/llm-jp/llm-jp-3-1.8b
  - https://gitlab.llm-jp.nii.ac.jp/datasets/llm-jp-corpus-v3
features:
  toolUse: false
  vision: false
  fineTuning: true
highlights:
  - "일본 국립정보학연구소(NII) 주도 컨소시엄 LLM-jp가 개발한 플래그십 70B 규모 지시어 이행 모델"
  - "2.1조 토큰 이상의 다국어 및 일본어 웹 말뭉치(llm-jp-corpus-v3)로 사전 학습된 강력한 텍스트 처리 능력"
  - "Apache-2.0 오픈소스 라이선스를 채택하여 연구 및 상용 응용 모두 제한 없이 자유롭게 활용 가능"
---

# LLM-jp-3 70B Instruct 소개

## 개요
LLM-jp-3 70B Instruct는 일본 국립정보학연구소(National Institute of Informatics, NII) 산하 대규모 언어모델 연구개발센터가 이끄는 오픈 산학합동 산학연 컨소시엄 'LLM-jp'에서 개발하여 2024년 10월 23일 정식 공개한 대표 플래그십 700억 파라미터 지시어 이행(Instruct) 언어 모델입니다. 일본 내 자국 기술 기반의 독자적인 대규모 오픈소스 인공지능 주권 확보를 목표로 연구개발이 이뤄졌으며, 1.8B, 3.7B, 13B, 70B 라인업 중 가장 강력한 추론 역량을 발휘합니다. 본 모델은 완벽한 오픈소스 정신에 입각하여 Apache License Version 2.0으로 배포되어 상업적, 학학술적 연구에 어떠한 세부 제약 없이 자유로운 활용이 보장됩니다.

## 기술 특징
LLM-jp-3 70B Instruct는 2.1조(2.1T) 토큰에 달하는 방대한 규모의 다국어 및 일본어 정제 코퍼스 'llm-jp-corpus-v3'(Wikipedia, Common Crawl, WARP PDF/HTML, Kaken 데이터 등)를 기반으로 사전 학습되었습니다. 일본어 단어 분절 및 처리 효율성을 극대화하기 위해 개발된 독자 어휘 집합 'llm-jp-tokenizer v3.0'을 탑재하고 있으며, 4,096 토큰의 컨텍스트 윈도우를 지원합니다. 지시 미세조정(Instruction tuning) 단계에서는 수동 검증된 안전성 및 지시어 데이터셋인 ichikara-instruction 및 answer-carefully 계열 데이터와 고품질 합성 다중 턴 데이터셋을 결합 적용하여, 지시어 준수 능력과 응답의 정확성을 대폭 향상시켰습니다.

## 사용 사례
LLM-jp-3 70B Instruct는 체급에 적합한 우수한 어휘적 지식과 정교한 문맥 이해력을 지니고 있어 기업 내 고난도 문서 분석, 수식 및 논리적 추론 보좌, 법률 및 행정 문서 서식 자동 작성, 연구 기관의 일본어 NLP 벤치마크 기준 모델(Baseline)로 광범위하게 쓰이고 있습니다. Hugging Face Transformers 및 vLLM 프레임워크와 즉시 연동 가능하여 온프레미스 인프라 환경에서 안정적인 서빙 인프라를 구축할 수 있습니다. 상용 라이선스 제약이 전혀 없는 Apache-2.0 라이선스 덕분에 글로벌 산학 협력 프로젝트 및 자체 오픈소스 인공지능 제품군의 핵심 기반 가중치로 손쉽게 이식할 수 있습니다.

## 한계
LLM-jp-3 70B Instruct는 시각적 이미지를 직접 분석하는 Vision 모듈이나 음성 신호 처리를 수행하는 오디오 모듈이 제외된 순수 텍스트 전용 모델이라는 한계가 있습니다. 또한 기저 설계상의 컨텍스트 윈도우가 4,096 토큰으로 제한되어 있어 단일 프롬프트로 극도로 긴 초장문 문서(책 한 권 분량 등) 전체를 일괄 입력받아 처리하는 작업에서는 문맥 손실이 발생할 수 있습니다. 이와 함께 70B급의 대형 파라미터 규격으로 인해 원활한 멀티 GPU 텐서 병렬화 서빙 인프라 조성이 필요하며, 초단기 대기시간(Real-time low latency)이 요구되는 모바일 edge 장치에는 직접 배치가 어려운 하드웨어적 제약을 가지고 있습니다.
