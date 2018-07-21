import * as React from 'react'
// import * as request from 'superagent'
import { connect } from 'react-redux'
import { showGuess } from '../lib/game'
import GamePresentation from './GamePresentation'
import GuessForm from './GuessForm'
import {makeGuess, newGame} from '../actions/game'



class GameContainer extends React.PureComponent {

    handleSubmit = (event) => {
        event.preventDefault(),
        this.props.makeGuess(this.refs.guessInput.value)
        this.refs.guessInput.value = ""
    }


    render(){
              return (
                <div>
                <h1>Let's Play!</h1>
            
            <form onSubmit={this.handleSubmit}>
            <label>
                guess letter:
                <input type="text" name='name' ref="guessInput" maxLength="1" />
            </label>
                <input type="submit" value="submit" />
            </form>
            <GamePresentation word={this.props.word} guessed={this.props.guessed} newGame={this.props.newGame} />
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

        
    
