---
modelId: phi-3.5-moe-instruct
domain: llm
status: published
updated: 2026-11-05
sources:
  - https://techcommunity.microsoft.com/t5/ai-azure-ai-services-blog/announcing-the-availability-of-phi-3-5-moe-in-azure-ai-studio/ba-p/4256278
  - https://huggingface.co/microsoft/Phi-3.5-MoE-instruct
  - https://arxiv.org/abs/2409.12136
features:
  toolUse: true
highlights:
  - "총 42B 파라미터 중 토큰당 6.6B만 활성화하는 16×3.8B MoE 아키텍처"
  - "전문가 특화도를 극대화하는 GRIN(GRadient-INformed) MoE 훈련 기법 적용"
  - "128K 대규모 컨텍스트 윈도우 및 다국어(한국어 CLIcK, HAERAE, KMMLU 평가 포함) 지원"
  - "MIT 라이선스"
relatedOrganization: microsoft
---

# Phi-3.5-MoE-instruct 소개

## 개요
Phi-3.5-MoE-instruct는 2024년 8월 Microsoft가 공개한 전문가 혼합(Mixture-of-Experts, MoE) 기반 오픈 가중치 언어 모델입니다. 총 42B(16×3.8B) 파라미터 중 토큰 생성 시 단 6.6B의 파라미터(2개 전문가)만을 선택적으로 활성화하여, 연산 비용을 7B급 소형 모델 수준으로 유지하면서도 14B급 이상의 고밀도 모델 및 Llama 3.1 8B, Mistral-Nemo 12B, Gemini-1.5-Flash와 대등하거나 이를 능가하는 뛰어난 추론 효율성을 달성했습니다.

## 기술 특징
Phi-3.5-MoE의 핵심 혁신은 Microsoft 연구진이 개발한 GRIN(GRadient-INformed MoE) 훈련 기법입니다. 기존 MoE 모델의 이산적 라우팅 방식에서 발생하던 역전파 손실 및 토큰 드롭 문제를 해결하고 전문가 블록 간 작업 특화도(STEM, 인문, 사회과학 등)를 극대화했습니다. 훈련 데이터는 고품질 합성 데이터와 엄격히 필터링된 공개 문서를 포함한 총 4.9조(4.9T) 토큰(10%의 다국어 토큰 포함)으로 구축되었습니다. 또한 지도 학습 미세 조정(SFT), 근접 정책 최적화(PPO), 직접 선호 최적화(DPO)를 통해 안정적인 지시 준수 성능을 확보하였으며, 128K에 이르는 긴 문맥 길이를 지원하여 장문 문서 요약과 코드 이해(RepoQA 등)에서 강력한 역량을 발휘합니다. 특히 한국어 벤치마크(CLIcK 56.44%, HAERAE 1.0 61.83%, KMMLU 47.92%) 평가 결과가 모델 카드에 공식 등재될 정도로 다국어 언어 이해력이 검증되었습니다.

## 사용 사례
Phi-3.5-MoE-instruct는 계산 자원 대비 높은 지능과 긴 문맥 처리가 요구되는 광범위한 서비스에 이상적입니다. Azure AI Studio의 서버리스 API(입력 1M 토큰당 $0.13, 출력 1M 토큰당 $0.52) 및 GitHub 모델 카탈로그를 통해 인프라 구축 부담 없이 도입할 수 있으며, 128K 컨텍스트를 활용한 장문 회의록 요약, 법률·금융 문서 심층 분석, 복잡한 다단계 함수 호출(Tool-use) 및 수학/코딩 추론 에이전트 구축에 최적화되어 있습니다. MIT 라이선스가 적용되어 연구와 상업적 배포 모두에서 폭넓게 활용 가능합니다.

## 한계
Phi-3.5-MoE는 다국어 및 추론 성능이 대폭 개선되었으나, 6.6B의 활성 파라미터 특성상 백과사전 수준의 방대한 사실 지식을 기억하는 데는 절대적인 용량 한계가 존재합니다. 따라서 지식 집약적인 질의응답에서는 RAG 파이프라인의 뒷받침이 필요합니다. 또한 매우 긴 대화 세션에서는 반복적이거나 일관성이 떨어지는 응답이 발생할 수 있어 적절한 대화 턴 수 제어 및 애플리케이션 수준의 안전 가드레일 적용이 권장됩니다.
