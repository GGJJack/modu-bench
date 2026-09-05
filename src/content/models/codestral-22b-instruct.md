---
modelId: codestral-22b-instruct
domain: llm
status: published
updated: 2026-09-05
sources:
  - https://mistral.ai/news/codestral/
  - https://huggingface.co/mistralai/Codestral-22B-v0.1
features:
  toolUse: true
highlights:
  - "22B 파라미터 코드 생성 전용 모델"
  - "80개 이상 프로그래밍 언어 지원 및 32K 컨텍스트 윈도우"
  - "Fill-in-the-Middle(FIM) 기능 및 IDE 플러그인 연동 지원"
relatedOrganization: mistral-ai
---

# Codestral 22B Instruct 소개

## 개요
Codestral 22B Instruct는 Mistral AI가 개발하여 2024년 5월에 공개한 첫 번째 코드 생성 전용 생성형 AI 모델이다. 22B(220억) 파라미터 규모를 가지며, 소프트웨어 개발자들이 코드 작성, 리팩토링, 설명 및 자동 완성을 효율적으로 수행할 수 있도록 설계되었다.

## 기술 특징
Codestral은 Python, Java, C, C++, JavaScript, Bash를 비롯한 80개 이상의 다양한 프로그래밍 언어 데이터를 바탕으로 학습되었다. 32K 토큰의 긴 컨텍스트 윈도우를 지원하여 복잡한 코드베이스 전체 또는 긴 파일 단위의 맥락을 안정적으로 처리한다. 또한, 코드의 중간 부분을 자동 보완하는 Fill-in-the-Middle(FIM) 메커니즘을 지원하여 VS Code, JetBrains 등의 개발 환경과 원활하게 통합된다.

## 사용 사례
개발자는 Codestral을 지시 이행(Instruct) 방식으로 활용하여 특정 함수의 단위 테스트(Unit Test)를 자동 작성하거나 작성된 코드의 오류를 수정하고 리팩토링 방안을 제시받을 수 있다. 또한 Continue.dev, Tabnine 등의 IDE 플러그인과 연동하여 실시간 자동 완성 및 코드 대화형 보조 도구로 활용된다.

## 한계
Codestral 22B Instruct 모델 자체에는 출력 자체 제어를 위한 기본 모더레이션 메커니즘이 포함되어 있지 않으므로, 보안 및 안전성 요구사항이 엄격한 운용 환경에서는 별도의 가드레일 레이어가 필요하다.
