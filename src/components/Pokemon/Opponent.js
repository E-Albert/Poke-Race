import React, { useState, useEffect } from "react";

function Opponent(props) {
  const [opponentPokemon, setOpponentPokemon] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let opponentArray = [
      "magneton",
      "magmar",
      "gyarados",
      "exeggutor",
      "hitmonchan",
      "weezing",
      "onix",
      "mr-mime",
      "clefable",
      "meowth",
    ];

    const opponentPokePicker = setTimeout(() => {
      let randomPokemon = opponentArray[Math.floor(Math.random() * 10)];
      console.log(randomPokemon);
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          console.log(data);
          let opponentMove;
          switch (data.name) {
            case "magneton":
              opponentMove = "Spark";
              break;
            case "magmar":
              opponentMove = "Fire Blast";
              break;
            case "gyarados":
              opponentMove = "Waterfall";
              break;
            case "exeggutor":
              opponentMove = "Bullet Seed";
              break;
            case "clefable":
              opponentMove = "Moonblast";
              break;
            case "hitmonchan":
              opponentMove = "Mach Punch";
              break;
            case "weezing":
              opponentMove = "Sludge Bomb";
              break;
            case "onix":
              opponentMove = "Rock Throw";
              break;
            case "mr-mime":
              opponentMove = "Psybeam";
              break;
            default:
              opponentMove = "Fury Swipes";
          }
          const opponentTransformedData = {
            opponentPokeName: data.name.toUpperCase(),
            opponentPokeMoveOne: opponentMove,
            opponentPokeType:
              data.types[0].type.name.charAt(0).toUpperCase() +
              data.types[0].type.name.slice(1),
            opponentPokePicture: data.sprites.front_default,
          };
          setOpponentPokemon(opponentTransformedData);
          props.grabOpponentInfo(opponentTransformedData);
        })
        .catch((err) => console.log(err));
    }, 3000);

    return () => {
      clearTimeout(opponentPokePicker);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {isLoading && <div>CHOOSING OPPONENT...</div>}
      {!isLoading && (
        <div>
          <p>{opponentPokemon.opponentPokeName}</p>
          <p>Move: {opponentPokemon.opponentPokeMoveOne}</p>
          <p>Type: {opponentPokemon.opponentPokeType}</p>
          <img className="m-auto"
            src={opponentPokemon.opponentPokePicture}
            alt="opponent pokemon facing forward"
          />
        </div>
      )}
    </div>
  );
}

export default Opponent;
