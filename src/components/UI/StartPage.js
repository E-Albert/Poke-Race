import Button from "./Button";

function StartPage(props) {
    return (
      <div className="homepage">
        <h1 className="text-3xl">Poké-Race</h1>
        <Button onClick={props.removeStartPage}>Start</Button>
      </div>
    );
}

export default StartPage