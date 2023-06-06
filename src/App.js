import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import GamePage from './components/GamePage'

function App() {
  const [homepage, setHomePage] = useState(true);
  const [gamePage, setGamePage] = useState(false)

  function clickHandler() {
    setHomePage(false);
    setGamePage(true)
  }
  return (
    <div>
      {homepage && (
        <div className="homepage">
          <h1>Poké-Race</h1>
          <Button onClick={clickHandler}>Start</Button>
        </div>
      )}
      {gamePage && <GamePage />}
    </div>
  );
}

export default App;
