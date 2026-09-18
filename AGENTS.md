# AGENTS.md

## Proje Amacı
Modern, minimalist ve profesyonel bir yazılımcı portfolyo sitesi geliştir. Bu depo bir **React** (Vite tabanlı) projesidir. Agent, aşağıdaki tasarım ve teknik gereksinimlere göre kod üretmeli, düzenlemeli ve iyileştirmelidir.

## Teknoloji Yığını
- **Framework:** React (Vite ile kurulmuş)
- **Styling:** Tailwind CSS
- **Animasyon:** Framer Motion
- **İkonlar:** lucide-react
- **Routing (gerekirse):** react-router-dom
- Harici görsel/CSS bağımlılıklarından kaçın; mümkünse component içi (self-contained) çözümler tercih et.

## Kurulum & Çalıştırma Komutları
Agent, kod değişikliği yapmadan önce ve sonrasında şu komutları çalıştırmalı:
```bash
npm install
npm run dev       # geliştirme sunucusu
npm run build     # prod build kontrolü
npm run lint       # varsa lint kontrolü
```
Build veya lint hataları varsa, agent commit/teslim öncesi bunları çözmelidir.

## Tasarım Dili
- **Tema:** Koyu tema ağırlıklı (dark mode); açık/koyu tema geçişi destekleniyor olmalı (Tailwind `dark:` class stratejisi ile).
- **Renk Paleti:** Nötr griler/siyah/beyaz + tek bir accent renk (elektrik mavisi, neon yeşil veya mor gibi). Accent rengi `tailwind.config.js` içinde tanımlı bir custom color olarak tutulmalı, kod içinde hardcoded hex kullanılmamalı.
- **Tipografi:** Hero alanında büyük, cesur başlıklar. Tutarlı bir type scale kullan (Tailwind'in `text-*` ölçekleri).
- **Layout:** Bol negatif alan (whitespace), asimetrik ama dengeli grid düzeni.
- **Efektler:** Gradient veya subtle glassmorphism (abartmadan). Hover'da yumuşak geçişler (`transition`, `duration-*`). Scroll-triggered animasyonlar (fade-in, slide-up) Framer Motion `whileInView` ile yapılmalı.
- **Custom cursor:** Opsiyonel; eklenirse performansı etkilememeli ve mobilde devre dışı bırakılmalı.

## Bölümler (Component Yapısı)
Her bölüm ayrı bir component olarak `src/components/` altında tutulmalı:
1. **Hero** — isim, unvan (örn. "Full Stack Developer"), kısa tagline, CV indirme butonu, iletişim CTA'sı
2. **About** — kısa biyografi, kullanılan teknolojiler (ikonlu grid veya marquee/scroll animasyonu)
3. **Projects** — kart tasarımı, hover'da görsel zoom/overlay, canlı demo ve GitHub linkleri; veriler `src/data/projects.js` gibi ayrı bir dosyada tutulmalı, component içine hardcode edilmemeli
4. **Experience/Timeline** — dikey zaman çizelgesi, iş geçmişi verisi ayrı bir data dosyasından gelmeli
5. **Contact** — form veya doğrudan mail/sosyal medya linkleri
6. **Footer**

## Klasör Yapısı (Beklenen)
```
src/
  components/
    Hero.jsx
    About.jsx
    Projects.jsx
    Timeline.jsx
    Contact.jsx
    Footer.jsx
    ui/            # buton, kart gibi tekrar kullanılabilir küçük parçalar
  data/
    projects.js
    experience.js
  hooks/
  App.jsx
  main.jsx
  index.css
tailwind.config.js
vite.config.js
```

## Kod Standartları
- Fonksiyonel component + Hooks kullan, class component yazma.
- Her component tek sorumluluk taşımalı; 200+ satırlık component'leri böl.
- Prop tipleri açık ve okunabilir olmalı (gerekirse JSDoc yorumları ile belirt).
- Tekrarlanan class isimleri için Tailwind'de `@apply` veya küçük UI component'leri kullan, inline class çorbasından kaçın.
- Anlamlı, İngilizce değişken/fonksiyon isimleri kullan (kod içi isimlendirme İngilizce, kullanıcıya gösterilen içerik Türkçe veya İngilizce olabilir — proje sahibine sor).

## Responsive & Erişilebilirlik
- Mobil öncelikli (mobile-first) tasarım; `sm:`, `md:`, `lg:` breakpoint'lerini tutarlı kullan.
- Semantik HTML etiketleri kullan (`<section>`, `<nav>`, `<header>`, `<footer>` vb.).
- Görsellere `alt` metni, interaktif elementlere uygun `aria-*` etiketleri ekle.
- Klavye ile gezinilebilirlik (focus stilleri kaybolmamalı, `outline-none` kullanılıyorsa yerine görünür bir focus stili konmalı).

## Performans
- Görselleri `loading="lazy"` ile yükle, mümkünse WebP formatı öner.
- Büyük component'leri gerekirse `React.lazy` + `Suspense` ile code-split et.
- Framer Motion animasyonlarını `viewport={{ once: true }}` ile sınırlayarak gereksiz yeniden tetiklenmeyi önle.

## SEO
- `index.html` içinde temel meta etiketleri bulunmalı: title, description, Open Graph (`og:title`, `og:description`, `og:image`).
- Her sayfa/bölüm için anlamlı başlık hiyerarşisi (`h1` sadece bir kez, sırasıyla `h2`, `h3`).

## Agent İçin Çalışma Prensipleri
- Yeni bir özellik eklemeden önce mevcut component yapısını incele, tutarlılığı koru.
- Tasarım kararlarında yukarıdaki "Tasarım Dili" bölümünü referans al; belirtilmeyen bir konuda karar verirken minimalist ve modern yaklaşımı tercih et.
- Büyük değişikliklerden önce (örn. state management eklemek, yeni bir kütüphane kurmak) kısa bir plan/özet sun.
- Test veya build çalıştırılamıyorsa (bağımlılık eksikse vb.) bunu açıkça belirt, sessizce atlamamalı.
- Placeholder içerik (isim, proje verisi, deneyim) eklerken bunun açıkça placeholder olduğunu kod içinde yorum olarak belirt (örn. `// TODO: kullanıcıya özel içerik ile değiştir`).
