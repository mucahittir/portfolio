export const skillCategories = {
  tr: [
    {
      id: "backend",
      name: "Backend ve mikroservisler",
      icon: "Server",
      description: "Yüksek verimli, güvenli ve ölçeklenebilir kurumsal mimariler",
      skills: [
        { name: ".NET Core / C#", level: 88, highlighted: true },
        { name: "REST API ve WebSocket", level: 87, highlighted: true },
        { name: "Entity Framework Core", level: 88, highlighted: true },
        { name: "Mikroservis mimarisi", level: 82, highlighted: true },
        { name: "Dependency Injection ve IoC", level: 85, highlighted: false },
        { name: "JWT auth ve yetkilendirme", level: 85, highlighted: false },
        { name: "RabbitMQ", level: 70, highlighted: false },
        { name: "Unit test ve Clean Architecture", level: 80, highlighted: true }
      ]
    },
    {
      id: "database",
      name: "Veritabanı ve optimizasyon",
      icon: "Database",
      description: "İlişkisel veritabanı şemaları, karmaşık sorgular ve performans ayarlamaları",
      skills: [
        { name: "MSSQL", level: 86, highlighted: true },
        { name: "Stored procedure ve trigger", level: 84, highlighted: true },
        { name: "Veri modelleme (schema design)", level: 82, highlighted: false },
        { name: "Sorgu ve indeks optimizasyonu", level: 80, highlighted: true },
        { name: "MySQL", level: 74, highlighted: false }
      ]
    },
    {
      id: "frontend",
      name: "Frontend ve arayüz",
      icon: "Layout",
      description: "Backend sistemlerle entegre çalışan, modern ve işlevsel kullanıcı arayüzleri",
      skills: [
        { name: "TypeScript / JavaScript", level: 70, highlighted: true },
        { name: "Tailwind CSS", level: 68, highlighted: false },
        { name: "React.js", level: 66, highlighted: true },
        { name: "Axios ve API entegrasyonu", level: 70, highlighted: false },
        { name: "jQuery ve DOM manipülasyonu", level: 72, highlighted: false },
        { name: "DevExtreme UI Components", level: 64, highlighted: false },
        { name: "Ant Design (antd)", level: 62, highlighted: false },
        { name: "Progressive web apps (PWA)", level: 58, highlighted: false }
      ]
    },
    {
      id: "devops",
      name: "DevOps, sistem ve araçlar",
      icon: "Cpu",
      description: "Konteynerizasyon, CI/CD hatları ve platform entegrasyonları",
      skills: [
        { name: "Git ve GitHub versiyonlama", level: 84, highlighted: true },
        { name: "Docker", level: 82, highlighted: true },
        { name: "Unity ve C# oyun fiziği", level: 74, highlighted: false },
        { name: "ASP.NET Web Forms (eski)", level: 72, highlighted: false },
        { name: "Azure DevOps ve CI/CD", level: 70, highlighted: false },
        { name: "Electron.js ve WinForms", level: 65, highlighted: false }
      ]
    },
    {
      id: "methodology",
      name: "Mimari ve metodoloji",
      icon: "ShieldCheck",
      description: "Mühendislik standartları, tasarım desenleri ve çevik pratikler",
      skills: [
        { name: "SOLID, DRY, KISS", level: 88, highlighted: true },
        { name: "Design Patterns (GoF)", level: 82, highlighted: true },
        { name: "Teknik ve API dokümantasyonu", level: 82, highlighted: false },
        { name: "Yapay zeka destekli geliştirme", level: 82, highlighted: true },
        { name: "Agile, Scrum ve Kanban", level: 80, highlighted: false }
      ]
    }
  ],
  en: [
    {
      id: "backend",
      name: "Backend and microservices",
      icon: "Server",
      description: "High-throughput, secure, and scalable enterprise backend architectures",
      skills: [
        { name: ".NET Core / C#", level: 88, highlighted: true },
        { name: "REST API and WebSocket", level: 87, highlighted: true },
        { name: "Entity Framework Core", level: 88, highlighted: true },
        { name: "Microservices architecture", level: 82, highlighted: true },
        { name: "Dependency Injection and IoC", level: 85, highlighted: false },
        { name: "JWT auth and authorization", level: 85, highlighted: false },
        { name: "RabbitMQ", level: 70, highlighted: false },
        { name: "Unit testing and Clean Architecture", level: 80, highlighted: true }
      ]
    },
    {
      id: "database",
      name: "Databases and optimization",
      icon: "Database",
      description: "Relational data schemas, complex queries, and database performance tuning",
      skills: [
        { name: "MSSQL", level: 86, highlighted: true },
        { name: "Stored procedures and triggers", level: 84, highlighted: true },
        { name: "Data modeling (schema design)", level: 82, highlighted: false },
        { name: "Query and index optimization", level: 80, highlighted: true },
        { name: "MySQL", level: 74, highlighted: false }
      ]
    },
    {
      id: "frontend",
      name: "Frontend and UI",
      icon: "Layout",
      description: "Modern, responsive, and functional UIs engineered for backend integration",
      skills: [
        { name: "TypeScript / JavaScript", level: 70, highlighted: true },
        { name: "Tailwind CSS", level: 68, highlighted: false },
        { name: "React.js", level: 66, highlighted: true },
        { name: "Axios and API integration", level: 70, highlighted: false },
        { name: "jQuery and DOM manipulation", level: 72, highlighted: false },
        { name: "DevExtreme UI Components", level: 64, highlighted: false },
        { name: "Ant Design (antd)", level: 62, highlighted: false },
        { name: "Progressive web apps (PWA)", level: 58, highlighted: false }
      ]
    },
    {
      id: "devops",
      name: "DevOps, systems and tools",
      icon: "Cpu",
      description: "Containerization, automated CI/CD pipelines, and runtime tooling",
      skills: [
        { name: "Git and GitHub versioning", level: 84, highlighted: true },
        { name: "Docker", level: 82, highlighted: true },
        { name: "Unity and C# game physics", level: 74, highlighted: false },
        { name: "ASP.NET Web Forms (legacy)", level: 72, highlighted: false },
        { name: "Azure DevOps and CI/CD", level: 70, highlighted: false },
        { name: "Electron.js and WinForms", level: 65, highlighted: false }
      ]
    },
    {
      id: "methodology",
      name: "Architecture and methodology",
      icon: "ShieldCheck",
      description: "Engineering standards, reusable design patterns, and agile methodologies",
      skills: [
        { name: "SOLID, DRY, KISS", level: 88, highlighted: true },
        { name: "Design Patterns (GoF)", level: 82, highlighted: true },
        { name: "Technical and API documentation", level: 82, highlighted: false },
        { name: "AI-assisted development", level: 82, highlighted: true },
        { name: "Agile, Scrum and Kanban", level: 80, highlighted: false }
      ]
    }
  ]
};

export const getSkillCategories = (lang = 'tr') => skillCategories[lang] || skillCategories.tr;
