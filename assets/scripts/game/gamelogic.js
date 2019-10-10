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

  // first two lines of code word. Console.log needs to be changed so it says
  // "winner is the most recently played space" rather than a particular space
  if ((gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) ||
  (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) ||
  (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) ||
  (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) ||
  (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) ||
  (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) ||
  (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) ||
  (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6])) {
    console.log('winner is ' + gameBoard[5])
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
