function QuizResults(props) {

    return (
      <div>
            <p>You got {props.correct} right!</p>
            <p>You got {props.wrong} incorrect</p>
            <p>Accuracy: {(props.correct / props.total) * 100}%</p>
      </div>
    );
}

export default QuizResults