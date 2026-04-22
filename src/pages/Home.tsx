import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, Play, Brain, BarChart3, BookOpen, Sparkles, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import Watermark from '@/components/features/Watermark';

const features = [
  { icon: Play, title: 'Ders Videoları', desc: 'MEB müfredatına uygun konu anlatım videoları ile derslerini pekiştir.' },
  { icon: Brain, title: 'AI Destekli Öğrenme', desc: 'NotebookLM entegrasyonu ile anında özet çıkar ve sorularını sor.' },
  { icon: BarChart3, title: 'İlerleme Takibi', desc: 'Kapsamlı dashboard ile performansını analiz et, hedeflerini belirle.' },
  { icon: BookOpen, title: 'İnteraktif Quizler', desc: 'Her dersin sonunda mini testlerle öğrendiğini hemen pekiştir.' },
];

const stats = [
  { value: '10+', label: 'Ders' },
  { value: '200+', label: 'Video' },
  { value: '1000+', label: 'Quiz' },
  { value: '50K+', label: 'Öğrenci' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' } }),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-nav flex items-center justify-between px-6 lg:px-12 h-16 bg-background/60 backdrop-blur-xl border-b border-white/[0.06]">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="size-9 rounded-lg bg-gradient-to-br from-teal to-cyan flex items-center justify-center">
            <GraduationCap className="size-5 text-navy" strokeWidth={2.5} />
          </div>
          <div>
            <span className="font-heading font-bold text-lg text-foreground">A-EDU</span>
            <span className="block text-[10px] text-muted-foreground leading-none -mt-0.5">for Türkiye</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Özellikler</a>
          <a href="#subjects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dersler</a>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" className="font-heading font-semibold text-sm border-border text-foreground hover:bg-white/[0.04]">
              Giriş Yap
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-primary text-primary-foreground font-heading font-semibold gap-2 text-sm">
              Kayıt Ol
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center pt-16">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 size-64 rounded-full bg-teal/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 size-48 rounded-full bg-cyan/5 blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left content */}
            <div className="lg:col-span-7">
              <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-heading font-medium text-primary mb-6">
                  <Sparkles className="size-3" />
                  AI Destekli Eğitim Platformu
                </span>
              </motion.div>

              <motion.h1
                initial="hidden" animate="visible" custom={1} variants={fadeUp}
                className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight text-balance mb-6"
              >
                Sınavlara
                <span className="text-gradient"> akıllıca </span>
                hazırlan
              </motion.h1>

              <motion.p
                initial="hidden" animate="visible" custom={2} variants={fadeUp}
                className="text-lg text-muted-foreground max-w-xl text-pretty mb-8"
              >
                MEB müfredatına uygun ders videoları, AI destekli özetler ve interaktif quizlerle sınavlarına en etkili şekilde hazırlan.
              </motion.p>

              <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} className="flex flex-wrap gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-primary text-primary-foreground font-heading font-semibold gap-2 glow-teal">
                    Ücretsiz Başla
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
                <a href="#features">
                  <Button size="lg" variant="outline" className="font-heading font-semibold gap-2 border-border text-foreground hover:bg-white/[0.04]">
                    Keşfet
                    <ChevronRight className="size-4" />
                  </Button>
                </a>
              </motion.div>

              {/* Stats Row */}
              <motion.div initial="hidden" animate="visible" custom={4} variants={fadeUp} className="flex gap-8 mt-12">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-heading font-bold text-2xl text-gradient tabular-nums">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Floating preview cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative">
                {/* Main card */}
                <div className="glass-strong rounded-2xl p-5 relative">
                  <div className="aspect-video rounded-lg overflow-hidden bg-navy mb-4 relative">
                    <img
                      src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=340&fit=crop"
                      alt="Matematik dersi"
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="size-14 rounded-full bg-primary/80 flex items-center justify-center glow-teal">
                        <Play className="size-6 text-navy ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                    <Watermark />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Denklem Çözümleri</h3>
                  <p className="text-xs text-muted-foreground">Matematik • 25 dakika</p>
                </div>

                {/* Floating score card */}
                <div className="absolute -right-4 top-8 glass-strong rounded-xl p-3 animate-pulse-glow">
                  <div className="text-xs text-muted-foreground font-heading mb-1">Quiz Skoru</div>
                  <div className="font-heading font-bold text-xl text-gradient tabular-nums">95/100</div>
                </div>

                {/* Floating AI card */}
                <div className="absolute -left-6 bottom-8 glass-strong rounded-xl p-3 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <Brain className="size-4 text-primary" />
                    <span className="text-xs font-heading font-semibold text-foreground">AI Özet</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground line-clamp-2">Birinci dereceden denklemler, eşitlik ilkesi kullanılarak...</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4 text-balance">Öğrenmenin yeni yolu</h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-pretty">AI teknolojisi ve etkileşimli araçlarla donatılmış modern eğitim deneyimi.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group glass rounded-xl p-6 hover:glass-strong transition-all duration-300"
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:glow-teal transition-shadow duration-300">
                  <f.icon className="size-6" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="subjects" className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-strong rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-teal/10 blur-3xl rounded-full pointer-events-none" />
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4 relative text-balance">
              Hemen öğrenmeye başla
            </h2>
            <p className="text-muted-foreground mb-8 relative text-pretty">
              10 dersten 200+ video ve 1000+ quiz sorusu seni bekliyor. Üstelik tamamen ücretsiz.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-primary text-primary-foreground font-heading font-semibold gap-2 glow-teal relative">
                Ücretsiz Kayıt Ol
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-md bg-gradient-to-br from-teal to-cyan flex items-center justify-center">
              <GraduationCap className="size-4 text-navy" strokeWidth={2.5} />
            </div>
            <span className="font-heading font-bold text-sm text-foreground">A-EDU for Türkiye</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 A-EDU. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
