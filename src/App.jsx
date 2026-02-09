import React, { useEffect, useState } from "react";
import {
  siApachespark,
  siDatabricks,
  siDbt,
  siGooglecloud,
  siGithub,
  siLinkedin,
  siNumpy,
  siPandas,
  siPython,
  siQlik,
  siScikitlearn,
  siSnowflake,
  siTableau,
  siTalend,
  siTensorflow,
  siPytorch,
} from "simple-icons"; // Note: siMicrosoftazure and siPowerbi are not exported by simple-icons, using fallback logos instead

const profile = {
  name: "Mohammed ELHOUARY",
  role: "Élève‑ingénieur ISIMA — Data Engineering & BI",
  summary:
    "Spécialisé en Data Engineering & BI — je conçois pipelines cloud et dashboards pour faciliter la prise de décision.",
  location: "Basé à Clermont‑Ferrand, France",
  availability: "Recherche stage PFE — disponible Avril 2026",
  email: "hoirymohamed7@gmail.com",
  phone: "+33 7 71 24 46 39",
  linkedin: "https://linkedin.com/in/mohammed-elhouary-9878721b4",
  github: "https://github.com/Mojytgf",
  photo: "/photo.jpg",
};

const skills = [
  {
    group: "Analyse & DataViz",
    items: [
      "Power BI",
      "Tableau",
      "Qlik Sense",
      "QlikView",
      "Excel avancé",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    group: "Data Processing",
    items: ["Python (Pandas, NumPy)", "ETL/ELT", "Talend", "dbt"],
  },
  {
    group: "Data Science (bases)",
    items: ["scikit-learn", "PyTorch", "TensorFlow"],
  },
  {
    group: "Big Data & Cloud",
    items: ["Spark", "Databricks", "Snowflake", "GCP", "Azure"],
  },
];

const experiences = [
  {
    role: "Stage Analyste BI | Qlik Cloud",
    company: "Textilot",
    period: "Avr. 2025 - Août 2025",
    logo: "/logo-textilot.png",
    description: "Migration complexe d'une solution BI legacy (Qlik View on-premise) vers une architecture cloud moderne (Qlik Sense Cloud). Refonte complète des dashboards avec optimisation des performances et de l'UX.",
    mainTechs: ["qlik"],
    phases: [
      {
        title: "Analyse & Audit",
        emoji: "🔍",
        duration: "2 semaines",
        tasks: [
          "Audit de l'infrastructure Qlik View existante (20+ dashboards)",
          "Documentation des applications, variables, et connexions de données",
          "Identification des dépendances métier et des performances critiques",
          "Définition de la stratégie de migration pas à pas",
        ],
        tools: ["qlik", "python"],
      },
      {
        title: "Infrastructure Cloud",
        emoji: "☁️",
        duration: "3 semaines",
        tasks: [
          "Configuration de l'environnement Qlik Sense Cloud et des conteneurs",
          "Mise en place des connexions de données vers les sources (SQL, APIs)",
          "Configuration de la gouvernance Qlik Sense Cloud, rôles et permissions",
          "Test de stabilité et de performance de l'infrastructure",
        ],
        tools: ["qlik", "microsoftazure", "snowflake"],
      },
      {
        title: "Migration & Refonte",
        emoji: "🔄",
        duration: "6 semaines",
        tasks: [
          "Recréation des applications Qlik Sense avec amélioration UX/UI",
          "Optimisation des modèles de données et des calculs",
          "Validation des KPIs et mesures par rapport aux dashboards Qlik View",
          "Tests Excel VBA et requêtes SQL pour assurer la conformité des calculs",
        ],
        tools: ["qlik", "python", "pandas"],
      },
      {
        title: "Accompagnement Utilisateurs",
        emoji: "👥",
        duration: "2 semaines",
        tasks: [
          "Formation des utilisateurs sur l'interface Qlik Sense Cloud",
          "Documentation des procédures de navigation et d'utilisation",
          "Support et ajustements en fonction des retours utilisateurs",
          "Optimisation continue des dashboards en production",
        ],
        tools: ["qlik"],
      },
    ],
    impact: [
      { metric: "20+", label: "Dashboards migrés avec succès" },
      { metric: "40%", label: "Réduction des temps de chargement" },
      { metric: "100%", label: "Conformité avec les anciens KPIs" },
    ],
  },
];

const projects = [
  {
    id: 1,
    title: "Pipeline ETL Streaming Temps Réel",
    subtitle: "Delta Live Tables | Databricks",
    period: "Jan. 2026",
    category: "Data Engineering",
    objective: "Construire un pipeline Medallion en temps réel ingérant des données IoT, avec qualité garantie et orchestration automatique.",
    mainTools: ["databricks", "apachespark", "microsoftazure", "python"],
    stages: [
      {
        stage: 1,
        title: "Ingestion IoT",
        emoji: "📡",
        description: "Capturer et stocker le data brut depuis les capteurs",
        tools: ["microsoftazure", "apachespark"],
        output: "Bronze Layer",
        details: [
          "Connexion aux sources IoT via Event Hubs",
          "Streaming auto-scalable avec gestion des backpressure",
          "Stockage brut sans transformation",
        ],
      },
      {
        stage: 2,
        title: "Nettoyage & Enrichissement",
        emoji: "🧹",
        description: "Valider qualité et enrichir avec contexte métier",
        tools: ["python", "databricks", "apachespark"],
        output: "Silver Layer",
        details: [
          "Parsing et validation du format JSON",
          "Application des DLT Expectations (constraints)",
          "Enrichissement avec données de référence",
        ],
      },
      {
        stage: 3,
        title: "Agrégation & Analytics",
        emoji: "📊",
        description: "Créer des vues analytiques et KPIs",
        tools: ["apachespark", "python"],
        output: "Gold Layer",
        details: [
          "Agrégations temps-réel (fenêtres 5min, 1h, 24h)",
          "Calcul des détections d'anomalies ML",
          "Construction des tables de faits et dimensions",
        ],
      },
      {
        stage: 4,
        title: "Monitoring & Alertes",
        emoji: "⚠️",
        description: "Observer la qualité et alerter en cas d'anomalie",
        tools: ["databricks", "microsoftazure"],
        output: "Production Ready",
        details: [
          "Métriques de qualité auto-calculées (completeness, freshness)",
          "Alertes sur violations de SLA",
          "Dashboard de monitoring en temps réel",
        ],
      },
    ],
    metrics: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "<5s", label: "Latence E2E" },
      { value: "10k", label: "Events/sec" },
    ],
    tags: ["IoT", "Real-time", "Medallion", "Delta Live Tables"],
  },
  {
    id: 2,
    title: "Dashboards Tremblements de Terre",
    subtitle: "Microsoft Fabric",
    period: "2025",
    category: "Analytics",
    objective: "Analyser les séismes en temps quasi-réel via l'API USGS, avec pipeline cloud ETL et BI intégré.",
    mainTools: ["powerbi", "microsoftazure", "apachespark"],
    stages: [
      {
        stage: 1,
        title: "Ingestion API USGS",
        emoji: "🌐",
        description: "Récupérer les données depuis la source publique USGS",
        tools: ["microsoftazure", "python"],
        output: "Raw Data",
        details: [
          "Appels API schedulés vers USGS Earthquake Hazards",
          "Parsing des données GeoJSON",
          "Stockage dans Lakehouse (Delta format)",
        ],
      },
      {
        stage: 2,
        title: "ETL avec PySpark",
        emoji: "⚙️",
        description: "Transformer et nettoyer les données sismiques",
        tools: ["apachespark", "python", "pandas"],
        output: "Processed Data",
        details: [
          "Calcul de densité et clustering spatial",
          "Transformation des coordonnées géographiques",
          "Enrichissement avec données historiques",
        ],
      },
      {
        stage: 3,
        title: "Modèle de Données",
        emoji: "🗂️",
        description: "Structurer pour analyse optimale",
        tools: ["microsoftazure"],
        output: "Star Schema",
        details: [
          "Tables de faits (tremblements) et dimensions (localisation)",
          "Agrégations pre-calculées par région",
          "Indexation pour requêtes BI rapides",
        ],
      },
      {
        stage: 4,
        title: "Dashboards Power BI",
        emoji: "📈",
        description: "Créer visualisations interactives et insights",
        tools: ["powerbi"],
        output: "Live Dashboards",
        details: [
          "Cartes interactives des zones affectées",
          "KPIs: magnitude moyenne, fréquence, localisation géographique",
          "Analyses temporelles et prédictives",
        ],
      },
    ],
    metrics: [
      { value: "50+", label: "Pays couverts" },
      { value: "5min", label: "Fraîcheur données" },
      { value: "1.2M", label: "Événements analysés" },
    ],
    tags: ["Geospatial", "Public API", "PySpark", "Live Analytics"],
  },
  {
    id: 3,
    title: "ETL avancé avec Talend",
    subtitle: "Talaxie Data Integration",
    period: "2024",
    category: "Integration",
    objective: "Orchestrer des intégrations complexes entre multiples sources et cibles avec Talend.",
    mainTools: ["talend", "python", "dbt"],
    stages: [
      {
        stage: 1,
        title: "Extraction Multi-Sources",
        emoji: "📥",
        description: "Récupérer data depuis SQL, REST APIs, fichiers",
        tools: ["talend"],
        output: "Unified Extract",
        details: [
          "Jobs Talend pour extraction depuis 5+ sources hétérogènes",
          "Gestion robuste des erreurs et rejets",
          "Logging détaillé pour traçabilité",
        ],
      },
      {
        stage: 2,
        title: "Transformation & Qualité",
        emoji: "✨",
        description: "Uniformiser et valider la qualité des données",
        tools: ["talend", "python"],
        output: "Clean Data",
        details: [
          "Règles de transformation métier codifiées",
          "Déduplication et réconciliation",
          "Contrôles qualité (validations crossfilter)",
        ],
      },
      {
        stage: 3,
        title: "Chargement en Datawarehouse",
        emoji: "💾",
        description: "Charger vers cibles (Snowflake, Cloud)",
        tools: ["talend", "snowflake"],
        output: "DW Ready",
        details: [
          "Chargement incrémental optimisé",
          "Gestion des SCD (Slowly Changing Dimensions)",
          "Archivage des versions antérieures",
        ],
      },
      {
        stage: 4,
        title: "Orchestration & Monitoring",
        emoji: "⏰",
        description: "Automatiser et observer l'exécution",
        tools: ["talend", "dbt"],
        output: "Production Pipelines",
        details: [
          "Scheduling Talend Cloud avec dépendances",
          "Monitoring KPIs (volume, temps, qualité)",
          "Alertes sur anomalies ou échecs",
        ],
      },
    ],
    metrics: [
      { value: "15", label: "Jobs actifs" },
      { value: "2.5M", label: "Lignes/jour" },
      { value: "99.5%", label: "Taux succès" },
    ],
    tags: ["Multi-source", "Talend Cloud", "Orchestration", "DW Loading"],
  },
  {
    id: 4,
    title: "ML - Prédiction Churn Client",
    subtitle: "scikit-learn & Power BI",
    period: "Nov. 2024",
    category: "ML Analytics",
    objective: "Identifier les clients à risque de départ via modélisation ML, avec segmentation et dashboard actionnel.",
    mainTools: ["python", "scikitlearn", "powerbi"],
    stages: [
      {
        stage: 1,
        title: "Préparation Données",
        emoji: "📋",
        description: "Collecter, nettoyer et préparer le jeu de données",
        tools: ["python", "pandas"],
        output: "Training Data",
        details: [
          "Extraction de 50+ features client (usage, satisfaction, pricing)",
          "Gestion des valeurs manquantes et outliers",
          "Feature scaling et normalisation",
        ],
      },
      {
        stage: 2,
        title: "Exploration & Insights",
        emoji: "🔬",
        description: "Analyser les motifs de churn",
        tools: ["python", "pandas", "scikitlearn"],
        output: "Feature Insights",
        details: [
          "Corrélations entre features et churn",
          "Importance relative des variables",
          "Segmentations naturelles (clustering)",
        ],
      },
      {
        stage: 3,
        title: "Modélisation ML",
        emoji: "🤖",
        description: "Entraîner et optimiser les modèles prédictifs",
        tools: ["python", "scikitlearn"],
        output: "Trained Models",
        details: [
          "Modèles: Logistic Regression, XGBoost, Random Forest",
          "Cross-validation et tuning d'hyperparamètres",
          "Sélection basée sur Precision/Recall (reducing FP pour impact métier)",
        ],
      },
      {
        stage: 4,
        title: "Dashboards & Actions",
        emoji: "📊",
        description: "Exposer les risques et recommander des actions",
        tools: ["powerbi"],
        output: "Actionable Insights",
        details: [
          "Dashboard Power BI des segments à risque",
          "Scoring par client avec explications détaillées",
          "Recommandations d'actions retentives (promo, support prioritaire)",
        ],
      },
    ],
    metrics: [
      { value: "87%", label: "AUC-ROC" },
      { value: "85%", label: "Recall" },
      { value: "200k", label: "Clients analysés" },
    ],
    tags: ["Supervised ML", "Classification", "Feature Engineering", "Explainability"],
  },
];

