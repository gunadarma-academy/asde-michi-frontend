<template>
  <div class="mdl-grid">
    <div class="heading mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop">
      <div @click="getQuote()" v-if="quote">
        <h2><blockquote>{{ quote }}</blockquote></h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 data() {
   return {
     quote: 'The quote here'
   }
 },
 methods: {
   getQuote() {
     this.$http
       .get('http://localhost:3030/api/random-quote', (data) => {
         this.quote = data;
       })
       .error((err) => console.log(err))
   }
 }
}
</script>
