---
modelId: codegeex4-all-9b
domain: llm
status: published
updated: 2026-09-20
sources:
  - https://huggingface.co/THUDM/codegeex4-all-9b
  - https://github.com/THUDM/CodeGeeX4
  - https://arxiv.org/abs/2409.15838
features:
  toolUse: true
  vision: false
  fineTuning: true
highlights:
  - "GLM-4 9B 기반 코드 생성 다목적 언어모델"
  - "128K 컨텍스트 윈도우 지원 및 리포지토리 수준 코드 이해"
  - "코드 완성, 수정, 설명, 프로젝트 레벨 연동 특화"
relatedOrganization: zhipu-ai
---

# CodeGeeX4-ALL-9B 소개

## 개요
CodeGeeX4-ALL-9B는 Zhipu AI(칭화대학교 THUDM 연구실 연계)가 2024년 7월 공개한 오픈 소스 다목적 코드 생성 및 언어 모델이다. GLM-4 9B 아키텍처를 기반으로 대규모 멀티리걸 코드 데이터 세트로 사전 학습되었으며, 단일 9B 파라미터 규격에서 파라미터 대비 뛰어난 코딩 성능과 추론 능력을 발휘한다.

## 기술 특징
최대 128,000(128K) 토큰의 확장된 컨텍스트 윈도우를 기본 지원하여, 단일 파일 수준의 단순 생성을 넘어 다중 파일 및 전체 프로젝트 리포지토리 맥락을 효율적으로 파악할 수 있다. 코드 완성(Code Completion), 자동 리팩터링, 코드 설명, 도구 사용(Tool Use) 기능을 통합 지원하여 IDE 플러그인 및 개발 에이전트에 원활히 연동된다.

## 사용 사례
VS Code, JetBrains 계열 IDE 기반 개발자 보조 도구 엔진으로 활용되며, 프로젝트 단위의 맥락 분석, 단위 테스트 코드 자동 생성, 버그 수정 및 API 연동 스크립트 작성 분야에서 활용도가 높다. 128K 긴 컨텍스트 덕분에 대형 라이브러리의 문서와 코드 베이스를 일괄 입력받아 분석하는 작업에 유용하다.

## 한계
9B 경량 모델 특성상 매우 긴 다단계 프로젝트 구조 전체를 설계하는 고난도 아키텍처링에는 한계가 존재할 수 있다. 상용 서비스 배포 시 Zhipu AI의 CodeGeeX License 지침을 확인해야 한다.