const certifications = [
  {
    title: "Data Engineering",
    org: "DataCamp",
    notes: "ETL/ELT Python, PySpark/Spark, Airflow, Databricks, Snowflake",
  },
  {
    title: "Intelligence Artificielle",
    org: "Udemy",
    notes: "Agentic AI, Gen AI, RL, Deep Learning",
  },
  {
    title: "TOEIC 830/990",
    org: "ETS",
    notes: "Anglais professionnel C1",
  },
];

const education = [
  {
    school: "ISIMA - Institut d'Informatique d'Auvergne",
    period: "2023 - 2026",
    program: "Cycle ingénieur - Spécialisation SIAD",
    logo: "/logo-isima.png",
    url: "https://www.isima.fr/",
    detail:
      "J'y consolide une base solide en data engineering et décisionnel, avec des projets appliqués, du travail en équipe et une approche orientée qualité et valeur métier.",
  },
  {
    school: "OTH Regensburg - Summer School",
    period: "2024",
    program: "Programmation linéaire et non linéaire, méthodes d'optimisation",
    logo: "/logo-oth.jpg",
    url: "https://www.oth-regensburg.de/",
    detail:
      "Cette session internationale m'a apporté une vision rigoureuse de l'optimisation et des modèles mathématiques, avec un focus sur la résolution de problèmes concrets.",
  },
  {
    school: "Classes préparatoires MP - Maroc",
    period: "2020 - 2022",
    program: "Mathématiques - Physique",
    logo: "/logo-cpge.png",
    url: "https://www.cpge.ma/",
    detail:
      "Deux années intensives qui m'ont donné une forte discipline de travail, une excellente base en maths appliquées et une méthode d'analyse structurée.",
  },
];

