import React from 'react';
import ButtonNextPrev from './ButtonNextPrev';

const QuizNavigation = ({onPrev, onNext, disablePrev, disableNext}) => {
  return (
     <div className="flex justify-between my-4  w-full ">
            <ButtonNextPrev
              content="Prev"
              onClick={onPrev}
              disabled={disablePrev}
            />
            <ButtonNextPrev
              content="Next"
              onClick={onNext}
              disabled={disableNext}
            />
          </div>
  )
}

export default QuizNavigation
