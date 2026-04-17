// ============================================================
// 활동 타임라인 유틸
//
// GitHub PR 머지 기록(history.json)과 수동 공지(updates/*.md)를
// 하나의 타임라인으로 병합/정렬합니다.
// ============================================================

export interface PRItem {
  number: number;
  title: string;
  mergedAt: string;
  author: string;
  labels: string[];
  url: string;
}

export interface HistoryFile {
  generatedAt: string | null;
  prs: PRItem[];
}

export interface UpdateFrontmatter {
  date: string;
  type: 'announcement' | 'milestone' | 'note';
  title: string;
  summary: string;
}

export type TimelineItem =
  | { kind: 'pr'; date: string; data: PRItem }
  | { kind: 'update'; date: string; data: UpdateFrontmatter };

/** PR 라벨에서 에이전트 종류를 추출 */
export function agentFromLabels(labels: string[]): 'jules' | 'human' | 'bot' | 'unknown' {
  if (labels.includes('jules')) return 'jules';
  if (labels.includes('human')) return 'human';
  if (labels.includes('bot')) return 'bot';
  return 'unknown';
}

/** PR 라벨에서 도메인 추출 (domain/llm → llm) */
export function domainFromLabels(labels: string[]): string | null {
  const label = labels.find((l) => l.startsWith('domain/'));
  return label ? label.slice('domain/'.length) : null;
}

/** PR이 자동 머지되었는지 */
export function isAutoMerged(labels: string[]): boolean {
  return labels.includes('auto-merged');
}

/** 두 소스를 병합해서 날짜 내림차순 정렬 */
export function buildTimeline(
  history: HistoryFile,
  updates: UpdateFrontmatter[],
  limit = 30,
): TimelineItem[] {
  const prItems: TimelineItem[] = history.prs.map((pr) => ({
    kind: 'pr',
    date: pr.mergedAt,
    data: pr,
  }));

  const updateItems: TimelineItem[] = updates.map((u) => ({
    kind: 'update',
    date: u.date,
    data: u,
  }));

  return [...prItems, ...updateItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

/** 사람이 읽기 쉬운 상대 시간 */
export function formatRelative(iso: string): string {
  const now = Date.now();
  const then = new Date(iso).getTime();
  const diff = now - then;
  const day = 24 * 60 * 60 * 1000;

  if (diff < day) return '오늘';
  if (diff < 2 * day) return '어제';
  if (diff < 7 * day) return `${Math.floor(diff / day)}일 전`;
  if (diff < 30 * day) return `${Math.floor(diff / (7 * day))}주 전`;
  if (diff < 365 * day) return `${Math.floor(diff / (30 * day))}개월 전`;
  return `${Math.floor(diff / (365 * day))}년 전`;
}
