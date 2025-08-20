import React from "react";
import ButtonNumbers from "./Components/ButtonNumbers";
import ButtonOptions from "./Components/ButtonOptions";
import Congratulations from "./Components/Congratulations";
import ButtonNextPrev from "./Components/ButtonNextPrev";
import useQuizData from "./hooks/useQuizData";
import QuizHeader from "./Components/QuizHeader";
import QuizQuestion from "./Components/QuizQuestion";
import QuizOptions from "./Components/QuizOptions";
import QuizNavigation from "./Components/QuizNavigation";
function App() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState(Array(10).fill(null));
  const [isFinished, setIsFinished] = React.useState(false);
  const { questions, error, loading } = useQuizData(10);

  function handleAnswer(option) {
    const updated = [...answers];
    updated[currentIndex] = option;
    setAnswers(updated);
    if (updated.every((ans) => ans !== null)) {
      setIsFinished(true);
    }
  }

  function resetQuiz() {
    setAnswers(Array(10).fill(null));
    setCurrentIndex(0);
    setIsFinished(false);
    window.location.reload();
  }



  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>Error: {error} </p>;
  if (isFinished) {
    const score = answers.reduce((acc, val, i) => {
      return val === questions[i].correct ? acc + 1 : acc;
    }, 0);
    return <Congratulations score={score} onRestart={resetQuiz} />;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center  font-sans text-white ">
        <div className="flex flex-col justify-center items-center gap-10 w-[60%] h-auto p-8 bg-indigo-900 rounded-2xl">
          <QuizHeader
            questions={questions}
            answers={answers}
            currentIndex={currentIndex}
            onSelect={setCurrentIndex}
          />
          {questions.length > 0 && (
            <>
              <QuizQuestion flag={questions[currentIndex].flag} />
              <QuizOptions
                options={questions[currentIndex].options}
                correct={questions[currentIndex].correct}
                selected={answers[currentIndex]}
                onAnswer={handleAnswer}
              />
            </>
          )}
          <QuizNavigation onPrev={() => setCurrentIndex((i) => Math.max(0, i -1))} onNext={() => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))} disablePrev={currentIndex === 0} disableNext={currentIndex === questions.length - 1}/>
        </div>
      </div>
    </>
  );
}

export default App;
