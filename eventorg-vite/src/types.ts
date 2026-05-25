/** Shared types used across components. */

export type Tone =
  | 'green'
  | 'coral'
  | 'amber'
  | 'violet'
  | 'blue'
  | 'pink'
  | 'rose'
  | 'gray'
  | 'plain';

export type AvatarTone = Exclude<Tone, 'plain'>;

export type BadgeTone = Exclude<Tone, 'plain'>;

/** Page identifiers used by the router. */
export type PageId =
  | 'dashboard'
  | 'org'
  | 'rekrutmen'
  | 'komunikasi'
  | 'task'
  | 'keuangan'
  | 'sponsorship'
  | 'vendor'
  | 'dokumentasi'
  | 'humas'
  | 'laporan';
