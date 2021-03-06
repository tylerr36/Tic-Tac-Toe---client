/*
 * 0. When a user clicks ' start new game '
 *
 * 1. when a user clicks a square
 *    -X or O shows up
  *      -App switches from X to O (or vice versa)
            -User cannot click same square again
                -Some css/confirmation of clicks
 * 2. when there is a winning combination
 *      -create function to checkWinningCombo
            -Check for 3 in a row
                -Check for [0,1,2], [0,3,6], etc.
 * 3. when the game board is full
 *
 * 4. when a user finishes game, start new game
 *
 * 5. when user clicks "See game stats", shows total games.
*/

const gameBoard = ['', '', '', '', '', '', '', '', '']

const playerOne = 'X'
const playerTwo = 'O'

// const winCombos =
// start game with X/playerOne
let player = playerOne

let gameOver = false

/* Add some css/confirmation of clicks (stretch goal)
 */
const onClick = function(event) {
  // event = Event is the click happening in app.js
  // target = takes the specific html element (div for this example) that's
  // been clicked
  const position = event.target.id

  if ($(event.target).text() === '' && gameOver === false) {
    if (player === playerOne) {
      $(event.target).text('X')
      gameBoard[position] = 'X'
      // add message saying "O's turn"
      // check for x winner
      player = playerTwo
      $('#player').text('Your turn, O!')
    } else if (player === playerTwo) {
      $(event.target).text('O')
      gameBoard[position] = 'O'
      // add message saying "X's turn"
      // check for o winner
      player = playerOne
      $('#player').text('Your turn, X!')
    }
  } else {
    $('#player').text('Already clicked!')
  }

  // if top row matches
  // const winCombinations = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6]

  if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
    (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
    (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
    (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
    (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')) {
    $('#player').text('X IS THE CHAMPION!')
    gameOver = true
    // add a message to the DOM
    // do not let user play anymore
  }

  if ((gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') ||
    (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') ||
    (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') ||
    (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') ||
    (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') ||
    (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') ||
    (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') ||
    (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')) {
    $('#player').text('O IS THE CHAMPION!')
    gameOver = true
    // add a message to the DOM
    // do not let user play anymore
  }

  // Tie. Trying to say "if every array item contains either an X or an O but
  // gameOver = false, then by definition, it must be a tie".
  // Whoa, it worked on the first try!
  if (((gameBoard[0] === 'O' || gameBoard[0] === 'X') &&
      (gameBoard[1] === 'O' || gameBoard[1] === 'X') &&
      (gameBoard[2] === 'O' || gameBoard[2] === 'X') &&
      (gameBoard[3] === 'O' || gameBoard[3] === 'X') &&
      (gameBoard[4] === 'O' || gameBoard[4] === 'X') &&
      (gameBoard[5] === 'O' || gameBoard[5] === 'X') &&
      (gameBoard[6] === 'O' || gameBoard[6] === 'X') &&
      (gameBoard[7] === 'O' || gameBoard[7] === 'X') &&
      (gameBoard[8] === 'O' || gameBoard[8] === 'X')) &&
    gameOver === false)
    $('#player').text('GAME IS A TIE!')
}

module.exports = {
  onClick,
  gameBoard
  //  winCombinations
}
