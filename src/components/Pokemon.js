import React, { useState, useEffect } from "react";

function Pokemon() {
  const [userPokemon, setUserPokemon] = useState([]);
  const [chosenPokemon, setchosenPokemon] = useState("pikachu");

  function userChoice(event) {
    console.log(event.target.value);
    setchosenPokemon(event.target.value);
  }

  function fetchPokeData(chosenPokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${chosenPokemon}`)
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
    fetchPokeData(chosenPokemon);
  }, [chosenPokemon]);
  return (
    <div>
      <form>
        <label>Choose your Pokemon</label>
        <select onChange={userChoice}>
          <option value="pikachu">Pikachu</option>
          <option value="charizard">Charizard</option>
          <option value="blastoise">Blastoise</option>
          <option value="venusaur">Venusaur</option>
          <option value="eevee">Eevee</option>
        </select>
      </form>
      <br />
      <p>{userPokemon.pokeName}</p>
      <p>{userPokemon.pokeMoveOne}</p>
      <p>{userPokemon.pokeMoveTwo}</p>
      <p>{userPokemon.pokeType}</p>
      <img src={userPokemon.pokePicture} alt="pokemon facing forward" />
    </div>
  );
}

export default Pokemon;
