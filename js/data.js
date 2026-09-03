/**
 * Single source of truth for all bilingual site content.
 * Add or edit copy here only, HTML and render code never hardcode strings.
 */
export const content = {
  es: {
    meta: {
      description:
        'CV personal de Guillermo Alejandro "Alex" Díaz Badillo, Arquitecto de Ciberseguridad e Ingeniero de Software. Linux, videojuegos y anime incluidos.',
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      education: 'Educación',
      contact: 'Contacto',
      skipToContent: 'Saltar al contenido',
      openMenu: 'Abrir menú',
      toggleTheme: 'Cambiar tema',
      switchLang: 'Switch to English',
    },
    hero: {
      eyebrow: '$ whoami',
      title: '¡Hola! Soy Alex',
      subtitle: 'Arquitecto de Ciberseguridad & Ingeniero de Software',
      tagline:
        'Diseño arquitecturas seguras para sistemas críticos, llevo más de una década escribiendo código, y en mis ratos libres me la vivo entre Linux, videojuegos y anime.',
      ctaPrimary: 'Descargar CV',
      ctaSecondary: 'Contactar',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Detrás del código',
      command1: 'whoami',
      output1: 'Guillermo Alejandro "Alex" Díaz Badillo',
      command2: 'cat perfil.txt',
      output2:
        'Arquitecto de Ciberseguridad en Honeywell, donde diseño la seguridad de un sistema de control industrial (Sistemas SCADA, Controladores PLC y DCS) al igual que productos IoT conectados. Antes fui desarrollador Full Stack en donde implementé algoritmos de ruteo y desarrollé sistemas de rastreo GPS. Estudié Ingeniería en Desarrollo de Software y curso una Maestría en Ciberseguridad.',
      command3: 'cat intereses.txt',
      interests: [
        'Videojuegos',
        'Anime',
        'Programación',
        'Tecnología',
        'Usuario de Linux/Unix de tiempo completo',
        'Dibujo',
        'Viajar',
      ],
      command4: 'echo $STATUS',
      output4: 'Abierto a retos interesantes de seguridad y desarrollo de software.',
    },
    experience: {
      title: 'Experiencia',
      eyebrow: 'Trayectoria',
      items: [
        {
          role: 'Arquitecto Avanzado de Ciberseguridad',
          company: 'Honeywell, Inc.',
          period: 'Abr. 2024 - Presente',
          location: 'Ciudad de México',
          bullets: [
            'Arquitecto superior de un sistema de control industrial, garantizando consistencia de seguridad entre releases con múltiples componentes.',
            'Responsable de dos líneas de negocio: utilidades conectadas para productos de medición inteligente (SETS) y sistemas de control industrial (HPS).',
            'Aplico modelado de amenazas y evaluación de riesgos para identificar vulnerabilidades y diseñar arquitecturas resilientes.',
            'Aseguro el cumplimiento de regulaciones como GDPR y EU-CRA en sistemas SCADA, Controladores PLC/DCS, aplicaciones móviles, servicios web y plataformas cloud.',
            'Colaboro con equipos de ingeniería distribuidos en México, Estados Unidos, India y China.',
          ],
        },
        {
          role: 'Desarrollador de Software',
          company: 'UNIGIS S.A.',
          period: 'May. 2019 - Abr. 2024',
          location: 'Atizapán, Edo. Méx.',
          bullets: [
            'Implementé algoritmos y heurísticas de ruteo en C++ como parte del equipo de backend.',
            'Desarrollé integraciones externas: como webhooks, reportes en ASP.NET y middleware para la extracción de datos en archivos CSV/EDIFACT.',
            'Manejo de eventos y comandos GPS con C#.',
            'Construí y optimicé dashboards con SQL, reduciendo tiempos de consulta.',
            'Desarrollo Frontend y Backend de los módulos de Routing, Tracking, Fleet y GPS Tracker con AngularJS, C# y Java (Android/Escritorio).',
          ],
        },
        {
          role: 'Voluntariado - Servicio Social',
          company: 'Fundación Tláloc',
          period: 'Ene. 2018 - May. 2018',
          location: 'Toluca, Edo. Méx.',
          bullets: [
            'Líder de proyecto e ingeniero de requerimientos para una app móvil (Android/iOS) que acercó a la fundación con sus usuarios.',
            'Configuré un servidor basado en GNU/Linux destinado al resguardo de información y la distribución de archivos en la red LAN de la fundación.',
          ],
        },
        {
          role: 'Programador y Soporte Técnico',
          company: 'FROG S.A. de C.V.',
          period: 'Jun. 2013 - Ago. 2014',
          location: 'Ciudad de México',
          bullets: [
            'Desarrollo y despliegue del asistente de instalación de Frog aFrame 5.6 y Frog Skywire para Dos Pinos (Costa Rica).',
            'Generador de claves de serie con C#, MySQL, Windows Server 2008 R2 y GNU/Linux.',
            'Soporte técnico como asistente en el Centro de Atención al Usuario (CAU).',
          ],
        },
      ],
    },
    skills: {
      title: 'Habilidades',
      eyebrow: '$ ls -la',
      categories: [
        {
          name: 'Habilidades blandas',
          items: ['Liderazgo', 'Creatividad', 'Autodidacta', 'Empatía', 'Trabajo en equipo'],
        },
        {
          name: 'Seguridad e ingeniería',
          items: [
            'Modelado de amenazas',
            'Gestión de riesgos',
            'Arquitectura de software',
            'UML',
            'Empaquetado Red Hat/Debian',
            'Virtualización (VMware ESXi, KVM)',
            'Ingeniería inversa',
            'Administración de respaldos',
            'Administración de servidores',
            'SCRUM',
            'Gestión de proyectos',
            'Aseguramiento de calidad',
            'Desarrollo y diseño de videojuegos',
          ],
        },
        {
          name: 'Lenguajes de programación',
          items: ['C', 'C++', 'C#', 'Java', 'JavaScript', 'Python', 'Ruby', 'Rust'],
        },
        {
          name: 'Web y scripting',
          items: ['HTML', 'CSS', 'XML', 'Bash', 'SQL'],
        },
        {
          name: 'Sistemas operativos',
          items: ['Windows', 'macOS', 'GNU/Linux', 'iOS', 'Android', 'FreeBSD', 'OpenBSD', 'Solaris'],
        },
        {
          name: 'Herramientas',
          items: ['Docker', 'Git', 'Unity', 'SVN', 'NSIS', 'Advanced Installer'],
        },
        {
          name: 'Idiomas',
          items: ['Español - Nativo', 'Inglés - Avanzado'],
        },
      ],
    },
    education: {
      title: 'Educación',
      eyebrow: 'Formación',
      degrees: [
        {
          school: 'Universidad Tecmilenio',
          program: 'Ing. en Desarrollo de Software',
          period: 'Ago. 2016 - Ago. 2020',
          location: 'Campus Toluca',
          description:
            'Presidente y cofundador de GeniusWare, grupo estudiantil de conferencias y cursos para la carrera.',
        },
        {
          school: 'Universidad UNIR',
          program: 'Maestría en Ciberseguridad',
          period: 'Feb. 2026 - Presente',
          location: 'Campus en línea',
          description:
            'Legislación y marcos normativos de ciberseguridad, técnicas éticas de acceso, modelado seguro de redes, forense digital e ISO 27001.',
        },
      ],
      certsTitle: 'Certificaciones',
      certs: [
        'Software Security Practitioner - Software Architect',
        'FIRST CVSS v4.0 Certificate',
        'Certificación Buzan en Mapas Mentales',
        'Management Skills por CDG+',
        'Scrum Fundamentals Certified',
        'Audio Encoding: Beyond MP3',
        'Six Sigma Yellow Belt',
      ],
    },
    contact: {
      title: 'Hablemos',
      eyebrow: 'Contacto',
      text: '¿Tienes un proyecto interesante o un reto de seguridad? Escríbeme.',
      emailLabel: 'Correo',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      backToTop: 'Volver arriba',
    },
    easterEgg: {
      hint: 'Código Konami desbloqueado',
      title: '¡Encontraste un secreto!',
      message:
        'Mi Pokémon favorito es Espeon: psíquico, leal, y de un lila que combina sospechosamente bien con los colores de este sitio.',
      close: 'Cerrar',
      consoleGreeting: 'Hola, veo que revisas la consola. ¡Tú muy bien!',
      consoleHint: 'Psst... prueba el código Konami en cualquier parte del sitio: ↑ ↑ ↓ ↓ ← → ← → B A',
    },
    mascot: {
      label: 'Saluda a la mascota',
      quips: [
        '¡Sigue así! 💜',
        'Recuerda: siempre usa 2FA.',
        'Té + código = 🖤',
        'Linux forever.',
      ],
    },
  },

  en: {
    meta: {
      description:
        'Personal CV of Guillermo Alejandro "Alex" Díaz Badillo, Cybersecurity Architect and Software Engineer. Linux, video games and anime included.',
    },
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
      skipToContent: 'Skip to content',
      openMenu: 'Open menu',
      toggleTheme: 'Toggle theme',
      switchLang: 'Cambiar a Español',
    },
    hero: {
      eyebrow: '$ whoami',
      title: "Hi! I'm Alex",
      subtitle: 'Cybersecurity Architect & Software Engineer',
      tagline:
        "I design secure architectures for critical infrastructure, I've been writing code for over a decade, and in my free time you'll find me somewhere between Linux, video games, and anime.",
      ctaPrimary: 'Download CV',
      ctaSecondary: 'Get in touch',
    },
    about: {
      eyebrow: 'About me',
      title: 'Behind the code',
      command1: 'whoami',
      output1: 'Guillermo Alejandro "Alex" Díaz Badillo',
      command2: 'cat profile.txt',
      output2:
        'Cybersecurity Architect at Honeywell, where I design the security of an industrial control system including SCADA systems, PLCs, and DCS controllers as well as connected IoT products. Before moving into cybersecurity, I worked as a Full Stack Developer, implementing routing algorithms and developing GPS tracking systems. I hold a B.S. in Software Engineering and I am currently pursuing a M.S. in Cybersecurity.',
      command3: 'cat interests.txt',
      interests: [
        'Video games',
        'Anime',
        'Programming',
        'Technology',
        'Full-time Linux/Unix user',
        'Drawing',
        'Traveling',
      ],
      command4: 'echo $STATUS',
      output4: 'Open to interesting security challenges and software development.',
    },
    experience: {
      title: 'Experience',
      eyebrow: 'Track record',
      items: [
        {
          role: 'Advanced Cybersecurity Architect',
          company: 'Honeywell, Inc.',
          period: 'Apr 2024 - Present',
          location: 'Mexico City',
          bullets: [
            'Main architect for an industrial control system, ensuring security consistency across releases involving multiple components.',
            'Responsible for two business lines: connected utilities for smart metering products and industrial control systems (HPS)',
            'I apply threat modeling and risk assessment to proactively identify vulnerabilities and design resilient architectures.',
            'Ensure GDPR and EU Cyber Resilience Act (CRA) compliance across SCADA systems, PLCs, and DCS controllers, as well as mobile apps, web services, and cloud platforms.',
            'Collaborate with engineering teams distributed across Mexico, the United States, India, and China.',
          ],
        },
        {
          role: 'Software Developer',
          company: 'UNIGIS S.A.',
          period: 'May 2019 - Apr 2024',
          location: 'Atizapán, Mexico',
          bullets: [
            'I implemented routing algorithms and heuristics in C++ as part of the backend team.',
            'Built external integrations, including webhooks, ASP.NET reports, and middleware for extracting data from CSV and EDIFACT files.',
            'Handled GPS events and commands with C#.',
            'Built and optimized SQL dashboards, cutting down query times.',
            'Developed Frontend and Backend for Routing, Tracking, Fleet and GPS Tracker modules with AngularJS, C# and Java (Android/Desktop).',
          ],
        },
        {
          role: 'Volunteer - Social Service',
          company: 'Fundación Tláloc',
          period: 'Jan 2018 - May 2018',
          location: 'Toluca, Mexico',
          bullets: [
            'Project leader and requirements engineer for a mobile app (Android/iOS) connecting the foundation with its users.',
            'Set up a GNU/Linux file server for backup and file sharing across the foundation\'s LAN.',
          ],
        },
        {
          role: 'Programmer & Tech Support',
          company: 'FROG S.A. de C.V.',
          period: 'Jun 2013 - Aug 2014',
          location: 'Mexico City',
          bullets: [
            'Built and deployed the installer wizard for Frog aFrame 5.6 and Frog Skywire for Dos Pinos (Costa Rica).',
            'Built a serial key generator with C#, MySQL, Windows Server 2008 R2 and GNU/Linux.',
            'Provided technical support as a User Service Center (USC) assistant.',
          ],
        },
      ],
    },
    skills: {
      title: 'Skills',
      eyebrow: '$ ls -la',
      categories: [
        {
          name: 'Soft skills',
          items: ['Leadership', 'Creativity', 'Self-taught', 'Empathy', 'Teamwork'],
        },
        {
          name: 'Security & engineering',
          items: [
            'Threat modeling',
            'Risk management',
            'Software architecture',
            'UML',
            'Red Hat/Debian packaging',
            'Virtualization (VMware ESXi, KVM)',
            'Reverse engineering',
            'Backup administration',
            'Server Administration',
            'SCRUM',
            'Project management',
            'Quality assurance',
            'Game development and design',
          ],
        },
        {
          name: 'Programming languages',
          items: ['C', 'C++', 'C#', 'Java', 'JavaScript', 'Python', 'Ruby', 'Rust'],
        },
        {
          name: 'Web & scripting',
          items: ['HTML', 'CSS', 'XML', 'Bash', 'SQL'],
        },
        {
          name: 'Operating systems',
          items: ['Windows', 'macOS', 'GNU/Linux', 'iOS', 'Android', 'FreeBSD', 'OpenBSD', 'Solaris'],
        },
        {
          name: 'Tools',
          items: ['Docker', 'Git', 'Unity', 'SVN', 'NSIS', 'Advanced Installer'],
        },
        {
          name: 'Languages',
          items: ['Spanish - Native', 'English - Advanced'],
        },
      ],
    },
    education: {
      title: 'Education',
      eyebrow: 'Background',
      degrees: [
        {
          school: 'Universidad Tecmilenio',
          program: 'B.S. Software Engineering',
          period: 'Aug 2016 - Aug 2020',
          location: 'Toluca Campus',
          description:
            'President and co-founder of GeniusWare, a student group running conferences and courses for the program.',
        },
        {
          school: 'Universidad UNIR',
          program: 'M.S. in Cybersecurity',
          period: 'Feb 2026 - Present',
          location: 'Online Campus',
          description:
            'Cybersecurity law and regulatory frameworks, ethical access techniques, secure network modeling, digital forensics, and ISO 27001.',
        },
      ],
      certsTitle: 'Certifications',
      certs: [
        'Software Security Practitioner - Software Architect',
        'FIRST CVSS v4.0 Certificate',
        'Buzan Certification in Mind Mapping',
        'Management Skills by CDG+',
        'Scrum Fundamentals Certified',
        'Audio Encoding: Beyond MP3',
        'Six Sigma Yellow Belt',
      ],
    },
    contact: {
      title: "Let's talk",
      eyebrow: 'Contact',
      text: 'Got an interesting project or a security challenge? Reach out.',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
    easterEgg: {
      hint: 'Konami code unlocked',
      title: 'You found a secret!',
      message:
        'My favorite Pokémon is Espeon: psychic, loyal, and suspiciously the same shade of lilac as this site.',
      close: 'Close',
      consoleGreeting: 'Hey, checking the console I see. I like you!',
      consoleHint: 'Psst... try the Konami code anywhere on this site: ↑ ↑ ↓ ↓ ← → ← → B A',
    },
    mascot: {
      label: 'Say hi to the mascot',
      quips: [
        'Keep going! 💜',
        'Remember: always use 2FA.',
        'Tea + code = 🖤',
        'Linux forever.',
      ],
    },
  },
};

export const SUPPORTED_LANGS = ['es', 'en'];
export const DEFAULT_LANG = 'es';
