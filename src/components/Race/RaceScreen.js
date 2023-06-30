import React, {useState, useEffect} from "react";
import RaceBar from "./RaceBar";
import Button from "../UI/Button";

let userTimer;
let opponentTimer
function RaceScreen(props) {

    const [userRaceDistance, setUserRaceDistance] = useState(0)
    const [opponentRaceDistance, setOpponentRaceDistance] = useState(0)

    if (userRaceDistance === 100 || opponentRaceDistance === 100) {
        clearInterval(userTimer)
        clearInterval(opponentTimer)
    }
  
    let { startRace } = props
    
    function startRacing(startRace) {
        console.log(startRace)
        if (startRace) {
            userTimer = setInterval(() => {
           setUserRaceDistance(prevDistance=> prevDistance + 1)
        }, 1000)}
        
        if (startRace) {
          opponentTimer = setInterval(() => {
            setOpponentRaceDistance((prevDistance) => prevDistance + 1);
          }, 1000);
        }
        
       
    }


    useEffect(() => {
        startRacing(startRace)

    }, [startRace])
  return (
    <div>
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
        <Button onClick={startRacing}>RUN!</Button>
      </div>
    </div>
  );
}

export default RaceScreen;
