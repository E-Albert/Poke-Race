import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import Opponent from "./Opponent";
import "./Pokemon.css";

function Pokemon(props) {
  const [userPokemon, setUserPokemon] = useState([]);
  const [chosenPokemon, setchosenPokemon] = useState("pikachu");
  const [theOpponent, setTheOpponent] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showQuizButton, setShowQuizButton] = useState(false)

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
    event.preventDefault();
    console.log("working so far");
    setShowForm(false);
    setTheOpponent(true);
  }

  function renderQuizButton(theOpponent) {
    if (theOpponent) {
      setTimeout(() => {
        setShowQuizButton(true)
      }, 4000) 
    }
  }

  useEffect(() => {
    fetchPokeData(chosenPokemon);
  }, [chosenPokemon]);

  useEffect(() => {
    renderQuizButton(theOpponent)
  }, [theOpponent])

  return (
    <div className="pokeDiv">
      {showForm && (
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
      )}
      <br />
      <p>{userPokemon.pokeName}</p>
      <p>First Attack: {userPokemon.pokeMoveOne}</p>
      <p>Second Attack: {userPokemon.pokeMoveTwo}</p>
      <p>Type: {userPokemon.pokeType}</p>
      <img src={userPokemon.pokePicture} alt="pokemon facing forward" />
      <br />
      {showForm && (
        <Button type="submit" form="pokeForm">
          I choose you!
        </Button>
      )}
      {!showForm && <div>VS</div>}
      <br />
      <br />
      {theOpponent && <Opponent />}
      {showQuizButton && (
        <div>
          <Button onClick={props.startQuiz}>Lets Race</Button>
        </div>
      )}
    </div>
  );
}

//Find way to start quiz

export default Pokemon;
