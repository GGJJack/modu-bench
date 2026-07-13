---
modelId: sarvam-105b
domain: llm
status: published
updated: 2026-07-13
sources:
  - https://www.sarvam.ai/blogs/sarvam-30b-105b
  - https://huggingface.co/sarvamai/sarvam-105b
features:
  toolUse: true
  vision: false
highlights:
  - "105B MoE 아키텍처, 12T 토큰 학습"
  - "인도 10대 주요 언어 최적화 (자체 벤치마크 90% 승률)"
  - "Multi-head Latent Attention (MLA) 적용으로 KV 캐시 효율화"
  - "Apache-2.0 오픈소스 라이선스"
relatedOrganization: sarvam-ai
---

## 개요
Sarvam 105B는 인도의 AI 스타트업 Sarvam AI가 개발한 1050억 매개변수 규모의 혼합 전문가(Mixture-of-Experts, MoE) 언어 모델입니다. 2026년 3월에 공개된 이 모델은 인도 정부의 'IndiaAI' 미션 하에 제공된 국산 컴퓨팅 인프라를 활용하여 처음부터 끝까지 학습되었습니다. 인도의 다양한 언어적·문화적 맥락을 깊이 이해하도록 설계되었으며, 데이터 큐레이션부터 학습, 미세 조정에 이르는 전 과정을 인도 현지에서 수행한 '주권형 AI(Sovereign AI)'의 대표적 사례입니다.

## 기술 특징
* **MoE 및 MLA 아키텍처**: 128개의 전문가 레이어를 갖춘 sparse MoE 구조를 통해 높은 지식 수용량과 추론 효율성을 동시에 확보했습니다. 특히 **Multi-head Latent Attention (MLA)** 기술을 적용하여 긴 문맥 처리 시 발생하는 KV 캐시의 메모리 부담을 획기적으로 줄였습니다.
* **대규모 인도 언어 학습**: 힌디어, 벵골어, 타밀어 등 인도 공용 10대 언어를 포함한 12조(12T) 토큰 규모의 데이터셋으로 학습되었습니다. 자체 개발한 토크나이저를 통해 인도 언어 처리 효율(Fertility Score)을 경쟁 모델 대비 대폭 개선했습니다.
* **강화 학습(RL) 기반 최적화**: 시뮬레이션 환경에서의 에이전트 실행 기록을 활용한 SFT와 GRPO(Group Relative Policy Optimization) 알고리즘을 통한 강화 학습을 거쳤습니다. 이를 통해 복잡한 수학적 추론, 코드 생성 및 다단계 도구 사용 능력을 강화했습니다.

## 사용 사례
* **Indus 비సి스턴트**: Sarvam AI의 공식 AI 앱 'Indus'의 핵심 엔진으로서, 인도 사용자를 위한 복잡한 추론 및 에이전트 워크플로우를 처리합니다.
* **STEM 교육 튜터링**: JEE(인도 공대 입시) 문제 풀이에서 Pass@2 기준 전 과목 만점을 기록하는 등 고도의 과학·수학 교육용 튜터 모드로 활용됩니다.
* **현지 비즈니스 자동화**: 인도 언어에 특화된 도구 호출(Tool Calling) 능력을 바탕으로 뱅킹, 농업 등 다양한 산업군의 고객 서비스 에이전트로 배포되고 있습니다.

## 한계
* **하드웨어 요구사항**: MoE 구조로 인해 실제 추론 시 활성 파라미터는 적지만, 모델 가중치 전체를 로드하기 위해서는 고사양 GPU 서버 인프라가 필수적입니다.
* **지리적 특화**: 인도 언어와 문화적 맥락에 최적화된 만큼, 서구권 중심의 데이터셋이나 다른 저리소스 언어에 대해서는 상대적인 성능 차이가 있을 수 있습니다.
