import React, { useState } from "react";

const ColorBox = ({ initialColor, colorOptions }) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    setColor(colorOptions[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: color,
          margin: "auto",
          border: "2px solid black",
        }}
      ></div>
      <button
        onClick={changeColor}
        style={{
          marginTop: "10px",
          padding: "10px 15px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Changer de couleur
      </button>
    </div>
  );
};

// ✅ Assurez-vous d'exporter le composant
export default ColorBox;
