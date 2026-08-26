---
date: 2026-08-26
agent: collect-benchmark
status: completed
summary: "Sakana Fugu Cyber 및 Grok 4.5 벤치마크 점수 등록 (CyberGym, CTI-REALM, DeepSWE 등)"
---

## Todo
- [x] Sakana Fugu Cyber 모델 벤치마크 점수 탐색 및 등록 (CyberGym, CTI-REALM)
- [x] Grok 4.5 모델 벤치마크 점수 탐색 및 등록 (DeepSWE 1.0, DeepSWE 1.1, SWE Marathon, Terminal Bench 2.1, SWE Bench Pro)

## 조사 내역
- 01:35 `sakana-fugu-cyber` 모델의 벤치마크 점수 (CyberGym 86.9%, CTI-REALM 0.721) 확인 ← https://sakana.ai/fugu-cyber-release/
- 01:40 `grok-4-5` 모델의 벤치마크 점수 (DeepSWE 1.0, DeepSWE 1.1, SWE Marathon, Terminal Bench 2.1, SWE Bench Pro) 확인 ← https://x.ai/news/grok-4-5

## 수행한 작업
- [x] 신규 벤치마크 `cybergym` (사이버짐 (CyberGym)) 생성 ← https://www.cybergym.io/cybergym-e2e/
- [x] 신규 벤치마크 `cti-realm` (CTI-REALM) 생성 ← https://www.microsoft.com/en-us/research/publication/cti-realm-benchmark-to-evaluate-agent-performance-on-security-detection-rule-generation-capabilities/
- [x] `sakana-fugu-cyber` 점수 매칭 2건 등록 (cybergym, cti-realm) ← https://sakana.ai/fugu-cyber-release/
- [x] 신규 벤치마크 `deepswe-1-0` (DeepSWE 1.0), `deepswe-1-1` (DeepSWE 1.1), `swe-marathon` (SWE Marathon) 생성 ← https://x.ai/news/grok-4-5
- [x] `grok-4-5` 점수 매칭 5건 등록 (deepswe-1-0, deepswe-1-1, swe-marathon, terminal-bench-2-1, swe-bench-pro) ← https://x.ai/news/grok-4-5

## 판단 / 고민
- CyberGym 벤치마크는 자율 취약점 연구를 위한 AI 보안 벤치마크이므로 생성하였으며, CTI-REALM은 AI 에이전트의 위협 정보 해석 및 탐지 규칙 생성을 평가하는 벤치마크로 생성하였음.
- CTI-REALM의 경우 Pass/Fail %가 아니라 0~1 사이의 Trajectory Reward Score이므로 단위를 Score, scoreRange를 [0,1]로 설정함.
- Grok 4.5 공개에 맞춰 함께 공개된 신규 코딩/엔지니어링 벤치마크(DeepSWE 1.0, DeepSWE 1.1, SWE Marathon)를 추가로 생성함.

## 이슈 제기
- (없음)
