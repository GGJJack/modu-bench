// ============================================================
// ModuBench 데이터 타입 정의
// ============================================================

/** AI 모델 도메인 */
export type Domain = 'llm' | 'image-gen' | 'tts' | 'stt' | 'multimodal';

/** 라이선스 유형 */
export type LicenseType = 'Proprietary' | 'Apache-2.0' | 'MIT' | 'Llama' | 'Gemma' | 'CC-BY-4.0' | 'CC-BY-NC-4.0' | string;

/** 점수 출처 */
export type ScoreSource = 'official' | 'community' | 'reproduced';

// ============================================================
// 모델 타입
// ============================================================

/** 모든 모델 공통 필드 */
export interface BaseModel {
  id: string;
  name: string;
  provider: string;
  releaseDate: string;
  license: LicenseType;
  links?: {
    official?: string;
    paper?: string;
    huggingface?: string;
    github?: string;
  };
}

/** LLM 모델 */
export interface LLMModel extends BaseModel {
  parameterSize: string | null;
  contextWindow: number | null;
  pricing: { input: number; output: number } | null;
}

/** 이미지 생성 모델 */
export interface ImageGenModel extends BaseModel {
  maxResolution: string | null;
  supportedStyles: string[];
  pricing: { perImage: number } | null;
}

/** TTS 모델 */
export interface TTSModel extends BaseModel {
  supportedLanguages: string[];
  realtime: boolean;
  pricing: { perCharacter: number } | null;
}

/** STT 모델 */
export interface STTModel extends BaseModel {
  supportedLanguages: string[];
  realtime: boolean;
  pricing: { perMinute: number } | null;
}

/** 멀티모달 모델 */
export interface MultimodalModel extends BaseModel {
  supportedModalities: ('text' | 'image' | 'audio' | 'video')[];
  contextWindow: number | null;
  pricing: { input: number; output: number } | null;
}

/** 도메인별 모델 타입 매핑 */
export type ModelByDomain = {
  llm: LLMModel;
  'image-gen': ImageGenModel;
  tts: TTSModel;
  stt: STTModel;
  multimodal: MultimodalModel;
};

// ============================================================
// 벤치마크 타입
// ============================================================

/** 벤치마크 세부 지표 정의 (복합 점수를 가진 벤치마크용) */
export interface SubMetricDef {
  id: string;
  name: string;
  unit: string;
  higherIsBetter?: boolean;
}

/** 벤치마크 정의 */
export interface BenchmarkDef {
  id: string;
  name: string;
  nameKo: string;
  category: string;
  description: string;
  source: string;
  unit: string;
  scoreRange: [number, number];
  higherIsBetter: boolean;
  /** 주 지표 이름 (예: "accuracy" | "ELO" | "pass@1"). 단일값 벤치마크는 생략 가능 */
  metric?: string;
  /** 복합 점수 벤치마크의 보조 지표 정의 (예: MT-Bench의 turn1/turn2) */
  subMetrics?: SubMetricDef[];
}

/** 개별 점수 */
export interface Score {
  value: number;
  date: string;
  source: ScoreSource;
  note?: string;
  /** 보조 지표 값 (BenchmarkDef.subMetrics 의 id를 key로) */
  subscores?: Record<string, number>;
}

/** 도메인별 벤치마크 파일 구조 */
export interface BenchmarkFile {
  domain: Domain;
  benchmarks: BenchmarkDef[];
  scores: Record<string, Record<string, Score>>;
}

/** 도메인별 모델 파일 구조 */
export interface ModelFile<T extends BaseModel = BaseModel> {
  domain: Domain;
  models: T[];
}
