# collect-llm 출처 (LLM 도메인)

## 공식 릴리스 채널 (official)

- OpenAI 블로그/모델 카드 — https://openai.com/blog, https://platform.openai.com/docs/models
- Anthropic 뉴스/모델 페이지 — https://www.anthropic.com/news, https://docs.anthropic.com
- Google DeepMind / Gemini — https://deepmind.google, https://ai.google.dev/gemini-api/docs/models
- Meta AI / Llama — https://ai.meta.com, https://llama.meta.com
- Mistral — https://mistral.ai/news
- xAI Grok — https://x.ai/news
- DeepSeek — https://www.deepseek.com, https://api-docs.deepseek.com
- Qwen (Alibaba) — https://qwenlm.github.io
- Cohere — https://cohere.com/blog

## 국가별 LLM (missions/llm.md 에서 활성화될 수 있음)

- 한국: 네이버 HyperCLOVA X (https://clova-x.naver.com), LG AI EXAONE (https://www.lgresearch.ai), 업스테이지 Solar (https://www.upstage.ai)
- 일본: Rakuten AI, Sakana AI (https://sakana.ai)
- 중국: Baichuan, Yi, MiniMax, Zhipu GLM

## 리더보드 / 커뮤니티 (community)

- HuggingFace Open LLM Leaderboard v3 — https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard
- Chatbot Arena (LMArena) — https://lmarena.ai
- Papers With Code — https://paperswithcode.com/area/natural-language-processing
- Artificial Analysis — https://artificialanalysis.ai

## 논문 / 기술 리포트

- arXiv cs.CL — https://arxiv.org/list/cs.CL/new
- 모델 카드에 명시된 논문 URL

## 조사 체크리스트

모델 하나당 다음을 채우려 시도:

- `id` (snake-case)
- `name` (공식 표기)
- `provider` (제작사 공식명)
- `releaseDate` (YYYY-MM-DD, 공식 발표일)
- `license` (Proprietary / Apache-2.0 / MIT / Llama / Gemma / ...)
- `parameterSize` (공개된 경우만, 예 "70B")
- `contextWindow` (숫자, 토큰)
- `pricing.input` / `pricing.output` ($/1M tokens)
- `links.official` / `links.paper` / `links.huggingface` / `links.github`

확인 실패 필드는 null 유지. 추정 금지.
