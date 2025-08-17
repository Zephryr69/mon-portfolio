import React, { useEffect, useState } from "react";
import "./Home.css";
import ecoleImg from "../assets/ecole.png";
import iphoneImg from "../assets/iphone.png";
import cantineImg from "../assets/cantine.png";
import profileImg from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaPhp,
  FaMobileAlt,
  FaGlobe,
  FaGithub,
  FaVideo,
  FaTools,
  FaSearch,
  FaHtml5,
  FaCode,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();
  const themeClass = isDarkMode ? "dark" : "light";

  // Pour l'effet alterné du texte du hero
  const [altFont, setAltFont] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setAltFont((v) => !v), 2200);
    return () => clearInterval(t);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  const skillsData = [
    { icon: <FaReact />, text: "React", description: "Création d'interfaces web dynamiques, modernes et performantes.", level: 60, delay: 0 },
    { icon: <FaPhp />, text: "Laravel", description: "Développement backend robuste et sécurisé pour des applications web.", level: 30, delay: 0.12 },
    { icon: <FaMobileAlt />, text: "JavaScript", description: "Automatisation, enrichissement d’interactivité et fonctionnalités web avancées.", level: 60, delay: 0.24 },
    { icon: <FaGithub />, text: "Git & gestion de versions", description: "Suivi et coordination efficaces des versions de projets collaboratifs.", level: 70, delay: 0.36 },
    { icon: <FaGlobe />, text: "Anglais intermédiaire (conversation, lecture)", description: "Communication fluide en contexte professionnel et lecture technique.", level: 50, delay: 0.48 },
    { icon: <FaVideo />, text: "Montage vidéo & création d'affiches (amateur)", description: "Production de contenus visuels attrayants pour supports digitaux et imprimés.", level: 40, delay: 0.6 },
    { icon: <FaTools />, text: "Maintenance logicielle & OS (Windows, Linux)", description: "Diagnostic et résolution rapide de problèmes logiciels et systèmes.", level: 70, delay: 0.72 },
    { icon: <FaSearch />, text: "Recherche web & réseaux sociaux", description: "Veille informationnelle précise et exploitation optimale des ressources en ligne.", level: 80, delay: 0.84 },
    { icon: <FaHtml5 />, text: "HTML (avancé) & CSS (maîtrisé)", description: "Création de pages web responsives, esthétiques et accessibles.", level: 90, delay: 0.96 },
    { icon: <FaCode />, text: "C#", description: "Développement d'applications desktop et logiques métier solides.", level: 85, delay: 1.08 },
  ];

  return (
    <div className={`home-wrapper ${themeClass}`} data-theme={themeClass} style={{ paddingTop: "var(--navbar-height, 60px)" }}>
      {/* HERO */}
      <section className="hero" role="banner">
        <div className="hero-text">
          <motion.h1
            className="hero-title"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Salut, je suis{" "}
            <span className="fancy" data-alt={altFont ? "true" : "false"}>
              <span className="first-name">Amandino</span>{" "}
              <span className="last-name">AIMINASSO</span>
            </span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            Développeur Full Stack freelance, passionné par le design moderne, la
            performance et l'expérience utilisateur.
          </motion.p>

          <div className="cta-group">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" className="hero-btn primary">
                Démarrer un projet
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link to="/projets" className="hero-btn secondary">
                Voir mes projets
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          aria-hidden="true"
        >
          <img src={profileImg} alt="Photo de Amandino" loading="lazy" />
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="skills-section" aria-label="Compétences clés">
        <h2>🛠 Mes Compétences clés</h2>
        <div className="skills-grid">
          {skillsData.map(({ icon, text, description, level, delay }, i) => (
            <SkillCard key={i} icon={icon} text={text} description={description} level={level} delay={delay} />
          ))}
        </div>
      </section>

      {/* PROJETS */}
      <section className="projects-section" aria-label="Mes projets récents">
        <h2>🚀 Projets récents</h2>

        <div className="projects-grid">
          {[
            {
              title: "Site promotionnel – École",
              brief: "Site responsive pour mettre en avant les offres et l’attractivité d'une école.",
              thumbnail: ecoleImg,
              link: "https://zephryr69.github.io/les-jumelles/",
              tech: ["HTML", "CSS", "JavaScript", "React"],
            },
            {
              title: "Site vitrine – Revendeur iPhones",
              brief: "Vitrine élégante pour un revendeur, avec galerie produits et prise de contact.",
              thumbnail: iphoneImg,
              link: "https://zephryr69.github.io/max-iphone/",
              tech: ["React", "CSS", "Framer Motion"],
            },
            {
              title: "Application C# – Gestion cantine",
              brief: "App desktop en C# pour gérer inscriptions, paiements et menus en cantine scolaire.",
              thumbnail: cantineImg,
              link: "",
              tech: ["C#", "WinForms", "SQL Server"],
            },
          ].map((p, idx) => {
            const colorClass = `card-color-${(idx % 4) + 1}`; // couleurs aléatoires
            return (
              <motion.div
                key={p.title}
                className={`project-card glassmorphic ${colorClass}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                aria-label={`${p.title} projet`}
                role="region"
              >
                <img
                  src={p.thumbnail}
                  alt={`Aperçu: ${p.title}`}
                  className="project-img"
                  loading="lazy"
                />

                <div className="project-info">
                  <h3>{p.title}</h3>
                  <p>{p.brief}</p>

                  <div className="project-tech">
                    {p.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={p.link} className="project-cta" target="_blank" rel="noopener noreferrer">
                      Voir le projet →
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA vers tous les projets */}
        <div className="projects-more">
          <Link to="/projets" className="projects-btn">
            Voir plus de projets →
          </Link>
        </div>
      </section>


      {/* ABOUT */}
      <section className="about-section" aria-label="À propos de moi">
        <div className="about-content">
          <motion.div className="about-text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
            <h2>À propos de moi</h2>
            <p>
              Je suis développeur Full Stack passionné par la création de solutions innovantes et performantes. Toujours avide d’apprendre, je prends plaisir à relever des défis et collaborer en équipe.
            </p>

            <div className="about-stats">
              <div><strong>+3</strong> projets réalisés</div>
              <div><strong>1 an</strong> d'expérience</div>
              <div><strong>Frontend</strong> & UI Design</div>
            </div>

            <Link to="/a-propos" className="cta-button">✨ En savoir plus</Link>
          </motion.div>

          <motion.div className="about-img-container" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.08 }}>
            <img src={profileImg} alt="Portrait de Amandino" className="about-img" loading="lazy" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function SkillCard({ icon, text, description, level = 0, delay = 0 }) {
  return (
    <motion.div className="skill-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay }} aria-label={`${text} compétence niveau ${level}%`} role="region">
      {icon && <span className="skill-icon">{icon}</span>}
      <div className="skill-text-level">
        <span className="skill-title">{text}</span>
        <span className="skill-description">{description}</span>
        <div className="skill-level" style={{ width: `${level}%` }} />
      </div>
    </motion.div>
  );
}
