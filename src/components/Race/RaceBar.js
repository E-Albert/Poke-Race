import './RaceBar.css'

function RaceBar(props) {

    

    return (
        <div className="raceBar">
            <div className="raceBarOuter">
                
                <div className="raceBarFill" style={{
                    width: props.raceFill + '%',
                }}></div>
            </div>
        </div>
    )
}

export default RaceBar