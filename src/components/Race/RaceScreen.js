import React, { useState, useEffect } from "react";
import RaceBar from "./RaceBar";

let userTimer;
let opponentTimer;
function RaceScreen(props) {
  const [userRaceDistance, setUserRaceDistance] = useState(0);
  const [opponentRaceDistance, setOpponentRaceDistance] = useState(0);

  let { startRace } = props;
  let { applyPenalty } = props;

  if (userRaceDistance === 100 || opponentRaceDistance === 100) {
    clearInterval(userTimer);
      clearInterval(opponentTimer);
      props.raceOver(true)
  }    

  function startRacing(startRace) {
    console.log(startRace);
    if (startRace) {
      userTimer = setInterval(() => {
        setUserRaceDistance((prevDistance) => prevDistance + 1);
      }, 1000);
    }

    if (startRace) {
      opponentTimer = setInterval(() => {
        setOpponentRaceDistance((prevDistance) => prevDistance + 1);
      }, 1000);
    }
  }

  useEffect(() => {
    startRacing(startRace);
  }, [startRace]);

    
    useEffect(() => {
        if (applyPenalty === 2) {
     setUserRaceDistance((prevDistance) => prevDistance - 5);
  }
    }, [applyPenalty])
  return (
    <div className="w-1/2 bg-blue-50/[.75] inline-block p-2">
      <div className="poke1">
        <img src={props.racerInfo.pokePicture} alt="user pokemon" />
        <RaceBar raceFill={userRaceDistance} />
        <p>
          {props.racerInfo.pokeName}
          {userRaceDistance}
          {opponentRaceDistance}
        </p>
      </div>
      <div>VS</div>
      <div className="poke2">
        <img src={props.racerInfo.opponentPokePicture} alt="opponent pokemon" />
        <RaceBar raceFill={opponentRaceDistance} />
        <p>{props.racerInfo.opponentPokeName}</p>
      </div>
    </div>
  );
}

export default RaceScreen;
