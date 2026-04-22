import { Link } from 'react-router-dom';
import { Calculator, BookText, FlaskConical, Globe, Languages, Atom, TestTubes, Dna, Landmark, MapPin } from 'lucide-react';
import type { Subject } from '@/types';
import { SUBJECT_COLORS, SUBJECT_BORDER_COLORS, SUBJECT_ICON_COLORS } from '@/constants/config';
import ProgressRing from './ProgressRing';

const iconMap: Record<string, React.ElementType> = {
  Calculator, BookText, FlaskConical, Globe, Languages, Atom, TestTubes, Dna, Landmark, MapPin,
};

interface SubjectCardProps {
  subject: Subject;
}

export default function SubjectCard({ subject }: SubjectCardProps) {
  const Icon = iconMap[subject.icon] || BookText;
  const gradient = SUBJECT_COLORS[subject.id] || 'from-white/10 to-white/5';
  const borderColor = SUBJECT_BORDER_COLORS[subject.id] || 'border-white/10';
  const iconColor = SUBJECT_ICON_COLORS[subject.id] || 'text-white';

  return (
    <Link
      to={`/subjects?filter=${subject.id}`}
      className={`group relative overflow-hidden rounded-xl border ${borderColor} bg-gradient-to-br ${gradient} p-5 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`size-11 rounded-lg bg-white/10 flex items-center justify-center ${iconColor}`}>
          <Icon className="size-5" />
        </div>
        <ProgressRing progress={subject.progress} size={44} strokeWidth={3} />
      </div>

      <h3 className="font-heading font-semibold text-foreground mb-1">{subject.name}</h3>
      <p className="text-xs text-muted-foreground">{subject.lessonsCount} ders</p>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px -12px hsl(174 72% 46% / 0.15)' }} />
    </Link>
  );
}
