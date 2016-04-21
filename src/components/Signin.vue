<!-- src/components/Signin.vue -->

 <template>
   <div class="mdl-grid">
     <div class="box mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop mdl-card-login mdl-card mdl-shadow--2dp">
       <br>
       <img src="/assets/account_logo_dark.svg"/>
       <p>Masuk untuk berinteraksi dengan Teman Arlin.</p>
       <div>
         <form action="#">
           <div class="mdl-textfield mdl-js-textfield">
             <input class="mdl-textfield__input" type="text"
             class="form-control"
             placeholder="Username"
             v-model="credentials.username">
             <label class="mdl-textfield__label"></label>
           </div>
         </form>
         <form action="#">
           <div class="mdl-textfield mdl-js-textfield">
             <input class="mdl-textfield__input" type="password"
             class="form-control"
             placeholder="Password"
             v-model="credentials.password">
             <label class="mdl-textfield__label"></label>
           </div>
         </form>
         <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
         @click="submit()">
           <a class="mdl-navigation__link" v-link="'signin'">MASUK</a>
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

 <style>
   .box {
     margin-top:100px;
     text-align: center;
   }

   .mdl-card-login {
     display: grid;
   }

   .mdl-button a {
     color: white;
   }

   </style>

 <script>
 import auth from '../auth'
 export default {
   data() {
     return {
       // We need to initialize the component with any
       // properties that will be used in it
       credentials: {
         username: '',
         password: ''
       },
       error: ''
     }
   },
   methods: {
     submit() {
       var credentials = {
         username: this.credentials.username,
         password: this.credentials.password
       }
       // We need to pass the component's this context
       // to properly make use of http in the auth service
       auth.signin(this, credentials, 'secretquote')
     }
   }

 }
 </script>
