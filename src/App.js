import React, { useState } from "react";
import "./App.css";
import Button from "./components/UI/Button";
import GamePage from "./components/GamePage";

/*-add styling with tailwind css
  -disable form after user picks pokemon
  -make quiz come up after both pokemon are chosen
  -find way to make the app a race
  -fix attacks to be unique
  -loading image
  */

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
