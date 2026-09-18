export const experiences = {
  tr: [
    {
      id: "viya",
      company: "Viya LM&BT",
      location: "Kocaeli",
      role: "Backend Developer",
      period: "Mart 2025 – Günümüz",
      isCurrent: true,
      description: "Yüksek ölçeklenebilir kurumsal PLM (Ürün Yaşam Döngüsü Yönetimi) sisteminin mimarisini ve backend servislerini yönetme.",
      responsibilities: [
        ".NET Core tabanlı, yüksek ölçeklenebilir Ürün Yaşam Döngüsü Yönetimi (PLM) yazılımının mimari geliştirme ve backend süreçlerini yönetiyorum.",
        "MSSQL üzerinde performans odaklı veritabanı şemaları tasarlayarak; Stored Procedure, Trigger ve Fonksiyonlar ile iş mantığının veritabanı seviyesinde optimize edilmesini sağladım.",
        "Kritik Yönetimi (Ticket Sistemi) ve Depo Yönetimi gibi karmaşık iş akışlarına sahip modüllerin uçtan uca backend mantığını kurguladım.",
        "İş emirleri ve çekirdek sistem modüllerinde teknik iyileştirmeler yaparak sistem genelindeki veri tutarlılığını ve sorgu performansını artırdım.",
        "CI/CD süreçlerine hazırlık kapsamında uygulamayı Docker ile konteynerize ederek, geliştirme ve canlı ortamlar arasındaki tutarlılığı arttırdım."
      ],
      technologies: [".NET Core", "MSSQL", "Docker", "REST API", "Database Optimization", "CI/CD", "Clean Architecture"]
    },
    {
      id: "bimser",
      company: "Bimser Çözüm",
      location: "Kocaeli (Uzaktan)",
      role: "Fullstack Developer",
      period: "Temmuz 2023 – Ocak 2025",
      isCurrent: false,
      description: "Bimser Synergy Low Code Platformu'nun kurumsal mimarisinde çekirdek backend ve dinamik frontend geliştirme.",
      responsibilities: [
        "Bimser Synergy Low Code Platformu’nun çekirdek yeteneklerini geliştirmek üzere backend (C#/.NET) ve frontend (React/jQuery) katmanlarında görev aldım.",
        "Repository, Dependency Injection, Factory ve Singleton gibi tasarım desenlerini (Design Patterns) kullanarak modüler ve genişletilebilir bir kod yapısı inşa ettim.",
        "SOLID, DRY ve KISS prensiplerini temel alan katmanlı mimari yapısında temiz kod (Clean Code) standartlarını uyguladım.",
        "Kod kalitesini güvence altına almak amacıyla Unit Test süreçlerini devreye alarak hata payını minimize ettim.",
        "Kurumsal verilerin güvenli depolanması ve hızlı erişimi için özelleştirilmiş bir 'Sanal Disk' (Virtual Drive) uygulaması ile doküman yönetim eklentileri geliştirdim."
      ],
      technologies: ["C#", ".NET Core", "React.js", "jQuery", "Design Patterns", "Clean Code", "Unit Test", "Virtual Drive"]
    },
    {
      id: "m8-games",
      company: "M8 Games",
      location: "İstanbul (Uzaktan)",
      role: "Oyun Geliştirici",
      period: "Aralık 2022 – Şubat 2023",
      isCurrent: false,
      description: "Mobil oyun mekanikleri, technical art optimizasyonları ve şirket içi ortak oyun geliştirme şablonu inşası.",
      responsibilities: [
        "Unity ve C# kullanarak yüksek performanslı mobil oyun mekanikleri geliştirdim.",
        "Teknik sanat (Technical Art) süreçlerine katkı sağlayarak Particle sistemleri ve 3D objelerin performans optimizasyonlarını gerçekleştirdim.",
        "Şirket içi geliştirme hızını artırmak amacıyla, modüler ve tekrar kullanılabilir bir 'Hypercasual Game Template' mimarisi oluşturdum."
      ],
      technologies: ["Unity", "C#", "Technical Art", "Performance Optimization", "Modular Architecture", "Game Physics"]
    },
    {
      id: "cube-games",
      company: "Cube Games",
      location: "İstanbul (Uzaktan)",
      role: "Oyun Geliştirici",
      period: "Temmuz 2021 – Eylül 2022",
      isCurrent: false,
      description: "Mobil oyun projeleri, özelleştirilmiş fizik motoru paketleri ve Unity Editor araçları geliştirme.",
      responsibilities: [
        "C# ve Unity ile mobil oyun projelerinin mekanik ve arayüz sistemlerini kodladım.",
        "Proje verimliliğini artırmak adına özel Editor Script’leri yazarak içerik üretim süreçlerini otomatize ettim.",
        "Ragdoll fiziği ve karakter animasyon sistemleri üzerine özelleştirilmiş paketler geliştirerek projelerde teknik derinlik sağladım.",
        "Oyun dengesi ve kullanıcı deneyimi (UX) odaklı seviye tasarımları (Level Design) gerçekleştirdim."
      ],
      technologies: ["Unity", "C#", "Ragdoll Physics", "Editor Scripting", "Level Design", "UX Optimization"]
    },
    {
      id: "sayem",
      company: "SAYEM",
      location: "Sakarya",
      role: "Yazılım Geliştirici",
      period: "Ekim 2020 – Temmuz 2021",
      isCurrent: false,
      description: "Kurumsal web projeleri, veritabanı tasarımı ve sınav çizelgeleme otomasyonu algoritması.",
      responsibilities: [
        "Laravel ve Vue.js teknolojileri ile kurumsal yönetim paneli (Admin Panel) mimarisine katkı sağladım.",
        "C# WebForms kullanarak, manuel yürütülen sınav planlama süreçlerini %100 otomatize eden bir çizelgeleme algoritması ve uygulaması geliştirdim.",
        "Kurumsal web projelerinin veritabanı tasarımı ve full-stack geliştirme süreçlerini yürüttüm."
      ],
      technologies: ["C# WebForms", "Laravel", "Vue.js", "Algoritma Tasarımı", "MSSQL", "MySQL"]
    }
  ],
  en: [
    {
      id: "viya",
      company: "Viya LM&BT",
      location: "Kocaeli, Turkey",
      role: "Backend Developer",
      period: "Mar 2025 – Present",
      isCurrent: true,
      description: "Managing backend architecture, services, and database layers of a high-scale enterprise Product Lifecycle Management (PLM) platform.",
      responsibilities: [
        "Leading the architectural design and backend development for an enterprise PLM system built with .NET Core.",
        "Engineered performance-critical MSSQL schemas, optimizing business logic at the database layer using Stored Procedures, Triggers, and Functions.",
        "Architected end-to-end backend logic for mission-critical modules including Issue/Ticket Management and Warehouse Tracking.",
        "Enhanced work order pipelines and core system modules, achieving measurable gains in query throughput and system-wide data integrity.",
        "Containerized applications using Docker to align staging and production environments in preparation for CI/CD pipelines."
      ],
      technologies: [".NET Core", "MSSQL", "Docker", "REST API", "Database Optimization", "CI/CD", "Clean Architecture"]
    },
    {
      id: "bimser",
      company: "Bimser Solutions",
      location: "Kocaeli (Remote)",
      role: "Fullstack Developer",
      period: "Jul 2023 – Jan 2025",
      isCurrent: false,
      description: "Developing core backend capabilities and dynamic frontend integrations for the Bimser Synergy Low Code Platform.",
      responsibilities: [
        "Contributed across backend (C#/.NET) and frontend (React/jQuery) stacks to extend the core capabilities of Bimser Synergy Low Code Platform.",
        "Designed and maintained modular, extensible architectures utilizing Repository, Dependency Injection, Factory, and Singleton design patterns.",
        "Enforced Clean Code standards in a layered architecture based on SOLID, DRY, and KISS principles.",
        "Introduced automated Unit Testing workflows to safeguard code quality and reduce production bug rates.",
        "Engineered a specialized 'Virtual Drive' application and document management extensions for secure data storage and fast retrieval."
      ],
      technologies: ["C#", ".NET Core", "React.js", "jQuery", "Design Patterns", "Clean Code", "Unit Test", "Virtual Drive"]
    },
    {
      id: "m8-games",
      company: "M8 Games",
      location: "Istanbul (Remote)",
      role: "Game Developer",
      period: "Dec 2022 – Feb 2023",
      isCurrent: false,
      description: "Engineering mobile game mechanics, technical art optimization, and modular game templates.",
      responsibilities: [
        "Developed responsive and performant mobile game mechanics using Unity and C#.",
        "Contributed to Technical Art pipelines by profiling and optimizing particle systems and 3D assets for smooth mobile execution.",
        "Created an internal, reusable 'Hypercasual Game Template' framework to dramatically speed up studio prototyping."
      ],
      technologies: ["Unity", "C#", "Technical Art", "Performance Optimization", "Modular Architecture", "Game Physics"]
    },
    {
      id: "cube-games",
      company: "Cube Games",
      location: "Istanbul (Remote)",
      role: "Game Developer",
      period: "Jul 2021 – Sep 2022",
      isCurrent: false,
      description: "Developing mobile game titles, custom physics packages, and specialized Unity Editor extensions.",
      responsibilities: [
        "Authored gameplay mechanics and responsive UI systems in C# for multiple mobile game titles.",
        "Automated content generation workflows by developing custom Unity Editor scripts and inspector utilities.",
        "Built modular packages for ragdoll physics and character animation blending, elevating physics stability.",
        "Created level designs tuned for player balance and optimal user experience (UX)."
      ],
      technologies: ["Unity", "C#", "Ragdoll Physics", "Editor Scripting", "Level Design", "UX Optimization"]
    },
    {
      id: "sayem",
      company: "SAYEM",
      location: "Sakarya, Turkey",
      role: "Software Developer",
      period: "Oct 2020 – Jul 2021",
      isCurrent: false,
      description: "Developing enterprise web portals, database architecture, and an automated exam scheduling engine.",
      responsibilities: [
        "Contributed to an enterprise administrative portal architecture using Laravel and Vue.js.",
        "Built an algorithmic constraint-solving scheduling application in C# WebForms, automating multi-day manual exam scheduling into seconds.",
        "Managed database schema design and full-stack development for institutional web projects."
      ],
      technologies: ["C# WebForms", "Laravel", "Vue.js", "Algorithm Design", "MSSQL", "MySQL"]
    }
  ]
};

export const getExperiences = (lang = 'tr') => experiences[lang] || experiences.tr;
