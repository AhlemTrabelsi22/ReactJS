import React from "react";
import "./Footer.css"; // Import du CSS

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MyApp. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
