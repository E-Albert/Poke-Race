import React, { useState } from "react";
import "./App.css";
import StartPage from "./components/UI/StartPage";
import Header from "./components/UI/Header"
import Pokemon from "./components/Pokemon/Pokemon"
import InstructionsModal from "./components/UI/InstructionsModal"
import Quiz from "./components/Quiz/Quiz"

/*-add styling with tailwind css
  -disable form after user picks pokemon
  -make quiz come up after both pokemon are chosen
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
