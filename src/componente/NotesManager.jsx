import React, { useState } from "react";

const NotesManager = ({ initialNotes }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  // Ajouter une note
  const addNote = () => {
    const noteValue = parseFloat(newNote);
    if (!isNaN(noteValue) && noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote("");
    } else {
      alert("Veuillez entrer une note valide entre 0 et 20.");
    }
  };

  // Supprimer une note par son index
  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // Calculer la moyenne des notes
  const average = notes.length > 0 ? (notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(2) : "N/A";

  return (
    <div style={{ textAlign: "center", maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Gestionnaire de Notes</h2>

      {/* Champ d'entrée pour ajouter une note */}
      <input
        type="number"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Entrez une note (0-20)"
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={addNote} style={{ padding: "5px 10px", cursor: "pointer", background: "#007bff", color: "white", border: "none", borderRadius: "5px" }}>
        Ajouter
      </button>

      {/* Liste des notes */}
      <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
        {notes.map((note, index) => (
          <li key={index} style={{ margin: "5px 0", padding: "5px", border: "1px solid #ccc", borderRadius: "5px", display: "flex", justifyContent: "space-between" }}>
            {note}
            <button onClick={() => removeNote(index)} style={{ marginLeft: "10px", background: "red", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>

      {/* Affichage de la moyenne */}
      <h3>Moyenne des notes : {average}</h3>
    </div>
  );
};

export default NotesManager;
