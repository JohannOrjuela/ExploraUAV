export const portfolioModules = [
  {
    id: "software",
    number: "01",
    shortName: "SOFTWARE SYSTEMS",
    title: "Software Systems",
    code: "SYS.DEV",
    accent: "#5ef2ff",
    description:
      "Una selección de productos y experimentos donde aplico arquitectura de software, desarrollo full stack y análisis de rendimiento.",
    capabilities: [
      "Desarrollo full stack",
      "APIs REST",
      "Arquitectura de software",
      "Performance engineering",
    ],
    projects: [
      {
        id: "quickcourier",
        label: "LOGISTICS PLATFORM",
        title: "QuickCourier",
        status: "PUBLIC REPOSITORY",
        context: "TEAM PROJECT",
        image: "/images/portfolio/software/quickcourier.png",
        detail:
          "Plataforma logística para tiendas pequeñas que integra catálogo, pedidos, facturación y cálculo de envíos.",
        summary:
          "Sistema web orientado a la gestión de entregas urbanas. El backend expone una API REST segura y organiza las reglas de negocio para pedidos, productos, zonas, extras de envío y facturación.",
        highlights: [
          "Autenticación JWT y protección de endpoints",
          "Gestión de pedidos, productos y facturas",
          "Cálculo de tarifas y extras de envío",
          "API Keys, Swagger y entorno Docker",
        ],
        stack: ["Java 17", "Spring Boot", "PostgreSQL", "Docker", "REST", "HTML/CSS/JS"],
        repository: "https://github.com/InsoMars/QuickCourier",
      },
      {
        id: "performance-lab",
        label: "PERFORMANCE LAB",
        title: "Spring Performance Lab",
        status: "PUBLIC REPOSITORY",
        context: "ACADEMIC PROJECT",
        image: "/images/portfolio/software/performance-lab.png",
        detail:
          "Laboratorio que compara una API bloqueante con una implementación reactiva bajo distintos escenarios de carga.",
        summary:
          "Experimento de ingeniería de rendimiento sobre un catálogo de e-commerce. Contrasta Spring MVC con JPA frente a Spring WebFlux con R2DBC y analiza latencia, throughput, concurrencia y optimización de base de datos.",
        highlights: [
          "Implementaciones síncrona y reactiva",
          "Catálogo diseñado para 70.000 productos",
          "Escenarios de 100 a 5.000 usuarios",
          "Índices SQL y pruebas de carga con JMeter",
        ],
        stack: ["Java 17", "Spring Boot", "WebFlux", "JPA", "R2DBC", "PostgreSQL"],
        repository: "https://github.com/JohannOrjuela/Taller-de-rendimiento",
      },
      {
        id: "si-emprendimiento",
        label: "INTERNAL OPERATIONS",
        title: "SI Emprendimiento",
        status: "PRIVATE / IN DEVELOPMENT",
        context: "PERSONAL PRODUCT",
        image: "/images/portfolio/software/si-emprendimiento.png",
        detail:
          "CRM full stack para centralizar clientes y proyectos de un emprendimiento de automatizaciones n8n.",
        summary:
          "Producto interno en desarrollo para organizar la operación comercial. Actualmente permite administrar clientes, relacionarlos con proyectos y clasificar servicios de automatización, software personalizado y suscripción.",
        highlights: [
          "Autenticación JWT con renovación de sesión",
          "CRUD protegido de clientes y proyectos",
          "Relación cliente-proyecto con Prisma",
          "Arquitectura modular frontend y backend",
        ],
        stack: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "Zustand"],
        cardAction: "PRIVATE CASE",
      },
    ],
    telemetry: ["REACT", "SPRING", "TYPESCRIPT", "POSTGRESQL"],
  },
  {
    id: "automation",
    number: "02",
    shortName: "AUTOMATION CENTER",
    title: "Automation Center",
    code: "AUT.CTRL",
    accent: "#77ffb7",
    description:
      "Automatizaciones creadas para conectar canales, organizar operaciones y responder de forma automática a eventos reales.",
    capabilities: ["n8n", "Mensajería", "APIs", "Integraciones"],
    projects: [
      {
        id: "appointment-flow",
        label: "APPOINTMENT AUTOMATION",
        title: "Appointment Flow",
        status: "AUTOMATION PROJECT",
        context: "WORKFLOW SYSTEM",
        image: "/images/portfolio/automation/appointment-flow.png",
        detail:
          "Automatización de citas por WhatsApp y Telegram con agenda, confirmaciones y recordatorios.",
        summary:
          "Flujo de atención diseñado para coordinar citas desde canales de mensajería, registrar eventos en el calendario y mantener informadas a las personas mediante respuestas automáticas.",
        highlights: [
          "Atención por WhatsApp y Telegram",
          "Agenda automática de citas",
          "Confirmaciones programadas",
          "Recordatorios antes de cada evento",
        ],
        stack: ["n8n", "WhatsApp", "Telegram", "Google Calendar"],
        accessLabel: "WORKFLOW DOCUMENTATION",
      },
      {
        id: "stock-flow",
        label: "INVENTORY AUTOMATION",
        title: "StockFlow",
        status: "AUTOMATION PROJECT",
        context: "INTEGRATION SYSTEM",
        image: "/images/portfolio/automation/stock-flow.png",
        detail:
          "Automatización de inventarios con control de stock, alertas e integración entre sistemas.",
        summary:
          "Sistema de automatización orientado a sincronizar movimientos de inventario, consultar existencias y generar alertas cuando el stock requiere atención.",
        highlights: [
          "Control automático de existencias",
          "Alertas de niveles de stock",
          "Sincronización entre sistemas",
          "Persistencia y consulta de datos",
        ],
        stack: ["n8n", "PostgreSQL", "APIs"],
        accessLabel: "WORKFLOW DOCUMENTATION",
      },
      {
        id: "service-watch",
        label: "SERVICE MONITORING",
        title: "Service Watch",
        status: "AUTOMATION PROJECT",
        context: "MONITORING WORKFLOW",
        image: "/images/portfolio/automation/service-watch.png",
        detail:
          "Monitoreo periódico de servicios y APIs con alertas automáticas e historial de incidentes.",
        summary:
          "Flujo de observación que comprueba la disponibilidad de servicios, registra cada incidente y notifica por Telegram cuando detecta una respuesta inesperada.",
        highlights: [
          "Verificación periódica de disponibilidad",
          "Monitoreo de servicios y APIs",
          "Alertas automáticas por Telegram",
          "Historial de incidentes",
        ],
        stack: ["n8n", "Webhooks", "Telegram"],
        accessLabel: "WORKFLOW DOCUMENTATION",
      },
    ],
    telemetry: ["N8N", "APIS", "WEBHOOKS", "MESSAGING"],
  },
  {
    id: "games",
    number: "03",
    shortName: "GAME STUDIO",
    title: "Game Studio",
    code: "GME.LAB",
    accent: "#b98cff",
    description:
      "Desarrollo independiente donde programación, diseño de sistemas, concept art y pixel art construyen una misma experiencia.",
    capabilities: ["Godot", "GDScript", "Pixel art", "Game design"],
    projects: [
      {
        id: "electroswing",
        label: "INDIE ROGUE-LIKE",
        title: "ELECTROSWING",
        status: "IN DEVELOPMENT",
        context: "PERSONAL GAME",
        image: "/images/portfolio/games/electroswing.png",
        detail:
          "Rogue-like indie inspirado en la estética electro swing y el lenguaje visual del pixel art.",
        summary:
          "Videojuego independiente en desarrollo que combina progresión rogue-like, una identidad visual inspirada en el electro swing y sistemas construidos en Godot.",
        highlights: [
          "Concept art",
          "Diseños técnicos",
          "Diagramas de sistemas",
          "Capturas de desarrollo",
        ],
        stack: ["Godot", "GDScript", "Aseprite"],
        accessLabel: "DEV ARCHIVE",
      },
    ],
    telemetry: ["GODOT", "GDSCRIPT", "ASEPRITE", "ROGUE-LIKE"],
  },
  {
    id: "music",
    number: "04",
    shortName: "MUSIC LAB",
    title: "Music Lab",
    code: "AUD.WAVE",
    accent: "#ff8fc7",
    description:
      "Experiencias musicales que reúnen interpretación en vivo, bajo eléctrico, producción y exploración sonora.",
    capabilities: ["Bajo eléctrico", "Shows en vivo", "Covers", "Producción musical"],
    projects: [
      {
        id: "kriptonita",
        label: "LIVE PERFORMANCE",
        title: "Kriptonita",
        status: "LIVE EXPERIENCE",
        context: "BASS PLAYER",
        image: "/images/portfolio/music/kriptonita.png",
        detail:
          "Presentaciones en vivo como bajista, desde la preparación del repertorio hasta el escenario.",
        summary:
          "Experiencia musical construida alrededor del bajo eléctrico, el trabajo en banda y la preparación necesaria para llevar un repertorio completo a presentaciones en vivo.",
        highlights: [
          "Presentaciones como bajista",
          "Experiencia escénica",
          "Montaje de repertorios",
          "Ensayos y conciertos",
        ],
        stack: ["Electric Bass", "Live Performance", "Rehearsal", "Stage"],
        accessLabel: "PERFORMANCE ARCHIVE",
      },
      {
        id: "music-channel",
        label: "MUSIC CONTENT",
        title: "Music Channel",
        status: "CREATIVE PROJECT",
        context: "YOUTUBE CHANNEL",
        image: "/images/portfolio/music/music-channel.png",
        detail:
          "Canal dedicado a covers, loops, producción musical y pequeños experimentos sonoros.",
        summary:
          "Espacio audiovisual para documentar interpretaciones, construir loops y explorar ideas de producción musical a través de formatos breves y sesiones creativas.",
        highlights: [
          "Covers",
          "Creación de loops",
          "Producción musical",
          "Experimentos sonoros",
        ],
        stack: ["YouTube", "Bass", "Loops", "Music Production"],
        accessLabel: "CHANNEL LINK PENDING",
      },
    ],
    telemetry: ["BASS", "LIVE", "LOOPS", "PRODUCTION"],
  },
  {
    id: "research",
    number: "05",
    shortName: "RESEARCH LAB",
    title: "Research Lab",
    code: "RND.NODE",
    accent: "#ffd166",
    description:
      "Laboratorios personales para experimentar con Linux, electrónica, redes y servicios autoalojados.",
    capabilities: ["Linux", "IoT", "Docker", "Infraestructura"],
    projects: [
      {
        id: "fedora-lab",
        label: "LINUX WORKSTATION",
        title: "Fedora Lab",
        status: "PERSONAL LAB",
        context: "SYSTEM EXPLORATION",
        image: "/images/portfolio/research/fedora-lab.png",
        detail:
          "Entorno de exploración Linux enfocado en Bash, personalización y administración de sistemas.",
        summary:
          "Laboratorio cotidiano para comprender y adaptar el sistema operativo, automatizar tareas desde la terminal y profundizar en herramientas de administración Linux.",
        highlights: [
          "Exploración de Fedora y Linux",
          "Scripts y flujos con Bash",
          "Personalización del entorno",
          "Administración de sistemas",
        ],
        stack: ["Fedora", "Linux", "Bash", "System Administration"],
        accessLabel: "LAB NOTES",
      },
      {
        id: "esp32-lab",
        label: "IOT EXPERIMENTS",
        title: "ESP32 Lab",
        status: "PERSONAL LAB",
        context: "ELECTRONICS",
        image: "/images/portfolio/research/esp32-lab.png",
        detail:
          "Pruebas de IoT, sensores, automatización y electrónica construidas alrededor de ESP32.",
        summary:
          "Espacio de experimentación para conectar sensores, programar dispositivos y convertir señales físicas en acciones automatizadas.",
        highlights: [
          "Prototipos IoT",
          "Lectura e integración de sensores",
          "Automatización física",
          "Experimentación electrónica",
        ],
        stack: ["ESP32", "IoT", "Sensors", "Electronics"],
        accessLabel: "LAB NOTES",
      },
      {
        id: "raspberry-server",
        label: "SELF-HOSTED INFRA",
        title: "Raspberry Server",
        status: "HOME LAB",
        context: "SELF-HOSTING",
        image: "/images/portfolio/research/raspberry-server.png",
        detail:
          "Home server para experimentar con Docker, redes y servicios autoalojados.",
        summary:
          "Infraestructura doméstica construida sobre Raspberry Pi para desplegar contenedores, aprender sobre redes y mantener servicios propios.",
        highlights: [
          "Home server",
          "Servicios con Docker",
          "Configuración de redes",
          "Aplicaciones autoalojadas",
        ],
        stack: ["Raspberry Pi", "Docker", "Networks", "Self-hosting"],
        accessLabel: "SERVER NOTES",
      },
    ],
    telemetry: ["FEDORA", "ESP32", "RASPBERRY PI", "DOCKER"],
  },
];
