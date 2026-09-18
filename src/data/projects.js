export const projectCategories = ["Tümü", "Backend & Mimari", "Full Stack", "Algoritma & Araçlar", "Oyun & Fizik"];

export const projects = [
  {
    id: "plm-backend",
    title: "Kurumsal PLM Backend & Bilet/Depo Yönetimi",
    category: "Backend & Mimari",
    description: "Ürün Yaşam Döngüsü Yönetimi (PLM) platformu için .NET Core tabanlı, yüksek işlem hacimli iş süreçlerini ve bilet/depo akışlarını yöneten kurumsal backend mimarisi.",
    highlights: [
      "Kritik Yönetimi (Ticket Sistemi) ve Depo Yönetimi modüllerinin uçtan uca backend mimarisi",
      "MSSQL üzerinde Stored Procedure, Trigger ve Fonksiyonlar ile optimize edilmiş veritabanı seviyesi iş mantığı",
      "Docker konteynerizasyonu ile geliştirme ve canlı ortamlar arasında %100 tutarlılık",
      "İş emirleri ve çekirdek sistem modüllerinde yüksek sorgu performansı ve veri bütünlüğü"
    ],
    technologies: [".NET Core", "MSSQL", "Docker", "REST API", "Stored Procedures", "Clean Architecture"],
    githubUrl: "https://github.com/mucahittir",
    liveDemoUrl: null,
    featured: true
  },
  {
    id: "synergy-virtual-drive",
    title: "Synergy Sanal Disk & Kurumsal Doküman Yönetimi",
    category: "Full Stack",
    description: "Kurumsal verilerin güvenli depolanması ve milisaniyeler içinde hızlı erişimi için geliştirilmiş özelleştirilmiş 'Sanal Disk' (Virtual Drive) eklentisi ve yönetim konsolu.",
    highlights: [
      "Repository, Factory, Dependency Injection ve Singleton tasarım desenleri ile genişletilebilir modüler mimari",
      "SOLID, DRY ve KISS ilkelerine dayalı katmanlı temiz kod (Clean Code) yapısı",
      "Backend (C#/.NET) ve frontend (React/jQuery) katmanlarının sorunsuz entegrasyonu",
      "Kritik dosya operasyonları için yüksek kapsamlı Unit Test senaryoları"
    ],
    technologies: ["C#", ".NET Core", "React.js", "Design Patterns", "Unit Test", "Clean Code"],
    githubUrl: "https://github.com/mucahittir",
    liveDemoUrl: null,
    featured: true
  },
  {
    id: "exam-scheduler-algorithm",
    title: "Akıllı Sınav Planlama & Otomatik Çizelgeleme Motoru",
    category: "Algoritma & Araçlar",
    description: "Üniversite ve enstitülerde günlerce süren manuel sınav planlama ve gözetmen atama süreçlerini %100 otomatize eden kural tabanlı optimizasyon algoritması.",
    highlights: [
      "Çakışmaları (öğrenci ders çakışması, derslik kapasitesi, gözetmen müsaitliği) sıfıra indiren matematiksel çizelgeleme",
      "Manuel planlama süresini saatlerden saniyelere düşüren yüksek performanslı C# algoritması",
      "MSSQL ilişkisel veri modelleri ve dinamik kısıt parametreleri tanımlama yeteneği"
    ],
    technologies: ["C#", "Algoritma Tasarımı", "MSSQL", "WebForms", "Optimizasyon"],
    githubUrl: "https://github.com/mucahittir",
    liveDemoUrl: null,
    featured: true
  },
  {
    id: "game-framework-ragdoll",
    title: "Modüler Oyun Geliştirme Çatısı & Ragdoll Fizik Paketi",
    category: "Oyun & Fizik",
    description: "Mobil oyun stüdyolarında oyun prototipleme ve üretim hızını artıran, yeniden kullanılabilir 'Hypercasual Game Template' ve özel ragdoll fizik motoru eklentisi.",
    highlights: [
      "Particle sistemleri ve 3D modeller için GPU/CPU bellek optimizasyonları",
      "İçerik üretim ekipleri için Unity Editor araçları ve özel Inspector Script'leri",
      "Ragdoll fiziği ve yumuşak animasyon geçişleri sunan modüler paket mimarisi",
      "Yüksek kullanıcı deneyimi (UX) ve oyun dengesi sağlayan seviye mimarileri"
    ],
    technologies: ["Unity", "C#", "Technical Art", "Ragdoll Physics", "Editor Tooling"],
    githubUrl: "https://github.com/mucahittir",
    liveDemoUrl: null,
    featured: false
  },
  {
    id: "event-driven-microservices",
    title: "Dağıtık Mikroservis & Event-Driven Mesajlaşma Servisi",
    category: "Backend & Mimari",
    description: "Asenkron mesaj kuyrukları, JWT yetkilendirme ve WebSocket canlı veri akışları barındıran ölçeklenebilir mikroservis mimarisi gösterim projesi.",
    highlights: [
      "RabbitMQ tabanlı event-driven mesajlaşma ve gevşek bağlı (loosely-coupled) servisler",
      "JWT tabanlı rol ve yetki doğrulama middleware katmanı",
      "Canlı sistem güncellemeleri için çift yönlü WebSocket iletişimi",
      "Docker Compose ile tek komutla ayağa kaldırılabilen çoklu servis orkestrasyonu"
    ],
    technologies: [".NET Core", "RabbitMQ", "JWT", "WebSocket", "Docker", "Entity Framework Core"],
    githubUrl: "https://github.com/mucahittir",
    liveDemoUrl: null,
    featured: false
  }
];
