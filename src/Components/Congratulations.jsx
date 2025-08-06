import React from 'react'

const Congratulations = ({score, onRestart}) => {
  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-4'>
      <h1 className='text-3xl font-bold'>Congratulations!</h1>
      <p>You scored {score} out of 10 </p>
      <button onClick={onRestart} className='bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-xl'>Play Again</button>
    </div>
  )
}

export default Congratulations
