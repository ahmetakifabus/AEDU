import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Bell, Menu, LayoutDashboard, BookOpen, Bot, GraduationCap, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { signOut } from '@/lib/auth';
import { useUserStore } from '@/stores/userStore';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const mobileNav = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Dersler', path: '/subjects', icon: BookOpen },
  { label: 'AI Asistan', path: '/ai-tutor', icon: Bot },
];

export default function TopBar() {
  const { user } = useAuth();
  const { progress } = useUserStore();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  async function handleLogout() {
    try {
      await signOut();
      navigate('/');
    } catch (err: any) {
      toast.error(err.message || 'Çıkış yapılamadı.');
    }
  }

  const displayName = user?.username || user?.email?.split('@')[0] || 'Öğrenci';

  return (
    <>
      <header className="flex items-center justify-between gap-4 border-b border-border px-4 lg:px-6 h-14 shrink-0 bg-background/80 backdrop-blur-md">
        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Menüyü aç">
          <Menu className="size-5" />
        </Button>

        {/* Search */}
        <div className="hidden sm:flex items-center gap-2 flex-1 max-w-md glass rounded-lg px-3 py-1.5">
          <Search className="size-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Ders veya konu ara..."
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1"
          />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative" aria-label="Bildirimler">
            <Bell className="size-5 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-primary" />
          </Button>

          {/* XP Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs font-heading font-semibold">
            <span className="text-primary">{progress.xp}</span>
            <span className="text-muted-foreground">XP</span>
          </div>

          {/* Avatar */}
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={displayName}
              className="size-8 rounded-full object-cover border border-border"
            />
          ) : (
            <div className="size-8 rounded-full bg-gradient-to-br from-teal to-cyan flex items-center justify-center text-sm font-heading font-bold text-navy">
              {displayName[0]?.toUpperCase()}
            </div>
          )}

          {/* Logout */}
          <Button variant="ghost" size="icon" onClick={handleLogout} aria-label="Çıkış yap" className="text-muted-foreground hover:text-destructive">
            <LogOut className="size-4" />
          </Button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-overlay bg-background/95 backdrop-blur-md lg:hidden flex flex-col">
          <div className="flex items-center justify-between px-4 h-14 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-gradient-to-br from-teal to-cyan flex items-center justify-center">
                <GraduationCap className="size-4 text-navy" strokeWidth={2.5} />
              </div>
              <span className="font-heading font-bold text-foreground">A-EDU</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Menüyü kapat">
              <X className="size-5" />
            </Button>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2">
            {mobileNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors',
                  pathname === item.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.04]'
                )}
              >
                <item.icon className="size-5" />
                {item.label}
              </Link>
            ))}
          </nav>
          {/* Mobile logout */}
          <div className="px-4 pb-6">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-destructive hover:bg-destructive/10 transition-colors w-full"
            >
              <LogOut className="size-5" />
              Çıkış Yap
            </button>
          </div>
        </div>
      )}
    </>
  );
}
