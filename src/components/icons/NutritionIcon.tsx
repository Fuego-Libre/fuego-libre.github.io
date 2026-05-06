import type { IconProps } from './types';

export const NutritionIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z"/>
    <path d="M15 5a2 2 0 012-2h2a2 2 0 012 2v6a4 4 0 01-4 4h-2"/>
    <path d="M11 10h4"/>
  </svg>
);
