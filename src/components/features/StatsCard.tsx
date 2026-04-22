import type { ReactNode } from 'react';

interface StatsCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  subtitle?: string;
  className?: string;
}

export default function StatsCard({ icon, label, value, subtitle, className = '' }: StatsCardProps) {
  return (
    <div className={`glass rounded-xl p-4 ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <span className="text-xs text-muted-foreground font-heading">{label}</span>
      </div>
      <div className="font-heading font-bold text-2xl text-foreground tabular-nums">{value}</div>
      {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
    </div>
  );
}
