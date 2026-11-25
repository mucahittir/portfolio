export const projectCategories = {
  tr: ["Tümü", "Backend ve mimari", "Full Stack", "Algoritma ve araçlar", "Oyun ve fizik"],
  en: ["All", "Backend and architecture", "Full Stack", "Algorithms and tools", "Game and physics"]
};

export const categoryFilters = [
  { id: "all", tr: "Tümü", en: "All" },
  { id: "backend", tr: "Backend ve mimari", en: "Backend and architecture" },
  { id: "fullstack", tr: "Full Stack", en: "Full Stack" },
  { id: "algorithms", tr: "Algoritma ve araçlar", en: "Algorithms and tools" },
  { id: "games", tr: "Oyun ve fizik", en: "Game and physics" }
];

export const projects = {
  tr: [
    {
      id: "plm-backend",
      categoryId: "backend",
      title: "Kurumsal PLM backend ve bilet/depo yönetimi",
      category: "Backend ve mimari",
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
      categoryId: "fullstack",
      title: "Synergy sanal disk ve kurumsal doküman yönetimi",
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
      categoryId: "algorithms",
      title: "Akıllı sınav planlama ve otomatik çizelgeleme motoru",
      category: "Algoritma ve araçlar",
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
      categoryId: "games",
      title: "Modüler oyun geliştirme çatısı ve ragdoll fizik paketi",
      category: "Oyun ve fizik",
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
      categoryId: "backend",
      title: "Dağıtık mikroservis ve event-driven mesajlaşma servisi",
      category: "Backend ve mimari",
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
  ],
  en: [
    {
      id: "plm-backend",
      categoryId: "backend",
      title: "Enterprise PLM backend and ticket/warehouse management",
      category: "Backend and architecture",
      description: "Enterprise backend architecture built with .NET Core for a Product Lifecycle Management (PLM) platform managing high-throughput business workflows and warehouse systems.",
      highlights: [
        "End-to-end backend architecture for Issue Tracking (Ticket System) and Warehouse Management modules",
        "Database-level business logic optimization using MSSQL Stored Procedures, Triggers, and Functions",
        "100% development and production parity achieved via Docker containerization",
        "High query performance and rock-solid data integrity across work orders and core system modules"
      ],
      technologies: [".NET Core", "MSSQL", "Docker", "REST API", "Stored Procedures", "Clean Architecture"],
      githubUrl: "https://github.com/mucahittir",
      liveDemoUrl: null,
      featured: true
    },
    {
      id: "synergy-virtual-drive",
      categoryId: "fullstack",
      title: "Synergy Virtual Drive and enterprise document management",
      category: "Full Stack",
      description: "Custom 'Virtual Drive' extension and administration console built for secure corporate data storage and sub-millisecond retrieval.",
      highlights: [
        "Extensible modular architecture leveraging Repository, Factory, Dependency Injection, and Singleton patterns",
        "Clean Code standards rooted in SOLID, DRY, and KISS design principles across layers",
        "Seamless integration between backend (C#/.NET) and dynamic frontend (React/jQuery) layers",
        "Comprehensive unit test coverage safeguarding mission-critical file operations"
      ],
      technologies: ["C#", ".NET Core", "React.js", "Design Patterns", "Unit Test", "Clean Code"],
      githubUrl: "https://github.com/mucahittir",
      liveDemoUrl: null,
      featured: true
    },
    {
      id: "exam-scheduler-algorithm",
      categoryId: "algorithms",
      title: "Smart exam scheduler and automated optimization engine",
      category: "Algorithms and tools",
      description: "Rule-based optimization algorithm completely automating days of manual university exam scheduling and proctor assignments.",
      highlights: [
        "Mathematical constraint solver eliminating clashes across student schedules, room capacities, and proctor availability",
        "High-performance C# algorithm reducing hours of manual planning down to seconds",
        "MSSQL relational data models with dynamically configurable constraint parameters"
      ],
      technologies: ["C#", "Algorithm Design", "MSSQL", "WebForms", "Optimization"],
      githubUrl: "https://github.com/mucahittir",
      liveDemoUrl: null,
      featured: true
    },
    {
      id: "game-framework-ragdoll",
      categoryId: "games",
      title: "Modular game framework and ragdoll physics package",
      category: "Game and physics",
      description: "Reusable 'Hypercasual Game Template' and custom ragdoll physics package accelerating prototyping and production cycles in mobile game studios.",
      highlights: [
        "Particle system and 3D asset memory profiling and compute optimization for mobile GPUs/CPUs",
        "Custom Unity Editor tooling and specialized inspector scripts for game designers",
        "Modular package architecture delivering robust ragdoll physics and smooth animation blending",
        "Player-centric level architecture with polished game balance and responsive UX"
      ],
      technologies: ["Unity", "C#", "Technical Art", "Ragdoll Physics", "Editor Tooling"],
      githubUrl: "https://github.com/mucahittir",
      liveDemoUrl: null,
      featured: false
    },
    {
      id: "event-driven-microservices",
      categoryId: "backend",
      title: "Distributed microservices and event-driven messaging",
      category: "Backend and architecture",
      description: "Scalable microservices showcase featuring asynchronous message queues, JWT authentication, and real-time WebSocket data streaming.",
      highlights: [
        "RabbitMQ-based event-driven messaging with loosely coupled, resilient service boundaries",
        "JWT-based role and permission authorization middleware layer",
        "Bi-directional WebSocket communication for instant live system events",
        "Single-command multi-service orchestration powered by Docker Compose"
      ],
      technologies: [".NET Core", "RabbitMQ", "JWT", "WebSocket", "Docker", "Entity Framework Core"],
      githubUrl: "https://github.com/mucahittir",
      liveDemoUrl: null,
      featured: false
    }
  ]
};

export const getProjects = (lang = 'tr') => projects[lang] || projects.tr;
