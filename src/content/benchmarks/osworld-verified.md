---
benchmarkId: osworld-verified
domain: llm
status: draft
updated: 2026-05-15
sources:
  - "https://os-world.github.io/"
  - "https://arxiv.org/abs/2404.07972"
paperUrl: "https://arxiv.org/abs/2404.07972"
highlights:
  - "Ubuntu, Windows, macOS 등 실제 컴퓨터 환경에서 멀티모달 에이전트의 워크플로우를 테스트"
  - "웹 및 데스크탑 앱, 파일 I/O 등을 포함한 369개의 실제 컴퓨터 작업"
  - "AWS 지원 등을 통한 평가 시간 단축 및 신뢰성 향상을 거친 Verified 버전"
---

# OSWorld-Verified

## 개요
OSWorld는 운영체제(Ubuntu, Windows, macOS 등) 환경에서 실제 컴퓨터 작업에 대한 멀티모달 에이전트(Multimodal Agents)의 성능을 평가하기 위한 벤치마크입니다. 단순한 기능 확인이 아니라, 웹과 데스크탑 앱, 파일 I/O 및 여러 애플리케이션에 걸친 워크플로우를 테스트합니다.

OSWorld-Verified는 기존 OSWorld를 기반으로 커뮤니티 보고 문제를 수정하고 AWS 지원 등을 통해 평가 속도와 안정성을 대폭 개선한 업그레이드 버전입니다.

## 평가 방법
369개의 실사용 환경 기반 작업을 통해 평가를 진행합니다. 각 작업은 세부적인 초기 상태 구성을 포함하고 있으며, 자체 실행 기반 평가 스크립트(execution-based evaluation script)를 사용하여 신뢰할 수 있고 재현 가능한 평가를 수행합니다. 성공적으로 작업을 완료한 비율(%)이 주요 지표가 됩니다.

## 의의 및 한계
실제 사용자가 매일 접하는 오픈엔디드(open-ended) 컴퓨터 작업을 에이전트가 얼마나 잘 수행할 수 있는지 평가한다는 점에서 실용적인 가치가 높습니다. 초기 버전 이후 발견된 불안정성과 설정 문제를 적극적으로 해결하여(Verified 업데이트) 벤치마크로서의 신뢰성을 높였습니다.
단, 일부 작업(예: 구글 드라이브 연동 등)은 네트워크 상황이나 인증 등 외부 요인에 의해 설정에 변수가 생길 수 있습니다.
