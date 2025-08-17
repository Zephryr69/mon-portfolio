import { Link } from "react-router-dom";
import "./Footer.css";
import { useTheme } from "../contexts/ThemeContext";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${isDarkMode ? "dark" : "light"}`}>
      <div className="footer-content">
        {/* Section marque + réseaux */}
        <div className="footer-section logo-social">
          <Link to="/" className="footer-brand" aria-label="Accueil">
            <strong className="brand-main">Mon Portfolio</strong>
            <span className="brand-sub">— Design & Développement</span>
          </Link>
          <p className="slogan">
            Projets soignés, code propre, expérience utilisateur.
          </p>

          <div className="social-icons" aria-label="Réseaux sociaux">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/amandino-a%C3%AFminasso-68034a224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Zephryr69"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://youtube.com/tonchaine"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-section contact-us">
          <h4>Contact</h4>
          <p>
            <FaMapMarkerAlt className="ico" /> Porto-Novo, Bénin
          </p>
          <p>
            <FaPhoneAlt className="ico" /> +229 01 69 11 87 45
          </p>
          <p>
            <FaEnvelope className="ico" />{" "}
            <a href="mailto:amandinoaiminasso@gmail.com">
              amandinoaiminasso@gmail.com
            </a>
          </p>
        </div>

        {/* Liens de navigation */}
        <div className="footer-section links">
          <h4>Navigation</h4>
          <ul className="footer-nav-links">
            <li>
              <Link to="/" className="footer-nav-link">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/projets" className="footer-nav-link">
                Projets
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="footer-nav-link">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Description courte */}
        <div className="footer-section about-site">
          <h4>À propos</h4>
          <p className="about-text">
            Je suis <strong>Amandino AIMINASSO</strong>, développeur Full-Stack
            & UI/UX designer. J’aide les petites entreprises et revendeurs à
            lancer des sites clairs, rapides et convertissants — du site vitrine
            aux applications métiers.
          </p>
          <p className="about-text small">
            Disponible pour missions à distance ou sur Porto-Novo (Bénin).
            Livraison rapide, communication claire et livrables documentés.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {currentYear} Mon Portfolio — Tous droits réservés.</small>
      </div>
    </footer>
  );
}
