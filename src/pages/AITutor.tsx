import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Trash2, Sparkles, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUserStore } from '@/stores/userStore';
import { aiSuggestedPrompts } from '@/constants/mockData';
import aiTutorImg from '@/assets/ai-tutor.png';
import Watermark from '@/components/features/Watermark';
import type { ChatMessage } from '@/types';
import { cn } from '@/lib/utils';

const mockAIResponses: Record<string, string> = {
  'Bu konunun özeti nedir?': 'Bu konunun temel noktaları şunlardır:\n\n1. **Temel kavramlar**: Her konunun yapı taşlarını anlamak önemlidir.\n2. **Formüller**: İlgili formülleri ezberlemek yerine mantığını kavramak daha kalıcı öğrenme sağlar.\n3. **Uygulama**: Bol soru çözmek konuyu pekiştirir.\n\nDetaylı bir özet için hangi konuyu incelememi istersin?',
  'Sınavda en çok çıkan sorular neler?': '📊 MEB sınavlarında en sık çıkan soru tipleri:\n\n• **Yorumlama soruları** (%35): Grafik, tablo veya metin yorumlama\n• **İşlem soruları** (%25): Temel hesaplama ve formül uygulama\n• **Kavram soruları** (%20): Tanım ve kural bilgisi\n• **Günlük hayat problemleri** (%20): Gerçek yaşam uygulamaları\n\nHangi konuda pratik yapmak istersin?',
  'Bu konuyu günlük hayatta nerelerde kullanırım?': 'Bu konu günlük hayatın birçok alanında karşımıza çıkar:\n\n🛒 **Alışveriş**: İndirim hesaplama, fiyat karşılaştırma\n🏠 **Ev**: Alan ve hacim hesaplama, boya/parke miktarı\n🚗 **Ulaşım**: Hız, mesafe ve süre hesaplama\n💰 **Finans**: Faiz hesaplama, bütçe yönetimi\n\nBelirli bir örnek üzerinde çalışmak ister misin?',
  'Bana pratik yapabileceğim sorular sor': 'Hadi pratik yapalım! 🎯\n\n**Soru 1**: Bir sayının %25\'i 48 ise bu sayı kaçtır?\n\n**Soru 2**: 3x + 7 = 22 denkleminde x kaçtır?\n\n**Soru 3**: Bir dikdörtgenin uzun kenarı 12 cm, kısa kenarı 8 cm ise çevresi kaç cm\'dir?\n\nCevaplarını yaz, kontrol edeyim!',
  'Bu konunun formüllerini listele': '📐 **Temel Formüller**:\n\n• Alan = Uzunluk × Genişlik\n• Çevre = 2 × (Uzunluk + Genişlik)\n• Hız = Yol / Zaman\n• Yüzde = (Parça / Bütün) × 100\n• Ortalama = Toplam / Eleman Sayısı\n\nBu formüllerden hangisini detaylı açıklamamı istersin?',
  'Anlamadığım yerleri daha basit anlat': 'Tabii ki! Konuyu daha basit anlatayım 🎓\n\nBu konuyu şöyle düşün: Bir pizza siparişi verdiğini hayal et. 🍕\n\n• **Kesirler**: Pizza\'yı eşit parçalara bölmek\n• **Yüzde**: Her dilimin toplama oranı\n• **Denklem**: Kaç dilim yersen kaç kalır hesabı\n\nHangi kısmı daha detaylı açıklayayım?',
};

function getAIResponse(msg: string): string {
  const exactMatch = mockAIResponses[msg];
  if (exactMatch) return exactMatch;

  if (msg.toLowerCase().includes('merhaba') || msg.toLowerCase().includes('selam')) {
    return 'Merhaba! 👋 Ben A-EDU AI Asistanınım. Derslerinle ilgili her türlü soruyu sorabilirsin. Konu özeti, sınav tüyoları veya pratik sorular — ne istersen yardımcı olayım!';
  }

  return `Harika bir soru! 🧠\n\nBu konuyla ilgili şunları söyleyebilirim:\n\n1. **Temel prensip**: Her konunun altında yatan mantığı kavramak önemlidir.\n2. **Pratik**: Bol soru çözmek en etkili yöntemdir.\n3. **Tekrar**: Düzenli aralıklarla tekrar yaparak bilgiyi kalıcı hâle getir.\n\nDaha spesifik bir soru sormak ister misin? Hangi ders veya konu üzerinde çalışıyorsun?`;
}

