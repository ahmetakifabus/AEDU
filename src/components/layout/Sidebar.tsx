import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Bot, GraduationCap, Flame, RotateCcw, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { signOut } from '@/lib/auth';
import { useUserStore } from '@/stores/userStore';
import { Button } from '@/components/ui/button';
import { lessons } from '@/constants/mockData';
import { toast } from 'sonner';

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Dersler', path: '/subjects', icon: BookOpen },
  { label: 'AI Asistan', path: '/ai-tutor', icon: Bot },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { progress, resetProgress } = useUserStore();
  const completedCount = progress.lessonsCompleted.length;
  const totalLessons = lessons.length;
  const pct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
  const displayName = user?.username || user?.email?.split('@')[0] || 'Öğrenci';

  async function handleLogout() {
    try {
      await signOut();
      navigate('/');
    } catch (err: any) {
      toast.error(err.message || 'Çıkış yapılamadı.');
    }
  }

  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-border bg-[hsl(222,47%,9%)]">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2.5 px-6 py-5 border-b border-border">
        <div className="size-9 rounded-lg bg-gradient-to-br from-teal to-cyan flex items-center justify-center">
          <GraduationCap className="size-5 text-navy" strokeWidth={2.5} />
        </div>
        <div>
          <span className="font-heading font-bold text-lg text-foreground">A-EDU</span>
          <span className="block text-[11px] text-muted-foreground leading-none -mt-0.5">for Türkiye</span>
        </div>
      </Link>

      {/* Nav Items */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150',
                active
                  ? 'bg-primary/10 text-primary glow-teal'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.04]'
              )}
            >
              <item.icon className="size-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Progress Widget */}
      <div className="mx-3 mb-2 p-4 rounded-xl glass">
        <div className="flex items-center gap-2 mb-2">
          <Flame className="size-5 text-orange-400" />
          <span className="text-sm font-heading font-semibold text-foreground">{progress.streak} Günlük Seri</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-white/10 mb-2">
          <div className="h-full rounded-full bg-gradient-to-r from-teal to-cyan transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
        <p className="text-xs text-muted-foreground">
          {completedCount}/{totalLessons} ders tamamlandı
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">Devam et, {displayName}!</p>
      </div>

      {/* Reset + Logout */}
      <div className="mx-3 mb-3 space-y-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={resetProgress}
          className="w-full text-xs text-muted-foreground hover:text-destructive gap-1.5 font-heading"
        >
          <RotateCcw className="size-3" />
          İlerlemeyi Sıfırla
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="w-full text-xs text-muted-foreground hover:text-destructive gap-1.5 font-heading"
        >
          <LogOut className="size-3" />
          Çıkış Yap
        </Button>
      </div>
    </aside>
  );
}
