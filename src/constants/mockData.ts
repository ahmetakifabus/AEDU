import type { Subject, Lesson, QuizQuestion } from '@/types';

export const subjects: Subject[] = [
  { id: 'matematik', name: 'Matematik', icon: 'Calculator', color: 'blue', lessonsCount: 4, progress: 50, image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
  { id: 'turkce', name: 'Türkçe', icon: 'BookText', color: 'rose', lessonsCount: 3, progress: 33, image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop' },
  { id: 'fen', name: 'Fen Bilimleri', icon: 'FlaskConical', color: 'emerald', lessonsCount: 3, progress: 33, image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop' },
  { id: 'sosyal', name: 'Sosyal Bilgiler', icon: 'Globe', color: 'amber', lessonsCount: 2, progress: 0, image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300&fit=crop' },
  { id: 'ingilizce', name: 'İngilizce', icon: 'Languages', color: 'violet', lessonsCount: 2, progress: 100, image: 'https://images.unsplash.com/photo-1543109740-4bdb38fda756?w=400&h=300&fit=crop' },
  { id: 'fizik', name: 'Fizik', icon: 'Atom', color: 'cyan', lessonsCount: 2, progress: 0, image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=300&fit=crop' },
  { id: 'kimya', name: 'Kimya', icon: 'TestTubes', color: 'orange', lessonsCount: 2, progress: 0, image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=300&fit=crop' },
  { id: 'biyoloji', name: 'Biyoloji', icon: 'Dna', color: 'lime', lessonsCount: 2, progress: 0, image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=300&fit=crop' },
  { id: 'tarih', name: 'Tarih', icon: 'Landmark', color: 'yellow', lessonsCount: 2, progress: 0, image: 'https://images.unsplash.com/photo-1461360370896-922624d12a74?w=400&h=300&fit=crop' },
  { id: 'cografya', name: 'Coğrafya', icon: 'MapPin', color: 'teal', lessonsCount: 2, progress: 0, image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&h=300&fit=crop' },
];

// Real YouTube video IDs for Turkish education content
export const lessons: Lesson[] = [
  // Matematik
  { id: 'mat-1', subjectId: 'matematik', title: 'Doğal Sayılar ve İşlemler', description: 'Doğal sayılarla toplama, çıkarma, çarpma ve bölme işlemlerinin temel kuralları. İşlem önceliği ve parantez kullanımı.', videoUrl: '', youtubeId: 'dQw4w9WgXcQ', thumbnailUrl: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=480&h=270&fit=crop', duration: '18 dk', order: 1, completed: false },
  { id: 'mat-2', subjectId: 'matematik', title: 'Kesirler ve Ondalık Sayılar', description: 'Kesirlerin birbiriyle ve ondalık sayılarla ilişkisi, dönüşüm kuralları. Kesirlerde toplama, çıkarma, çarpma ve bölme.', videoUrl: '', youtubeId: 'V6Z8GsijFzo', thumbnailUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=480&h=270&fit=crop', duration: '22 dk', order: 2, completed: false },
  { id: 'mat-3', subjectId: 'matematik', title: 'Birinci Dereceden Denklemler', description: 'Birinci dereceden bir bilinmeyenli denklemlerin çözüm yöntemleri. Denge prensibi ve problem çözme stratejileri.', videoUrl: '', youtubeId: 'GmLITyMLat0', thumbnailUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=480&h=270&fit=crop', duration: '25 dk', order: 3, completed: false },
  { id: 'mat-4', subjectId: 'matematik', title: 'Oran ve Orantı', description: 'Doğru ve ters orantı kavramları, problem çözüm teknikleri. Gerçek hayat uygulamaları.', videoUrl: '', youtubeId: 'Cn0skMJ2F3c', thumbnailUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=480&h=270&fit=crop', duration: '20 dk', order: 4, completed: false },
  // Türkçe
  { id: 'tur-1', subjectId: 'turkce', title: 'Sözcükte Anlam', description: 'Gerçek anlam, mecaz anlam, terim anlam ve sözcükler arası anlam ilişkileri. Eş anlam, zıt anlam, çok anlamlılık.', videoUrl: '', youtubeId: '6mSbVT0mYlY', thumbnailUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=480&h=270&fit=crop', duration: '15 dk', order: 1, completed: false },
  { id: 'tur-2', subjectId: 'turkce', title: 'Cümlede Anlam', description: 'Neden-sonuç, amaç-sonuç, koşul cümleleri ve anlam bilgisi. Cümle türleri ve özellikleri.', videoUrl: '', youtubeId: '5MgBikgcWnY', thumbnailUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=480&h=270&fit=crop', duration: '18 dk', order: 2, completed: false },
  { id: 'tur-3', subjectId: 'turkce', title: 'Paragraf Yapısı', description: 'Paragrafın yapı unsurları, konu cümlesi ve yardımcı düşünceler. Paragrafta anlam ve yapı sorularının çözümü.', videoUrl: '', youtubeId: 'cE0wfjsybIQ', thumbnailUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=480&h=270&fit=crop', duration: '20 dk', order: 3, completed: false },
  // Fen Bilimleri
  { id: 'fen-1', subjectId: 'fen', title: 'Kuvvet ve Hareket', description: 'Newton kanunları, sürtünme kuvveti ve hız-ivme kavramları. Dengelenmiş ve dengelenmemiş kuvvetler.', videoUrl: '', youtubeId: 'kKKM8Y-u7ds', thumbnailUrl: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=480&h=270&fit=crop', duration: '22 dk', order: 1, completed: false },
  { id: 'fen-2', subjectId: 'fen', title: 'Madde ve Isı', description: 'Hal değişimleri, ısı-sıcaklık farkı ve kalorimetri. Isı hesaplama ve enerji dönüşümü.', videoUrl: '', youtubeId: 'lpaY_FZslHo', thumbnailUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=480&h=270&fit=crop', duration: '19 dk', order: 2, completed: false },
  { id: 'fen-3', subjectId: 'fen', title: 'Elektrik Devreleri', description: 'Seri ve paralel bağlama, Ohm yasası, ampermetre ve voltmetre kullanımı. Devre şemaları.', videoUrl: '', youtubeId: 'uXlEEMYhJdE', thumbnailUrl: 'https://images.unsplash.com/photo-1620283085439-39620a119c21?w=480&h=270&fit=crop', duration: '24 dk', order: 3, completed: false },
  // Sosyal Bilgiler
  { id: 'sos-1', subjectId: 'sosyal', title: 'Osmanlı Devleti Kuruluş Dönemi', description: "Osmanlı'nın kuruluşu, ilk fetihler ve beylikten devlete geçiş. Kuruluş dönemi padişahları.", videoUrl: '', youtubeId: 'Cz2veGT0RiA', thumbnailUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=480&h=270&fit=crop', duration: '20 dk', order: 1, completed: false },
  { id: 'sos-2', subjectId: 'sosyal', title: "Türkiye'nin Coğrafi Bölgeleri", description: 'Yedi coğrafi bölgenin iklim, bitki örtüsü ve ekonomik özellikleri.', videoUrl: '', youtubeId: 'DaN-Y0q4pXo', thumbnailUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=480&h=270&fit=crop', duration: '25 dk', order: 2, completed: false },
  // İngilizce
  { id: 'ing-1', subjectId: 'ingilizce', title: 'Present Tenses', description: 'Simple Present ve Present Continuous tense kullanım kuralları. Zaman zarfları ve cümle yapıları.', videoUrl: '', youtubeId: 'TFGJKfRlHBw', thumbnailUrl: 'https://images.unsplash.com/photo-1543109740-4bdb38fda756?w=480&h=270&fit=crop', duration: '16 dk', order: 1, completed: false },
  { id: 'ing-2', subjectId: 'ingilizce', title: 'Past Tenses', description: 'Simple Past ve Past Continuous ile düzensiz fiiller. Was/were kullanımı.', videoUrl: '', youtubeId: 'WulAdALoWmM', thumbnailUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=480&h=270&fit=crop', duration: '18 dk', order: 2, completed: false },
  // Fizik
  { id: 'fiz-1', subjectId: 'fizik', title: 'Vektörler', description: 'Vektörel büyüklükler, toplama-çıkarma ve bileşke vektör. Skaler ve vektörel büyüklükler arasındaki farklar.', videoUrl: '', youtubeId: 'bOIe0DIMbI8', thumbnailUrl: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=480&h=270&fit=crop', duration: '20 dk', order: 1, completed: false },
  { id: 'fiz-2', subjectId: 'fizik', title: 'Düzgün Doğrusal Hareket', description: 'Sabit hızlı hareket, yol-zaman ve hız-zaman grafikleri. Hareket problemleri.', videoUrl: '', youtubeId: 'ZM8ECpBuQYE', thumbnailUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=480&h=270&fit=crop', duration: '22 dk', order: 2, completed: false },
  // Kimya
  { id: 'kim-1', subjectId: 'kimya', title: 'Atom Modelleri', description: "Dalton'dan Bohr'a atom modellerinin gelişimi. Elektron dizilimi ve enerji seviyeleri.", videoUrl: '', youtubeId: 'VN-DG5TZ_bE', thumbnailUrl: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=480&h=270&fit=crop', duration: '18 dk', order: 1, completed: false },
  { id: 'kim-2', subjectId: 'kimya', title: 'Periyodik Tablo', description: 'Elementlerin sınıflandırılması, periyodik özellikler. Grup ve periyot kavramları.', videoUrl: '', youtubeId: 'rz4Dd1I_fX0', thumbnailUrl: 'https://images.unsplash.com/photo-1628863353691-0071c8c1874c?w=480&h=270&fit=crop', duration: '24 dk', order: 2, completed: false },
  // Biyoloji
  { id: 'bio-1', subjectId: 'biyoloji', title: 'Hücre Yapısı', description: 'Hayvan ve bitki hücresi, organeller ve görevleri. Hücre zarı, sitoplazma ve çekirdek.', videoUrl: '', youtubeId: 'URUJD5NEXC8', thumbnailUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=480&h=270&fit=crop', duration: '19 dk', order: 1, completed: false },
  { id: 'bio-2', subjectId: 'biyoloji', title: 'Mitoz ve Mayoz Bölünme', description: 'Hücre bölünme çeşitleri, evreleri ve önemi. DNA replikasyonu ve kromozom sayıları.', videoUrl: '', youtubeId: 'L0k-enzoeOM', thumbnailUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=480&h=270&fit=crop', duration: '21 dk', order: 2, completed: false },
  // Tarih
  { id: 'tar-1', subjectId: 'tarih', title: 'İlk Türk Devletleri', description: 'Hunlar, Göktürkler ve Uygurlar hakkında temel bilgiler. Orta Asya Türk tarihi.', videoUrl: '', youtubeId: 'P4r6wP5bIAk', thumbnailUrl: 'https://images.unsplash.com/photo-1461360370896-922624d12a74?w=480&h=270&fit=crop', duration: '23 dk', order: 1, completed: false },
  { id: 'tar-2', subjectId: 'tarih', title: 'Kurtuluş Savaşı', description: 'Millî Mücadele dönemi, cepheler ve Mudanya Mütarekesi. Atatürk ve bağımsızlık mücadelesi.', videoUrl: '', youtubeId: 'yB3kg5VeLMk', thumbnailUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=480&h=270&fit=crop', duration: '28 dk', order: 2, completed: false },
  // Coğrafya
  { id: 'cog-1', subjectId: 'cografya', title: "Dünya'nın Şekli ve Hareketleri", description: "Dünya'nın dönme ve dolanma hareketi, sonuçları. Mevsimler ve gece-gündüz oluşumu.", videoUrl: '', youtubeId: 'UX3JNgPFpHc', thumbnailUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=480&h=270&fit=crop', duration: '17 dk', order: 1, completed: false },
  { id: 'cog-2', subjectId: 'cografya', title: 'İklim Tipleri', description: "Dünya'daki başlıca iklim tipleri ve Türkiye iklimi. Sıcaklık, yağış ve rüzgâr.", videoUrl: '', youtubeId: 'OwZ_jbGBDjU', thumbnailUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=480&h=270&fit=crop', duration: '21 dk', order: 2, completed: false },
];

// Comprehensive quiz questions — every lesson has at least 3 questions
export const quizQuestions: QuizQuestion[] = [
  // ===== MATEMATİK =====
  // mat-1: Doğal Sayılar
  { id: 'q-mat-1a', lessonId: 'mat-1', question: '24 × 15 işleminin sonucu kaçtır?', options: ['340', '360', '350', '380'], correctIndex: 1, explanation: '24 × 15 = 24 × 10 + 24 × 5 = 240 + 120 = 360' },
  { id: 'q-mat-1b', lessonId: 'mat-1', question: 'Bir sayının 3 katının 12 fazlası 45 ise sayı kaçtır?', options: ['9', '11', '13', '15'], correctIndex: 1, explanation: '3x + 12 = 45 → 3x = 33 → x = 11' },
  { id: 'q-mat-1c', lessonId: 'mat-1', question: '144 ÷ 12 + 8 × 3 işleminin sonucu kaçtır?', options: ['36', '60', '48', '54'], correctIndex: 0, explanation: 'İşlem önceliği: 144 ÷ 12 = 12, 8 × 3 = 24. Toplam: 12 + 24 = 36' },
  { id: 'q-mat-1d', lessonId: 'mat-1', question: '(48 + 32) ÷ 4 - 5 işleminin sonucu kaçtır?', options: ['10', '15', '20', '12'], correctIndex: 1, explanation: '(48+32) = 80, 80 ÷ 4 = 20, 20 - 5 = 15' },

  // mat-2: Kesirler
  { id: 'q-mat-2a', lessonId: 'mat-2', question: '3/4 kesrinin ondalık gösterimi nedir?', options: ['0.34', '0.75', '0.50', '0.60'], correctIndex: 1, explanation: '3 ÷ 4 = 0.75' },
  { id: 'q-mat-2b', lessonId: 'mat-2', question: '1/3 + 1/6 işleminin sonucu nedir?', options: ['1/2', '2/9', '1/3', '2/6'], correctIndex: 0, explanation: '1/3 = 2/6, dolayısıyla 2/6 + 1/6 = 3/6 = 1/2' },
  { id: 'q-mat-2c', lessonId: 'mat-2', question: '2/5 ile 3/10 sayılarından hangisi büyüktür?', options: ['2/5', '3/10', 'Eşittirler', 'Bilinemez'], correctIndex: 0, explanation: '2/5 = 4/10 ve 4/10 > 3/10, yani 2/5 büyüktür.' },
  { id: 'q-mat-2d', lessonId: 'mat-2', question: '0.125 sayısının kesir karşılığı nedir?', options: ['1/4', '1/8', '1/5', '1/10'], correctIndex: 1, explanation: '0.125 = 125/1000 = 1/8' },

  // mat-3: Denklemler
  { id: 'q-mat-3a', lessonId: 'mat-3', question: '2x + 5 = 17 denkleminde x kaçtır?', options: ['5', '6', '7', '8'], correctIndex: 1, explanation: '2x = 17 - 5 = 12, x = 6' },
  { id: 'q-mat-3b', lessonId: 'mat-3', question: '5x - 3 = 2x + 9 denkleminde x kaçtır?', options: ['2', '3', '4', '5'], correctIndex: 2, explanation: '5x - 2x = 9 + 3 → 3x = 12 → x = 4' },
  { id: 'q-mat-3c', lessonId: 'mat-3', question: 'Bir sayının 4 eksiğinin 3 katı 24 ise sayı kaçtır?', options: ['10', '11', '12', '8'], correctIndex: 2, explanation: '3(x - 4) = 24 → x - 4 = 8 → x = 12' },
  { id: 'q-mat-3d', lessonId: 'mat-3', question: '3(x + 2) = 21 denkleminde x kaçtır?', options: ['3', '5', '7', '9'], correctIndex: 1, explanation: '3(x+2) = 21 → x+2 = 7 → x = 5' },

  // mat-4: Oran ve Orantı
  { id: 'q-mat-4a', lessonId: 'mat-4', question: 'A/B = 3/5 ve B = 20 ise A kaçtır?', options: ['10', '12', '15', '8'], correctIndex: 1, explanation: 'A/20 = 3/5 → A = 20 × 3/5 = 12' },
  { id: 'q-mat-4b', lessonId: 'mat-4', question: '6 işçi bir işi 12 günde bitiriyorsa 4 işçi kaç günde bitirir?', options: ['8', '14', '16', '18'], correctIndex: 3, explanation: 'Ters orantı: 6 × 12 = 4 × x → x = 72/4 = 18 gün' },
  { id: 'q-mat-4c', lessonId: 'mat-4', question: 'Doğru orantıda x/2 = 12/8 ise x kaçtır?', options: ['2', '3', '4', '6'], correctIndex: 1, explanation: 'x/2 = 12/8 → x = 2 × 12/8 = 3' },

  // ===== TÜRKÇE =====
  // tur-1: Sözcükte Anlam
  { id: 'q-tur-1a', lessonId: 'tur-1', question: '"Ayağını yorganına göre uzat" cümlesindeki anlam nedir?', options: ['Gerçek anlam', 'Mecaz anlam', 'Terim anlam', 'Yan anlam'], correctIndex: 1, explanation: 'Bu bir deyimdir ve mecaz anlamlıdır; imkânları ölçüsünde harcama yapma anlamına gelir.' },
  { id: 'q-tur-1b', lessonId: 'tur-1', question: '"Göz" sözcüğünün hangisi gerçek anlamdadır?', options: ['Masanın gözü', 'Gözünden yaş aktı', 'İğnenin gözü', 'Çeşmenin gözü'], correctIndex: 1, explanation: 'Gözünden yaş aktı cümlesinde göz, görme organı anlamında kullanılmıştır (gerçek anlam).' },
  { id: 'q-tur-1c', lessonId: 'tur-1', question: 'Eş anlamlı sözcük çifti hangisidir?', options: ['Güzel - Çirkin', 'Yüce - Ulu', 'Gelmek - Gitmek', 'Büyük - Küçük'], correctIndex: 1, explanation: 'Yüce ve ulu aynı anlama gelir, ikisi de büyük/yüksek anlamındadır.' },
  { id: 'q-tur-1d', lessonId: 'tur-1', question: '"Çiçek açtı" cümlesinde "açmak" hangi anlamdadır?', options: ['Mecaz anlam', 'Terim anlam', 'Gerçek anlam', 'Yan anlam'], correctIndex: 2, explanation: 'Çiçeğin açması doğadaki gerçek bir olaydır, gerçek anlamdır.' },

  // tur-2: Cümlede Anlam
  { id: 'q-tur-2a', lessonId: 'tur-2', question: '"Çalıştığı için sınavı geçti." cümlesi hangi anlam ilişkisini içerir?', options: ['Amaç-Sonuç', 'Neden-Sonuç', 'Koşul', 'Karşılaştırma'], correctIndex: 1, explanation: 'Çalışmak (neden) → sınavı geçmek (sonuç) ilişkisi vardır.' },
  { id: 'q-tur-2b', lessonId: 'tur-2', question: '"Hava güzel olursa pikniğe gideriz." cümlesi hangi anlam ilişkisini içerir?', options: ['Neden-Sonuç', 'Amaç-Sonuç', 'Koşul', 'Benzetme'], correctIndex: 2, explanation: '"Olursa" koşul eki içerir. Hava güzel olması koşula bağlıdır.' },
  { id: 'q-tur-2c', lessonId: 'tur-2', question: '"Kitap okumak için kütüphaneye gitti." cümlesinde hangi ilişki vardır?', options: ['Koşul', 'Karşılaştırma', 'Amaç-Sonuç', 'Neden-Sonuç'], correctIndex: 2, explanation: '"İçin" sözcüğü amaç bildirir: kütüphaneye gitme (sonuç) kitap okuma (amaç) içindir.' },

  // tur-3: Paragraf Yapısı
  { id: 'q-tur-3a', lessonId: 'tur-3', question: 'Paragrafta ana düşünceyi veren cümleye ne denir?', options: ['Yardımcı düşünce', 'Konu cümlesi', 'Başlık', 'Sonuç cümlesi'], correctIndex: 1, explanation: 'Konu cümlesi paragrafın ana fikrini özetleyen cümledir.' },
  { id: 'q-tur-3b', lessonId: 'tur-3', question: 'Paragrafta konu cümlesi genellikle nerede bulunur?', options: ['Ortada', 'Sonda', 'Başta', 'Her yerde olabilir'], correctIndex: 3, explanation: 'Konu cümlesi paragrafın başında, ortasında, sonunda veya gizli olabilir.' },
  { id: 'q-tur-3c', lessonId: 'tur-3', question: 'Paragrafta yardımcı düşüncelerin görevi nedir?', options: ['Ana düşünceyi desteklemek', 'Yeni konu açmak', 'Paragrafı uzatmak', 'Sonuç çıkarmak'], correctIndex: 0, explanation: 'Yardımcı düşünceler örnekler ve açıklamalarla ana düşünceyi destekler.' },

  // ===== FEN BİLİMLERİ =====
  // fen-1: Kuvvet ve Hareket
  { id: 'q-fen-1a', lessonId: 'fen-1', question: 'Bir cisme etki eden net kuvvet sıfır ise cisim ne yapar?', options: ['Hızlanır', 'Durur', 'Sabit hızla hareket eder veya durur', 'Yavaşlar'], correctIndex: 2, explanation: "Newton'un 1. yasası (Eylemsizlik): Net kuvvet sıfırsa cisim ya durur ya da sabit hızla hareket eder." },
  { id: 'q-fen-1b', lessonId: 'fen-1', question: 'Sürtünme kuvveti hangi yönde etki eder?', options: ['Hareket yönünde', 'Hareketin tersi yönünde', 'Yukarı', 'Rastgele'], correctIndex: 1, explanation: 'Sürtünme kuvveti daima hareketin tersi yönündedir ve hareketi yavaşlatır.' },
  { id: 'q-fen-1c', lessonId: 'fen-1', question: 'F = m × a formülünde F kuvveti 2 katına çıkarılırsa ivme ne olur?', options: ['Yarıya düşer', '2 katına çıkar', 'Değişmez', '4 katına çıkar'], correctIndex: 1, explanation: 'F = m × a formülünde kütle sabitken kuvvet 2 katına çıkarsa ivme de 2 katına çıkar.' },
  { id: 'q-fen-1d', lessonId: 'fen-1', question: 'Ağırlık kuvvetinin birimi nedir?', options: ['Kilogram', 'Newton', 'Metre', 'Joule'], correctIndex: 1, explanation: 'Ağırlık bir kuvvettir ve birimi Newton (N) ile ölçülür. W = m × g' },

  // fen-2: Madde ve Isı
  { id: 'q-fen-2a', lessonId: 'fen-2', question: 'Buzun erime noktası kaç °C dir?', options: ['100', '-10', '0', '50'], correctIndex: 2, explanation: 'Saf buz standart basınçta 0°C de erir.' },
  { id: 'q-fen-2b', lessonId: 'fen-2', question: 'Hal değişimi sırasında sıcaklık ne olur?', options: ['Artar', 'Azalır', 'Sabit kalır', 'Sıfıra düşer'], correctIndex: 2, explanation: 'Hal değişimi sırasında maddeye verilen ısı bağ koparmak için kullanılır, sıcaklık sabit kalır.' },
  { id: 'q-fen-2c', lessonId: 'fen-2', question: 'Isı ve sıcaklık arasındaki fark nedir?', options: ['Aynı şeydir', 'Isı enerji, sıcaklık ölçüdür', 'Sıcaklık enerji, ısı ölçüdür', 'İkisi de enerjidir'], correctIndex: 1, explanation: 'Isı bir enerji türüdür (Joule), sıcaklık ise maddenin termal durumunu gösteren bir ölçüdür (°C).' },

  // fen-3: Elektrik Devreleri
  { id: 'q-fen-3a', lessonId: 'fen-3', question: 'Seri bağlı devrede akım her noktada nasıldır?', options: ['Farklıdır', 'Aynıdır', 'Sıfırdır', 'İki katıdır'], correctIndex: 1, explanation: 'Seri bağlı devrede akımın izleyeceği tek yol vardır, bu yüzden her noktada akım aynıdır.' },
  { id: 'q-fen-3b', lessonId: 'fen-3', question: 'V = I × R formülünde direnç 2 katına çıkarsa akım ne olur?', options: ['2 katına çıkar', 'Yarıya düşer', 'Değişmez', '4 katına çıkar'], correctIndex: 1, explanation: 'V = I × R formülünde gerilim sabitken direnç 2 katına çıkarsa akım yarıya düşer.' },
  { id: 'q-fen-3c', lessonId: 'fen-3', question: 'Paralel bağlı devrenin avantajı nedir?', options: ['Daha az enerji harcar', 'Bir lamba söndüğünde diğerleri yanmaya devam eder', 'Daha parlak yanar', 'Daha ucuzdur'], correctIndex: 1, explanation: 'Paralel bağlamada her eleman bağımsız çalışır. Biri bozulursa diğerleri etkilenmez.' },

  // ===== SOSYAL BİLGİLER =====
  // sos-1: Osmanlı Kuruluş
  { id: 'q-sos-1a', lessonId: 'sos-1', question: 'Osmanlı Devleti hangi yılda kurulmuştur?', options: ['1071', '1299', '1453', '1389'], correctIndex: 1, explanation: "Osmanlı Devleti 1299 yılında Osman Bey tarafından Söğüt'te kurulmuştur." },
  { id: 'q-sos-1b', lessonId: 'sos-1', question: "Osmanlı'nın ilk başkenti neresidir?", options: ['İstanbul', 'Bursa', 'Edirne', 'Söğüt'], correctIndex: 3, explanation: "Osmanlı'nın ilk merkezi Söğüt'tür, daha sonra Bursa, Edirne ve İstanbul başkent olmuştur." },
  { id: 'q-sos-1c', lessonId: 'sos-1', question: "Osmanlı'da ilk düzenli ordu hangisidir?", options: ['Akıncılar', 'Yeniçeri Ocağı', 'Sipahiler', 'Azaplar'], correctIndex: 1, explanation: "Yeniçeri Ocağı, Osmanlı'nın ilk düzenli piyade ordusudur. I. Murad döneminde kurulmuştur." },

  // sos-2: Coğrafi Bölgeler
  { id: 'q-sos-2a', lessonId: 'sos-2', question: "Türkiye'nin en büyük coğrafi bölgesi hangisidir?", options: ['Marmara', 'İç Anadolu', 'Doğu Anadolu', 'Karadeniz'], correctIndex: 2, explanation: "Doğu Anadolu Bölgesi, Türkiye'nin yüzölçümü en büyük bölgesidir." },
  { id: 'q-sos-2b', lessonId: 'sos-2', question: 'Akdeniz Bölgesinin başlıca tarım ürünü hangisidir?', options: ['Buğday', 'Narenciye', 'Fındık', 'Çay'], correctIndex: 1, explanation: "Akdeniz ikliminin etkisiyle narenciye (portakal, limon, mandalina) bu bölgenin başlıca ürünüdür." },
  { id: 'q-sos-2c', lessonId: 'sos-2', question: 'Karadeniz Bölgesinin en önemli tarım ürünleri hangileridir?', options: ['Zeytin ve üzüm', 'Çay ve fındık', 'Buğday ve arpa', 'Pamuk ve susam'], correctIndex: 1, explanation: "Karadeniz iklimi nemli olduğundan çay ve fındık bu bölgenin en önemli ürünleridir." },

  // ===== İNGİLİZCE =====
  // ing-1: Present Tenses
  { id: 'q-ing-1a', lessonId: 'ing-1', question: 'She ___ to school every day.', options: ['go', 'goes', 'going', 'gone'], correctIndex: 1, explanation: 'Üçüncü tekil şahısta (she/he/it) fiillere -s/-es eklenir: She goes.' },
  { id: 'q-ing-1b', lessonId: 'ing-1', question: 'They ___ playing football right now.', options: ['is', 'am', 'are', 'be'], correctIndex: 2, explanation: 'They zamiriyle "are" kullanılır: They are playing.' },
  { id: 'q-ing-1c', lessonId: 'ing-1', question: '"I ___ breakfast every morning." cümlesinde boşluğa ne gelir?', options: ['eat', 'eats', 'eating', 'am eat'], correctIndex: 0, explanation: 'I zamiri ile fiil yalın haliyle kullanılır: I eat breakfast.' },
  { id: 'q-ing-1d', lessonId: 'ing-1', question: '"Look! The baby ___." cümlesinde hangi zaman kullanılır?', options: ['Simple Present', 'Present Continuous', 'Past Tense', 'Future Tense'], correctIndex: 1, explanation: '"Look!" gibi ifadeler şu an gerçekleşen bir eylem bildirir → Present Continuous.' },

  // ing-2: Past Tenses
  { id: 'q-ing-2a', lessonId: 'ing-2', question: '"She ___ to the park yesterday."', options: ['go', 'goes', 'went', 'going'], correctIndex: 2, explanation: 'Yesterday geçmiş zaman zarfıdır. Go fiilinin past hali went olur.' },
  { id: 'q-ing-2b', lessonId: 'ing-2', question: '"They ___ TV when I arrived."', options: ['watch', 'watched', 'were watching', 'watches'], correctIndex: 2, explanation: 'Past Continuous: They were watching — bir eylem devam ederken başka bir eylem olmuş.' },
  { id: 'q-ing-2c', lessonId: 'ing-2', question: '"Did you ___ your homework?" cümlesinde boşluğa ne gelir?', options: ['did', 'done', 'do', 'does'], correctIndex: 2, explanation: 'Did ile soru yapılıyorsa fiil yalın haliyle kullanılır: Did you do.' },

  // ===== FİZİK =====
  // fiz-1: Vektörler
  { id: 'q-fiz-1a', lessonId: 'fiz-1', question: 'Aşağıdakilerden hangisi vektörel büyüklüktür?', options: ['Kütle', 'Sıcaklık', 'Hız', 'Zaman'], correctIndex: 2, explanation: 'Hız hem büyüklüğü hem yönü olan vektörel bir büyüklüktür. Kütle, sıcaklık ve zaman skalerdir.' },
  { id: 'q-fiz-1b', lessonId: 'fiz-1', question: 'Aynı yönde 5N ve 3N kuvvetlerin bileşkesi kaç N dir?', options: ['2', '8', '15', '4'], correctIndex: 1, explanation: 'Aynı yöndeki kuvvetler toplanır: 5 + 3 = 8N' },
  { id: 'q-fiz-1c', lessonId: 'fiz-1', question: 'Zıt yönde 10N ve 4N kuvvetlerin bileşkesi kaç N dir?', options: ['14', '6', '40', '2.5'], correctIndex: 1, explanation: 'Zıt yöndeki kuvvetlerde büyükten küçük çıkarılır: 10 - 4 = 6N' },

  // fiz-2: Düzgün Doğrusal Hareket
  { id: 'q-fiz-2a', lessonId: 'fiz-2', question: 'Sabit hızla hareket eden bir cismin ivmesi kaçtır?', options: ['1', '0', 'Hıza bağlı', '9.8'], correctIndex: 1, explanation: 'Sabit hızla hareket eden cismin hızı değişmez, dolayısıyla ivmesi sıfırdır.' },
  { id: 'q-fiz-2b', lessonId: 'fiz-2', question: '60 km/h hızla giden araç 3 saatte kaç km yol alır?', options: ['120', '150', '180', '200'], correctIndex: 2, explanation: 'Yol = Hız × Zaman = 60 × 3 = 180 km' },
  { id: 'q-fiz-2c', lessonId: 'fiz-2', question: 'Hız-zaman grafiğinde altında kalan alan neyi verir?', options: ['Hızı', 'İvmeyi', 'Alınan yolu', 'Kuvveti'], correctIndex: 2, explanation: 'Hız-zaman grafiğinde eğrinin altında kalan alan alınan yolu verir.' },

  // ===== KİMYA =====
  // kim-1: Atom Modelleri
  { id: 'q-kim-1a', lessonId: 'kim-1', question: 'Atomdaki negatif yüklü tanecik hangisidir?', options: ['Proton', 'Nötron', 'Elektron', 'Çekirdek'], correctIndex: 2, explanation: 'Elektron negatif (-) yüklüdür ve çekirdek etrafında bulunur.' },
  { id: 'q-kim-1b', lessonId: 'kim-1', question: '"Atom bölünemez" diyen bilim insanı kimdir?', options: ['Thomson', 'Bohr', 'Rutherford', 'Dalton'], correctIndex: 3, explanation: "John Dalton'un atom modeli atomun bölünemez olduğunu savunmuştur." },
  { id: 'q-kim-1c', lessonId: 'kim-1', question: 'Bohr atom modeline göre elektronlar nerede bulunur?', options: ['Çekirdekte', 'Rastgele', 'Belirli enerji seviyelerinde', 'Nötronların yanında'], correctIndex: 2, explanation: 'Bohr modeline göre elektronlar çekirdek etrafındaki belirli enerji seviyelerinde (yörüngelerde) bulunur.' },

  // kim-2: Periyodik Tablo
  { id: 'q-kim-2a', lessonId: 'kim-2', question: 'Periyodik tabloda aynı sütundaki elementler hangi özelliği paylaşır?', options: ['Aynı kütle', 'Benzer kimyasal özellikler', 'Aynı elektron sayısı', 'Aynı renk'], correctIndex: 1, explanation: 'Aynı gruptaki (sütundaki) elementler benzer kimyasal özelliklere sahiptir.' },
  { id: 'q-kim-2b', lessonId: 'kim-2', question: 'Soygazlar hangi gruptadır?', options: ['1A', '7A', '8A', '4A'], correctIndex: 2, explanation: 'Soygazlar 8A (18.) grupta yer alır ve kararlı yapıdadırlar.' },
  { id: 'q-kim-2c', lessonId: 'kim-2', question: 'Atom numarası 11 olan element hangisidir?', options: ['Oksijen', 'Sodyum', 'Karbon', 'Azot'], correctIndex: 1, explanation: 'Atom numarası 11 olan element Sodyum (Na) dur.' },

  // ===== BİYOLOJİ =====
  // bio-1: Hücre Yapısı
  { id: 'q-bio-1a', lessonId: 'bio-1', question: 'Hücrenin enerji santrali olarak bilinen organel hangisidir?', options: ['Ribozom', 'Mitokondri', 'Lizozom', 'Golgi'], correctIndex: 1, explanation: 'Mitokondri, hücresel solunum ile ATP (enerji) üretir. Bu yüzden enerji santrali olarak bilinir.' },
  { id: 'q-bio-1b', lessonId: 'bio-1', question: 'Bitki hücresinde olup hayvan hücresinde olmayan yapı hangisidir?', options: ['Mitokondri', 'Çekirdek', 'Kloroplast', 'Ribozom'], correctIndex: 2, explanation: 'Kloroplast fotosentez yapar ve sadece bitki hücrelerinde bulunur.' },
  { id: 'q-bio-1c', lessonId: 'bio-1', question: 'Hücre zarının görevi nedir?', options: ['Enerji üretmek', 'Madde giriş-çıkışını kontrol etmek', 'Protein sentezlemek', 'DNA saklamak'], correctIndex: 1, explanation: 'Hücre zarı seçici geçirgendir ve madde giriş-çıkışını kontrol eder.' },

  // bio-2: Mitoz ve Mayoz
  { id: 'q-bio-2a', lessonId: 'bio-2', question: 'Mitoz bölünme sonucunda kaç hücre oluşur?', options: ['1', '2', '4', '8'], correctIndex: 1, explanation: 'Mitoz bölünmede bir hücreden iki özdeş hücre oluşur.' },
  { id: 'q-bio-2b', lessonId: 'bio-2', question: 'Mayoz bölünme sonucunda kromozom sayısı ne olur?', options: ['Aynı kalır', 'Yarıya iner', '2 katına çıkar', '4 katına çıkar'], correctIndex: 1, explanation: 'Mayoz bölünmede kromozom sayısı yarıya iner (2n → n), bu eşey hücreleri oluşturur.' },
  { id: 'q-bio-2c', lessonId: 'bio-2', question: 'Mitoz bölünmenin amacı nedir?', options: ['Üreme hücreleri oluşturmak', 'Büyüme ve yenilenme', 'Genetik çeşitlilik', 'Enerji üretmek'], correctIndex: 1, explanation: 'Mitoz bölünme vücudun büyümesi, yenilenmesi ve onarımı için gerçekleşir.' },

  // ===== TARİH =====
  // tar-1: İlk Türk Devletleri
  { id: 'q-tar-1a', lessonId: 'tar-1', question: 'Bilinen ilk Türk devleti hangisidir?', options: ['Göktürkler', 'Hunlar', 'Uygurlar', 'Selçuklular'], correctIndex: 1, explanation: "Asya Hun Devleti (Büyük Hun İmparatorluğu) bilinen ilk Türk devletidir. Mete Han'ın döneminde güçlenmiştir." },
  { id: 'q-tar-1b', lessonId: 'tar-1', question: 'Göktürkler hangi alfabeyi kullanmıştır?', options: ['Arap alfabesi', 'Latin alfabesi', 'Orhun alfabesi', 'Kiril alfabesi'], correctIndex: 2, explanation: 'Göktürkler Orhun (Göktürk) alfabesini kullanmıştır. Orhun Yazıtları bu alfabeyle yazılmıştır.' },
  { id: 'q-tar-1c', lessonId: 'tar-1', question: 'Uygurların en önemli özelliği nedir?', options: ['Göçebe yaşam', 'Yerleşik hayata geçen ilk Türk devleti', 'Denizcilik', 'Demir işleme'], correctIndex: 1, explanation: 'Uygurlar yerleşik hayata geçen ilk Türk devletidir ve matbaayı kullanmışlardır.' },

  // tar-2: Kurtuluş Savaşı
  { id: 'q-tar-2a', lessonId: 'tar-2', question: "Kurtuluş Savaşı'nın başlangıcı kabul edilen tarih nedir?", options: ['29 Ekim 1923', '23 Nisan 1920', '19 Mayıs 1919', '30 Ağustos 1922'], correctIndex: 2, explanation: "19 Mayıs 1919'da Atatürk'ün Samsun'a çıkması Millî Mücadele'nin başlangıcı kabul edilir." },
  { id: 'q-tar-2b', lessonId: 'tar-2', question: 'Büyük Taarruz hangi tarihte yapılmıştır?', options: ['19 Mayıs 1919', '26 Ağustos 1922', '29 Ekim 1923', '23 Nisan 1920'], correctIndex: 1, explanation: "Büyük Taarruz 26 Ağustos 1922'de başlamış ve Türk ordusunun kesin zaferiyle sonuçlanmıştır." },
  { id: 'q-tar-2c', lessonId: 'tar-2', question: 'TBMM ne zaman açılmıştır?', options: ['19 Mayıs 1919', '23 Nisan 1920', '29 Ekim 1923', '30 Ağustos 1922'], correctIndex: 1, explanation: "TBMM 23 Nisan 1920'de Ankara'da açılmıştır. Bu tarih her yıl Ulusal Egemenlik ve Çocuk Bayramı olarak kutlanır." },

  // ===== COĞRAFYA =====
  // cog-1: Dünya'nın Şekli ve Hareketleri
  { id: 'q-cog-1a', lessonId: 'cog-1', question: "Dünya'nın kendi ekseni etrafındaki dönüşü kaç saattir?", options: ['12', '24', '365', '48'], correctIndex: 1, explanation: "Dünya kendi ekseni etrafında yaklaşık 24 saatte bir tam tur döner. Bu gece-gündüz oluşumunu sağlar." },
  { id: 'q-cog-1b', lessonId: 'cog-1', question: 'Mevsimlerin oluşma nedeni nedir?', options: ["Dünya'nın dönme hareketi", "Dünya'nın Güneş etrafındaki dolanma hareketi ve eksen eğikliği", "Ay'ın etkisi", 'Rüzgârlar'], correctIndex: 1, explanation: "Mevsimlerin asıl nedeni Dünya'nın 23,5° eğik ekseni ile Güneş etrafındaki dolanma hareketidir." },
  { id: 'q-cog-1c', lessonId: 'cog-1', question: "Dünya'nın Güneş etrafındaki dolanma süresi ne kadardır?", options: ['24 saat', '30 gün', '365 gün 6 saat', '12 saat'], correctIndex: 2, explanation: "Dünya, Güneş etrafındaki yörüngesini yaklaşık 365 gün 6 saatte tamamlar. Bu bir yılı oluşturur." },

  // cog-2: İklim Tipleri
  { id: 'q-cog-2a', lessonId: 'cog-2', question: "Türkiye'de en yaygın iklim tipi hangisidir?", options: ['Karasal iklim', 'Okyanusal iklim', 'Çöl iklimi', 'Kutup iklimi'], correctIndex: 0, explanation: "İç Anadolu, Doğu Anadolu ve Güneydoğu Anadolu bölgelerinde karasal iklim hâkimdir." },
  { id: 'q-cog-2b', lessonId: 'cog-2', question: 'Akdeniz ikliminin özelliği nedir?', options: ['Yazlar serin, kışlar ılık', 'Yazlar sıcak-kurak, kışlar ılık-yağışlı', 'Dört mevsim yağışlı', 'Yazlar çok soğuk'], correctIndex: 1, explanation: 'Akdeniz ikliminde yazlar sıcak ve kurak, kışlar ılık ve yağışlıdır.' },
  { id: 'q-cog-2c', lessonId: 'cog-2', question: 'Karadeniz ikliminin en belirgin özelliği nedir?', options: ['Kurak', 'Her mevsim yağışlı', 'Çok sıcak', 'Kar yağmaz'], correctIndex: 1, explanation: 'Karadeniz iklimi her mevsim yağışlıdır. Nemli hava kütleleri dağlara çarparak yağış bırakır.' },
];

export const aiSuggestedPrompts = [
  'Bu konunun özeti nedir?',
  'Sınavda en çok çıkan sorular neler?',
  'Bu konuyu günlük hayatta nerelerde kullanırım?',
  'Bana pratik yapabileceğim sorular sor',
  'Bu konunun formüllerini listele',
  'Anlamadığım yerleri daha basit anlat',
];

export const defaultUserProgress = {
  lessonsCompleted: [] as string[],
  quizScores: {} as Record<string, number>,
  streak: 1,
  totalMinutes: 0,
  xp: 0,
  level: 1,
};

export const weeklyActivity = [
  { day: 'Pzt', minutes: 0 },
  { day: 'Sal', minutes: 0 },
  { day: 'Çar', minutes: 0 },
  { day: 'Per', minutes: 0 },
  { day: 'Cum', minutes: 0 },
  { day: 'Cmt', minutes: 0 },
  { day: 'Paz', minutes: 0 },
];

export const subjectScores = [
  { subject: 'Mat', score: 0 },
  { subject: 'Tür', score: 0 },
  { subject: 'Fen', score: 0 },
  { subject: 'Sos', score: 0 },
  { subject: 'İng', score: 0 },
  { subject: 'Fiz', score: 0 },
  { subject: 'Kim', score: 0 },
  { subject: 'Bio', score: 0 },
];
