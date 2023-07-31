function RaceWinner(props) {
    return (
        <div className="text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1>WINNER!</h1>
            <img className="m-auto" src={props.pokeWinnerPicture} alt="winning pokemon" />
            <p>{props.pokeWinnerName} </p>
        </div>
    )
}

export default RaceWinner