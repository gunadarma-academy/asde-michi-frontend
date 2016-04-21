<template>
  <div class="mdl-grid">
    <div class="heading mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop">
      <h1>Home for {{ user.username }}</h1>
    </div>
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
  route: {
    // Check the users auth status before
    // allowing navigation to the route
    canActivate() {
      return auth.user.authenticated
    }
  }
}
</script>
