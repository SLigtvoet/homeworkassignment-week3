import {wordList, wrongGuessLimit} from '../lib/game'

export default (state = initialState, action) => {
  switch(action.type){
    case 'MAKE_GUESS':
    if (wrongGuessLimit (state.word, state.guessed)){
      return state
    }
    if (state.guessed.find((guessed)=> {
        return guessed === action.payload
    }) ) {
      alert("You've guessed this letter already! Try another")
      return state
    } 
      return { ...state, guessed : state.guessed.concat([action.payload])};
    case 'NEW_GAME':
      return {
        word: wordList[Math.floor(Math.random() * wordList.length)],
        guessed: []
      };
  }
  return state
}

const initialState = {
  word: wordList[Math.floor(Math.random() * wordList.length)],
  guessed: []
};

