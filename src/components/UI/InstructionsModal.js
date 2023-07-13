import "./InstructionsModal.css";
import Button from "./Button";

function InstructionsModal(props) {
  return (
    <div>
      <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black/[.75]"></div>
      <div className="bg-blue-50 text-center z-50 w-2/5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl p-10">
        <h2 className="text-2xl">Welcome to Poké-Race</h2>
        <br />
        <h4 className="underline mb-3">Here's how to play</h4>
        <p>
          Select a Pokemon to race with. Your opponent will be randomly chosen.
          Answer questions correctly to avoid being attacked by your opponent. Five correct answers in a row allows you to attack your opponent.
          First to the finish line wins!
        </p>
        <br />
        <Button onClick={props.removeModal}>Got it!</Button>
      </div>
    </div>
  );
}

export default InstructionsModal;
