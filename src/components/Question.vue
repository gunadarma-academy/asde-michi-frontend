<template>
  <div class="mdl-grid">
    <div id="question-box" class="mdl-cell--6-col
    mdl-cell--3-offset-desktop
    mdl-card mdl-shadow--2dp">
    <div class="mdl-supporting-text">
      <a class="title mdl-navigation__link" v-link="'#'"><h4>Question<span class="mdl-badge" data-badge="12"></span></h4></a>
    </div>
    <div class="mdl-card__actions mdl-card--border">
  </div>
  <div>
    <a class="desc mdl-navigation__link">{this.author.username}</a></a> bertanya {this.updated_at} yang lalu.
  </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
</script>
