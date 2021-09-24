import React from 'react';
import Square from './Square';
import PropTypes from 'prop-types'; 

const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

Board.propTypes={
  squares: PropTypes.array,
  onClick: PropTypes.func,
};


export default Board;
