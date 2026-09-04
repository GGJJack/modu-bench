---
modelId: deepseek-coder-v2-lite-instruct
domain: llm
status: published
updated: 2026-09-04
sources:
  - https://github.com/deepseek-ai/DeepSeek-Coder-V2
  - https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Lite-Instruct
  - https://arxiv.org/abs/2406.11931
features:
  toolUse: true
  vision: false
highlights:
  - "총 16B 파라미터 중 토큰당 2.4B 활성화되는 라이트급 MoE 코딩 모델"
  - "128K 컨텍스트 윈도우 지원 및 338개 프로그래밍 언어 이해"
  - "DeepSeek License 기반 오픈 가중치 제공"
relatedOrganization: deepseek
---

# DeepSeek-Coder-V2-Lite-Instruct 소개

## 개요
DeepSeek-Coder-V2-Lite-Instruct는 DeepSeek가 2024년 6월 정식 공개한 오픈소스 코딩 및 수리 특화 Mixture-of-Experts (MoE) 언어 모델의 경량 지시어 미세조정 버전입니다. 이 모델은 전체 160억(16B) 매개변수를 보유하면서도 추론 시 토큰당 24억(2.4B) 개의 파라미터만 선택적으로 활성화함으로써, 탁월한 코드 생성 성능과 단일 GPU급의 경량화된 연산 효율성을 동시에 이룩했습니다. 특히 오픈소스 코딩 LLM 중 최고 수준의 성능을 구현하여 개발자 친화적인 라이선스로 커뮤니티에 공개되었습니다.

## 기술 특징
DeepSeek-Coder-V2-Lite-Instruct는 DeepSeek-V2의 Multi-head Latent Attention (MLA) 및 DeepSeekMoE 아키텍처를 계승하여 추론 메모리(KV 캐시) 소모량을 획기적으로 감축했습니다. 학습 시 이전 버전의 86개 언어에서 대폭 확장된 총 338개의 프로그래밍 언어를 다루는 방대한 소스코드와 수학 말뭉치를 학습했습니다. 입력 길이 측면에서도 최대 128,000 토큰(128K)에 달하는 대용량 문맥 입력 창을 완벽 지원하여, 복잡한 프로젝트 구조나 거대한 소스 파일 파일군을 한 번에 파싱하고 정밀한 리팩토링 및 코드 자동 완성을 수행할 수 있습니다.

## 사용 사례
이 모델은 개인 개발자 및 소규모 소프트웨어 개발팀의 IDE 자동완성 플러그인, 코드 리뷰 에이전트, CI/CD 파이프라인 자동화 스크립트 생성기 등에 최적화되어 있습니다. C++, Python, Java, TypeScript뿐 아니라 Rust, Go, Haskell 등 특수 언어 환경에서의 오타 수정, 단위 테스트(Unit Test) 작성, API 문서화 작업을 빠르게 자동화합니다. 또한 강력한 도구 호출(Tool Use) 능력을 결합하여, 버그 추적기나 터미널 스크립트 실행기와 통합된 자율 코딩 보조 시스템으로 활발히 활용되고 있습니다.

## 한계
MoE 아키텍처 특성상 토큰당 활성화 파라미터 수는 2.4B에 불과하여 연산 속도는 빠르지만, 모델 전체 가중치가 약 16B 분량에 달하므로 GPU VRAM 메모리 적재 공간 측면에서는 동일 연산량의 순수 2B~3B Dense 모델보다 높은 메모리 용량을 요구합니다. 또한 236B 전체 파라미터를 활성화하는 대형 상위 모델인 DeepSeek-Coder-V2-Instruct에 비해서는 수만 줄 규모의 복합 아키텍처 설계나 정교한 경쟁 프로그래밍 벤치마크 문제에서 다소 낮은 정밀도를 보일 수 있습니다.
