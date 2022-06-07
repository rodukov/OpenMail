<template>
    <div class="headers">
        <div class="header-logo"></div>
        <div class="header-items">
            <!--div class="header-container"><img src="../assets/home.png" class="header-img"><router-link to='/' class="a c header-item" id="home">Home</router-link></div-->
            <div class="header-container"><img src="../assets/inbox.png" class="header-img"><router-link to='/account' class="a c header-item" id="inbox">Inbox</router-link></div>
            <div class="header-container"><img src="../assets/about.png" class="header-img"><router-link to='/about' class="a c header-item" id="about">About</router-link></div>
            <div class="header-container"><img src="../assets/source.png" class="header-img"><a href='https://github.com/rodukov/OpenMail/' class="a c header-item" id="source">Source</a></div>
            <div class="header-container"><img src="../assets/home.png" class="header-img"><p v-on:click="logout()" class="a c header-item" id="logout">Log Out</p></div>
        </div>
    </div>    

</template>

<script>
export default {
    name: 'headers',
    methods: {
        logout() {localStorage.setItem('email', 'null'); this.$router.push('/') }
    }
        
}
</script>