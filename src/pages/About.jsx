import React from "react";
import "./About.css";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";
import {
  FaReact,
  FaPhp,
  FaMobileAlt,
  FaGithub,
  FaGlobe,
  FaVideo,
  FaTools,
  FaSearch,
  FaHtml5,
  FaCode,
} from "react-icons/fa";

export default function About() {
  const { isDarkMode } = useTheme();
  const themeClass = isDarkMode ? "dark" : "light";

  const fadeInUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    { icon: <FaReact />, title: "React", subtitle: "UI modernes, SPA performantes" },
    { icon: <FaPhp />, title: "Laravel", subtitle: "Back-end structuré & APIs" },
    { icon: <FaMobileAlt />, title: "JavaScript", subtitle: "Interactions & logique client" },
    { icon: <FaHtml5 />, title: "HTML & CSS", subtitle: "Pages responsives, accessibles" },
    { icon: <FaGithub />, title: "Git", subtitle: "Workflow, CI/CD & collaboration" },
    { icon: <FaCode />, title: "C#", subtitle: "Applications desktop & logique métier" },
    { icon: <FaTools />, title: "Maintenance", subtitle: "Déploiement & debugging rapide" },
    { icon: <FaSearch />, title: "Recherche & Veille", subtitle: "Approche data-driven" },
    { icon: <FaVideo />, title: "Montage & Visuel", subtitle: "Supports marketing & démos" },
    { icon: <FaGlobe />, title: "Anglais (interm.)", subtitle: "Lecture technique & échanges pro" },
  ];

  return (
    <main className={`about-page ${themeClass}`} data-theme={themeClass}>
      {/* INTRO / ACCROCHE */}
      <section className="intro glassmorphic" aria-labelledby="about-hello" >
        <div>
          <motion.h1 id="about-hello" initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ duration: 0.6 }}>
            👋 Bonjour — moi c'est <span className="name">Amandino AIMINASSO</span>
          </motion.h1>
          <motion.p className="lead" initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ duration: 0.6, delay: 0.08 }}>
            Développeur Full-Stack & UI/UX designer. J'aide les petites entreprises et les professions locales à gagner en visibilité et efficacité grâce à des sites rapides, clairs et convertissants.
          </motion.p>

          <div className="intro-cta" role="group" aria-label="Actions principales">
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <Link className="hero-btn primary" to="/contact">Démarrer un projet</Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <Link className="hero-btn ghost" to="/projets">Voir mes projets</Link>
            </motion.div>
          </div>
        </div>

        <motion.figure className="intro-portrait" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <img src={profileImg} alt="Portrait de Amandino" />
          <figcaption>Disponible pour missions freelance — Porto-Novo / Remote</figcaption>
        </motion.figure>
      </section>

      {/* PARCOURS / METHODE */}
      <section className="story-hero container-grid" aria-label="Parcours et méthode">
        <motion.article className="story glassmorphic" initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ duration: 0.6 }}>
          <h2>Mon parcours</h2>
          <p>
            Depuis un an, j’ai conçu 3 projets concrets, allant de sites vitrines à des applications desktop en C#.
            Je mets un point d’honneur à allier performance, accessibilité et clarté du produit final — chaque site ou application doit réellement parler à vos clients et faciliter leur expérience.
          </p>


          <h4>Ma méthode en 3 étapes</h4>
          <ol className="process">
            <li><strong>Découverte</strong> — Brief, objectifs et indicateurs de succès.</li>
            <li><strong>Prototype</strong> — Maquettes interactives, validation UX rapide.</li>
            <li><strong>Livraison</strong> — Déploiement, documentation et support.</li>
          </ol>
        </motion.article>

        <aside className="stats glassmorphic" aria-hidden="false">
          <div className="stat">
            <strong>3</strong>
            <span>Projets réalisés</span>
          </div>
          <div className="stat">
            <strong>1 an</strong>
            <span>Expérience pratique</span>
          </div>
          <div className="stat">
            <strong>Front & UI</strong>
            <span>Design et développement web</span>
          </div>
        </aside>
      </section>

      {/* COMPETENCES */}
      <section className="skills-section" aria-label="Compétences">
        <h2>🛠 Compétences</h2>
        <p className="sub">Tech, outils et savoir-faire que j'utilise au quotidien</p>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <motion.div key={s.title} className={`skill-card`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}>
              <div className="skill-left">
                <span className="skill-icon" aria-hidden="true">{s.icon}</span>
              </div>
              <div className="skill-right">
                <div className="skill-title">{s.title}</div>
                <div className="skill-sub">{s.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* VALEUR / TESTIMONIALS + CTA */}
      <section className="value-cta container-grid">
        <motion.div className="value glassmorphic" initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ duration: 0.6 }}>
          <h3>Ce que j'apporte</h3>
          <ul>
            <li>Code propre, maintenable et documenté</li>
            <li>Livraison rapide et communication claire</li>
            <li>Design orienté conversion (UX & UI pragmatique)</li>
          </ul>
          <Link to="/contact" className="hero-btn primary">Contactez-moi pour une estimation</Link>
        </motion.div>

      </section>
    </main>
  );
}
