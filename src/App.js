import React, { useState } from "react";
import "./App.css";
import StartPage from "./components/UI/StartPage";
import Header from "./components/UI/Header"
import Pokemon from "./components/Pokemon/Pokemon"
import InstructionsModal from "./components/UI/InstructionsModal"
import Quiz from "./components/Quiz/Quiz"
import RaceScreen from "./components/Race/RaceScreen";

/*-add styling with tailwind css
  -save pokemon data and make them appear on the side(top on mobile)
  -make quiz come up after both pokemon are chosen
  -set timer and add/subtract time based on user answer
  -find ways to add animation
  -add highscores page
  -add results page after quiz ends
  -adjust app for mobile
  -add countdown right before quiz starts
  -find way to be attacked by opponent pokemon
  -find way to make the app a race
  -fix attacks to be unique
  -loading image
  */


function App() {
  const [homepage, setHomePage] = useState(true);
  const [modal, setModal] = useState(true);
  const [pokemonChosen, setPokemonChosen] = useState(false)
  const [pokemonInfo, setPokemonInfo] = useState({})

  function clickHandler() {
    setHomePage(false);
  }

  function modalHandler() {
    setModal(false);
  }

  function renderQuiz() {
    setPokemonChosen(true)
  }

  function getPokeInfoHandler(pokeInfo) {
    setPokemonInfo(pokeInfo)
    console.log(pokeInfo)
  }


  return (
    <div>
      {homepage && <StartPage removeStartPage={clickHandler} />}
      {!homepage && modal && <InstructionsModal removeModal={modalHandler} />}
      {!homepage && <Header />}
      {!homepage && !pokemonChosen && <Pokemon startQuiz={renderQuiz} grabPokeInfo={getPokeInfoHandler} />}
      {!homepage && pokemonChosen && <Quiz />}
      {!homepage && pokemonChosen && <RaceScreen racerInfo={pokemonInfo} />}
    </div>
  );
}

export default App;
