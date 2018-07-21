export function newGame () {
    return {
        type: 'NEW_GAME',

    }
}


export function makeGuess(guess) {
    return {
        type: 'MAKE_GUESS',
        payload: guess
    }
}






