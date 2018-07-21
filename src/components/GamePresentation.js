import * as React from 'react'
import { Link } from 'react-router-dom'
import {showGuess, wrongGuessCount, isWinner, gameFinished} from '../lib/game'


export default function GamePresentation(props) {
    const winnerLoser = isWinner(props.word, props.guessed) ? ' winner' : gameFinished(props.word, props.guessed) ? "loser" : '';


  return (<div>
      {showGuess(props.word, props.guessed)}
      attempt: {wrongGuessCount(props.word, props.guessed)} out of 6
        <button onClick={props.newGame}>Start New Game</button>
        {winnerLoser}

     </div>)

}

