'use strict'

const config = require('../config')
// require 'store' so we have access to out 'token' so the API knows who we are
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

//url: config.apiUrl + '/games',
//data: {}
// headers: {
//  Authorization: 'Token token=' + store.user.token
 // },
 // addPOST
// Listen for click on "New game" button and run event handler to call API


const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    success: function () {
      $('.cell').hide()
      $('#createGame').hide()
      $('#change-password').hide()
      $('.changepassword').hide()
      $('#sign-in').show()
      $('.signin').show()
      $('#sign-up').show()
      $('.signup').show()
      $('#getstats').hide()
    }
  })
}

const createGame = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createGame
}
