import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [homepage, setHomePage] = useState(true);

  function clickHandler() {
    setHomePage(false);
  }
  return (
    <div>
      {homepage && (
        <div>
          <h1>Welcome to Poké-Race</h1>
          <Button onClick={clickHandler}>Start</Button>
        </div>
      )}
    </div>
  );
}

export default App;
