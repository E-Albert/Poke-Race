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
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0)
  const [shuffledQuestions, setShuffledQuestions] = useState([])

  console.log(isAnswerCorrect);
  let { raceIsOver } = props;
  let { userAttack } = props;

  function checkAnswer(event) {
    console.log(event.target.value);
    if (event.target.value === shuffledQuestions[currentQuestion].answer) {
      console.log("Hooray, +1 point for you!");
      setIsAnswerCorrect(1);
      setNumberCorrect((prevNumCorrect) => prevNumCorrect + 1);
      setTotalQuestions((prevTotal) => prevTotal + 1);
      setConsecutiveCorrect((prevTotal) => prevTotal + 1)
    } else {
      console.log("Darn, try again next time.");
      setIsAnswerCorrect(2);
      setNumberWrong((prevNumWrong) => prevNumWrong + 1);
      setTotalQuestions((prevTotal) => prevTotal + 1);
      setConsecutiveCorrect(0)
    }
    props.questionPenalty(isAnswerCorrect);
    console.log('total questions: ' + totalQuestions)
    nextQuestion();
  }
  console.log(consecutiveCorrect)

  function nextQuestion() {
    if (currentQuestion < shuffledQuestions.length - 1) {
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

  useEffect(() => {
    if (consecutiveCorrect === 5) {
      userAttack(true);
      setConsecutiveCorrect(0);
    }
  }, [consecutiveCorrect, userAttack])

  useEffect(() => {
    const shuffled = [...pokeQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledQuestions(shuffled);
  }, [])

  // let quizContent = (
  //   <div className="">
  //     <div className="mb-5">{shuffledQuestions[currentQuestion].title}</div>
  //     <div className=" flex flex-col gap-3 w-1/2 m-auto pb-10">
  //       {shuffledQuestions[currentQuestion].choices.map((choice) => (
  //         <Button key={choice} onClick={checkAnswer} value={choice}>
  //           {choice}
  //         </Button>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="overflow-scroll w-4/5 m-auto md:w-1/2  h-2/5 md:h-1/2 md:float-right text-center bg-blue-50/[.75] p-5">
      {quizCountDown === 0 && showResults === false && (
        <div className="">
          <div className="mb-5">{shuffledQuestions[currentQuestion].title}</div>
          <div className=" flex flex-col gap-3 w-1/2 m-auto pb-10">
            {shuffledQuestions[currentQuestion].choices.map((choice) => (
              <Button key={choice} onClick={checkAnswer} value={choice}>
                {choice}
              </Button>
            ))}
          </div>
        </div>
      )}
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
