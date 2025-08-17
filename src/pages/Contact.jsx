import "./Contact.css";
import { useTheme } from "../contexts/ThemeContext";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

function Contact() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirection vers mailto avec sujet et corps du mail
    const subject = encodeURIComponent("Contact depuis votre site");
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nWhatsApp: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:amandinoaiminasso@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className={`contact-page ${isDarkMode ? "dark" : "light"}`}
      aria-labelledby="contact-title"
    >
      {/* Titre */}
      <header className="contact-header">
        <h2 id="contact-title" className="contact-title">📩 Contactez-moi</h2>
        <p className="contact-intro">
          Une question, un projet ou une mission freelance ? Je suis à votre écoute.
        </p>
      </header>

      {/* Moyens de contact directs */}
      <div className="contact-methods">
        <a
          href="https://wa.me/2290169118745"
          className="contact-card whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discuter sur WhatsApp"
        >
          <FaWhatsapp className="icon" /> Discuter sur WhatsApp
        </a>
        <a href="tel:+2290169118745" className="contact-card phone">
          <FaPhoneAlt className="icon" /> +229 01 69 11 87 45
        </a>
        <a
          href="mailto:amandinoaiminasso@gmail.com"
          className="contact-card email"
        >
          <FaEnvelope className="icon" /> amandinoaiminasso@gmail.com
        </a>
      </div>

      {/* Formulaire de contact */}
      <form
        className="contact-form glassmorphic"
        aria-label="Formulaire de contact"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Nom</label>
        <input
          id="name"
          type="text"
          placeholder="Votre nom complet"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="phone">Numéro WhatsApp</label>
        <input
          id="phone"
          type="tel"
          placeholder="+229 XX XX XX XX"
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Décrivez votre projet ou votre demande..."
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" className="hero-btn secondary">
          Envoyer le message →
        </button>
      </form>
    </section>
  );
}

export default Contact;
