import React from 'react';
import { useRefGroups } from 'react-ref-groupie';

import withIterateState from '../with-iterate-state';

import './circles.scss';

const StatelessCircles = ({
  num,
  iterate
}) => {
  const [
    {
      circles: {
        firstCircle,
        secondCircle,
        thirdCircle
      }
    },
    {
      circles: {
        moveUp,
        moveDown
      }
    }
  ] = useRefGroups({
    circles: `
      firstCircle
      secondCircle
      thirdCircle
    `
  });

  return (
    <div
      onClick={iterate(moveDown, moveUp)}
      className="circles"
    >
      <div
        ref={firstCircle}
        className="circles__first"
      />
      <div
        ref={secondCircle}
        className="circles__second"
      >
        {num}
      </div>
      <div
        ref={thirdCircle}
        className="circles__third"
      />
    </div>
  );
};

export default withIterateState(StatelessCircles);
