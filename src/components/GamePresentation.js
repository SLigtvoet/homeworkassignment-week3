import * as React from 'react'
import { Link } from 'react-router-dom'
import {showGuess, wrongGuessCount, isWinner, gameFinished} from '../lib/game'


export default function GamePresentation(props) {
    const winnerLoser = isWinner(props.word, props.guessed) ? ' Winner!!!' : gameFinished(props.word, props.guessed) ? "Loser!!!" : '';

  return (<div>
      
      <div class="word">{showGuess(props.word, props.guessed)}</div>
      attempt: {wrongGuessCount(props.word, props.guessed)} out of 10
        
        <div class="winnerLoser">{winnerLoser}</div>

     </div>)
}

