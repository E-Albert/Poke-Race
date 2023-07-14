import './RaceBar.css'

function RaceBar(props) {

    

    return (
      <div className="raceBar">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full rounded-3xl overflow-hidden">
          <div
            className="raceBarFill"
            style={{
              width: props.raceFill + "%",
            }}
          ></div>
        </div>
      </div>
    );
}

export default RaceBar