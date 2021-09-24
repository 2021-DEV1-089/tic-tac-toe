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

    const startGame = () =>{

        //Chek if game is already started 
        const gameStatus=(_board) => {
            return _board.includes('X') || _board.includes('O') ? 'Reset Game' : 'Start Game'
        }
        return <button className='gameBtn' onClick={()=>setBoard(Array(9).fill(null))}>{gameStatus(board)}</button>
    }
    return (
        <>
                    <h2 className='gameResult'>
            {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O' )}
            </h2>
            <Board className='board' squares={board} onClick={handleClick}/>
            {startGame()}


        </>
    )
}

export default Game;