const interests = [
  "Sport (Football, Fitness)",
  "Cinéma (Films, documentaires)",
  "Nature (Randonnée en Auvergne)",
];

const kpis = [
  { label: "Dashboards livrés", value: "12+" },
  { label: "Pipelines déployés", value: "8+" },
  { label: "Sources connectées", value: "20+" },
  { label: "Diplôme — Ingénieur ISIMA", value: "2026" },
  { label: "Certifications", value: "6+" },
];

const azureLogo =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%230078D4' d='M4 20L10 4h4l6 16h-4l-1.6-5H9.6L8 20H4zm6.7-8h2.6L12 7.8 10.7 12z'/></svg>";

const techLogos = {
  databricks: { label: "Databricks", icon: siDatabricks },
  snowflake: { label: "Snowflake", icon: siSnowflake },
  apachespark: { label: "Apache Spark", icon: siApachespark },
  python: { label: "Python", icon: siPython },
  pandas: { label: "Pandas", icon: siPandas },
  numpy: { label: "NumPy", icon: siNumpy },
  powerbi: { label: "Power BI", src: "/logo-powerbi.png" },
  tableau: { label: "Tableau", icon: siTableau },
  qlik: { label: "Qlik", icon: siQlik },
  talend: { label: "Talend", icon: siTalend },
  dbt: { label: "dbt", icon: siDbt },
  scikitlearn: { label: "scikit-learn", icon: siScikitlearn },
  tensorflow: { label: "TensorFlow", icon: siTensorflow },
  pytorch: { label: "PyTorch", icon: siPytorch },
  googlecloud: { label: "Google Cloud", icon: siGooglecloud },
  microsoftazure: { label: "Microsoft Azure", src: azureLogo },
};

