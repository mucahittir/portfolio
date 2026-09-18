# Mücahit Tiryaki — Portfolio

Mücahit Tiryaki için hazırlanmış modern, minimalist ve kurumsal standartlarda Full Stack & Backend Developer portfolyo web sitesi.

## 🚀 Kullanılan Teknolojiler
- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Stil & Tasarım:** [Tailwind CSS](https://tailwindcss.com/) (Karanlık/Aydınlık Tema Desteği)
- **Animasyonlar:** [Framer Motion](https://www.framer.com/motion/)
- **İkonlar:** [lucide-react](https://lucide.dev/)

## 📁 Mimari ve Klasör Yapısı
```text
src/
  components/
    Navbar.jsx       # Cam efektli (glassmorphism) üst menü ve tema anahtarı
    Hero.jsx         # İsim, unvan, aksiyon butonları, CV indirme ve istatistikler
    About.jsx        # Biyografi, mühendislik felsefesi, eğitim, sertifikalar ve ilgi alanları
    Skills.jsx       # Sekmeli yetenek kategorileri ve seviye çubukları
    Timeline.jsx     # Dikey kariyer zaman çizelgesi (Viya LM&BT, Bimser, M8 Games, vb.)
    Projects.jsx     # Öne çıkan kurumsal & teknik projeler ve filtreleme
    Contact.jsx      # İletişim kartları ve mesaj formu
    Footer.jsx       # Alt bilgi ve yukarı kaydır butonu
    ui/              # Yeniden kullanılabilir Button, Card, Badge, SectionHeading bileşenleri
  data/
    personal.js      # Kişisel bilgiler, eğitim, sertifikalar, ilgi alanları
    experience.js    # Kariyer ve iş deneyimi verileri
    skills.js        # Yetenek kategorileri ve seviyeleri
    projects.js      # Proje detayları ve etiketleri
  hooks/
    useTheme.js      # Dark/Light mod state ve localStorage senkronizasyonu
  App.jsx            # Ana sayfa düzeni
  main.jsx           # React giriş noktası
  index.css          # Tailwind ve özel scrollbar stilleri
```

## 🛠️ Kurulum & Çalıştırma
```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Prodüksiyon derlemesi al
npm run build
```

## 🔄 CI/CD & Otomatik Dağıtım (Jenkins)
Proje `main` branch'ine her kod pushlandığında yerel Jenkins Pipeline'ı (`portfolio-deploy`) otomatik olarak devreye girer:
1. **Source Checkout:** GitHub üzerinden son değişiklikler çekilir.
2. **Build & Containerize:** Dockerfile üzerinden multi-stage optimize derleme alınır.
3. **Continuous Deployment:** Docker Compose ile `portfolio` konteyneri canlıda güncellenir (`:3002`).
4. **Health Check:** Konteynerin ayağa kalktığı ve HTTP 200 verdiği doğrulanır.

