import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import GamePage from './components/GamePage'

function App() {
  const [homepage, setHomePage] = useState(true);

  function clickHandler() {
    setHomePage(false);
  }
  return (
    <div>
      {homepage && (
        <div className="homepage">
          <h1>Poké-Race</h1>
          <Button onClick={clickHandler}>Start</Button>
        </div>
      )}
      {!homepage && <GamePage />}
    </div>
  );
}

export default App;
