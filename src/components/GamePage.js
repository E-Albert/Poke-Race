import React, { useState } from "react";
import Header from "./UI/Header";
import InstructionsModal from "./UI/InstructionsModal";
import Pokemon from "./Pokemon/Pokemon";
import Quiz from "./Quiz/Quiz";

function GamePage() {
  const [modal, setModal] = useState(true);

  function modalHandler() {
    setModal(false);
  }
  return (
    <div>
      {modal && <InstructionsModal modal={modalHandler} />}
      <Header />
      <Pokemon />
      <Quiz />
    </div>
  );
}

export default GamePage;