export default function AITutor() {
  const { chatHistory, addChatMessage, clearChat } = useUserStore();
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory, isTyping]);

  function handleSend(text?: string) {
    const msg = text || input.trim();
    if (!msg) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: msg,
      timestamp: Date.now(),
    };
    addChatMessage(userMsg);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: getAIResponse(msg),
        timestamp: Date.now(),
      };
      addChatMessage(aiMsg);
      setIsTyping(false);
    }, 1200);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="animate-fade-in h-[calc(100vh-3.5rem-2rem)] lg:h-[calc(100vh-3.5rem-3rem)] flex flex-col">
      <div className="grid lg:grid-cols-12 gap-6 flex-1 min-h-0">
        {/* Chat area */}
        <div className="lg:col-span-8 flex flex-col min-h-0 glass rounded-xl overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border shrink-0">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bot className="size-5 text-primary" />
              </div>
              <div>
                <h2 className="font-heading font-semibold text-sm text-foreground">A-EDU AI Asistan</h2>
                <p className="text-[11px] text-muted-foreground">NotebookLM Entegrasyonu (mocked)</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={clearChat} aria-label="Sohbeti temizle" className="text-muted-foreground hover:text-destructive">
              <Trash2 className="size-4" />
            </Button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {chatHistory.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="relative mb-6">
                  <img src={aiTutorImg} alt="AI Asistan" className="size-28 object-contain opacity-80" />
                  <Watermark className="text-[8px] bottom-0 right-0" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">AI Asistanına hoş geldin!</h3>
                <p className="text-sm text-muted-foreground max-w-md text-pretty mb-6">
                  Derslerinle ilgili sorular sor, konu özetleri al veya pratik yapmak için soru iste. NotebookLM entegrasyonu ile anında yardım.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {aiSuggestedPrompts.slice(0, 4).map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSend(prompt)}
                      className="px-3 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground hover:text-foreground hover:glass-strong transition-all"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {chatHistory.map((msg) => (
              <div key={msg.id} className={cn('flex gap-3', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                {msg.role === 'ai' && (
                  <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="size-4 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    'max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed',
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-sm'
                      : 'glass-strong text-foreground rounded-bl-sm'
                  )}
                >
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                </div>
                {msg.role === 'user' && (
                  <div className="size-8 rounded-lg bg-gradient-to-br from-teal to-cyan flex items-center justify-center shrink-0 mt-1">
                    <User className="size-4 text-navy" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-start">
                <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Bot className="size-4 text-primary" />
                </div>
                <div className="glass-strong rounded-xl px-4 py-3 rounded-bl-sm">
                  <div className="flex gap-1">
                    <span className="size-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="size-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="size-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="px-5 py-3 border-t border-border shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Sorunuzu yazın..."
                className="flex-1 bg-white/[0.04] border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary transition-shadow"
              />
              <Button
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className="bg-primary text-primary-foreground shrink-0"
                aria-label="Gönder"
              >
                <Send className="size-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-4 hidden lg:block">
          {/* Suggested prompts */}
          <div className="glass rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="size-4 text-primary" />
              <h3 className="font-heading font-semibold text-sm text-foreground">Önerilen Sorular</h3>
            </div>
            <div className="space-y-2">
              {aiSuggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-xs text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors border border-transparent hover:border-border"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Info card */}
          <div className="glass-strong rounded-xl p-5 relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 size-24 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
            <BookOpen className="size-6 text-primary mb-3" />
            <h3 className="font-heading font-semibold text-foreground text-sm mb-2">NotebookLM Entegrasyonu</h3>
            <p className="text-xs text-muted-foreground text-pretty leading-relaxed">
              AI Asistan, NotebookLM API kullanarak ders notlarınızdan özet çıkarır ve interaktif soru-cevap deneyimi sunar.
            </p>
            <div className="mt-3 px-2 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20">
              <p className="text-[10px] text-amber-400 font-heading">V1: AI yanıtları demo amaçlı mocklanmıştır.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
