import React, { useState, useEffect } from "react";
import Button from "./Button";
import Opponent from "./Opponent";
import './Pokemon.css'

function Pokemon() {
  const [userPokemon, setUserPokemon] = useState([]);
  const [chosenPokemon, setchosenPokemon] = useState("pikachu");
  const [theOpponent, setTheOpponent] = useState(false)


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
          pokeName: data.name.toUpperCase(),
          pokeMoveOne: data.moves[0].move.name,
          pokeMoveTwo: data.moves[1].move.name,
          pokeType:
            data.types[0].type.name.charAt(0).toUpperCase() +
            data.types[0].type.name.slice(1),
          pokePicture: data.sprites.front_default,
        };
        setUserPokemon(transformedData);
      })
      .catch((err) => console.log(err));
  }

  function chooseOpponent(event) {
    event.preventDefault()
    console.log('working so far')
    setTheOpponent(true)
  }

  useEffect(() => {
    fetchPokeData(chosenPokemon);
  }, [chosenPokemon]);
  return (
    <div className="pokeDiv">
      <form id="pokeForm" onSubmit={chooseOpponent}>
        <label>Choose your Pokemon</label>
        <select onChange={userChoice}>
          <option value="pikachu">Pikachu</option>
          <option value="charizard">Charizard</option>
          <option value="blastoise">Blastoise</option>
          <option value="venusaur">Venusaur</option>
          <option value="hitmonlee">Hitmonlee</option>
          <option value="arbok">Arbok</option>
          <option value="golem">Golem</option>
          <option value="alakazam">Alakazam</option>
          <option value="gengar">Gengar</option>
          <option value="snorlax">Snorlax</option>
        </select>
      </form>
      <br />
      <p>{userPokemon.pokeName}</p>
      <p>First Attack: {userPokemon.pokeMoveOne}</p>
      <p>Second Attack: {userPokemon.pokeMoveTwo}</p>
      <p>Type: {userPokemon.pokeType}</p>
      <img src={userPokemon.pokePicture} alt="pokemon facing forward" />
      <br />
      <Button type="submit" form="pokeForm" >I choose you!</Button>
      <br />
      <br />
      {theOpponent && <Opponent />}
    </div>
  );
}

//figure out for useEffect is running twice and make quiz. Find way to start quiz

export default Pokemon;
