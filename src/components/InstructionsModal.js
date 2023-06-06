import "./InstructionsModal.css";
import Button from "./Button";

function InstructionsModal(props) {
  return (
    <div>
      <div className="backdrop"></div>
      <div className="modal">
        <h2>Welcome to Poké-Race</h2>
        <p>Here's how to play</p>
        <Button onClick={props.modal}>Got it!</Button>
      </div>
    </div>
  );
}

export default InstructionsModal;
