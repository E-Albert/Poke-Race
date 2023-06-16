import React, {useState, useEffect} from "react";


function Opponent() {

    const [opponentPokemon, setOpponentPokemon] = useState('')

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

    function opponentPokeData() {
        let randomPokemon = opponentArray[Math.floor(Math.random() * 10)];
        console.log(randomPokemon)
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const opponentTransformedData = {
            opponentPokeName: data.name.toUpperCase(),
            opponentPokeMoveOne: data.moves[0].move.name,
            opponentPokeMoveTwo: data.moves[1].move.name,
            opponentPokeType:
              data.types[0].type.name.charAt(0).toUpperCase() +
              data.types[0].type.name.slice(1),
            opponentPokePicture: data.sprites.front_default,
          };
          setOpponentPokemon(opponentTransformedData);
        })
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        opponentPokeData()
    },[])

    return (
      <div>
        <p>{opponentPokemon.opponentPokeName}</p>
        <p>First Attack: {opponentPokemon.opponentPokeMoveOne}</p>
        <p>Second Attack: {opponentPokemon.opponentPokeMoveTwo}</p>
        <p>Type: {opponentPokemon.opponentPokeType}</p>
        <img src={opponentPokemon.opponentPokePicture} alt="opponent pokemon facing forward" />
      </div>
    );
}

export default Opponent;
