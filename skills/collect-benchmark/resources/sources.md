# collect-benchmark 출처

## 벤치마크 정의 공식 출처

- Papers With Code — https://paperswithcode.com (거의 모든 주요 벤치의 paper + 리더보드 링크)
- HuggingFace Datasets / Spaces — https://huggingface.co/spaces
- arXiv — 해당 벤치마크를 소개한 원 논문

## LLM 벤치마크 리더보드

- **HuggingFace Open LLM Leaderboard v3** — https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard
  - 포함: MMLU-Pro, GPQA, MUSR, MATH, IFEval, BBH
- **Chatbot Arena (LMArena)** — https://lmarena.ai
  - `metric: "ELO"`, 복합 점수
- **LiveBench** — https://livebench.ai
- **Artificial Analysis** — https://artificialanalysis.ai
- **AlpacaEval 2.0** — https://tatsu-lab.github.io/alpaca_eval
- **MT-Bench** — https://github.com/lm-sys/FastChat (복합: turn1/turn2)
- **HumanEval / HumanEval+** — https://github.com/openai/human-eval (pass@k)
- **MBPP / MBPP+** — https://github.com/google-research/google-research/tree/master/mbpp
- **KMMLU (한국어)** — https://huggingface.co/datasets/HAERAE-HUB/KMMLU
- **Ko-H5 / LogicKor (한국어)** — HAERAE-HUB, Korean community boards

## 복합 점수 처리

- **MT-Bench**: `subMetrics: [{id:"turn1",...}, {id:"turn2",...}]`. 주 `value` 는 평균.
- **Chatbot Arena**: `metric: "ELO"`, 단일값. `scoreRange` 는 대략 [800, 1500].
- **HumanEval pass@k**: `metric: "pass@1"` 을 기본으로, `subscores: {"pass@10": ..., "pass@100": ...}` 에 추가.

## 조사 체크리스트

벤치마크 정의 하나당:
- `id` (kebab-case, 예: `mmlu`, `humaneval`, `mt-bench`)
- `name` (공식 표기)
- `nameKo` (한국어명)
- `category` (reasoning/coding/instruction/korean/math/knowledge)
- `description` (1~2문장, 한국어)
- `source` (원 논문 또는 공식 repo URL)
- `unit` (`%`, `점`, `ELO`, `초` 등)
- `scoreRange` ([min, max])
- `higherIsBetter`
- (선택) `metric`, `subMetrics`

점수 하나당:
- `value` (대표값)
- `date` (YYYY-MM-DD, 리더보드 갱신일 또는 논문 발표일)
- `source` (`official` | `community`)
- (선택) `subscores`, `note` (URL 포함)
