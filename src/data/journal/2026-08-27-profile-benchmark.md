---
date: 2026-08-27
agent: profile-benchmark
status: completed
summary: "CyberGym, CTI-REALM 벤치마크 상세 페이지 신규 작성"
---

## Todo
- [x] 신규 벤치마크 `cybergym` 상세 페이지(Markdown) 작성 및 출처 검증
- [x] 신규 벤치마크 `cti-realm` 상세 페이지(Markdown) 작성 및 출처 검증
- [x] `bun run build` 스키마 검증 및 프로젝트 빌드 성공 확인

## 조사 내역
- 02:30 CyberGym-E2E 벤치마크 정보 확인 (공식 웹사이트, 논문) ← https://www.cybergym.io/cybergym-e2e/, https://arxiv.org/abs/2606.04460
- 02:35 CTI-REALM 벤치마크 정보 확인 (Microsoft Research, 논문) ← https://www.microsoft.com/en-us/research/publication/cti-realm-benchmark-to-evaluate-agent-performance-on-security-detection-rule-generation-capabilities/, https://arxiv.org/abs/2603.13517

## 수행한 작업
- [x] `cybergym` 상세 페이지 (`src/content/benchmarks/cybergym.md`) 신규 생성 (`status: published`) ← https://www.cybergym.io/cybergym-e2e/
- [x] `cti-realm` 상세 페이지 (`src/content/benchmarks/cti-realm.md`) 신규 생성 (`status: published`) ← https://www.microsoft.com/en-us/research/publication/cti-realm-benchmark-to-evaluate-agent-performance-on-security-detection-rule-generation-capabilities/

## 판단 / 고민
- 최근 collect-benchmark 스킬에서 등록된 보안/코딩 관련 신규 벤치마크 중 CyberGym-E2E와 CTI-REALM을 선정하여 프로파일을 작성하였습니다.
- 두 벤치마크 모두 공식 웹사이트와 논문 URL을 통해 신뢰성 높은 출처 3개 이상을 확보하였고, 3문단 이상의 충분한 서술을 작성하여 `status: published`로 설정하였습니다.
- 기관 스텁의 경우 CyberGym은 `uc-berkeley`, CTI-REALM은 `microsoft`를 연관 기관으로 지정하였으며 두 기관 모두 이미 존재하므로 별도의 스텁 생성이나 이슈 등록은 진행하지 않았습니다.

## 이슈 제기
- (없음)
