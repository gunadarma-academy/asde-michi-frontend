// src/index.js

import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Landing from './components/Landing.vue'
import Signup from './components/Signup.vue'
import Signin from './components/Signin.vue'
import User from './components/User.vue'
import Ask from './components/Ask.vue'
import auth from './auth'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMdl from 'vue-mdl'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueMdl)

Vue.config.debug = true

// Check the users auth status when the app starts
auth.checkAuth()

export var router = new VueRouter()

// Optional
Vue.http.headers.common['Authorization'] = auth.getAuthHeader();

// Set up routing and match routes to components
router.map({
  '/': {
    component: Landing
  },
  '/home': {
    component: Home
  },
  '/signin': {
    component: Signin
  },
  '/signup': {
    component: Signup
  },
  '/user': {
    component: User
  },
  '/ask': {
    component: Ask
  }
})

// Redirect to the home route if any routes are unmatched
router.redirect({
  '*': '/'
})

// Start the app on the #app div
router.start(App, '#app')
