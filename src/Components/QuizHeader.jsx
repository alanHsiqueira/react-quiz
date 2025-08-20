import React from 'react'
import ButtonNumbers from './ButtonNumbers';
const QuizHeader = ({questions, answers, currentIndex, onSelect}) => {
  return (
   <div className=" flex items-center justify-center space-x-2 font-bold">
            {questions.map((_, index) => {
              const isAnswered = answers[index] !== null;
              const isWrong =
                isAnswered && answers[index] !== questions[index].correct;
              return (
                <ButtonNumbers
                  key={index}
                  content={index + 1}
                  onClick={() => onSelect(index)}
                  isActive={index === currentIndex}
                  isAnswered={isAnswered}
                  isWrong={isWrong}
                />
              );
            })}
          </div>
  )
}

export default QuizHeader
