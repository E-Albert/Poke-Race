import React, { useState, useEffect } from "react";
import RaceBar from "./RaceBar";
import RaceWinner from "./RaceWinner";

let userTimer;
let opponentTimer;

function RaceScreen(props) {
  const [userRaceDistance, setUserRaceDistance] = useState(0);
  const [opponentRaceDistance, setOpponentRaceDistance] = useState(0);
  const [displayWinner, setDisplayWinner] = useState(false)
  const [pokeWinner, setPokeWinner] = useState({})

  let { startRace } = props;
  let { applyPenalty } = props;
  let { raceOver } = props;
  let { racerInfo } = props;
  let { userIsAttacking } = props;

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
    if (userRaceDistance === 100) {
      setDisplayWinner(true)
      clearInterval(userTimer);
      clearInterval(opponentTimer);
      raceOver(true);
      setPokeWinner({
        name: racerInfo.pokeName,
        picture: racerInfo.pokePicture,
      });
    }    

    if (opponentRaceDistance === 100) {
      setDisplayWinner(true);
      clearInterval(userTimer);
      clearInterval(opponentTimer);
      raceOver(true);
      setPokeWinner({
        name: racerInfo.opponentPokeName,
        picture: racerInfo.opponentPokePicture,
      });
    }  
    
  }, [userRaceDistance, opponentRaceDistance, raceOver, racerInfo])

    useEffect(() => {
        if (applyPenalty === 2) {
     setUserRaceDistance((prevDistance) => prevDistance - 5);
  }
    }, [applyPenalty])
  
  useEffect(() => {
    if (userIsAttacking === true) {
      setOpponentRaceDistance((prevDistance) => prevDistance - 10);
    }
  }, [userIsAttacking]);

  return (
    <div className="m-auto w-4/5 md:w-1/2 h-[45%] md:h-1/2 bg-blue-50/[.75] md:inline-block p-2 mb-1">
      {!displayWinner &&
     <div>   
      <div className="">
        <img src={props.racerInfo.pokePicture} alt="user pokemon" />
        <RaceBar raceFill={userRaceDistance} />
        <p className="mb-10">
          {props.racerInfo.pokeName}
          {/* {userRaceDistance}
          {opponentRaceDistance} */}
        </p>
      </div>
      <div className="text-center">VS</div>
      <div className="">
        <img src={props.racerInfo.opponentPokePicture} alt="opponent pokemon" />
        <RaceBar raceFill={opponentRaceDistance} />
        <p>{props.racerInfo.opponentPokeName}</p>
          </div>
      </div>    
      }
      {displayWinner && <RaceWinner pokeWinnerName={pokeWinner.name} pokeWinnerPicture={pokeWinner.picture} />}
    </div>
  );
}

export default RaceScreen;
