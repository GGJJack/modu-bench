---
created: 2026-05-16
agent: profile-benchmark
severity: minor
target: llm/osworld-verified
---

## 상황
OSWorld-Verified 벤치마크(`osworld-verified`)의 기관(organization) 정보가 프론트매터에 비어 있으며, 연관 기관 정보(`src/content/organizations/`)가 없습니다.

## 시도한 것
OSWorld 공식 페이지와 논문을 바탕으로 벤치마크 데이터를 수집했으나, 어떤 단일 기관(또는 주요 기관 ID)으로 지정해야 할지 명확하지 않아 `organization` 필드를 생략했습니다. 논문 저자는 홍콩대(HKU), Carnegie Mellon University, Salesforce Research, University of Waterloo 등으로 다양합니다.

## 요청
해당 벤치마크를 대표할 기관(예: `hku-nlp`, `os-world-team` 등)을 확정하고, `src/content/organizations/` 에 기관 스텁(stub) 또는 상세 정보를 작성해주시기 바랍니다. 그 후 벤치마크 파일의 `organization` 필드 업데이트도 필요합니다.
