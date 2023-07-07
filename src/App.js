import React, { useState } from "react";
import "./App.css";
import StartPage from "./components/UI/StartPage";
import Header from "./components/UI/Header";
import Pokemon from "./components/Pokemon/Pokemon";
import InstructionsModal from "./components/UI/InstructionsModal";
import Quiz from "./components/Quiz/Quiz";
import RaceScreen from "./components/Race/RaceScreen";

/*-add styling with tailwind css
  -find ways to add animation
  -add highscores page
  -add results page after quiz ends
  -adjust app for mobile
  -find way to be attacked by opponent pokemon
  -fix attacks to be unique
  -loading image
  */

function App() {
  const [homepage, setHomePage] = useState(true);
  const [modal, setModal] = useState(true);
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [preQuizClockAtZero, setPreQuizClockAtZero] = useState(false);
  const [isUserCorrect, setIsUserCorrect] = useState()
  const [isGameOver, setIsGameOver] = useState(false)
 
  function clickHandler() {
    setHomePage(false);
  }

  function modalHandler() {
    setModal(false);
  }

  function renderQuiz() {
    setPokemonChosen(true);
  }

  function getPokeInfoHandler(pokeInfo) {
    setPokemonInfo(pokeInfo);
    console.log(pokeInfo);
  }

  function startRace(preQuizTime) {
    console.log(preQuizTime);
    if (preQuizTime) {
      setPreQuizClockAtZero(true);
    }
  }

  function wrongAnswerPenalty(answer) {
    let penaltyApplied = answer
    console.log(penaltyApplied)
    setIsUserCorrect(penaltyApplied)
  }

  function gameOver(raceFinished) {
    if (raceFinished) {
      setIsGameOver(true)
    }
  }

  return (
    <div>
      {homepage && <StartPage removeStartPage={clickHandler} />}
      {!homepage && modal && <InstructionsModal removeModal={modalHandler} />}
      {!homepage && <Header />}
      {!homepage && !pokemonChosen && (
        <Pokemon startQuiz={renderQuiz} grabPokeInfo={getPokeInfoHandler} />
      )}
      {!homepage && pokemonChosen && <Quiz preQuiz={startRace} questionPenalty={wrongAnswerPenalty} raceIsOver={isGameOver} />}
      {!homepage && pokemonChosen && <RaceScreen racerInfo={pokemonInfo} startRace={preQuizClockAtZero} applyPenalty={isUserCorrect} raceOver={gameOver} />}
    </div>
  );
}

export default App;
