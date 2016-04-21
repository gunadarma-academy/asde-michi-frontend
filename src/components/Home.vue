<template>
  <div class="mdl-grid">
    <div class="heading mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop">
      <div class="quote-area" @click="getQuote()" v-if="quote">
        <h2><blockquote>{{ quote }}</blockquote></h2>
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
      quote: "Quote here"
    }
  },
  methods: {
    getQuote() {
      this.$http
        .get('http://localhost:3030/api/protected/secret-quote', (data) => {
          this.quote = data;
        }, {
          // Attach the JWT header
          headers: auth.getAuthHeader()
        })
        .error((err) => console.log(err))
    }
  }
}
</script>
