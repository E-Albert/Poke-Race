import React, { useState, useEffect } from "react";

function Pokemon() {
  const [userPokemon, setUserPokemon] = useState([]);

    
  function fetchPokeData(what) {
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          const transformedData = {
            pokeName: data.name,
            pokeMoveOne: data.moves[0].move.name,
            pokeMoveTwo: data.moves[1].move.name,
            pokeType: data.types[0].type.name,
            pokePicture: data.sprites.front_default,
          };
        setUserPokemon(transformedData);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchPokeData();
  }, []);

  return (
    <div>
      <p>{userPokemon.pokeName}</p>
      <p>{userPokemon.pokeMoveOne}</p>
      <p>{userPokemon.pokeMoveTwo}</p>
          <p>{userPokemon.pokeType}</p>
          <img src={userPokemon.pokePicture} alt='pokemon facing forward' />
    </div>
  );
}

export default Pokemon;
