import { useId } from "react";

// Cosmic IB monogram: two crossed orbit rings, a planet dot, and the letters
// filled with the site's accent gradient.
export default function Logo({ className = "" }) {
  const id = useId();
  const grad = `url(#${id}-g)`;
  return (
    <span className={`relative inline-flex h-9 w-9 items-center justify-center ${className}`}>
      <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--accent-2))" />
          </linearGradient>
        </defs>
        <g transform="rotate(-24 20 20)">
          <ellipse cx="20" cy="20" rx="17" ry="7" fill="none" stroke={grad} strokeWidth="1.3" />
        </g>
        <g transform="rotate(66 20 20)">
          <ellipse cx="20" cy="20" rx="17" ry="7" fill="none" stroke={grad} strokeWidth="1.1" opacity="0.4" />
        </g>
        <circle cx="32" cy="11" r="1.7" fill={grad} />
        <text
          x="20"
          y="25.5"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', serif"
          fontSize="15"
          fontWeight="600"
          fill={grad}
        >
          IB
        </text>
      </svg>
    </span>
  );
}