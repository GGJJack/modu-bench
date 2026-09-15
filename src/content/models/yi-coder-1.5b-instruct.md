---
modelId: yi-coder-1.5b-instruct
domain: llm
status: published
updated: 2026-09-15
sources:
  - https://github.com/01-ai/Yi-Coder
  - https://huggingface.co/01-ai/Yi-Coder-1.5B-Chat
  - https://arxiv.org/abs/2403.04652
features:
  toolUse: true
highlights:
  - "1.5B 소형 경량 파라미터 기반의 고성능 대화형 코딩 언어 모델"
  - "최대 128K 토큰의 초장문 컨텍스트 지원으로 소형 모델의 한계 극복"
  - "52개 주요 프로그래밍 언어 및 다국어 코딩 성능 검증"
relatedOrganization: 01-ai
---

# Yi-Coder-1.5B-Instruct 소개

## 개요
Yi-Coder-1.5B-Instruct는 01.AI에서 2024년 9월 출시한 경량급 코드 특화 지시 이행(Instruction-tuned / Chat) 언어 모델이다. 10B 미만 소형 파라미터 라인업 중에서도 단 1.5B 파라미터 크기를 유지하면서 뛰어난 코드 이해 및 생성 성능을 달성한 것이 특징이다.

Apache 2.0 라이선스로 배포되어 개인 개발자의 에지 디바이스 및 로컬 환경 구축부터 기업용 온프레미스 서비스에 이르기까지 자유롭게 활용할 수 있다. 소형 모델임에도 불구하고 최대 128K 토큰 길이를 지원하여 긴 소스코드 파일이나 멀티 파일 컨텍스트를 한 번에 처리할 수 있다.

## 기술 특징
Yi-Coder-1.5B-Instruct는 52개 프로그래밍 언어(Java, Python, JavaScript, C++, Go, Rust, SQL 등)로 작성된 광범위한 코드 데이터셋을 바탕으로 학습되었다. 1.5B 파라미터 체급에 맞추어 연산 비용 효율성을 극대화하였으며, Ollama, vLLM, SGLang, Transformers 등 최신 추론 프레임워크와의 우수한 호환성을 제공한다.

멀티링구얼 HumanEval 평가에서 Yi-Coder-Chat 1.5B 버전은 평균 51.9점의 패스율을 보이며 동급 1B~3B 체급의 오픈소스 모델들을 크게 상회하는 수치를 기록하였다. 지시 이행 및 대화 튜닝 과정을 거쳐 사용자의 자연어 요청에 정확하게 작동하는 코드 블록을 응답하는 능력이 정교하다.

## 사용 사례
Yi-Coder-1.5B-Instruct는 낮은 메모리 풋프린트를 가지므로 온디바이스(On-device) 코드 어시스턴트나 IDE 플러그인 백엔드로 뛰어난 실용성을 자랑한다. 예를 들어 개발자의 로컬 그래픽 카드나 경량 서버 환경에서 Ollama를 통해 오프라인 코드 자동 완성을 수행할 수 있다.

또한 자연어 질의를 SQL 문장으로 변환하는 NL2SQL 과업, 웹페이지 프론트엔드 코드 자동 생성, 단위 테스트 코드 작성 및 코드 오류 디버깅 보조 도구로 유용하게 사용된다.
