import React from "react";
import "./NavBar.css"; // Import du fichier CSS

function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyAppTWIN5</h2>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
