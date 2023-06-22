import React, { useState } from "react";
import "./App.css";
import StartPage from "./components/UI/StartPage";
import Header from "./components/UI/Header"
import Pokemon from "./components/Pokemon/Pokemon"
import InstructionsModal from "./components/UI/InstructionsModal"
import Quiz from "./components/Quiz/Quiz"

/*-add styling with tailwind css
  -disable form after user picks pokemon
  -make pokemon disappear when quiz starts
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

  function clickHandler() {
    setHomePage(false);
  }

  function modalHandler() {
    setModal(false);
  }

  return (
    <div>
      {homepage && <StartPage removeStartPage={clickHandler} />}
      {!homepage && modal && <InstructionsModal removeModal={modalHandler} />}
      {!homepage && <Header />}
      {!homepage && <Pokemon />}
      {!homepage && <Quiz />}
    </div>
  );
}

export default App;
