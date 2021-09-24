import {React, useState} from 'react'
import { calculateWinner } from '../helpers';
import Board from './Board';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null)); 
    const [xIsNext, setXIsNext] = useState(true); 
    const winner = calculateWinner(board); 


    const handleClick = i =>{
        const boardState = [...board]

        //If there's a winner or user clicks on ocuppied square, return nothing
        if(winner || boardState[i]) return;
         // Choose X or O in a new square
         boardState[i] = xIsNext ? 'X' : 'O';
         setBoard(boardState);
         // Next player turn
         setXIsNext(!xIsNext);  

    }
    return (
        <>
            <Board squares={board} onClick={handleClick}/>
        </>
    )
}

export default Game;
