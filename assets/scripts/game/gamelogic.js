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
const onClick = function (event) {
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
    } else if (player === playerTwo) {
      $(event.target).text('O')
      gameBoard[position] = 'O'
      // add message saying "X's turn"
      // check for o winner
      player = playerOne
    }
  } else {
    console.log('Already clicked!')
  }
  console.log(gameBoard)

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

  // first two lines of code work. Console.log needs to be changed so it says
  // "winner is the most recently played space" rather than a particular space
  if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
    (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
    (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
    (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
    (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')) {
    console.log('X wins!')
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
    console.log('O wins!')
    gameOver = true
    // add a message to the DOM
    // do not let user play anymore
  }
}

module.exports = {
  onClick,
  gameBoard
  //  winCombinations
}
