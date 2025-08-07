import React from "react";
import ButtonNumbers from "./Components/ButtonNumbers";
import ButtonOptions from "./Components/ButtonOptions";
import { getRandomOptions, shuffleArray } from "./utils/helpers";
import Congratulations from "./Components/Congratulations";
import ButtonNextPrev from "./Components/ButtonNextPrev";
function App() {
  const [questions, setQuestions] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState(Array(10).fill(null));
  const [isFinished, setIsFinished] = React.useState(false);
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,capital,region"
      );
      const countries = await res.json();
      const randomCountries = shuffleArray(countries).slice(0, 10);
      const generatedQuestions = randomCountries.map((country) => {
        const options = getRandomOptions(country, countries);
        return {
          flag: country.flags.svg,
          correct: country.name.common,
          options: shuffleArray(options),
        };
      });
      setQuestions(generatedQuestions);
    }
    fetchData();
  }, []);

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

  function handlePrevQuestion() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }
  function handleNextQuestion() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

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
          <div className=" flex items-center justify-center space-x-2 font-bold">
            {questions.map((_, index) => {
              const isAnswered = answers[index] !== null;
              const isWrong =
                isAnswered && answers[index] !== questions[index].correct;
              return (
                <ButtonNumbers
                  key={index}
                  content={index + 1}
                  onClick={() => setCurrentIndex(index)}
                  isActive={index === currentIndex}
                  isAnswered={isAnswered}
                  isWrong={isWrong}
                />
              );
            })}
          </div>
          {questions.length > 0 && (
            <>
              <h1 className="text-2xl font-bold">
                Qual o país dessa bandeira?
              </h1>
              <img
                src={questions[currentIndex].flag}
                alt="bandeira"
                className="w-32 h-20 object-contain rounded"
              />
              <div className="grid grid-cols-2 gap-6">
                {questions[currentIndex].options.map((option, i) => (
                  <ButtonOptions
                    key={i}
                    content={option}
                    onClick={() => handleAnswer(option)}
                    isSelected={answers[currentIndex] === option}
                    isCorrect={option === questions[currentIndex].correct}
                    disabled={answers[currentIndex] !== null}
                  />
                ))}
              </div>
            </>
          )}
            <div className="flex justify-between my-4 gap-28 w-full ">
          <ButtonNextPrev content="Prev" onClick={() => handlePrevQuestion()} disabled={currentIndex === 0} />
          <ButtonNextPrev content="Next" onClick={() => handleNextQuestion()} disabled={currentIndex === questions.length - 1}/>
        </div>
        </div>
      
      </div>
    </>
  );
}

export default App;
