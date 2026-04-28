---
modelId: mistral-large-3
domain: llm
status: published
updated: 2026-04-28
sources:
  - https://mistral.ai/news/mistral-3/
  - https://docs.mistral.ai/models/model-cards/mistral-large-3-25-12
  - https://legal.mistral.ai/ai-governance/models/mistral-large-3
features:
  toolUse: true
  vision: true
  audioInput: false
  audioOutput: false
  fineTuning: true
highlights:
  - "675B Sparse MoE (41B 활성 파라미터)"
  - "256k 컨텍스트 윈도우 지원"
  - "Apache 2.0 라이선스 적용"
relatedOrganization: mistral-ai
---

# Mistral Large 3 소개

## 개요
Mistral Large 3는 Mistral AI가 2025년 12월에 공개한 차세대 플래그십 오픈 소스 거대 언어 모델입니다. 이 모델은 기존의 폐쇄형 모델들과 대등한 성능을 유지하면서도 Apache 2.0 라이선스를 통해 커뮤니티에 공개되었다는 점에서 큰 의의를 가집니다. 특히 다국어 지원 능력이 대폭 강화되어 영어와 중국어를 제외한 40개 이상의 언어에서 뛰어난 대화 성능을 보여주며, 복잡한 추론과 다중 작업 수행 능력을 갖추고 있습니다.

## 기술 특징
Mistral Large 3는 희소 혼합 전문가(Sparse Mixture-of-Experts, MoE) 아키텍처를 기반으로 설계되었습니다. 총 파라미터 수는 675B에 달하지만, 추론 시에는 41B개의 활성 파라미터만을 사용하여 효율성을 극대화했습니다. 또한 256k 토큰에 달하는 긴 컨텍스트 윈도우를 지원하여 방대한 분량의 문서를 한 번에 처리할 수 있습니다. NVIDIA와의 협업을 통해 Blackwell 아키텍처 및 H200 GPU에 최적화되었으며, NVFP4 압축 형식을 지원하여 단일 노드에서도 효율적인 실행이 가능하도록 설계되었습니다.

## 사용 사례
이 모델은 높은 지능과 효율성을 바탕으로 기업용 엔터프라이즈 워크플로우에 최적화되어 있습니다. 대표적으로 복잡한 코딩 작업, 다국어 문서 분석, 창의적인 콘텐츠 생성, 그리고 고급 도구 사용(Tool-use)이 필요한 에이전트 서비스 등에 활용될 수 있습니다. 특히 Apache 2.0 라이선스 덕분에 각 기업의 고유 데이터셋으로 미세 조정(Fine-tuning)하거나 독점적인 환경에 배포하여 사용하는 데 매우 적합합니다.

## 한계
Mistral Large 3는 강력한 성능을 자랑하지만, 희소 MoE 구조로 인해 총 파라미터 수가 매우 크기 때문에 모델 전체를 로드하기 위해서는 상당한 수준의 VRAM 메모리가 필요합니다. 또한 텍스트와 이미지 이해 능력은 갖추고 있으나, 오디오 입력이나 실시간 음성 출력과 같은 완전한 멀티모달 기능은 기본 모델에서 직접적으로 지원하지 않는다는 제한 사항이 있습니다.
