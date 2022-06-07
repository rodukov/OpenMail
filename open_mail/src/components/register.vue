<template>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default defineComponent({
  name: 'Home',
  computed: mapGetters(['getEmails']),
  methods: mapActions(['register_mail'])
});
</script>