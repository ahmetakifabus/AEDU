export const APP_NAME = 'A-EDU';
export const APP_TAGLINE = "Türkiye'nin Akıllı Eğitim Platformu";
export const WATERMARK_TEXT = 'A-EDU for Türkiye';

export const GRADE_LEVELS = ['5. Sınıf', '6. Sınıf', '7. Sınıf', '8. Sınıf', '9. Sınıf', '10. Sınıf', '11. Sınıf', '12. Sınıf'] as const;

export const NAV_ITEMS = [
  { label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
  { label: 'Dersler', path: '/subjects', icon: 'BookOpen' },
  { label: 'AI Asistan', path: '/ai-tutor', icon: 'Bot' },
] as const;

export const SUBJECT_COLORS: Record<string, string> = {
  matematik: 'from-blue-500/20 to-blue-600/10',
  turkce: 'from-rose-500/20 to-rose-600/10',
  fen: 'from-emerald-500/20 to-emerald-600/10',
  sosyal: 'from-amber-500/20 to-amber-600/10',
  ingilizce: 'from-violet-500/20 to-violet-600/10',
  fizik: 'from-cyan-500/20 to-cyan-600/10',
  kimya: 'from-orange-500/20 to-orange-600/10',
  biyoloji: 'from-lime-500/20 to-lime-600/10',
  tarih: 'from-yellow-500/20 to-yellow-600/10',
  cografya: 'from-teal-500/20 to-teal-600/10',
};

export const SUBJECT_BORDER_COLORS: Record<string, string> = {
  matematik: 'border-blue-500/30',
  turkce: 'border-rose-500/30',
  fen: 'border-emerald-500/30',
  sosyal: 'border-amber-500/30',
  ingilizce: 'border-violet-500/30',
  fizik: 'border-cyan-500/30',
  kimya: 'border-orange-500/30',
  biyoloji: 'border-lime-500/30',
  tarih: 'border-yellow-500/30',
  cografya: 'border-teal-500/30',
};

export const SUBJECT_ICON_COLORS: Record<string, string> = {
  matematik: 'text-blue-400',
  turkce: 'text-rose-400',
  fen: 'text-emerald-400',
  sosyal: 'text-amber-400',
  ingilizce: 'text-violet-400',
  fizik: 'text-cyan-400',
  kimya: 'text-orange-400',
  biyoloji: 'text-lime-400',
  tarih: 'text-yellow-400',
  cografya: 'text-teal-400',
};
