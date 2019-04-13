import React from 'react';
import { useRefGroups } from 'react-ref-groupie';

import withIterateState from '../with-iterate-state';

import './squares.scss';

const StatelessSquares = ({
  num,
  iterate
}) => {
  const [
    {
      squares: {
        firstSquare,
        secondSquare,
        thirdSquare,
      }
    },
    {
      squares: {
        moveLeft,
        moveRight
      }
    }
  ] = useRefGroups({
    squares: `
      firstSquare
      secondSquare
      thirdSquare
    `
  });

  return (
    <div
      onClick={iterate(moveRight, moveLeft)}
      className="squares"
    >
      <div
        ref={firstSquare}
        className="squares__first"
      />
      <div
        ref={secondSquare}
        className="squares__second"
      >
        {num}
      </div>
      <div
        ref={thirdSquare}
        className="squares__third"
      />
    </div>
  );
};

export default withIterateState(StatelessSquares);
