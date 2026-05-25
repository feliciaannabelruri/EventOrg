import type { AvatarTone } from '@/types';

type Size = '' | 'sm' | 'lg';

interface AvatarProps {
  name?: string;
  tone?: AvatarTone;
  size?: Size;
}

export function Avatar({ name = '?', tone = 'green', size = '' }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  const toneCls = tone === 'green' ? '' : tone;
  return <div className={`avatar ${size} ${toneCls}`.trim()}>{initials}</div>;
}