const contactLogos = {
  linkedin: { label: "LinkedIn", icon: siLinkedin },
  github: { label: "GitHub", icon: siGithub },
};

const skillGroups = [
  {
    title: "Analytics & BI",
    emoji: "📊",
    description: "Transformer les données en insights visuels et dashboards impactants",
    logos: ["powerbi", "tableau", "qlik"],
  },
  {
    title: "Data Processing",
    emoji: "⚙️",
    description: "Ingérer, nettoyer et orchestrer les pipelines data 24/7",
    logos: ["python", "pandas", "numpy", "talend", "dbt", "apachespark"],
  },
  {
    title: "Data Science & ML",
    emoji: "🧠",
    description: "Construire des modèles prédictifs pour anticiper et décider",
    logos: ["scikitlearn", "tensorflow", "pytorch"],
  },
  {
    title: "Big Data & Cloud",
    emoji: "☁️",
    description: "Architecturer l'infrastructure pour la scalabilité et la fiabilité",
    logos: ["databricks", "snowflake", "googlecloud", "microsoftazure"],
  },
];

const fallbackLogo =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><rect width='24' height='24' rx='6' fill='%2321272f'/><path d='M6 16h2v-4H6v4zm4 0h2V8h-2v8zm4 0h2v-6h-2v6zm4 0h2V6h-2v10z' fill='%23b3bcc6'/></svg>";

