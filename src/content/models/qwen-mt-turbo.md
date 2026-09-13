---
modelId: qwen-mt-turbo
domain: llm
status: published
updated: 2026-09-13
sources:
  - https://qwenlm.github.io/blog/qwen-mt/
  - https://modelstudio.console.alibabacloud.com/
  - https://huggingface.co/spaces/Qwen/Qwen3-MT-Demo
features:
  toolUse: false
  vision: false
highlights:
  - "92개 주요 언어 및 주요 방언 지원 전문 번역 모델"
  - "경량화된 Mixture of Experts (MoE) 아키텍처 기반의 고성능·저비용 추론"
  - "용어집 개입(Terminology Intervention), 도메인 프롬프트, 번역 메모리 지원"
relatedOrganization: alibaba
---

# Qwen-MT-Turbo 소개

## 개요
Qwen-MT-Turbo는 알리바바 클라우드의 Qwen 팀이 2025년 7월 발표한 특화 기계 번역 파운드 모델입니다. 최신 Qwen3 기반 아키텍처 위에서 수조 개의 다국어 및 번역 토큰을 추가 학습하여 기존 일반 LLM 대비 번역 품질과 자연스러움을 개선했습니다.

이 모델은 세계 인구의 95% 이상을 커버하는 92개 주요 언어와 주요 방언 간 번역을 지원하며, 저레이턴시 및 고효율 처리가 필요한 엔터프라이즈 환경 및 동시 다발적 번역 서비스 제공을 목표로 구축되었습니다.

## 기술 특징
Qwen-MT-Turbo는 경량화된 Mixture of Experts(MoE) 구조를 적용하여 높은 번역 품질을 유지하면서도 API 호출 비용(100만 출력 토큰당 약 $0.5 수준)과 응답 지연 시간을 크게 단축했습니다. 강화 학습(Reinforcement Learning) 기법을 훈련에 결합하여 직역 위주의 한계를 극복하고 자연스러운 어휘 선택과 문맥상 일치도를 달성했습니다.

또한, 단순 번역을 넘어 전문 용어집(Terminology Intervention) 주입, 도메인 특화 스타일 지정(Domain Prompts), 번역 메모리(Translation Memory) 파라미터를 API 레벨에서 직접 제어할 수 있어 IT, 법률, 의료 등 전문 영역에서의 일관성 높은 번역 결과를 제공합니다.

## 사용 사례
Qwen-MT-Turbo는 Qwen API (DashScope) 및 OpenAI 호환 API 방식을 통해 손쉽게 연동할 수 있습니다.

주요 사용 분야로는 실시간 챗봇의 다국어 번역, 글로벌 e-커머스 상품 설명 자동 번역, 특화 기술 문서 및 IT 커뮤니티 게시글의 도메인 특화 어조 번역 등이 있습니다. 특히 개발자가 사전에 정의한 용어 쌍(Terms)을 옵션으로 전달하여 브랜드 명칭이나 기술 용어를 고정 번역하는 시나리오에 유용합니다.

## 한계
Qwen-MT-Turbo는 텍스트 입력 및 번역 출력에 특화된 모델로서 이미지, 음성 등 멀티모달 입력 처리 기능이나 범용 도구 사용(Tool Use / Function Calling) 기능은 탑재되어 있지 않습니다. 또한 일반 범용 대화나 추론 능력보다는 번역 태스크에 집중 최적화되어 있으므로, 일반 지식 답변용 모델로는 적합하지 않습니다.
