import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// ✨ 1. On importe le Provider et le hook depuis notre Context
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

// ✨ 2. On crée un composant qui contient la logique de l'application.
// Il est à l'intérieur du Provider, il peut donc utiliser le hook useTheme().
function AppContent() {
  // On récupère la valeur du thème directement depuis le context.
  const { isDarkMode } = useTheme();

  // La gestion de la sidebar reste ici, car elle est propre à la structure de l'App.
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // La correction pour GitHub Pages reste ici.
  useEffect(() => {
    const redirect = sessionStorage.getItem("redirect");
    if (redirect) {
      sessionStorage.removeItem("redirect");
      window.history.replaceState(null, "", redirect);
    }
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    // On utilise `isDarkMode` du context pour appliquer la bonne classe.
    <div className={`containner ${isDarkMode ? "dark" : "light"}`}>
      
      {/* ✨ 3. On supprime les props isDarkMode et toggleTheme des composants. */}
      <Header onMenuClick={toggleSidebar} />

      <AnimatePresence mode="wait">
        {sidebarOpen && (
          <Sidebar closeSidebar={() => setSidebarOpen(false)} />
        )}
      </AnimatePresence>

      <ScrollToTop />

      <main className="content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* On supprime la prop isDarkMode de toutes les routes. */}
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

// ✨ 4. Le composant App englobe maintenant l'application avec le ThemeProvider.
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;