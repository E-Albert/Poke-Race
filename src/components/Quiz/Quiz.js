import React, { useState, useEffect } from "react";
import pokeQuestions from "./Questions";
import Button from "../UI/Button";
import QuizResults from "./QuizResults";

function Quiz(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCountDown, setQuizCountDown] = useState(5);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(0);
  const [numberCorrect, setNumberCorrect] = useState(0);
  const [numberWrong, setNumberWrong] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(0);

  console.log(isAnswerCorrect);
  let { raceIsOver } = props;

  function checkAnswer(event) {
    console.log(event.target.value);
    if (event.target.value === pokeQuestions[currentQuestion].answer) {
      console.log("Hooray, +1 point for you!");
      setIsAnswerCorrect(1);
      setNumberCorrect((prevNumCorrect) => prevNumCorrect + 1);
      setTotalQuestions((prevTotal) => prevTotal + 1);
    } else {
      console.log("Darn, try again next time.");
      setIsAnswerCorrect(2);
      setNumberWrong((prevNumWrong) => prevNumWrong + 1);
      setTotalQuestions((prevTotal) => prevTotal + 1);
    }
    props.questionPenalty(isAnswerCorrect);
    nextQuestion();
  }

  function nextQuestion() {
    if (currentQuestion < pokeQuestions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      console.log("gameover");
      setShowResults(true);
    }
  }

  function resetQuiz() {
    setQuizCountDown(5)
    setNumberCorrect(0)
    setNumberWrong(0)
    setShowResults(false)
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
  }, [quizCountDown]);

  useEffect(() => {
    if (raceIsOver) {
      setShowResults(true);
    }
  }, [showResults, raceIsOver]);

  let quizContent = (
    <div className="">
      <div className="mb-5">{pokeQuestions[currentQuestion].title}</div>
      <div className=" flex flex-col gap-3 w-1/2 m-auto pb-10">
        {pokeQuestions[currentQuestion].choices.map((choice) => (
          <Button key={choice} onClick={checkAnswer} value={choice}>
            {choice}
          </Button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-1/2  h-2/4 float-right text-center bg-blue-50/[.75] p-5">
      {quizCountDown === 0 && showResults === false && quizContent}
      {quizCountDown !== 0 &&
        showResults === false &&
        `The race starts in ${quizCountDown}`}
      {showResults && (
        <QuizResults
          correct={numberCorrect}
          wrong={numberWrong}
          total={totalQuestions}
          playOnceMore={props.playAgain}
          resetTheQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default Quiz;
