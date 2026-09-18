export const skillCategories = [
  {
    id: "backend",
    name: "Backend & Mikroservisler",
    icon: "Server",
    description: "Yüksek verimli, güvenli ve ölçeklenebilir kurumsal mimariler",
    skills: [
      { name: ".NET Core / C#", level: 95, highlighted: true },
      { name: "Mikroservis Mimarisi", level: 90, highlighted: true },
      { name: "REST API & WebSocket", level: 92, highlighted: true },
      { name: "RabbitMQ", level: 85, highlighted: false },
      { name: "Entity Framework Core", level: 92, highlighted: true },
      { name: "Dependency Injection", level: 95, highlighted: false },
      { name: "JWT Auth & Authorization", level: 90, highlighted: false },
      { name: "Unit Test & Clean Code", level: 90, highlighted: true }
    ]
  },
  {
    id: "database",
    name: "Veritabanları & Optimizasyon",
    icon: "Database",
    description: "İlişkisel veritabanı şemaları, karmaşık sorgular ve performans ayarlamaları",
    skills: [
      { name: "MSSQL", level: 92, highlighted: true },
      { name: "MySQL", level: 85, highlighted: false },
      { name: "Stored Procedures & Triggers", level: 90, highlighted: true },
      { name: "Sorgu & İndeks Optimizasyonu", level: 88, highlighted: true },
      { name: "Veri Modelleme (Schema Design)", level: 90, highlighted: false }
    ]
  },
  {
    id: "frontend",
    name: "Frontend & UI",
    icon: "Layout",
    description: "Modern, duyarlı, kullanıcı odaklı web ve mobil uyumlu arayüzler",
    skills: [
      { name: "React.js", level: 88, highlighted: true },
      { name: "TypeScript / JavaScript", level: 86, highlighted: true },
      { name: "Tailwind CSS", level: 90, highlighted: true },
      { name: "DevExtreme UI Components", level: 85, highlighted: false },
      { name: "Ant Design (antd)", level: 82, highlighted: false },
      { name: "Progressive Web Apps (PWA)", level: 80, highlighted: false },
      { name: "Axios & State Management", level: 88, highlighted: false },
      { name: "jQuery & DOM Manipülasyonu", level: 85, highlighted: false }
    ]
  },
  {
    id: "devops",
    name: "DevOps, Masaüstü & Araçlar",
    icon: "Cpu",
    description: "Konteynerizasyon, CI/CD hatları ve masaüstü platform entegrasyonları",
    skills: [
      { name: "Docker", level: 86, highlighted: true },
      { name: "Azure DevOps & CI/CD", level: 82, highlighted: true },
      { name: "Git & GitHub Versiyonlama", level: 92, highlighted: false },
      { name: "Electron.js & WinForms", level: 80, highlighted: false },
      { name: "Unity & C# Game Physics", level: 88, highlighted: true },
      { name: "ASP.NET Web Forms (Legacy)", level: 82, highlighted: false }
    ]
  },
  {
    id: "methodology",
    name: "Mimari Prensipler & Soft Skills",
    icon: "ShieldCheck",
    description: "Mühendislik prensipleri ve çevik proje yönetimi pratikleri",
    skills: [
      { name: "SOLID, DRY, KISS", level: 95, highlighted: true },
      { name: "Design Patterns (GoF)", level: 92, highlighted: true },
      { name: "Agile, Scrum & Kanban", level: 90, highlighted: false },
      { name: "Teknik & API Dokümantasyonu", level: 88, highlighted: false },
      { name: "Yapay Zeka & Geliştirici Araçları", level: 92, highlighted: true }
    ]
  }
];
