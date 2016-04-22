// src/auth/index.js

import {router} from '../index'

// URL and endpoint constants
const API_URL = 'http://localhost:3030/'
const SIGNIN_URL = API_URL + 'auth/local/'
const SIGNUP_URL = API_URL + 'signup/'

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false,
    username: '(Anonymous)'
  },

  // Send a request to the signin URL and save the returned JWT
  signin(context, creds, redirect) {
    context.$http.post(SIGNIN_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token)
      this.user.authenticated = true
      this.user.username = creds.username

      // Redirect to a specified route
      if(redirect) {
        router.go(redirect)
      }

    }).error((err) => {
      context.error = err
    })
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token)
      this.user.authenticated = false

      if(redirect) {
        router.go(redirect)
      }

    }).error((err) => {
      context.error = err
    })
  },

  // To log out, we just need to remove the token
  signout() {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}
