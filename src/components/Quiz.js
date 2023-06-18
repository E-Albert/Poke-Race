import React, { useState } from "react";
import pokeQuestions from "./Questions";
import Button from "./Button";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div>
      <div className="question">{pokeQuestions[currentQuestion].title}</div>
      <div className="answers">
        {pokeQuestions[currentQuestion].choices.map((choice) => (
          <Button key={choice}>{choice}</Button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
