import type { ReactNode } from 'react';
import type { BadgeTone } from '@/types';

interface BadgeProps {
  tone?: BadgeTone;
  dot?: boolean;
  children: ReactNode;
}

export function Badge({ tone = 'gray', dot = false, children }: BadgeProps) {
  return (
    <span className={`badge b-${tone} ${dot ? 'b-dot' : ''}`.trim()}>
      {children}
    </span>
  );
}
