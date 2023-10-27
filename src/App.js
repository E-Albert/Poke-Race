import React, { useState, useEffect } from "react";
import "./App.css";
import StartPage from "./components/UI/StartPage";
import Header from "./components/UI/Header";
import Pokemon from "./components/Pokemon/Pokemon";
import InstructionsModal from "./components/UI/InstructionsModal";
import Quiz from "./components/Quiz/Quiz";
import RaceScreen from "./components/Race/RaceScreen";


function App() {
  const [homepage, setHomePage] = useState(true);
  const [modal, setModal] = useState(true);
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [preQuizClockAtZero, setPreQuizClockAtZero] = useState(false);
  // const [isUserCorrect, setIsUserCorrect] = useState()
  const [isGameOver, setIsGameOver] = useState(false)
  const [attackOpponent, setAttackOpponent] = useState(false)
  const [attackUser, setAttackUser] = useState(false)
 
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

  // function wrongAnswerPenalty(answer) {
  //   let penaltyApplied = answer
  //   console.log(penaltyApplied)
  //   setIsUserCorrect(penaltyApplied)
  // }

  function attackOpponentHandler(answer) {
    let userAttack = answer
    console.log(userAttack + ' keep going')
    setAttackOpponent(userAttack)
  }

  function attackUserHandler(answer) {
    let opponentAttack = answer
    console.log(opponentAttack + ' you\'re doing great sweetie')
    setAttackUser(opponentAttack)
  }

  function gameOver(raceFinished) {
    if (raceFinished) {
      setIsGameOver(true)
    }
  }

  function playAgain() {
    setPokemonChosen(false)
    setPreQuizClockAtZero(false)
    setIsGameOver(false)
  }

  useEffect(() => {
    setAttackOpponent(false)
  }, [attackOpponent])

  useEffect(() => {
    setAttackUser(false)
  }, [attackUser])

  return (
    <div className="h-screen overflow-scroll">
      {homepage && <StartPage removeStartPage={clickHandler} />}
      {!homepage && modal && <InstructionsModal removeModal={modalHandler} />}
      {!homepage && <Header />}
      {!homepage && !pokemonChosen && (
        <Pokemon startQuiz={renderQuiz} grabPokeInfo={getPokeInfoHandler} />
      )}
        {!homepage && pokemonChosen && (
          <RaceScreen
            racerInfo={pokemonInfo}
            startRace={preQuizClockAtZero}
            // applyPenalty={isUserCorrect}
          raceOver={gameOver}
          userIsAttacking={attackOpponent}
          opponentIsAttacking={attackUser}
          />
        )}
      {!homepage && pokemonChosen && (
        <Quiz
          preQuiz={startRace}
          // questionPenalty={wrongAnswerPenalty}
          raceIsOver={isGameOver}
          playAgain={playAgain}
          userAttack={attackOpponentHandler}
          opponentAttack={attackUserHandler}
        />
      )}
    </div>
  );
}

export default App;
