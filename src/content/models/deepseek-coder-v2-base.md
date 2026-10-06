---
modelId: deepseek-coder-v2-base
domain: llm
status: published
updated: 2026-10-06
sources:
  - https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Base
  - https://www.deepseek.com
  - https://github.com/deepseek-ai/DeepSeek-Coder-V2
features:
  toolUse: false
  vision: false
highlights:
  - "총 236B 파라미터 중 활성 21B MoE 아키텍처"
  - "128K 컨텍스트 윈도우 및 338개 프로그래밍 언어 지원"
relatedOrganization: deepseek
---

# DeepSeek-Coder-V2-Base 소개

## 개요
DeepSeek-Coder-V2-Base는 DeepSeek에서 공개한 236B 규모의 혼합 전문가(Mixture-of-Experts, MoE) 기반 오픈소스 코드 언어 모델의 베이스 버전이다. DeepSeek-V2의 중간 체크포인트에서 출발하여 추가로 6조(6T) 토큰을 계속 사전 학습(Continued Pre-training)함으로써, 기존 프로그래밍 및 수학적 추론 능력을 획기적으로 강화하였다.

이 모델은 총 236B 파라미터 중 추론 시 21B의 파라미터만 활성화되는 DeepSeekMoE 아키텍처를 채택하여 높은 컴퓨팅 효율성을 제공한다. 또한 이전 DeepSeek-Coder-33B가 86개 언어 및 16K 컨텍스트를 지원했던 것에 비해, 지원 프로그래밍 언어 수를 338개로 확장하고 컨텍스트 길이를 128K로 크게 늘렸다.

## 기술 특징
DeepSeek-Coder-V2-Base는 대규모 오픈소스 코드 베이스와 수학 데이터셋을 활용해 사전 학습되었다. Fill-in-the-Middle(FIM) 메커니즘을 지원하여 코드 완성(Code Completion)뿐만 아니라 코드 중간 삽입(Code Insertion) 작업에도 뛰어난 성능을 발휘한다.

추론 효율성을 위해 bfloat16 포맷과 함께 vLLM 및 SGLang과 같은 분산 추론 프레임워크와의 통합을 공식 지원한다. 128K의 확장된 컨텍스트 윈도우를 바탕으로 대규모 프로젝트 코드베이스 전체를 분석하고 장문 컨텍스트에 대한 종단간 이해 능력을 제공한다.

## 사용 사례
DeepSeek-Coder-V2-Base는 명령 미세조정(Instruction Tuning)이나 정렬 학습(Alignment)을 진행하기 위한 고성능 가공용 베이스 모델로 주로 활용된다. 개발자는 이 베이스 모델을 바탕으로 특정 프로그래밍 언어나 도메인 전용 도메인 특화 Coder 모델을 커스텀 학습시킬 수 있다.

또한 FIM 패턴을 지원하므로 IDE 자동완성 엔진 backend나 코드 인필링(Infilling) 연구 프레임워크의 핵심 기반 모델로 적합하다.

## 한계
DeepSeek-Coder-V2-Base는 지시 이행(Instruction Following)이나 대화형 챗봇 정렬이 적용되지 않은 사전 학습 베이스 모델이다. 따라서 시스템 프롬프트나 대화 맥락을 직접 이해하기보다는 이어 쓰기 형태로 출력을 생성하는 특성을 가진다.

또한 236B 전체 파라미터 크기로 인해 BF16 정밀도 추론 시 최소 8장의 80GB GPU(예: A100/H100) 환경이 필요하다는 하드웨어 제약사항이 존재한다.
