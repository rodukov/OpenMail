<template>
  <div class="home">
    <!-- Open Mail -->
    <div class="mail">
      <div class="submail">
        <p class="a b maintext">OpenMail</p>
        <p class="a b slogantext">The fastest way to receive mail, and now also convenient</p>
      </div>
    </div>

     <!-- Register New Mail -->
    <div class="register" v-show="getEmails[0]">
      <p v-on:click="$store.commit('updateWindow', false)" style="font-family: 'arial'; text-align: right; padding-right: 15px; padding-top: 15px; margin: 0;"><img src="../assets/hide.png" style="height: 32px; width: 32px;"></p>
      <p class="regp">Registration</p>
      <p class="regp-m">Receive your OpenMail. Unlimited number of mailboxes. Completely free. </p>
      <div class="receive-div"><p class="receive" v-on:click="register_mail">Receive</p></div>
      <div v-for="_item in getEmails[1]" :key="_item">
        <div class="email_container"><p class="email_item">{{ _item }}</p></div>
      </div>
    </div>
    <!-- Search Form -->
    <div class="search">
      <p class="a b seach-desc">Log In</p>
      <div class="searchbox-wrap">
        <input type="text" class="searcher" placeholder="Give me your e-mail" id="login_input">
        <button class="btns" v-on:click="login();"><span class="spns">Check</span> </button>
      </div>
      <p class="a b get-it" v-on:click="$store.commit('updateWindow', true)">Dont have OpenMail? Get it! </p>
    </div>
    <!-- About us -->
    <about_us/>
    <footers/>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions, mapMutations } from 'vuex'
import about_us from '../components/about_us.vue'
import footers from '../components/footers.vue'

export default defineComponent({
  name: 'Home',
  components: { about_us, footers },
  computed: mapGetters(['getEmails']),
  methods: {
    ...mapActions(['register_mail']),
    login() {
      var login = (<HTMLInputElement>document.getElementById('login_input')).value;
      localStorage.setItem('email', login);
      this.$router.push('account')
    }
  },
  mounted() {
    document.title = "OpenMail"
    if(localStorage.email == undefined || localStorage.email.indexOf('@') == -1) {}
    else { this.$router.push('account') }


  }
});
</script>

<style>
.maintext {
  font-family: Poppins;
  font-size: 43.41px;
  color: white;
  margin: 25px;
}
.slogantext { 
  font-family: Poppins;
  font-size: 22px;
  color: white;
}
.logo {
  width: 62px;
  height: 62px;

  filter: invert(100%);
}
.mail {
  margin-top: 1.1%; margin-bottom: 1.1%;
  margin-left: 10%; margin-right: 10%;
  padding: 50px;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 15px;
  background: url('../assets/welcm.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 3px 5px rgb(179, 179, 179);
  background-attachment: fixed;
}

.searchbox-wrap{
  display     : flex; 
  width       : 600px;  
  margin-top  : 20px;
  margin-left : auto;
  margin-right: auto;
}


input{
  font-family: 'Poppins';
  outline: none;      
  flex: 1;
  padding: 30px 20px;
  font-size: 12.41px; 
  -webkit-border-top-left-radius: 25px;
  -webkit-border-bottom-left-radius: 25px;
  -moz-border-radius-topleft: 25px;
  -moz-border-radius-bottomleft: 25px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  box-shadow: none;
  border: none;
  border-left: 1px solid rgb(170, 170, 170);
  border-top: 1px solid rgb(170, 170, 170);
  border-bottom: 1px solid rgb(170, 170, 170);

}
.btns{
    padding-right: 10px;
    background-color: #fff;
    -webkit-border-top-right-radius: 25px;
    -webkit-border-bottom-right-radius: 25px;
    -moz-border-radius-topright: 25px;
    -moz-border-radius-bottomright: 25px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border: none;
    cursor: pointer; 
    cursor: hand;
    border: none;
    border-right: 1px solid rgb(170, 170, 170);
    border-top: 1px solid rgb(170, 170, 170);
    border-bottom: 1px solid rgb(170, 170, 170);
}
.spns{
  margin-left: 50px;
  padding: 24px 45px;
      
  font-size: 0.9em;
  text-transform: uppercase;
  font-family: 'Poppins';
  font-weight: 300 ;
  color: #fff;
  background: linear-gradient(40deg, rgb(89, 0, 255), rgb(0, 162, 255));
    
  border-radius: 20px;
  box-shadow: 0px 3px 10px rgb(0, 110, 255);

  transition: 0.2s;
}
span:hover{
  border-radius: 15px;
}
.seach-desc {
  color: rgb(51, 51, 51);
  font-family: 'Poppins';
  font-size: 30px;
  margin-top: 30px;
}
      
.get-it {
  margin-top: 5px;
  font-size: 17px; 
  font-family: 'Poppins';
  color: rgb(28, 15, 216);
  text-decoration: underline;
  cursor: pointer;
}

.register {
  /* Aligment */
  position: absolute;
  margin-left: 500px;
  margin-right: 500px;
  margin-top: 100px;
  margin-bottom: 100px;
  left: 0;
  right: 0;
  top: 0;

  /* Customize */
  padding-bottom: 25px;
  background: rgb(252, 252, 252);
  border-radius: 6.151px;
  box-shadow: 0px 0px 10px rgb(192, 192, 192);

  display: inline-block;

  animation: activate 0.4s;

}
.regp {
  font-family: 'Poppins';
  font-size: 45px;
  text-align: center;
  color: rgb(29, 29, 29);
  margin: 0;
  margin-top: 20px;
  margin-bottom: 20px;
}
.regp-m {
  font-family: 'Poppins';
  font-size: 20px;
  text-align: center;
  color: rgb(63, 63, 63);
  margin: 0;
  font-weight: 900;
}
.receive-div {
  justify-content: center;
  text-align: center;
}
.receive {
  margin: 0; margin-top: 35px; margin-bottom: 35px;
  display: inline-block;
  background: radial-gradient(farthest-corner at -30px -20px, rgb(0, 255, 115), rgb(204, 0, 255));
  color: #FFFFFF;
  font-family: 'Poppins';
  border-radius: 21px;
  padding: 20px;
  padding-left: 50px; padding-right: 50px;
  letter-spacing: 1.5px;
  transition: .1s;
  /* box-shadow: 0px 0px 100px rgb(153, 0, 255); */
}
.receive:hover {
  border-radius: 14px;
}
.email_item {
  font-family: 'Poppins';
  animation: activate .3s;
  border-top: 1px solid rgb(230, 230, 230);
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 5%;
  margin: 5%;
  margin-top: 0%;
  box-shadow: 0px 5px 8px rgb(207, 207, 207);
}
.email_container {
  justify-content: center;
  text-align: center;
}
@keyframes activate {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
