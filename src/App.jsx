import React from "react";
import NavBar from "./componente/navbar/NavBar";
import Footer from "./componente/footer/Footer";
import "./App.css"; // Import du CSS global
import CounterF from "./componente/CounterF";
import CounterC from "./componente/CounterC";
import Pokemon from "./componente/Pokemon";
import Ex2 from "./componente/Ex2";
import ColorBox from "./componente/ColorBox";
import NotesManager from "./componente/NotesManager";
import TodoList from "./componente/TodoList ";




function App() {
  return (
    <div className="container">
      <NavBar />
      <main className="content">
        <h1>Bienvenue sur MyAppTWIN5</h1>
        <p>Contenu principal ici...</p>
      </main>
      <Ex2 />
      <CounterC counter={10} step={2} />
      <CounterF />
     <Pokemon/>
     <h2>Exercice : Changement de couleur dynamique</h2>
      <ColorBox 
        initialColor="#ff5733" 
        colorOptions={["#ff5733", "#33ff57", "#5733ff", "#ffd700", "#ff33a8", "#00ffff"]}
      />

       <NotesManager initialNotes={[12, 15, 8]} />

       < TodoList initialTasks={[{ name: 'Finir le projet React', priority: 'Haute', completed: false }]}/>
  

   
      <Footer />
     
    </div>
  );
}

export default App;
