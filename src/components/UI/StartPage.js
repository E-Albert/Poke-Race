import Button from "./Button";

function StartPage(props) {
    return (
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl text-slate-200">Poké-Race</h1>
        <Button onClick={props.removeStartPage}>Start</Button>
      </div>
    );
}

export default StartPage