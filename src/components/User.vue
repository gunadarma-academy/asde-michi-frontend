<!-- src/components/User.vue -->

<template>
  <div class="mdl-grid">
    <div class="box-center mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop mdl-card-login mdl-card mdl-shadow--2dp">
      <h3>User Data</h3>
      <div>
        <a class="mdl-navigation__link" v-link="'home'" v-if="user.authenticated">{{user.username}}</a>
      </div>
      <hr>
      <div class="quote-area" @click="getQuote()" v-if="quote">
        <p>"{{ quote }}"</p>
      </div>
    </div>
  </div>

  <!-- Question box placeholder -->
  <div class="mdl-grid">
    <div id="question-box" class="mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop mdl-card-login mdl-card mdl-shadow--2dp">
      <div class="box-margin mdl-supporting-text">
        <a class="mdl-navigation__link" v-link="'#'"><h5>Question<span class="mdl-badge" data-badge="12"></span></h5></a>
      </div>
      <div class="mdl-card__actions mdl-card--border"></div>
      <div class="box-margin">
        <a class="mdl-navigation__link" v-link="'home'">{this.author.username}</a><span> bertanya pada {this.updated_at} yang lalu.</span>
      </div>
    </div>
  </div>
</template>

<style>
.question-box {
  min-height: 100px;
}
.box-margin {
  margin: 0px 0px 10px 20px;
}

</style>

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
