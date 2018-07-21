import * as React from 'react'
import { connect } from 'react-redux'
import GamePresentation from './GamePresentation'
import {makeGuess, newGame} from '../actions/game'

class GameContainer extends React.PureComponent {

    handleSubmit = (event) => {
        event.preventDefault(),
        this.props.makeGuess(this.refs.guessInput.value)
        this.refs.guessInput.value = ""
        this.refs.guessInput.focus();
    }

    render(){
            return (
            <div>
                <h1>Let's Play!</h1>
                <GamePresentation word={this.props.word} guessed={this.props.guessed} />
                <form onSubmit={this.handleSubmit}>
                <label>
                    guess letter:
                    <input type="text" name='name' ref="guessInput" maxLength="1" />
                </label>
                    <input type="submit" value="submit" />
                </form>
                
                <button onClick={this.props.newGame}>Start New Game</button>

            </div>
                    
        )
    }
}

const mapStateToProps = (state) => {
    return {
      word: state.game.word,
      guessed: state.game.guessed
    }
  }

export default connect(mapStateToProps, { makeGuess, newGame })(GameContainer)

        
    
