<template>
  <div class="mdl-grid">
    <div class="box-left mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop mdl-card-login mdl-card mdl-shadow--2dp">
      <div class="img-header mdl-card__title">
        <h2 class="mdl-card__title-text">Welcome, {{user.username}}!</h2>
      </div>
      <div class="mdl-card__supporting-text">
    Berinteraksi dengan pertanyaan-pertanyaan di bawah ini atau bertanya langsung dengan Teman Arlin.
  </div>
  <div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Tanya Sekarang
    </a>
  </div>
    </div>
  </div>

  <div class="mdl-grid">
    <item class="question-box mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop mdl-card-login mdl-card mdl-shadow--2dp">
      <div class="box-margin mdl-supporting-text">
        <a class="mdl-navigation__link" v-link="'#'"><h5>{this.question}<span class="mdl-badge" data-badge="12"></span></h5></a>
      </div>
      <div class="mdl-card__actions mdl-card--border"></div>
      <div class="box-margin">
        <a class="mdl-navigation__link" v-link="'home'">{this.author.username}</a><span> bertanya pada {this.updated_at} yang lalu.</span>
      </div>
    </item>
  </div>

</template>

<style>
  .box-left {
    margin-top: 100px;
  }

  .img-header {
    color: #fff;
    height: 190px;
    background: url('/assets/narrow-street.jpg') center / cover;
  }
</style>

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
