import { useState } from 'react';

interface StarsProps {
  value: number;
  onChange?: (next: number) => void;
}

export function Stars({ value, onChange }: StarsProps) {
  const [hover, setHover] = useState(0);
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          className={(hover ? n <= hover : n <= value) ? 'on' : ''}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange?.(n)}
        >
          ★
        </button>
      ))}
    </div>
  );
}
