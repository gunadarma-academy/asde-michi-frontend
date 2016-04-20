<template>
  <div class="mdl-grid">
    <div class="heading mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop">
      <img src="/assets/arlin_logo_color.svg" style="width: 60%;"/>
      <h5 style="">Ke sana ke mari, tanya di sini.</h5>
      <br>
      <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-navigation__link" v-link="'signin'">MASUK</a>
      <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-navigation__link" v-link="'signup'">DAFTAR</a>
    </div>
  </div>
</template>

<style>
  .heading {
    margin-top:170px;
    text-align:center;
  }
  .heading > button a {
    color:white;
  }
</style>

 <script>
 </script>
