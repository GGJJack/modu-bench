---
name: profile-benchmark
description: 벤치마크 상세 페이지와 제작 기관 페이지를 src/content/ 에 작성합니다
allowed-tools:
  - "Bash"
  - "Read"
  - "Write"
  - "WebFetch"
---

# profile-benchmark

`AGENTS.md` 의 공통 규칙 위에서 동작한다. 특히 §7 상세 페이지 규칙을 따른다.

## 역할

등록된 벤치마크의 상세 페이지를 작성하고, **제작 기관** 페이지가 없으면 스텁을 함께 만든다. 기관 단독 스킬을 따로 두지 않고 이 스킬이 부수 처리한다.

## 절차

1. 공통 서문 §1 임무 읽기.
2. 저널 열기/생성.
3. 대상 선정:
   ```bash
   bun run skills/manage-benchmark/scripts/benchmark.ts list llm
   ```
   `src/content/benchmarks/` 에 없는 벤치 중 상위 1~2개.
4. 원 논문 / 공식 repo / 리더보드 페이지 조사.
5. `src/content/benchmarks/<id>.md` 작성:

   ```markdown
   ---
   benchmarkId: mmlu
   domain: llm
   status: draft
   updated: 2026-04-22
   sources:
     - https://arxiv.org/abs/2009.03300
   organization: hendrycks-lab
   paperUrl: https://arxiv.org/abs/2009.03300
   highlights:
     - "57개 학문 분야 5지선다"
   ---

   # MMLU

   ## 개요
   ## 평가 방법
   ## 점수 해석
   ## 한계와 비판
   ```

6. **기관 처리**: `organization` 값에 해당하는 `src/content/organizations/<id>.md` 존재 확인. 없으면 스텁 생성:

   ```markdown
   ---
   orgId: hendrycks-lab
   name: Hendrycks Lab
   type: academic
   status: draft
   updated: 2026-04-22
   sources:
     - https://arxiv.org/abs/2009.03300
   ---

   # Hendrycks Lab
   <조직 개요 TBD. reinforce 가 보강 예정이거나 다음 사이클에 확장>
   ```

   스텁은 `status: draft` 로 두고 이슈 티켓 생성("기관 상세 조사 필요").
7. 필요 시 `bun run build` 로 검증.

## 완료 기준

- 최소 1건의 벤치마크 상세 페이지.
- 참조된 기관 페이지 존재 또는 스텁 생성.
- 저널 `status: completed`.

## 금지

- JSON 점수/정의 변경 (collect-benchmark 의 역할).
- 추측성 역사적 기술(예: "이 기관은 2020년경 설립되었다" — 출처 없이 금지).
- 한 세션 3개 초과.
