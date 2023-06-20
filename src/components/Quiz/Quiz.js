import React, { useState } from "react";
import pokeQuestions from "./Questions";
import Button from "../UI/Button";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

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

  return (
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
}

export default Quiz;
