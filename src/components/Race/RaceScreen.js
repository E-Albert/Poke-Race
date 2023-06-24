import React, {useState} from "react";
import RaceBar from "./RaceBar";
import Button from "../UI/Button";

function RaceScreen(props) {

    const [raceDistance, setRaceDistance] = useState(0)

    function startRace() {
        let timer = setInterval(() => {
            console.log(raceDistance)
             setRaceDistance(prevDistance=> prevDistance + 1)
        }, 1000)
    }
  return (
    <div>
      <div className="poke1">
        <img src={props.racerInfo.pokePicture} alt="user pokemon" />
        <RaceBar raceFill={raceDistance} />
        <p>
          {props.racerInfo.pokeName}
          {raceDistance}
        </p>
      </div>
      <div>VS</div>
      <div className="poke2">
        <img src={props.racerInfo.opponentPokePicture} alt="opponent pokemon" />
        <RaceBar raceFill={raceDistance} />
        <p>{props.racerInfo.opponentPokeName}</p>
        <Button onClick={startRace}>RUN!</Button>
      </div>
    </div>
  );
}

export default RaceScreen;
