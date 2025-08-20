import React from 'react'

const QuizQuestion = ({flag}) => {
  return (
    <>
       <h1 className="text-2xl font-bold">
                Qual o país dessa bandeira?
              </h1>
              <img
                src={flag}
                alt="bandeira"
                className="w-32 h-20 object-contain rounded"
              />
    </>
  )
}

export default QuizQuestion
