// src/index.js

import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Landing from './components/Landing.vue'
import Signup from './components/Signup.vue'
import Signin from './components/Signin.vue'
import SecretQuote from './components/SecretQuote.vue'
import auth from './auth'
import env from './environments'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.debug = true

// Check the users auth status when the app starts
auth.checkAuth()

export var router = new VueRouter()

// Optional
Vue.http.headers.common['Authorization'] = auth.getAuthHeader();

// Set up routing and match routes to components
router.map({
  '/home': {
    component: Home
  },
  '/landing': {
    component: Landing
  },
  '/secretquote': {
    component: SecretQuote
  },
  '/signin': {
    component: Signin
  },
  '/signup': {
    component: Signup
  }
})

// Redirect to the home route if any routes are unmatched
router.redirect({
  '*': '/landing'
})

// Start the app on the #app div
router.start(App, '#app')
