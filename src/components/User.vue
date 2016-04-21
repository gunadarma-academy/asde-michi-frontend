<!-- src/components/User.vue -->

<template>
  <div class="mdl-grid">
    <div class="box mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop mdl-card-login mdl-card mdl-shadow--2dp">
      <h3>User Data</h3>
      <div>
        <p v-link="'home'" v-if="user.authenticated">{{user.username}}</p>
      </div>
      <hr>
      <div class="quote-area" @click="getQuote()" v-if="quote">
        <p>"{{ quote }}"</p>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  data() {
    return {
      user: auth.user,
      quote: 'Click for random quote here'
    }
  },
  methods: {
    getQuote() {
      this.$http
        .get('http://localhost:3030/api/protected/random-quote', (data) => {
          this.quote = data;
        }, {
          // Attach the JWT header
          headers: auth.getAuthHeader()
        })
        .error((err) => console.log(err))
    }
  },
  route: {
    // Check the users auth status before
    // allowing navigation to the route
    canActivate() {
      return auth.user.authenticated
    }
  }
}
</script>
