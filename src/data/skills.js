export const skillCategories = [
  {
    id: "backend",
    name: "Backend & Mikroservisler",
    icon: "Server",
    description: "Yüksek verimli, güvenli ve ölçeklenebilir kurumsal mimariler",
    skills: [
      { name: ".NET Core / C#", level: 88, highlighted: true },
      { name: "REST API & WebSocket", level: 87, highlighted: true },
      { name: "Entity Framework Core", level: 88, highlighted: true },
      { name: "Mikroservis Mimarisi", level: 82, highlighted: true },
      { name: "Dependency Injection & IoC", level: 85, highlighted: false },
      { name: "JWT Auth & Yetkilendirme", level: 85, highlighted: false },
      { name: "RabbitMQ", level: 70, highlighted: false },
      { name: "Unit Test & Clean Architecture", level: 80, highlighted: true }
    ]
  },
  {
    id: "database",
    name: "Veritabanları & Optimizasyon",
    icon: "Database",
    description: "İlişkisel veritabanı şemaları, karmaşık sorgular ve performans ayarlamaları",
    skills: [
      { name: "MSSQL", level: 86, highlighted: true },
      { name: "Stored Procedures & Triggers", level: 84, highlighted: true },
      { name: "Veri Modelleme (Schema Design)", level: 82, highlighted: false },
      { name: "Sorgu & İndeks Optimizasyonu", level: 80, highlighted: true },
      { name: "MySQL", level: 74, highlighted: false }
    ]
  },
  {
    id: "frontend",
    name: "Frontend & Arayüz",
    icon: "Layout",
    description: "Backend sistemlerle entegre çalışan, modern ve işlevsel kullanıcı arayüzleri",
    skills: [
      { name: "TypeScript / JavaScript", level: 70, highlighted: true },
      { name: "Tailwind CSS", level: 68, highlighted: false },
      { name: "React.js", level: 66, highlighted: true },
      { name: "Axios & API Entegrasyonu", level: 70, highlighted: false },
      { name: "jQuery & DOM Manipülasyonu", level: 72, highlighted: false },
      { name: "DevExtreme UI Components", level: 64, highlighted: false },
      { name: "Ant Design (antd)", level: 62, highlighted: false },
      { name: "Progressive Web Apps (PWA)", level: 58, highlighted: false }
    ]
  },
  {
    id: "devops",
    name: "DevOps, Sistem & Araçlar",
    icon: "Cpu",
    description: "Konteynerizasyon, CI/CD hatları ve platform entegrasyonları",
    skills: [
      { name: "Git & GitHub Versiyonlama", level: 84, highlighted: true },
      { name: "Docker", level: 82, highlighted: true },
      { name: "Unity & C# Game Physics", level: 74, highlighted: false },
      { name: "ASP.NET Web Forms (Legacy)", level: 72, highlighted: false },
      { name: "Azure DevOps & CI/CD", level: 70, highlighted: false },
      { name: "Electron.js & WinForms", level: 65, highlighted: false }
    ]
  },
  {
    id: "methodology",
    name: "Mimari Prensipler & Metodolojiler",
    icon: "ShieldCheck",
    description: "Mühendislik standartları, tasarım desenleri ve çevik pratikler",
    skills: [
      { name: "SOLID, DRY, KISS", level: 88, highlighted: true },
      { name: "Design Patterns (GoF)", level: 82, highlighted: true },
      { name: "Teknik & API Dokümantasyonu", level: 82, highlighted: false },
      { name: "Yapay Zeka Destekli Geliştirme", level: 82, highlighted: true },
      { name: "Agile, Scrum & Kanban", level: 80, highlighted: false }
    ]
  }
];
