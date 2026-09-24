---
modelId: solar-open2-250b
domain: llm
status: published
updated: 2026-09-24
sources:
  - https://www.upstage.ai/blog/en/solar-open-2
  - https://huggingface.co/upstage/Solar-Open2-250B
  - https://arxiv.org/abs/2607.20062
features:
  toolUse: true
  vision: false
highlights:
  - "총 250B 매개변수 중 토큰당 15B 활성화되는 Upstage의 에이전틱 MoE 모델"
  - "GQA와 리니어 어텐션(Linear Attention)을 결합한 하이브리드 어텐션 기반 1M 토큰 컨텍스트 윈도우 지원"
  - "한국어, 영어, 일본어 공식 지원 및 양자화 적용 시 H200 GPU 2대로 구동 가능한 높은 추론 효율성"
relatedOrganization: upstage
---

# Solar Open 2 250B 소개

## 개요
Solar Open 2 250B는 업스테이지(Upstage)가 공개한 오픈웨이트(Open-weight) 기반의 에이전틱(Agentic) 파운데이션 모델입니다. 기업 실무 환경에서의 도구 호출(Tool Calling), 코드 작성, 복잡한 문서 처리 및 자율 탐색 작업을 완수할 수 있도록 설계되었으며, 총 2,500억(250B) 개에 달하는 파라미터를 갖춘 혼합 전문가(MoE, Mixture of Experts) 아키텍처를 채택하고 있습니다. 한국어, 영어, 일본어 3개 국어를 공식 지원하며, 허깅페이스(Hugging Face)를 통해 상업적 이용이 가능한 오픈 라이선스로 배포되었습니다.

## 기술 특징
Solar Open 2는 토큰 생성 시 320개 가routed 전문가와 1개의 공유 전문가 중 8개의 전문가만 선택적으로 활성화하여, 토큰당 실제 활성 파라미터를 15B로 유지함으로써 높은 연산 및 추론 효율성을 확보했습니다. 문맥 확장 측면에서는 소프트맥스 어텐션(GQA)과 리니어 어텐션(Linear Attention)을 1:3 비율로 교차 배치한 하이브리드 어텐션 아키텍처를 도입하여 최대 100만(1M) 토큰의 매시브 컨텍스트 윈도우를 안정적으로 제공합니다. 또한 이전 세대 모델인 Solar Open 100B의 핵심 표현을 재활용하는 선택적 가중치 전이(Selective Weight Transfer) 기법을 통해 학습 속도를 대폭 향상시켰습니다.

## 사용 사례
Solar Open 2는 다단계 추론과 연속적인 외부 도구 연결이 필요한 엔터프라이즈 AI 에이전트 구축에 최적화되어 있습니다. 금융, 법률, 의료 등 복잡한 규제 및 서식 검토가 필요한 오피스 환경에서 대용량 서류 증빙 교차 검증 및 지수·서식 산출에 활용되며, 터미널 명령 수행과 테스팅 루프를 스스로 반복하는 코딩 에이전트 및 MCP(Model Context Protocol) 기반 도구 호출 자동화 서비스 등에 손쉽게 배치할 수 있습니다.

## 한계
MoE 구조로 인해 전체 파라미터(250B)를 로딩하기 위한 VRAM 스토리지 요구량이 존재하므로, 최소 4대의 NVIDIA H200 GPU(BF16 기준) 또는 2대의 H200 GPU(양자화 기준) 급 고성능 인프라 환경이 마련되어야 원활한 온프레미스 추론이 가능합니다. 또한 텍스트 중심 언어 및 도구 제어 능력에 집중되어 있어 이미지나 오디오의 직접적인 멀티모달 입력 처리는 지원하지 않습니다.
