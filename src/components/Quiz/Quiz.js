import React, { useState, useEffect } from "react";
import pokeQuestions from "./Questions";
import Button from "../UI/Button";

function Quiz(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCountDown, setQuizCountDown] = useState(5)

  function checkAnswer(event) {
    console.log(event.target.value);
    if (event.target.value === pokeQuestions[currentQuestion].answer) {
      console.log("Hooray, +1 point for you!");
    } else {
      console.log("Darn, try again next time.");
    }
    nextQuestion();
  }

  function nextQuestion() {
    if (currentQuestion < pokeQuestions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      console.log("gameover");
    }
  }

  useEffect(() => {
    const countTimer =
      quizCountDown > 0 &&
      setInterval(() => setQuizCountDown((prevCount) => prevCount - 1), 1000);
    if (quizCountDown === 0) {
      props.preQuiz(true);
    }

    return () => clearInterval(countTimer);
    // eslint-disable-next-line
  }, [quizCountDown])
  
  let quizContent = (
    <div>
      <div className="question">{pokeQuestions[currentQuestion].title}</div>
      <div className="answers">
        {pokeQuestions[currentQuestion].choices.map((choice) => (
          <Button key={choice} onClick={checkAnswer} value={choice}>
            {choice}
          </Button>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {quizCountDown === 0? quizContent : `The race starts in ${quizCountDown}`}
    </div>
  );
}

export default Quiz;
