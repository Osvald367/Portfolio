// assets/js/services-data.js

const services = [
  {
  id: 1,
  slug: "developpement-web",
  title: "Développement Web",
  icon: "bi-code-slash",
  description: "Création de sites internet performants, du site vitrine au site e-commerce, avec une attention particulière à l'ergonomie, la sécurité et le SEO.",
  image: "assets/img/services/services-developpement-web.webp",
  badge: "Service Premium",
  intro: "Nous développons des sites web modernes, rapides et sécurisés, adaptés à vos objectifs business et à vos utilisateurs.",
  features: [
    {
      icon: "bi-lightning-charge",
      title: "Performance Optimisée",
      text: "Chargement rapide, score Lighthouse élevé."
    },
    {
      icon: "bi-laptop",
      title: "Responsive Design",
      text: "Compatibilité parfaite sur mobile, tablette et desktop."
    },
    {
      icon: "bi-shield-check",
      title: "Sécurité",
      text: "Mise en place des meilleures pratiques de cybersécurité."
    },
    {
      icon: "bi-search",
      title: "SEO Technique",
      text: "Optimisation des balises, performances et structure."
    }
  ],
  process: [
    { step: "01", title: "Cadrage", text: "Analyse des besoins, des cibles et objectifs." },
    { step: "02", title: "Conception UX/UI", text: "Maquettage ergonomique et design intuitif." },
    { step: "03", title: "Développement", text: "Intégration HTML/CSS et programmation backend." },
    { step: "04", title: "Tests & Mise en ligne", text: "Vérification, débogage, déploiement sécurisé." }
  ],
  gallery: [
    "assets/img/services/services-developpement-web-1.webp",
    "assets/img/services/services-developpement-web-2.webp",
    "assets/img/services/services-developpement-web-3.webp",
  ],
  info: {
    duration: "1-3 mois",
    team: "2 développeurs",
    delivery: "Livraison continue",
    support: "Assistance 3j/7"
  }
},

{
  id: 2,
  slug: "developpement-mobile",
  title: "Développement Mobile",
  icon: "bi-phone",
  description: "Applications mobiles performantes et intuitives pour Android et iOS, en natif ou avec des technologies hybrides.",
  image: "assets/img/services/services-developpement-mobile.webp",
  badge: "Service Premium",
  intro: "Nous créons des applications mobiles rapides, ergonomiques et orientées utilisateur pour répondre à vos besoins métiers.",
  features: [
    {
      icon: "bi-phone",
      title: "Compatibilité native",
      text: "Applications conçues pour Android et iOS."
    },
    {
      icon: "bi-hand-index-thumb",
      title: "UX Mobile",
      text: "Navigation fluide et expérience utilisateur optimisée."
    },
    {
      icon: "bi-cloud-upload",
      title: "Publication App Store",
      text: "Accompagnement pour la mise en ligne sur les stores."
    },
    {
      icon: "bi-speedometer",
      title: "Optimisation",
      text: "Performance, légèreté, fluidité garanties."
    }
  ],
  process: [
    { step: "01", title: "Brief", text: "Analyse du projet et de la cible mobile." },
    { step: "02", title: "Maquettage", text: "Création de prototypes avec retours utilisateurs." },
    { step: "03", title: "Développement", text: "Code natif ou cross-platform selon besoin." },
    { step: "04", title: "Tests et déploiement", text: "Vérifications fonctionnelles et publication." }
  ],
  gallery: [
    "assets/img/services/services-developpement-mobile-1.webp",
    "assets/img/services/services-developpement-mobile-2.webp",
    "assets/img/services/services-developpement-mobile-3.webp"
  ],
  info: {
    duration: "4-6 mois",
    team: "2-3 développeurs",
    delivery: "Itératif avec prototypes",
    support: "Maintenance 3 mois incluse"
  }
},

{
  id: 3,
  slug: "design-ui-ux",
  title: "Design UI/UX",
  icon: "bi-easel2",
  description: "Conception d’interfaces utilisateur modernes, intuitives et centrées sur l’expérience utilisateur.",
  image: "assets/img/services/services-ui-ux.webp",
  badge: "Créativité & Fonctionnalité",
  intro: "Un bon design, ce n’est pas seulement ce qui est beau, c’est aussi ce qui est clair, logique et agréable à utiliser.",
  features: [
    {
      icon: "bi-pencil",
      title: "Design sur mesure",
      text: "Création unique adaptée à votre marque et vos utilisateurs."
    },
    {
      icon: "bi-eyeglasses",
      title: "Expérience utilisateur",
      text: "Parcours fluide, interactions intuitives, satisfaction maximale."
    },
    {
      icon: "bi-grid",
      title: "Prototypes interactifs",
      text: "Visualisez vos interfaces avant développement avec Figma."
    },
    {
      icon: "bi-palette",
      title: "Cohérence graphique",
      text: "Respect de votre charte visuelle et hiérarchie claire."
    }
  ],
  process: [
    { step: "01", title: "Atelier UX", text: "Analyse des utilisateurs, besoins et objectifs." },
    { step: "02", title: "Wireframes", text: "Zoning et structure des pages principales." },
    { step: "03", title: "UI Design", text: "Création graphique et choix typographiques." },
    { step: "04", title: "Prototype", text: "Navigation simulée et présentation client." }
  ],
  gallery: [
    "assets/img/services/services-ui-ux-1.webp",
    "assets/img/services/services-ui-ux-2.webp",
    "assets/img/services/services-ui-ux-3.webp"
  ],
  info: {
    duration: "2-6 semaines",
    team: "1 designer UX + 1 UI",
    delivery: "Fichiers Figma / PSD / SVG",
    support: "Révisions incluses"
  }
},

{
  id: 4,
  slug: "identite-visuelle",
  title: "Identité Visuelle",
  icon: "bi-brush",
  description: "Création de l’univers graphique de votre marque : logo, charte graphique, typographies, couleurs et déclinaisons.",
  image: "assets/img/services/services-identié-visuelle.webp",
  badge: "Impact Visuel",
  intro: "Une image forte et cohérente est la première étape pour vous faire remarquer et mémoriser.",
  features: [
    {
      icon: "bi-badge-3d",
      title: "Logo professionnel",
      text: "Création unique, vectorielle, déclinable tous supports."
    },
    {
      icon: "bi-collection",
      title: "Charte graphique",
      text: "Guide d’utilisation de vos couleurs, typos, symboles, etc."
    },
    {
      icon: "bi-megaphone",
      title: "Déclinaisons",
      text: "Cartes de visite, signature mail, bannières, etc."
    },
    {
      icon: "bi-award",
      title: "Cohérence de marque",
      text: "Une image harmonieuse sur tous vos canaux."
    }
  ],
  process: [
    { step: "01", title: "Brief créatif", text: "Compréhension de votre vision et de votre marché." },
    { step: "02", title: "Propositions", text: "2 à 3 concepts graphiques pour validation." },
    { step: "03", title: "Affinage", text: "Itérations jusqu’à validation finale." },
    { step: "04", title: "Livraison", text: "Pack complet de fichiers pour web & print." }
  ],
  gallery: [
    "assets/img/services/services-identite-visuelle-1.webp",
    "assets/img/services/services-identite-visuelle-2.webp",
    "assets/img/services/services-identite-visuelle-3.webp"
  ],
  info: {
    duration: "1-3 semaines",
    team: "1 graphiste",
    delivery: "Fichiers AI, EPS, SVG, PNG, PDF",
    support: "3 itérations incluses"
  }
},

{
  id: 5,
  slug: "supports-visuels",
  title: "Supports Visuels",
  icon: "bi-file-earmark-richtext",
  description: "Création de visuels print et digitaux adaptés à vos besoins : flyers, affiches, bannières, présentations, packaging...",
  image: "assets/img/services/services-support-visuelle.webp",
  badge: "Communication Visuelle",
  intro: "Faites passer vos messages efficacement grâce à des supports graphiques percutants et professionnels.",
  features: [
    {
      icon: "bi-megaphone-fill",
      title: "Communication ciblée",
      text: "Visuels adaptés à votre public et objectifs."
    },
    {
      icon: "bi-printer",
      title: "Prêt à imprimer",
      text: "Résolution haute qualité, formats professionnels."
    },
    {
      icon: "bi-tv",
      title: "Supports numériques",
      text: "Bannières web, posts réseaux sociaux, slides."
    },
    {
      icon: "bi-layout-text-sidebar-reverse",
      title: "Création express",
      text: "Délais rapides pour vos campagnes urgentes."
    }
  ],
  process: [
    { step: "01", title: "Brief visuel", text: "Définition du format, ton et message." },
    { step: "02", title: "Création graphique", text: "Conception des visuels selon la charte." },
    { step: "03", title: "Validation", text: "Relecture, ajustements et finalisation." },
    { step: "04", title: "Export", text: "Fichiers optimisés pour impression ou publication." }
  ],
  gallery: [
    "assets/img/services/services-supports-visuels-1.webp",
    "assets/img/services/services-supports-visuels-2.webp",
    "assets/img/services/services-supports-visuels-3.webp",
    "assets/img/services/services-supports-visuels-4.webp",
    "assets/img/services/services-supports-visuels-5.webp",
    "assets/img/services/services-supports-visuels-6.webp",
    "assets/img/services/services-supports-visuels-7.webp",
    "assets/img/services/services-supports-visuels-8.webp",
    "assets/img/services/services-supports-visuels-9.webp",
    "assets/img/services/services-supports-visuels-10.webp",
    "assets/img/services/services-supports-visuels-11.webp",
    "assets/img/services/services-supports-visuels-12.webp"

  ],
  info: {
    duration: "2-5 jours",
    team: "1 designer",
    delivery: "PDF HD + formats web",
    support: "Modifications mineures incluses"
  }
},

{
  id: 6,
  slug: "maintenance-support",
  title: "Maintenance & Assistance",
  icon: "bi-tools",
  description: "Nous assurons le bon fonctionnement, la sécurité et la mise à jour régulière de vos sites et applications.",
  image: "assets/img/services/services-maintenance.webp",
  badge: "Fiabilité & Sécurité",
  intro: "Parce qu’un bon projet ne s’arrête pas à sa mise en ligne, nous restons à vos côtés pour l’entretenir et le faire évoluer.",
  features: [
    {
      icon: "bi-shield-lock",
      title: "Sécurité continue",
      text: "Mises à jour, anti-spam, sauvegardes automatiques."
    },
    {
      icon: "bi-clock-history",
      title: "Assistance rapide",
      text: "Réponse sous 24h à vos demandes techniques."
    },
    {
      icon: "bi-bar-chart",
      title: "Rapports mensuels",
      text: "Statistiques de performance et état du site."
    },
    {
      icon: "bi-pencil-square",
      title: "Modifications ponctuelles",
      text: "Ajout de contenu, corrections, évolutions légères."
    }
  ],
  process: [
    { step: "01", title: "Audit initial", text: "État du site et définition des priorités." },
    { step: "02", title: "Plan de maintenance", text: "Tâches mensuelles et responsabilités." },
    { step: "03", title: "Suivi & Reporting", text: "Bilan mensuel avec rapports." },
    { step: "04", title: "Support technique", text: "Canal dédié pour vos demandes." }
  ],
  gallery: [
    "assets/img/services/services-maintenance-1.webp",
    "assets/img/services/services-maintenance-2.webp",
    "assets/img/services/services-maintenance-3.webp",
  ],
  info: {
    duration: "Abonnement mensuel",
    team: "Support technique dédié",
    delivery: "Rapport PDF + mises à jour actives",
    support: "7j/7 selon le contrat"
  }
}
  // Ajoute les autres services ici avec slug unique
];
