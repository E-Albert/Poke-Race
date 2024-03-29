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
  const [opponentData, setOpponentData] = useState({})

  function userChoice(event) {
    console.log(event.target.value);
    setchosenPokemon(event.target.value);
  }

  function fetchPokeData(chosenPokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${chosenPokemon}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //add switch case here for different pokemon names
        let pokeMove;
        switch (data.name) {
          case "pikachu":
            pokeMove = "Thunderbolt";
            break;
          case "charizard":
            pokeMove = "Flamethrower";
            break;
          case "blastoise":
            pokeMove = "Hydro Pump";
            break;
          case "venusaur":
            pokeMove = "Razor Leaf";
            break;
          case "hitmonlee":
            pokeMove = "Double Kick";
            break;
          case "arbok":
            pokeMove = "Acid";
            break;
          case "alakazam":
            pokeMove = "Confusion";
            break;
          case "golem":
            pokeMove = "Earthquake";
            break;
          case "gengar":
            pokeMove = "Shadow Ball";
            break;
          default: pokeMove = "Body Slam";
        }
        console.log(pokeMove)
        //hard code pokemon move, insert into object
        const transformedData = {
          pokeName: data.name.toUpperCase(),
          pokeMoveOne: pokeMove,
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

  function saveOpponentPokeInfo(opponentInfo) {
    setOpponentData(opponentInfo)
    console.log(opponentInfo)
  }

  useEffect(() => {
    fetchPokeData(chosenPokemon);
  }, [chosenPokemon]);

  useEffect(() => {
    let bothPokeInfo = Object.assign({}, userPokemon, opponentData);
    console.log(bothPokeInfo);
    props.grabPokeInfo(bothPokeInfo);
    renderQuizButton(theOpponent);
    // eslint-disable-next-line
  }, [theOpponent, userPokemon, opponentData])

  return (
    <div className="text-center bg-blue-50/[.75] w-4/5 md:w-1/3 m-auto p-2 h-4/5 md:h-5/6">
      {showForm && (
        <form id="pokeForm" onSubmit={chooseOpponent}>
          <label>Choose your Pokemon: </label>
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
      <p>Move: {userPokemon.pokeMoveOne}</p>
      <p>Type: {userPokemon.pokeType}</p>
      <img className="w-[96px] m-auto" src={userPokemon.pokePicture} alt="pokemon facing forward" />
      <br />
      {showForm && (
        <Button type="submit" form="pokeForm">
          I choose you!
        </Button>
      )}
      {!showForm && <div>VS</div>}
      <br />
      <br />
      {theOpponent && <Opponent grabOpponentInfo={saveOpponentPokeInfo} />}
      {showQuizButton && (
        <div>
          <Button onClick={props.startQuiz}>Lets Race</Button>
        </div>
      )}
    </div>
  );
}

export default Pokemon;
