import "./InstructionsModal.css";
import Button from "./Button";

function InstructionsModal(props) {
  return (
    <div>
      <div className="backdrop"></div>
      <div className="modal">
        <h2>Welcome to Poké-Race</h2>
        <br />
        <h4>Here's how to play</h4>
        <p>
          Select a Pokemon to race with. Your opponent will be randomly chosen.
          Answer questions correctly to avoid being attacked by your opponent.
          First to the finish line wins!
        </p>
        <br />
        <Button onClick={props.removeModal}>Got it!</Button>
      </div>
    </div>
  );
}

export default InstructionsModal;
