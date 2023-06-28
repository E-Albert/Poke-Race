import React, {useState, useEffect} from "react";
import RaceBar from "./RaceBar";
import Button from "../UI/Button";

function RaceScreen(props) {

    const [raceDistance, setRaceDistance] = useState(0)

  
    let { startRace } = props
    
    function startRacing(startRace) {
        console.log(startRace)
       if (startRace) {let timer = setInterval(() => {
           setRaceDistance(prevDistance=> prevDistance + 1)
        }, 1000)}
       
    }


    useEffect(() => {
        startRacing(startRace)

    }, [startRace])
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
        <Button onClick={startRacing}>RUN!</Button>
      </div>
    </div>
  );
}

export default RaceScreen;
