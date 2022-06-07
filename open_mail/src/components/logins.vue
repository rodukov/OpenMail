<template>
    <!-- Search Form -->
    <div class="search">
      <p class="a b seach-desc">Log In</p>
      <div class="searchbox-wrap">
        <input type="text" class="searcher" placeholder="Give me your e-mail" id="login_input">
        <button class="btns" v-on:click="login();"><span class="spns">Check</span> </button>
      </div>
      <p class="a b get-it" v-on:click="$store.commit('updateWindow', true)">Dont have OpenMail? Get it! </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'logins',
  methods: {
    login() {
      var login = (<HTMLInputElement>document.getElementById('login_input')).value;
      localStorage.setItem('email', login);
      this.$router.push('account')
    }
  }
});
</script>