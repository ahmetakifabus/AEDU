import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, Play, CheckCircle2, BookOpen } from 'lucide-react';
import { subjects, lessons } from '@/constants/mockData';
import { useUserStore } from '@/stores/userStore';
import LessonCard from '@/components/features/LessonCard';
import { cn } from '@/lib/utils';
import { SUBJECT_ICON_COLORS } from '@/constants/config';

export default function Subjects() {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') || '';
  const [activeSubject, setActiveSubject] = useState(filterParam);
  const [searchQuery, setSearchQuery] = useState('');
  const { progress } = useUserStore();

  const filteredLessons = useMemo(() => {
    let result = lessons;
    if (activeSubject) {
      result = result.filter((l) => l.subjectId === activeSubject);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((l) => l.title.toLowerCase().includes(q) || l.description.toLowerCase().includes(q));
    }
    return result;
  }, [activeSubject, searchQuery]);

  // Calculate completion stats per subject
  const subjectStats = useMemo(() => {
    const stats: Record<string, { total: number; completed: number }> = {};
    for (const sub of subjects) {
      const subLessons = lessons.filter((l) => l.subjectId === sub.id);
      const completed = subLessons.filter((l) => progress.lessonsCompleted.includes(l.id)).length;
      stats[sub.id] = { total: subLessons.length, completed };
    }
    return stats;
  }, [progress.lessonsCompleted]);

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-bold text-2xl text-foreground">Dersler</h1>
          <p className="text-sm text-muted-foreground mt-1">Video izle, quiz çöz, konuları öğren</p>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 glass rounded-lg px-3 py-2 w-full sm:w-72">
          <Search className="size-4 text-muted-foreground shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ders veya konu ara..."
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1"
          />
        </div>
      </div>

      {/* Subject filter chips */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveSubject('')}
          className={cn(
            'px-3 py-1.5 rounded-lg text-xs font-heading font-medium transition-all duration-200',
            !activeSubject
              ? 'bg-primary/10 text-primary border border-primary/30 glow-teal'
              : 'glass text-muted-foreground hover:text-foreground border border-transparent hover:border-border'
          )}
        >
          Tümü ({lessons.length})
        </button>
        {subjects.map((s) => {
          const stats = subjectStats[s.id];
          const isActive = activeSubject === s.id;
          const isFullyComplete = stats && stats.completed === stats.total && stats.total > 0;
          return (
            <button
              key={s.id}
              onClick={() => setActiveSubject(isActive ? '' : s.id)}
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-heading font-medium transition-all duration-200 flex items-center gap-1.5',
                isActive
                  ? 'bg-primary/10 text-primary border border-primary/30 glow-teal'
                  : 'glass text-muted-foreground hover:text-foreground border border-transparent hover:border-border'
              )}
            >
              {isFullyComplete && <CheckCircle2 className="size-3 text-primary" />}
              {s.name}
              <span className="text-[10px] opacity-60">{stats?.completed}/{stats?.total}</span>
            </button>
          );
        })}
      </div>

      {/* Active subject header */}
      {activeSubject && (() => {
        const sub = subjects.find((s) => s.id === activeSubject);
        const stats = subjectStats[activeSubject];
        if (!sub) return null;
        return (
          <div className="glass rounded-xl p-5 flex items-center gap-4">
            <div className={cn('size-12 rounded-xl bg-white/10 flex items-center justify-center', SUBJECT_ICON_COLORS[sub.id] || 'text-primary')}>
              <BookOpen className="size-6" />
            </div>
            <div className="flex-1">
              <h2 className="font-heading font-bold text-lg text-foreground">{sub.name}</h2>
              <p className="text-sm text-muted-foreground">{stats?.completed}/{stats?.total} ders tamamlandı</p>
            </div>
            <div className="w-24 h-2 rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-teal to-cyan transition-all duration-500"
                style={{ width: stats ? `${(stats.completed / stats.total) * 100}%` : '0%' }}
              />
            </div>
          </div>
        );
      })()}

      {/* Results header */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <SlidersHorizontal className="size-4" />
        <span>{filteredLessons.length} ders bulundu</span>
        {activeSubject && (
          <button
            onClick={() => setActiveSubject('')}
            className="ml-2 text-xs text-primary hover:underline"
          >
            Filtreyi kaldır
          </button>
        )}
      </div>

      {/* Lesson grid */}
      <div className="grid lg:grid-cols-2 gap-3">
        {filteredLessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>

      {filteredLessons.length === 0 && (
        <div className="text-center py-16 glass rounded-xl">
          <BookOpen className="size-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground font-heading">Aradığınız kriterlere uygun ders bulunamadı.</p>
          <button onClick={() => { setActiveSubject(''); setSearchQuery(''); }} className="text-sm text-primary mt-2 hover:underline font-heading">
            Tüm dersleri göster
          </button>
        </div>
      )}
    </div>
  );
}
