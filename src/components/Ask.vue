<template>
  <div class="mdl-grid">
    <div class="box-center mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop mdl-card-login mdl-card mdl-shadow--2dp">
      <br>
      <h3>Tanya Sekarang</h3>
      <div>
        <form action="#">
          <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text"
            class="form-control"
            placeholder="Title..."
            v-model="">
            <label class="mdl-textfield__label"></label>
          </div>
        </form>
        <form action="#">
          <div class="mdl-textfield mdl-js-textfield">
            <textarea class="mdl-textfield__input" type="text"
                        class="form-control"
                        placeholder="Description..."
                        v-model="" rows= "6"></textarea>
            <label class="mdl-textfield__label"</label>
          </div>
        </form>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
        @click="submit()">
          <a class="mdl-navigation__link" v-link="'signin'">SUBMIT</a>
        </button>
      </div>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
     <br>
     <br>
    </div>
  </div>
</template>

<script>
</script>
