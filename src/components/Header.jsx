import PropTypes from "prop-types";
// ✨ AMÉLIORATION: On importe NavLink pour gérer les liens actifs
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

// Import du hook de thème
import { useTheme } from "../contexts/ThemeContext";

// Import des assets
import menuIcon from "../assets/menu-icon.png";
import sunIcon from "../assets/Sun.png";
import moonIcon from "../assets/Crescent Moon.png";

const Header = ({ onMenuClick }) => {
  // Récupération des valeurs depuis le context
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    // ✨ CORRIGÉ: On supprime les classes de thème dynamiques devenues inutiles
    <header className="navbar">
      
      {/* ✨ CORRIGÉ & AMÉLIORATION: Logo et nom mis à jour et rendus cliquables */}
      <Link to="/" className="header-link" aria-label="Retour à l'accueil">
        <div className="header">
          <h2>Mon Portfolio</h2>
        </div>
      </Link>

      {/* Liens de navigation */}
      <ul>
        {/* ✨ AMÉLIORATION: On utilise NavLink pour styler le lien actif */}
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            Accueil
          </NavLink>
        </li>
        <li>
          {/* ✨ CORRIGÉ: "Produits" devient "Projets" */}
          <NavLink to="/projets" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink to="/a-propos" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            À propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Toggle thème */}
      <img
        src={isDarkMode ? moonIcon : sunIcon}
        alt="Changer le thème du site"
        className="toggle-icon"
        onClick={toggleTheme}
      />

      {/* Burger menu mobile */}
      {/* ✨ CORRIGÉ: On retire la classe 'mobile-only' devenue inutile */}
      <button className="burger" onClick={onMenuClick}>
        <img src={menuIcon} alt="Ouvrir le menu de navigation" className="custom-menu-icon" />
      </button>
    </header>
  );
};

Header.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default Header;