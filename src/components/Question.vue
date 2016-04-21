<template>
  <div class="mdl-grid">
    <div id="question-box" class="mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop mdl-card-login mdl-card mdl-shadow--2dp">
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
#question-box {
  min-height: 100px;
}
.box-margin {
  margin: 0px 0px 10px 20px;
}
</style>

<script>
</script>
