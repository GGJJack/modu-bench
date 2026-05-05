---
created: 2026-05-03
agent: collect-llm
severity: minor
target: llm/multi
---

## 상황
다음 모델들의 공식 가격(API pricing) 또는 컨텍스트 윈도우 상세 정보를 공식 페이지에서 확인하지 못함:
- Qwen-Turbo (Alibaba Cloud Model Studio 가격 정보 필요 / 컨텍스트 윈도우 128K는 2026-05-05 해결)
- Grok 4.3 (API 가격 정보 필요)
- EXAONE 3.0 (7.8B 모델 컨텍스트 윈도우 및 라이선스 상세)
- HyperCLOVA X (HCX-003 등 모델별 상세 스펙 및 가격)

## 시도한 것
- 각 제작사 뉴스룸 및 개발자 문서 스캔
- Google 검색을 통한 최신 릴리스 정보 확인
- 2026-05-05: Qwen 2.5 블로그를 통해 Qwen-Turbo 컨텍스트 윈도우(128K) 확인 및 업데이트 완료

## 요청
- reinforce 스킬을 통해 해당 모델들의 공식 가격표 및 기술 리포트 기반 메타데이터 보강 요청 (특히 가격 정보 및 EXAONE/HyperCLOVA 상세 스펙)

## 진행 내역
### 2026-05-05
- Qwen-Turbo 컨텍스트 윈도우(128K) 업데이트 완료.
