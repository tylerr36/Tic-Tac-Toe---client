'use strict'

// require store object, so we can save the user and their token
const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}
const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed.')
}

// responseData is the data the API sends back when we make a request
// In this case, it has our 'user' and our 'user's token'
const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  $('.after-sign-in').show()
  $('.before-sign-in').hide()

  // add .hide somewhere in here using jQuery
  //  save the 'user' we got from the API inside of 'store' so we
  //  can use it later from any file
  store.user = responseData.user
  // can hide signIn button after signing in by putting   $('#sign-in').hide here
}

// store.game = responseData.game
// click button, call to api, store data...in store

const onSignInFailure = function () {
  failureMessage('Sign in failed.')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
}

const onChangePasswordFailure = function () {
  failureMessage('Password change failed.')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')
  $('.after-sign-in').hide()
  $('.before-sign-in').show()
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed.')
}

const onCreateGameSuccess = function (responseData) {
  successMessage('Created new game!')
  store.game = responseData.game
  $('.border').text('')
  $('#main').removeClass('hide')
}

const onCreateGameFailure = function () {
  failureMessage('Game creation failed!')
  $('.game').text('')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateGameSuccess,
  onCreateGameFailure
}
