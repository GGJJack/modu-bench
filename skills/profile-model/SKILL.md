---
name: profile-model
description: 등록된 모델의 상세 페이지(Markdown)를 src/content/models/ 에 작성합니다
allowed-tools:
  - "Bash"
  - "Read"
  - "Write"
  - "WebFetch"
---

# profile-model

`AGENTS.md` 의 공통 규칙 위에서 동작한다. 특히 §7 상세 페이지 규칙을 따른다.

## 역할

이미 JSON 에 등록된 모델을 대상으로 **상세 페이지**를 작성한다. 모델의 개요, 특징, 독자 기능, 대표 사용 사례를 서술형 한국어 Markdown 으로.

## 절차

1. 공통 서문 §1 임무 읽기.
2. 저널 열기/생성.
3. 대상 선정:
   ```bash
   bun run skills/manage-model/scripts/model.ts list llm
   ```
   기존 `src/content/models/` 에 파일이 없는 모델 중 우선순위(임무 파일 또는 최근 등록순) 상위 1~2개 선택.
4. 해당 모델의 JSON 지표를 읽어 맥락 파악 (가격, 컨텍스트, 라이선스).
5. 공식 출처(모델 카드, 블로그, 논문) 에서 서술 소재 확보. 모든 사실 주장은 URL 로 뒷받침.
6. `src/content/models/<id>.md` 작성 (아래 템플릿).
7. 본문이 충분히 완성되면 frontmatter `status: published`. 아직 부족하면 `draft` 로 두고 저널에 이어서 할 것 기록.
8. `bun run build` 로 Zod 스키마 검증 (로컬 시뮬 한정).

## 상세 페이지 템플릿

```markdown
---
modelId: qwen3-next
domain: llm
status: draft
updated: 2026-04-22
sources:
  - https://qwenlm.github.io/blog/qwen3-next/
  - https://huggingface.co/Qwen/Qwen3-Next-80B
features:
  toolUse: true
  vision: false
highlights:
  - "80B MoE, 활성 파라미터 14B"
relatedOrganization: alibaba
---

# Qwen3-Next 소개

## 개요
<모델 정체성, 공개 시점, 포지셔닝 1~2 문단>

## 기술 특징
<아키텍처, 훈련 방법의 요지. 모든 주장은 출처로 뒷받침>

## 사용 사례
<공식이 명시한 예시 중심>

## 한계
<공개된 제한사항. 추측 금지>
```

## 완료 기준

- `src/content/models/<id>.md` 신규 생성.
- `bun run build` 가 스키마 검증 오류 없이 통과 (status=published 일 때).
- 저널 `status: completed`, 작성한 파일 경로 기록.

## 금지

- JSON 필드를 변경 (그건 collect-llm 의 역할).
- 본문에 출처 없는 주장 삽입.
- 한 세션에서 3개 초과 작성 (품질 우선).
