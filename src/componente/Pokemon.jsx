import { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [pokId, setPokID] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokId}`) // ✅ Utilisation correcte de backticks
      .then((response) => response.json()) // ✅ Correction de "reponse" en "response"
      .then((data) => setPokemon(data))
      .catch((error) => console.error("Error fetching:", error));
  }, [pokId]); // ✅ Ajout de pokId dans le tableau des dépendances pour refetch quand il change

  return (
    <> 
      <input 
        type="number" 
        value={pokId} 
        onChange={(e) => setPokID(e.target.value)} 
      /> 

      {pokemon ? ( // ✅ Vérification correcte de "pokemon" (et non "Pokemon")
        <div>
          <h1>Name: {pokemon.name}</h1>
          <img 
            src={pokemon.sprites.front_default} // ✅ Correction de <image> en <img>
            alt={pokemon.name} 
          />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Pokemon;
