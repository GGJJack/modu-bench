---
modelId: leanstral
domain: llm
status: published
updated: 2026-05-25
sources:
  - https://mistral.ai/news/leanstral/
  - https://docs.mistral.ai/models/model-cards/leanstral-26-03
features:
  toolUse: true
  vision: false
highlights:
  - "Lean 4 수학 증명 및 정형 검증 특화 오픈소스 코드 에이전트"
  - "119B MoE 아키텍처 (활성 파라미터 6.5B)의 높은 효율성"
  - "Apache 2.0 라이선스로 공개되어 연구 및 산업 활용 가능"
relatedOrganization: mistral
---

# Leanstral 소개

## 개요
Leanstral은 Mistral AI가 2026년 3월 16일에 발표한 Lean 4 프로그래밍 언어 및 증명 보조 도구(Proof Assistant)에 특화된 최초의 오픈소스 코드 에이전트입니다. 이 모델은 단순히 코드를 생성하는 것을 넘어, 복잡한 수학적 대상을 표현하고 소프트웨어 사양을 정형적으로 검증하는 '신뢰할 수 있는 코딩(Vibe-coding)' 환경을 구축하기 위해 설계되었습니다. 119B 매개변수 규모의 혼합 전문가(MoE) 아키텍처를 채택하면서도 실제 추론 시에는 6.5B개의 매개변수만 활성화하여 높은 효율성을 자랑하며, Apache 2.0 라이선스로 공개되어 학술 연구와 상업적 응용 모두에 열려 있습니다.

## 기술 특징
Leanstral의 가장 큰 기술적 차별점은 현실적인 정형 저장소(Formal Repositories)에서의 성능을 최적화했다는 점입니다. 기존의 수학 특화 모델들이 주로 경진대회 수준의 단발성 문제 해결에 집중한 것과 달리, Leanstral은 실제 프로젝트 단위의 증명 엔지니어링 작업을 수행하도록 훈련되었습니다. 특히 병렬 추론과 Lean 언어 자체의 완벽한 검증 능력을 결합하여, 기존의 거대 폐쇄형 모델(Claude Opus 등) 대비 압도적인 비용 효율성을 입증했습니다. 또한 LSP(Language Server Protocol)와 연동되는 lean-lsp-mcp 등 다양한 MCP(Model Context Protocol)를 지원하여 개발 환경과의 통합성을 극대화했습니다.

## 사용 사례
이 모델은 수학적 증명 자동화와 소프트웨어의 결함 없는 구현을 목표로 하는 다양한 시나리오에 활용됩니다. 대표적으로 FLT(Fermat’s Last Theorem) 프로젝트와 같은 대규모 수학 정형화 작업에서 새로운 개념을 정의하고 증명을 완성하는 데 사용됩니다. 또한, 기존 Lean 코드의 버전 업데이트에 따른 마이그레이션 작업을 자동화하거나, 로직의 정의적 동등성(Definitional Equality)을 분석하여 최적의 수정안을 제안하는 등 실무적인 증명 도우미 역할을 수행합니다. Rocq(Coq) 등 타 언어로 작성된 정형 정의를 Lean으로 번역하고 그 성질을 증명하는 작업에서도 강력한 성능을 보여줍니다.

## 한계
Leanstral은 Lean 4와 정형 검증 분야에서 뛰어난 성능을 보이지만, 범용적인 코딩 작업이나 일반적인 텍스트 생성 능력에서는 해당 분야에 특화된 일반 모델(Mistral Large 등)에 비해 성능이 제한적일 수 있습니다. 또한, 공식 벤치마크인 FLTEval에서는 우수한 성적을 거두었으나, Claude Opus 4.6과 같은 최상위 폐쇄형 모델의 절대적인 지능 수준에는 아직 미치지 못하는 영역이 존재합니다. 모델의 성능을 극대화하기 위해서는 Lean 언어에 대한 깊은 이해를 바탕으로 한 정교한 프롬프트 엔지니어링과 적절한 도구(MCP) 연동이 필수적입니다.
