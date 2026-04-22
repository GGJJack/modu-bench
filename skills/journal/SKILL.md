---
name: journal
description: 당일 에이전트 저널을 모아 사용자 향 데일리 리포트(src/data/updates/)를 작성합니다
allowed-tools:
  - "Bash"
  - "Read"
  - "Write"
---

# journal (Daily Publisher)

`AGENTS.md` 의 공통 규칙 위에서 동작한다. 본 문서는 도메인 고유 절차만 기술.

## 역할

"리포터". 전날~오늘 새벽 사이 수행된 collect-*, profile-*, reinforce 의 저널 raw 로그를 읽어 **사람이 읽기 좋은 데일리 리포트** 하나를 `src/data/updates/YYYY-MM-DD-daily.md` 로 발행한다.

## 절차

1. 공통 서문 §1 임무 읽기 (대부분 master.md 만 참조).
2. 저널 열기/생성 (본인 저널은 `YYYY-MM-DD-journal.md`).
3. 리포트 대상 날짜 결정:
   - 원칙: 실행 시점 기준 "어제" (05:00 실행이면 전날 01~03시 수집/프로파일/보강 결과 집계).
   - `MODU_TODAY` env 가 있으면 그 값 우선 (로컬 테스트용).
4. 해당 날짜의 에이전트 저널 모두 읽기:
   ```bash
   ls src/data/journal/<DATE>-*.md
   ```
5. 각 저널에서:
   - `summary` 한 줄
   - `수행한 작업` 섹션의 실제 변경 리스트
   - 제기된 이슈 수
6. `src/data/updates/<DATE>-daily.md` 작성 (아래 템플릿):

```markdown
---
date: 2026-04-22
type: note
title: 데일리 리포트 · 2026-04-22
summary: <전체 한 줄 요약>
---

## 오늘의 수집

### LLM (collect-llm)
- 신규: <모델명> (출처 링크)
- 보강: <모델명> · <필드>

### 벤치마크 (collect-benchmark)
- ...

## 상세 페이지 작성 (profile)
- models/<id> · status=draft

## 이슈 처리 (reinforce)
- 해결 N건 / 부분 M건 / 잔여 K건

## 미해결 이슈
- issues/<파일명> — 한 줄 요지
```

7. 기존 `src/data/updates/*.md` 는 이미 타임라인에 연결되어 있으므로 ([src/pages/index.astro](../../src/pages/index.astro) 참조), 추가 작업 없이 다음 빌드에 반영됨.
8. 본인 저널 `status: completed` 저장.

## 완료 기준

- `src/data/updates/<DATE>-daily.md` 1개 생성.
- 모든 수치(신규 N건 등)가 실제 저널에서 추출된 것.
- 사실 주장은 해당 에이전트 저널의 URL 을 출처로 사용 (저널의 출처는 신뢰 → 체인 오브 출처).

## 금지

- 실제 저널에 없는 활동을 "있었던 것"으로 서술.
- 에이전트 저널 raw 내용을 그대로 복사 (가독성 있게 재구성).
