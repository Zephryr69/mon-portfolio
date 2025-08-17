import React from 'react';
import './Projects.css';
import ecoleImg from "../assets/ecole.png";
import iphoneImg from "../assets/iphone.png";
import cantineImg from "../assets/cantine.png";

const projects = [
  {
                title: "Site promotionnel – École",
                brief: "Site responsive pour mettre en avant les offres et l’attractivité d'une école.",
                thumbnail: ecoleImg,
                link: "/projets/ecole",
                tech: ["HTML", "CSS", "JavaScript", "React"],
                github: "https://zephryr69.github.io/les-jumelles/",
              },
              {
                title: "Site vitrine – Revendeur iPhones",
                brief: "Vitrine élégante pour un revendeur, avec galerie produits et prise de contact.",
                thumbnail: iphoneImg,
                link: "/projets/iphone",
                tech: ["React", "CSS", "Framer Motion"],
                github: "https://zephryr69.github.io/max-iphone/",
              },
              {
                title: "Application C# – Gestion cantine",
                brief: "App desktop en C# pour gérer inscriptions, paiements et menus en cantine scolaire.",
                thumbnail: cantineImg,
                link: "/projets/cantine",
                tech: ["C#", "WinForms", "SQL Server"],
                github: "https://github.com/ton-utilisateur/gestion-cantine",
              },
];

function Projects() {
  return (
    <section className="projects-section">
      <h2>Mes Projets 🚀 </h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <img src={project.thumbnail} alt={`Aperçu: ${project.title}`} className="project-img" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-cta">Voir plus →</a>
                <a href={project.github} className="project-cta" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
