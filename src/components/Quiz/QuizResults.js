function QuizResults(props) {

    return (
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="">You got {props.correct} correct!</p>
        <p>You got {props.wrong} incorrect</p>
        <p>Accuracy: {(props.correct / props.total) * 100}%</p>
      </div>
    );
}

export default QuizResults