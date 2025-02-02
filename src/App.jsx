import React from "react";
import NavBar from "./componente/navbar/NavBar";
import Footer from "./componente/footer/Footer";
import "./App.css"; // Import du CSS global

function App() {
  return (
    <div className="container">
      <NavBar />
      <main className="content">
        <h1>Bienvenue sur MyAppTWIN5</h1>
        <p>Contenu principal ici...</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
