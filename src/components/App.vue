<!-- src/components/App.vue -->

<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <ul class="nav navbar-nav">
        <li><a v-link="'home'" v-if="user.authenticated">Home</a></li>
        <li><a v-link="'landing'" v-if="!user.authenticated">Home</a></li>
        <li><a v-link="'secretquote'" v-if="user.authenticated">Secret Quote</a></li>
        <li><a v-link="'signup'" v-if="!user.authenticated">Sign Up</a></li>
        <li><a v-link="'signin'" v-if="!user.authenticated">Sign in</a></li>
        <li><a v-link="'login'" v-if="user.authenticated" @click="signout()">Sign out</a></li>
        <li><a>{{ user.username }}</a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  data() {
    return {
      user: auth.user
    }
  },
  methods: {
    signout() {
      auth.signout()
    }
  }
}
</script>
