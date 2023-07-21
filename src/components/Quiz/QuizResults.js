import Button from "../UI/Button";

function QuizResults(props) {

  function resetGame() {
props.playOnceMore();
props.resetTheQuiz();
  }

  return (
    <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <p className="">You got {props.correct} correct!</p>
      <p>You got {props.wrong} incorrect</p>
      <p>Accuracy: {Math.round((props.correct / props.total) * 100)}%</p>
      <Button
        onClick={resetGame}
      >
        Play again
      </Button>
    </div>
  );
}

export default QuizResults;
