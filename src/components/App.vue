<template>

  <!-- Always shows a header, even in smaller screens. -->
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <a class="mdl-layout-title" v-link="'/'">Arlin</a>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation. We hide it in small screens. -->
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <a class="mdl-navigation__link" v-link="'home'" v-if="user.authenticated">{{user.username}}</a>
          <a class="mdl-navigation__link" v-link="'landing'" v-if="!user.authenticated">Home</a>
          <a class="mdl-navigation__link" v-link="'signup'" v-if="!user.authenticated">Sign Up</a>
          <a class="mdl-navigation__link" v-link="'signin'" v-if="!user.authenticated">Sign in</a>
          <a class="mdl-navigation__link" v-link="'signin'" v-if="user.authenticated" @click="signout()">Sign out</a>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer mdl-layout--small-screen-only">
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" v-link="'home'" v-if="user.authenticated">{{user.username}}</a>
        <a class="mdl-navigation__link" v-link="'landing'" v-if="!user.authenticated">Home</a>
        <a class="mdl-navigation__link" v-link="'signup'" v-if="!user.authenticated">Sign Up</a>
        <a class="mdl-navigation__link" v-link="'signin'" v-if="!user.authenticated">Sign in</a>
        <a class="mdl-navigation__link" v-link="'signin'" v-if="user.authenticated" @click="signout()">Sign out</a>
      </nav>
    </div>
  </div>
  <div class="page-content">
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