const LogoIcon = ({ logo, className }) => {
  if (logo?.src) {
    return (
      <img
        className={className}
        src={logo.src}
        alt={logo.label}
        title={logo.label}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = fallbackLogo;
          event.currentTarget.classList.add("logo-fallback");
        }}
      />
    );
  }

  if (!logo?.icon) {
    return <span className={`logo-fallback ${className || ""}`} aria-hidden="true" />;
  }

  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 24 24"
      aria-label={logo.label}
    >
      <path d={logo.icon.path} fill={`#${logo.icon.hex}`} />
    </svg>
  );
};

const pillars = [
  {
    title: "Ingestion & ETL",
    desc: "J'ai conçu des chaînes d'ingestion multi-sources (API, SQL, fichiers) et mis en place des pipelines ETL/ELT fiables. J'ai appris à orchestrer les flux, à gérer la qualité en entrée et à sécuriser les chargements pour garantir une donnée exploitable dès la première couche.",
  },
  {
    title: "Qualite & Gouvernance",
    desc: "J'ai travaillé sur la gouvernance des données avec des règles de validation, des expectations et des contrôles continus. J'ai appris à documenter les jeux de données, mesurer la qualité et détecter les anomalies avant qu'elles n'impactent les analyses métiers.",
  },
  {
    title: "Analytics & BI",
    desc: "J'ai réalisé des modèles analytiques et des dashboards orientés décision (KPI, tendances, segments). J'ai appris à transformer des besoins métier en visualisations claires et en storytelling pour faciliter l'action et la prise de décision.",
  },
];

