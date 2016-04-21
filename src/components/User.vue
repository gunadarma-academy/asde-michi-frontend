<!-- src/components/User.vue -->

<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>User Data</h1>
    <p>
      {{ user }}
    </p>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  data() {
    return {
      quote: this.$http
        .get('http://localhost:3030/api/protected/user', (data) => {
          this.user = data;
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
