import type { ImageMetadata } from 'astro';
import { z } from 'zod';
import profileImg from './assets/images/profile.png';
import openalexImg from './assets/images/openalex-research-dashboard.png';
import cryptoImg from './assets/images/crypto-monitor.png';
import rareEarthImg from './assets/images/rare-earth.png';
import exchangeRateImg from './assets/images/exchange-rate.png';
import rseriesImg from './assets/images/rseries.png';
import portfolioImg from './assets/images/portfolio-v1.png';
import fullStackAgentImg from './assets/images/fullstack-agent.png';

// Site base path ("/portafolio_v1/"), always ending in a slash.
export const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    description?: string;
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: ImageMetadata;
}

export const navigation = {
    es: [
        { label: 'Sobre mí', href: '#about' },
        { label: 'Experiencia', href: '#experience' },
        { label: 'Educación', href: '#education' },
        { label: 'Habilidades', href: '#skills' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Contacto', href: '#contact' },
    ],
    en: [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Education', href: '#education' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ],
};

export const personalInfo = {
    name: 'Rodrigo Norabuena',
    title: 'Economista',
    description: 'Economista que transforma datos en decisiones, procesos y soluciones con impacto',
    profileImage: profileImg,
    cv: `${base}cv.pdf`,
    about: [
        'Economista orientado a la ciencia e ingeniería de datos, con experiencia en investigación aplicada, análisis cuantitativo y desarrollo de sistemas de información. He diseñado pipelines ETL, modelos de bases de datos e indicadores institucionales para fortalecer la gestión del conocimiento y la productividad académica.',
        'Me apasiona aprender nuevas tecnologías, construir soluciones reproducibles y conectar la analítica, la automatización y la economía para generar conocimiento útil e impulsar la innovación. Creo en el valor de los datos bien estructurados, la documentación transparente y la creatividad aplicada a la resolución de problemas reales.',
    ],
    contact: {
        email: 'rodrigoandres.norabuena@gmail.com',
        github: 'https://github.com/rodnm',
        linkedin: 'https://linkedin.com/in/rodnm',
    },
};

export const experiences: Experience[] = [
    {
        title: 'Practicante Profesional de Investigación',
        company: 'CENTRUM PUCP',
        period: '2025 - Presente',
        description:
            'Diseñé e implementé modelos de bases de datos relacionales para centralizar y analizar la producción académica, integrando datos de Scopus y Web of Science.\nDesarrollé pipelines ETL en Python para la limpieza, estandarización y carga automatizada en SQL Server, asegurando flujos confiables para dashboards institucionales en Power BI.\n\nConstruí indicadores de productividad en investigación alineados con estándares internacionales (AACSB, EQUIS, BGA, AMBA) para monitorear desempeño académico.\n\nDiseñé e implementé asistentes de voz con IA generativa y modelos de lenguaje (LLMs) para automatizar procesos de evaluación en programas de posgrado.\n\nElaboré documentación técnica reproducible con Markdown y Quarto, fortaleciendo la trazabilidad, estandarización y transferencia de conocimiento dentro del equipo.',
    },
];

export interface SkillCategory {
    category: string;
    skills: string[];
}

export const education: Education[] = [
    {
        degree: 'Bachiller en Economía',
        institution: 'Pontificia Universidad Católica del Perú',
        period: '2024',
        description: 'Especialización en métodos cuantitativos y economía aplicada.',
    },
];

export const skills: SkillCategory[] = [
    {
        category: 'Lenguajes de Programación',
        skills: ['Python', 'R', 'SQL', 'Java', 'Matlab', 'Stata'],
    },
    {
        category: 'Datos y Análisis',
        skills: [
            'Análisis estadístico',
            'Análisis econométrico',
            'Power BI',
            'Dashboards',
            'Excel (Macros)',
        ],
    },
    {
        category: 'Ingeniería de IA',
        skills: ['Machine Learning', 'IA Generativa / LLMs', 'Agentes IA', 'Gradio'],
    },
    {
        category: 'Ingeniería de Datos',
        skills: ['ETL/ELT', 'PySpark', 'Airflow', 'Modelado de datos', 'SQL Server'],
    },
    {
        category: 'Infraestructura & Cloud',
        skills: ['AWS', 'GCP', 'Azure'],
    },
    {
        category: 'Herramientas Adicionales',
        skills: ['Git', 'GitHub', 'ArcGIS', 'Markdown/Quarto', 'Canva'],
    },
];

export const projects: Project[] = [
    {
        title: 'Full Stack Code Agent',
        description:
            'Agente de IA asíncrono en Python que interactúa por chat (Gradio) y programa aplicaciones web de forma autónoma. Emplea modelos fundacionales (Gemini 2.5 Flash) e implementa compresión de contexto en tiempo de ejecución.',
        tags: ['Python', 'Gradio', 'LLMs', 'React', 'Astro', 'TypeScript'],
        link: 'https://github.com/rodnm/FullStackAgent',
        image: fullStackAgentImg,
    },
    {
        title: 'OpenAlex Research Dashboard',
        description:
            'Una canalización ETL modular y un panel interactivo para analizar datos bibliométricos de OpenAlex. Este proyecto rastrea tendencias de investigación, autores destacados, instituciones y obras influyentes en múltiples campos de estudio (p. ej., inteligencia artificial, economía y física).',
        tags: ['Python', 'Docker', 'Streamlit', 'Apache Airflow', 'Git', 'GitHub'],
        link: 'https://github.com/rodnm/openalex-research-dashboard',
        image: openalexImg,
    },
    {
        title: 'Crypto Monitor',
        description:
            'Este proyecto es un monitor de criptomonedas en tiempo real que obtiene datos de la API de CoinGecko, los procesa y los visualiza en un panel interactivo de Streamlit.',
        tags: ['Python', 'Streamlit'],
        link: 'https://github.com/rodnm/crypto-monitor',
        image: cryptoImg,
    },
    {
        title: 'Análisis de comercio mundial de tierras raras',
        description:
            'Dashboard que presenta un análisis del comercio mundial de tierras raras para el periodo 1995-2022. La fuente empleada son los datos de Observatory of Economic Complexity (OEC).',
        tags: ['R', 'Power BI'],
        link: 'https://github.com/rodnm/proyect_powebi_rare-earth',
        image: rareEarthImg,
    },
    {
        title: 'BCRP: Tasa de cambio',
        description:
            'Web scrapping de datos que se encuentran en el repositorio de Series Estadísticas del BCRP. Estos datos son las series de la Tasa de cambio del dólar - Venta para cualquier año.',
        tags: ['R'],
        link: 'https://github.com/rodnm/bcrp-tasa-de-cambio',
        image: exchangeRateImg,
    },
    {
        title: 'Rseries',
        description:
            'Este paquete contiene paletas de belleza para personalizar tramas con el estilo de series de plataformas como Netflix, Amazon Prime o TV local de países de Latinoamérica.',
        tags: ['R', 'Git', 'GitHub'],
        link: 'https://github.com/diognes/Rseries',
        image: rseriesImg,
    },
    {
        title: 'Portfolio V1',
        description: 'Primera versión de mi portafolio personal usando Astro.',
        tags: ['HTML', 'Astro', 'Tailwind CSS', 'TypeScript', 'React', 'Git', 'GitHub'],
        link: 'https://github.com/rodnm/portfolio_v1',
        image: portfolioImg,
    },
];

export interface PortfolioData {
    personalInfo: typeof personalInfo;
    experiences: Experience[];
    education: Education[];
    skills: SkillCategory[];
    projects: Project[];
}

export const spanishData: PortfolioData = {
    personalInfo: personalInfo,
    experiences: experiences,
    education: education,
    skills: skills,
    projects: projects,
};

export const englishData: PortfolioData = {
    personalInfo: {
        ...personalInfo,
        title: 'Economist',
        description:
            'Economist transforming data into decisions, processes, and impactful solutions',
        about: [
            'Economist oriented towards data science and engineering, with experience in applied research, quantitative analysis, and information systems development. I have designed ETL pipelines, database models, and institutional indicators to strengthen knowledge management and academic productivity.',
            'I am passionate about learning new technologies, building reproducible solutions, and connecting analytics, automation, and economics to generate useful knowledge and drive innovation. I believe in the value of well-structured data, transparent documentation, and creativity applied to solving real problems.',
        ],
    },
    experiences: [
        {
            title: 'Professional Research Intern',
            company: 'CENTRUM PUCP',
            period: '2025 - Present',
            description:
                'Designed and implemented relational database models to centralize and analyze academic production, integrating data from Scopus and Web of Science.\nDeveloped ETL pipelines in Python for cleaning, standardization, and automated loading into SQL Server, ensuring reliable flows for institutional dashboards in Power BI.\n\nBuilt research productivity indicators aligned with international standards (AACSB, EQUIS, BGA, AMBA) to monitor academic performance.\n\nDesigned and implemented voice assistants with generative AI and language models (LLMs) to automate evaluation processes in postgraduate programs.\n\nCreated reproducible technical documentation with Markdown and Quarto, strengthening traceability, standardization, and knowledge transfer within the team.',
        },
    ],
    education: [
        {
            degree: 'Bachelor in Economics',
            institution: 'Pontifical Catholic University of Peru',
            period: '2024',
            description: 'Specialization in quantitative methods and applied economics.',
        },
    ],
    skills: [
        {
            category: 'Programming Languages',
            skills: ['Python', 'R', 'SQL', 'Java', 'Matlab', 'Stata'],
        },
        {
            category: 'Data & Analysis',
            skills: [
                'Statistical/Econometric Analysis',
                'Power BI',
                'Dashboards',
                'Excel (Macros)',
            ],
        },
        {
            category: 'AI Engineering',
            skills: ['Machine Learning', 'Generative AI / LLMs', 'AI Agents', 'Gradio'],
        },
        {
            category: 'Data Engineering',
            skills: ['ETL/ELT', 'PySpark', 'Airflow', 'Data Modeling', 'SQL Server'],
        },
        {
            category: 'Infrastructure & Cloud',
            skills: ['AWS', 'GCP', 'Azure'],
        },
        {
            category: 'Additional Tools',
            skills: ['Git', 'GitHub', 'ArcGIS', 'Markdown/Quarto', 'Canva'],
        },
    ],
    projects: [
        {
            title: 'Full Stack Code Agent',
            description:
                'Asynchronous AI agent in Python that interacts via chat (Gradio) and programs web applications autonomously. It uses foundation models (Gemini 2.5 Flash) and implements runtime context compression.',
            tags: ['Python', 'Gradio', 'LLMs', 'React', 'Astro', 'TypeScript'],
            link: 'https://github.com/rodnm/FullStackAgent',
            image: fullStackAgentImg,
        },
        {
            title: 'OpenAlex Research Dashboard',
            description:
                'A modular ETL pipeline and interactive dashboard for analyzing bibliometric data from OpenAlex. This project tracks research trends, top authors, institutions, and influential works across multiple fields of study (e.g., Artificial Intelligence, Economics, Physics).',
            tags: ['Python', 'Docker', 'Streamlit', 'Apache Airflow', 'Git', 'GitHub'],
            link: 'https://github.com/rodnm/openalex-research-dashboard',
            image: openalexImg,
        },
        {
            title: 'Crypto Monitor',
            description:
                'This project is a real-time cryptocurrency monitor that fetches data from the CoinGecko API, processes it, and visualizes it in an interactive Streamlit dashboard.',
            tags: ['Python', 'Streamlit'],
            link: 'https://github.com/rodnm/crypto-monitor',
            image: cryptoImg,
        },
        {
            title: 'Global Rare Earth Trade Analysis',
            description:
                'Dashboard presenting an analysis of global rare earth trade for the period 1995-2022. The source used is data from the Observatory of Economic Complexity (OEC).',
            tags: ['R', 'Power BI'],
            link: 'https://github.com/rodnm/proyect_powebi_rare-earth',
            image: rareEarthImg,
        },
        {
            title: 'BCRP: Exchange Rate',
            description:
                'Web scraping of data found in the BCRP Statistical Series repository. These data are the Dollar Exchange Rate - Sale series for any year.',
            tags: ['R'],
            link: 'https://github.com/rodnm/bcrp-tasa-de-cambio',
            image: exchangeRateImg,
        },
        {
            title: 'Rseries',
            description:
                'This package contains beauty palettes to personalize plots with the style of series from platforms like Netflix, Amazon Prime, or local TV from Latin American Countries.',
            tags: ['R', 'Git', 'GitHub'],
            link: 'https://github.com/diognes/Rseries',
            image: rseriesImg,
        },
        {
            title: 'Portfolio V1',
            description: 'First version of my personal portfolio using Astro.',
            tags: ['HTML', 'Astro', 'Tailwind CSS', 'TypeScript', 'React', 'Git', 'GitHub'],
            link: 'https://github.com/rodnm/portfolio_v1',
            image: portfolioImg,
        },
    ],
};

// Validation Schemas
const ImageMetadataSchema = z.object({
    src: z.string(),
    width: z.number(),
    height: z.number(),
    format: z.string(),
});

const ExperienceSchema = z.object({
    title: z.string(),
    company: z.string(),
    period: z.string(),
    description: z.string(),
});

const EducationSchema = z.object({
    degree: z.string(),
    institution: z.string(),
    period: z.string(),
    description: z.string().optional(),
});

const ProjectSchema = z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    link: z.string().url(),
    image: ImageMetadataSchema,
});

const SkillCategorySchema = z.object({
    category: z.string(),
    skills: z.array(z.string()),
});

const PersonalInfoSchema = z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    profileImage: ImageMetadataSchema,
    cv: z.string(),
    about: z.array(z.string()),
    contact: z.object({
        email: z.string().email(),
        github: z.string().url(),
        linkedin: z.string().url(),
    }),
});

const PortfolioDataSchema = z.object({
    personalInfo: PersonalInfoSchema,
    experiences: z.array(ExperienceSchema),
    education: z.array(EducationSchema),
    skills: z.array(SkillCategorySchema),
    projects: z.array(ProjectSchema),
});

// Validate data
try {
    PortfolioDataSchema.parse(spanishData);
    PortfolioDataSchema.parse(englishData);
    console.log('✅ Configuration valid');
} catch (error) {
    console.error('❌ Configuration invalid:', error);
}
