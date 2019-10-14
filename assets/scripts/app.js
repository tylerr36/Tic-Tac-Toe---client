'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./game/events')
const gameEvents = require('./game/gamelogic')
// const gameEvents = require('./game/gamelogic')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.border').on('click', gameEvents.onClick)
  $('.start-game').on('click', authEvents.onCreateGame)

  // when start game button is clicked, run a function to gameEvents.playGame
  // remove the hide class from the #main element (board)

  // $('#board').on('click', gameEvents.playGame)

  // $('#sign-up').on('submit', function (event) {
  // event.preventDefault()
  // console.log(event.target)
  // })
  // your JS code goes here
})
