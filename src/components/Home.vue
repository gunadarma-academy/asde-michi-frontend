<template>
   <div class="col-sm-6 col-sm-offset-3">
     <h1>Get a Free Chuck Norris Quote!</h1>
     <button class="btn btn-primary" v-on:click="getQuote()">Get a Quote</button>
     <div class="quote-area" v-if="quote">
       <h2><blockquote>{{ quote }}</blockquote></h2>
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
         .get('http://localhost:3001/api/random-quote', (data) => {
           this.quote = data;
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
