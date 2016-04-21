<template>
  <div class="mdl-grid">
    <div class="heading mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop">
      <div>
        <h2>This user data</h2>
        <p v-if="user.authenticated">
          {{ user.username }}
        </p>
      </div>

    </div>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  data() {
    return {
      user: getUser()
    }
  },
  methods: {
    getUser() {
      this.$http
        .get('http://localhost:3030/api/protected/user', (data) => {
          this.user = data;
          console.log(this.user);
        }, {
          // Attach the JWT header
          headers: auth.getAuthHeader()
        })
        .error((err) => console.log(err))
    }
  }
}
</script>
