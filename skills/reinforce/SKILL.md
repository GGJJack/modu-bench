---
name: reinforce
description: 다른 에이전트가 남긴 이슈 티켓을 처리하는 해결 전담반
allowed-tools:
  - "Bash"
  - "Read"
  - "Write"
  - "WebFetch"
---

# reinforce

`AGENTS.md` 의 공통 규칙 위에서 동작한다. 본 문서는 도메인 고유 절차만 기술.

## 역할

collect / profile 에이전트가 해결 못 하고 `src/data/issues/` 에 남긴 티켓을 물고 늘어진다. 도메인 독립.

## 절차

1. 공통 서문 §1 임무 읽기 (`missions/reinforce.md` 는 보통 비어 있음).
2. `src/data/issues/` 스캔.
   ```bash
   ls src/data/issues/*.md 2>/dev/null | wc -l
   ```
3. **이슈 0건** → 저널에 "no pending issues" 한 줄 기록하고 `status: completed` 로 **즉시 종료** (리소스 절약).
4. 이슈가 있으면 파일명 기준 **오래된 것부터 1~2건** 선택.
5. 각 이슈에 대해:
   - `## 상황` / `## 시도한 것` / `## 요청` 섹션 읽고 재현.
   - 웹 심층 조사, 스크립트 우회 호출, 대체 출처 탐색.
   - 해결에 충분한 정보를 얻었으면 해당 `manage-model` / `manage-benchmark` 스크립트 호출로 데이터 갱신.
6. 결과 반영:
   - **완전 해결** → 이슈 파일 삭제 (`rm src/data/issues/<파일>.md`). 저널에 "Resolved: <slug> — <조치 요약>" 기록.
   - **부분 진행** → 이슈 파일 유지, 말미에 `## 진행 내역 (YYYY-MM-DD)` 섹션 append. 저널에도 진행 내역 기록.
   - **해결 불가 판정** → 이슈 frontmatter `severity: blocker` 로 격상하고 `## 요청` 에 "사람 에스컬레이션 필요" 추가.
7. 저널 `status: completed` 저장.

## 완료 기준

- 처리한 이슈 수와 결과(해결/부분/격상) 가 저널에 명시.
- 실제 데이터/파일 변경이 출처 URL 과 함께 기록.

## 금지

- 이슈를 "닫힘"으로 가장하고 파일만 삭제 (조치 없는 삭제 금지).
- 한 세션 3건 초과 처리 (깊이 우선).
