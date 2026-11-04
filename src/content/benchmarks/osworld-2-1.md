---
benchmarkId: osworld-2-1
domain: llm
status: published
updated: 2026-11-04
sources:
  - "https://huggingface.co/spaces/xlang-ai/OSWorld-Leaderboard"
  - "https://os-world.github.io/"
  - "https://arxiv.org/abs/2404.07972"
organization: xlang-ai
paperUrl: "https://arxiv.org/abs/2404.07972"
highlights:
  - "Ubuntu, Windows, macOS 등 실제 컴퓨터 환경에서 멀티모달 에이전트의 워크플로우를 테스트"
  - "웹 및 데스크탑 앱, 파일 I/O 등을 포함한 369개의 실제 컴퓨터 작업"
  - "AWS 지원 등을 통한 평가 시간 단축 및 신뢰성 향상을 거친 OSWorld의 2.1 버전"
---

# OSWorld 2.1

## 개요
OSWorld는 운영체제(Ubuntu, Windows, macOS 등) 환경에서 실제 컴퓨터 작업에 대한 멀티모달 에이전트(Multimodal Agents)의 성능을 평가하기 위한 벤치마크입니다. 단순한 기능 확인이 아니라, 웹과 데스크탑 앱, 파일 I/O 및 여러 애플리케이션에 걸친 워크플로우를 테스트합니다.

OSWorld 2.1은 기존 OSWorld(Verified 버전 포함)를 기반으로 컴퓨터 환경에서의 멀티모달 에이전트 워크플로우를 한층 더 안정적으로 평가할 수 있도록 업데이트된 버전입니다.

## 평가 방법
369개의 실사용 환경 기반 작업을 통해 평가를 진행합니다. 각 작업은 세부적인 초기 상태 구성을 포함하고 있으며, 자체 실행 기반 평가 스크립트(execution-based evaluation script)를 사용하여 신뢰할 수 있고 재현 가능한 평가를 수행합니다. 성공적으로 작업을 완료한 비율(%)이 주요 지표가 됩니다.

## 의의 및 한계
실제 사용자가 매일 접하는 오픈엔디드(open-ended) 컴퓨터 작업을 에이전트가 얼마나 잘 수행할 수 있는지 평가한다는 점에서 실용적인 가치가 높습니다. 2.1 버전은 지속적으로 발견된 환경 설정 문제나 안정성 이슈를 개선하고, 실제 워크플로우의 복잡성을 보다 면밀하게 벤치마킹하는 것을 목표로 합니다.
단, 일부 작업은 네트워크나 운영체제의 외부 요인에 의해 설정에 변수가 생길 수 있습니다.