const Section = ({ id, title, subtitle, tag, variant, children }) => (
  <section className={`section${variant ? ` section-${variant}` : ""}`} id={id}>
    <div className="section-title">
      <h2>{title}</h2>
      <div className="section-line" />
    </div>
    {tag ? <span className="section-tag">{tag}</span> : null}
    {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    {children}
  </section>
);

const Badge = ({ label, variant }) => (
  <span className={`badge${variant ? ` badge--${variant}` : ""}`} aria-label={label}>
    {label}
  </span>
);

const Card = ({ title, period, subtitle, logo, children }) => (
  <article className="card">
    <div className="card-head">
      <div className="card-title">
        {logo ? <img className="card-logo" src={logo} alt="" /> : null}
        <div>
          <h3>{title}</h3>
          {subtitle ? <p className="muted">{subtitle}</p> : null}
        </div>
      </div>
      {period ? <span className="chip">{period}</span> : null}
    </div>
    <div className="card-body">{children}</div>
  </article>
);

export default function App() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  useEffect(() => {
    if (!expandedProjectId) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setExpandedProjectId(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedProjectId]);

  const toggleProjectDetails = (projectId) => {
    setExpandedProjectId(expandedProjectId === projectId ? null : projectId);
  };

  const expandedProject = projects.find((project) => project.id === expandedProjectId);

  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <div className="logo">ME</div>
          <div className="nav-links">
            <a href="#competences">Compétences</a>
            <a href="#projets">Projets</a>
            <a href="#experience">Expérience</a>
            <a href="#certifications">Certifications</a>
            <a href="#formation">Formation</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Portfolio</p>
            <h1>
              {profile.name}
              <span className="accent">.</span>
            </h1>
            <p className="role">{profile.role}</p>
            <p className="summary">{profile.summary}</p>
            <div className="hero-tags">
              <Badge label={profile.location} />
              <Badge label={profile.availability} variant="highlight" />
            </div>
            <div className="hero-actions">
              <p className="contact-cta">Envie d'échanger ? <a href={`mailto:${profile.email}`}>Écrivez‑moi</a></p>
              <a className="btn ghost" href="#contact">Contactez‑moi</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-avatar">
              <img src={profile.photo} alt="Mohammed Elhouary" />
            </div>

            <div className="hero-card-bottom">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="kpi-card">
                  <span className="kpi-value">{kpi.value}</span>
                  <span className="kpi-label">{kpi.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-sparkline" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="scroll-cta-wrap" aria-hidden="false">
          <a href="#projets" className="scroll-cta" aria-label="Aller aux projets">
            Explorer mes projets
            <span aria-hidden="true">↓</span>
          </a>
        </div>
        <Section
          id="competences"
          title="Compétences"
          tag="Stack"
          subtitle="Mon écosystème technologique organisé par domaine."
          variant="panel"
        >
          <div className="skill-groups-grid">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group-card">
                <div className="skill-group-header">
                  <span className="skill-emoji">{group.emoji}</span>
                  <h3>{group.title}</h3>
                </div>
                <p className="skill-group-desc">{group.description}</p>
                <div className="skill-logos-row">
                  {group.logos.map((logoKey) => {
                    const logo = techLogos[logoKey];
                    return (
                      <div key={logoKey} className="skill-logo-item">
                        <LogoIcon logo={logo} className="skill-logo-sm" />
                        <span className="skill-logo-label">{logo.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="approche"
          title="Approche data"
          tag="Méthodo"
          subtitle="Une approche orientée valeur, qualité et usage métier."
        >
          <div className="grid three">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="feature-card">
                <span className="feature-index">0{pillars.indexOf(pillar) + 1}</span>
                <h3>{pillar.title}</h3>
                <p className="muted">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          title="Expérience"
          tag="Terrain"
          subtitle="Projet de refonte cloud majeur : Migration Qlik View → Qlik Sense Cloud"
        >
          {experiences.map((exp) => (
            <div key={exp.role} className="experience-detail">
              <div className="experience-header">
                <div className="experience-header-left">
                  <img src={exp.logo} alt={exp.company} className="experience-logo" />
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-period">📅 {exp.period}</p>
                  </div>
                </div>
                <div className="experience-techs">
                  {exp.mainTechs.map((tech) => {
                    const logo = techLogos[tech];
                    return (
                      <LogoIcon
                        key={tech}
                        logo={logo}
                        className="exp-tech-logo"
                      />
                    );
                  })}
                </div>
              </div>

              <p className="experience-description">{exp.description}</p>

              <div className="experience-phases">
                {exp.phases.map((phase, idx) => (
                  <div key={phase.title} className="phase-card">
                    <div className="phase-header">
                      <span className="phase-emoji">{phase.emoji}</span>
                      <div className="phase-title-section">
                        <h4>{phase.title}</h4>
                        <span className="phase-duration">⏱️ {phase.duration}</span>
                      </div>
                      <span className="phase-number">0{idx + 1}</span>
                    </div>

                    <div className="phase-tasks">
                      <p className="phase-label">Tâches clés:</p>
                      <ul>
                        {phase.tasks.map((task) => (
                          <li key={task}>{task}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="phase-tools">
                      <p className="phase-label">Outils utilisés:</p>
                      <div className="phase-tool-icons">
                        {phase.tools.map((toolKey) => {
                          const logo = techLogos[toolKey];
                          return (
                            <div key={toolKey} className="phase-tool-item">
                              <LogoIcon
                                logo={logo}
                                className="phase-tool-icon"
                              />
                              <span>{logo.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="experience-impact">
                <h4>Impact & Résultats</h4>
                <div className="impact-metrics">
                  {exp.impact.map((item) => (
                    <div key={item.label} className="metric-card">
                      <div className="metric-value">{item.metric}</div>
                      <div className="metric-label">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Section>

        <Section
          id="projets"
          title="Projets"
          tag="Impact"
          subtitle="Explorez les projets data : architectures, workflows et impacts mesurables."
        >
          <div className="projects-scroll">
            <div className="projects-scroll-track" role="list">
              {projects.map((project) => (
                <article key={project.id} className="project-card" role="listitem">
                  <div className="project-card-top">
                    <div>
                      <h3>{project.title}</h3>
                      <p className="project-card-subtitle">{project.subtitle}</p>
                      <span className="chip">{project.period} • {project.category}</span>
                    </div>
                  </div>
                  <p className="project-card-objective">{project.objective}</p>
                  <div className="project-card-tags">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tag-compact">#{tag}</span>
                    ))}
                  </div>
                  <button
                    className="view-details-btn"
                    onClick={() => toggleProjectDetails(project.id)}
                  >
                    Voir details
                  </button>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="certifications"
          title="Certifications"
          tag="Learning"
          subtitle="Formations et preuves de progression continue."
        >
          <div className="grid three">
            {certifications.map((cert) => (
              <Card key={cert.title} title={cert.title} subtitle={cert.org}>
                <p className="muted">{cert.notes}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="formation"
          title="Formation"
          tag="Académique"
          subtitle="Parcours académique orienté data et décisionnel."
        >
          <div className="grid one">
            {education.map((item) => (
              <Card
                key={item.school}
                title={
                  item.url ? (
                    <a
                      className="education-link"
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.school}
                    </a>
                  ) : (
                    item.school
                  )
                }
                period={item.period}
                logo={item.logo}
              >
                <p className="muted">{item.program}</p>
                <p className="muted">{item.detail}</p>
              </Card>
            ))}
          </div>
        </Section>



        <Section
          id="interets"
          title="Centres d'intérêt"
          tag="Perso"
          subtitle="Quelques passions qui m'inspirent au quotidien."
        >
          <div className="interests-gallery">
            <div className="interest-card">
              <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=400&q=80" alt="Football" />
              <div className="interest-content">
                <span>Football</span>
                <p>Passionné par le football depuis mon enfance, je suis un fervent supporter du FC Barcelone et de ses valeurs de jeu collectif et technique. Je pratique régulièrement dans le club de l'école ISIMA, où j'apprécie autant les matchs amicaux que les entraînements intensifs. Le football m'a appris la discipline, l'esprit d'équipe et la persévérance - des qualités essentielles dans ma carrière de data engineer.</p>
              </div>
            </div>
            <div className="interest-card">
              <img src="/puy-de-dome.jpg" alt="Puy de Dôme - Randonnée" />
              <div className="interest-content">
                <span>Randonnée</span>
                <p>Les paysages volcaniques d'Auvergne sont mon terrain de jeu préféré. J'adore escalader le Puy de Dôme, que ce soit lors des sorties organisées par l'ISIMA ou en liberté avec mes amis. Ces randonnées me permettent de me ressourcer, d'admirer la beauté brute de la nature et de réfléchir aux défis techniques que j'affronte dans mes projets data. Chaque sommet conquis est une victoire personnelle !</p>
              </div>
            </div>
            <div className="interest-card">
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80" alt="Gaming" />
              <div className="interest-content">
                <span>Gaming</span>
                <p>Le gaming est mon exutoire créatif et compétitif. Je passe des heures sur les FPS comme Valorant et CS2, perfectionnant mes réflexes et ma stratégie d'équipe. FIFA 26 est aussi un incontournable pour des sessions endiablées avec les amis. Ces jeux développent ma capacité d'analyse rapide, ma prise de décision sous pression et mon adaptation aux situations imprévues - des compétences directement transférables au monde du data engineering.</p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {expandedProject ? (
        <div className="project-modal" role="dialog" aria-modal="true">
          <div
            className="project-modal-backdrop"
            onClick={() => setExpandedProjectId(null)}
          />
          <div className="project-modal-content">
            <div className="project-showcase">
              <button
                className="close-details-btn"
                onClick={() => toggleProjectDetails(expandedProject.id)}
                title="Fermer"
              >
                ✕
              </button>

              <div className="project-detail-header">
                <div className="project-detail-info">
                  <h3>{expandedProject.title}</h3>
                  <p>{expandedProject.subtitle}</p>
                  <span className="project-detail-meta">
                    📅 {expandedProject.period} • {expandedProject.category}
                  </span>
                </div>
              </div>

              <div className="project-modal-body">
                <div className="project-objective">
                  <span className="objective-label">Objectif</span>
                  <p>{expandedProject.objective}</p>
                </div>

                <div className="project-workflow">
                  <h4>Workflow</h4>
                  <div className="project-stage-grid">
                    {expandedProject.stages.map((stg) => (
                      <div key={stg.stage} className="stage-card-compact">
                        <div className="stage-number">{stg.stage}</div>
                        <div className="stage-emoji">{stg.emoji}</div>
                        <h6>{stg.title}</h6>
                        <span className="stage-output-compact">{stg.output}</span>
                        <p className="stage-desc-compact">{stg.description}</p>
                        <div className="stage-actions-compact">
                          {stg.details.map((detail) => (
                            <span key={detail} className="action-tag">{detail}</span>
                          ))}
                        </div>
                        <div className="stage-tools-compact">
                          {stg.tools.map((toolKey) => {
                            const logo = techLogos[toolKey];
                            return (
                              <LogoIcon
                                key={toolKey}
                                logo={logo}
                                className="tool-icon-compact"
                                title={logo.label}
                              />
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="project-metrics">
                  <h4>Resultats</h4>
                  <div className="metrics-grid">
                    {expandedProject.metrics.map((metric) => (
                      <div key={metric.label} className="metric-badge">
                        <span className="metric-bg" />
                        <div className="metric-content">
                          <span className="metric-num">{metric.value}</span>
                          <span className="metric-txt">{metric.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="project-tags">
                    {expandedProject.tags.map((tag) => (
                      <span key={tag} className="project-tag">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Section id="contact" title="Contact" subtitle="Envie d'échanger ? Voici comment me joindre.">
        <div className="contact">
          <div className="contact-card">
            <a className="contact-item" href={`mailto:${profile.email}`}>
              <span className="contact-icon contact-icon--mono" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="contact-icon-svg" aria-hidden="true">
                  <path fill="currentColor" d="M4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4zm0 2h16l-8 5-8-5zm0 8V9.3l7.4 4.6a1 1 0 0 0 1.2 0L20 9.3V16H4z"/>
                </svg>
              </span>
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">{profile.email}</span>
              </div>
            </a>
            <a className="contact-item" href={`tel:${profile.phone}`}>
              <span className="contact-icon contact-icon--mono" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="contact-icon-svg" aria-hidden="true">
                  <path fill="currentColor" d="M6.6 2.5c-.3-.7-1.1-1-1.8-.8l-2.3.9c-.7.3-1.1 1.1-.9 1.8 1.7 6.7 6.8 11.8 13.5 13.5.7.2 1.5-.2 1.8-.9l.9-2.3c.3-.7 0-1.5-.8-1.8l-2.5-1c-.6-.2-1.3 0-1.7.5l-1 1.2c-2.5-1.2-4.6-3.2-5.8-5.8l1.2-1c.5-.4.7-1.1.5-1.7l-1-2.5z"/>
                </svg>
              </span>
              <div>
                <span className="contact-label">Téléphone</span>
                <span className="contact-value">{profile.phone}</span>
              </div>
            </a>
            <a className="contact-item" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-icon contact-icon--brand" aria-hidden="true">
                <LogoIcon logo={contactLogos.linkedin} className="contact-icon-svg" />
              </span>
              <div>
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">Profil professionnel</span>
              </div>
            </a>
            <a className="contact-item" href={profile.github} target="_blank" rel="noreferrer">
              <span className="contact-icon contact-icon--brand" aria-hidden="true">
                <LogoIcon logo={contactLogos.github} className="contact-icon-svg" />
              </span>
              <div>
                <span className="contact-label">GitHub</span>
                <span className="contact-value">Projets et code</span>
              </div>
            </a>
          </div>
        </div>
      </Section>

      <footer className="footer">
        <span>© 2026 {profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </div>
  );
}
