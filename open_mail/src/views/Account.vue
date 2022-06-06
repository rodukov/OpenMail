<template>
<div class="Account-view">
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

    <div class="Account">
        <p class="a b c myemail-is">{{ email }}</p>
        <h1 class="null-mail" v-show="!Boolean(getInbox.length)">You did not have a inbox letters 😢</h1>
        <div v-for="_mail of getInbox" :key="_mail" class="mail" v-on:click="read(_mail)">
            <p>Received message from {{ _mail["from"] }} at {{ _mail["date"] }}</p>   
            <p>{{ _mail["subject"] }}</p>  
        </div>
    </div>

    <div class="view_letter" v-show="readshow">
        <p style="text-align: right; "><img src="../assets/hide.png" class="letter-close" style="height: 32px; width: 32px;" v-on:click="readshow=!readshow"></p>
        <div class="a b c letter" v-html="readletter['body']"></div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios'
import {AxiosResponse} from 'axios';

export default defineComponent({
    name: 'Account',
    data() {
        return {
            email: localStorage.email,
            readletter: [],
            readshow: false
        }
    },
    computed: mapGetters(['getInbox']),
    methods: {
        ...mapActions(['inbox']),
        logout() {
            localStorage.setItem('email', 'null');
            this.$router.push('/')
        },
        read: async function(_mail: any) {
            console.log(_mail)
            await axios.get(`https://www.1secmail.com/api/v1/?action=readMessage&login=${this.email.split('@')[0]}&domain=${this.email.split('@')[1]}&id=${_mail['id']}`)
                .then((response: AxiosResponse) => {
                    this.readletter = response.data
                });
            this.readshow = true;    
        }
    },
    mounted() {
        document.title = `${this.email} | OpenMail`;
        this.inbox(localStorage.email)
    }
})
</script>

<style>
@keyframes activate {
  from { opacity: 0; }
  to { opacity: 1; }
}
.Account-view { display: flex; }
.headers { display: flex;
    background: rgb(255, 255, 255);
    padding: 5px;
    padding-right: 50px;
    margin-top: 20px;
    margin-left: 20px;
    border-radius: 4.5px;
    box-shadow: 1px 1px 31px rgb(214, 214, 214);
    border: 1px solid rgb(219, 219, 219);
    height: 100%;

}
.header-items { display: inline-block; }
.header-container {
    display: flex;
    margin-top: 25px;
    margin-bottom: 25px;
    justify-content: left;
    align-items: center;
    align-content: center;

}
.header-img {
    width: 34px; height: 34px;
    justify-content: center;
    color: red;
    filter: contrast(20%);
    align-content: left;
    margin-left: 15px;
    margin-right: 22.41px;


}
.header-item {
    padding: 15px;
    font-family: 'Poppins';
    transition: .11s;
    border-radius: 7px;
    color: rgb(26, 26, 26);

}
.header-item:hover {
    border-radius: 4px;
    box-shadow: 1px 20px 30px rgb(218, 218, 218);
    color: white;

    transform: translateY(-2px);
}
.myemail-is {
    font-family: 'Poppins';
    padding: 10px; border-radius: 0px 0px 5px 5px;
    background: rgb(24, 24, 24);
    box-shadow: 0px 11px 11px rgb(212, 212, 212);
    color: #FFFFFF;
    width: 50%;
    margin: auto;
}
#home:hover { background: radial-gradient(farthest-corner at 90px -50px, rgb(0, 255, 170), rgb(4, 0, 255)); }
#inbox:hover { background: radial-gradient(farthest-corner at 100px -30px, rgb(145, 255, 0), rgb(4, 0, 255)); }
#about:hover { background: radial-gradient(farthest-corner at 10px -90px, rgb(255, 0, 43), rgb(153, 0, 255)); }
#source:hover { background: radial-gradient(farthest-corner at 70px -40px, rgb(255, 217, 0), rgb(255, 0, 85)); }
#logout:hover { background: radial-gradient(farthest-corner at 20px -50px, rgb(255, 0, 0), rgb(234, 0, 255)); }
/* Mail */
.Account { width: 74.5%; margin: 0% auto 0% auto; }
.mail {
    border: 1px solid rgb(219, 219, 219);
    padding: 25px;
    margin-top: 35px;
    margin-bottom: 35px;
    border-radius: 9px;
    font-family: 'Poppins';
    box-shadow: 1px 1px 20px rgb(226, 226, 226);
    transition: 0.15s;
    max-width: 100%;
}
.mail:hover {
    box-shadow: 1px 20px 50px rgb(226, 226, 226);
}

.view_letter {
    position: absolute;
    color: white;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 1%;
    padding: 50px;
    border-radius: 6px;

}
.letter-close {
    padding: 8px;
    background: white;
    box-shadow: 0px 5px 15px #C2C2C2;
    border-radius: 8px;
    transition: .05s;
}
.letter-close:hover {
    box-shadow: 0px 10px 20px #C2C2C2;
}
.letter {
    background: white;
    padding: 50px;
    font-family: 'Poppins';
    border-radius: 8px;
    animation: activate .18s;
    text-align: justify;
    box-shadow: 0px 5px 15px #C2C2C2;
    float: right;

}

.null-mail {
    text-align: center;
    font-family: 'arial';
    font-weight: 900;
    color: rgb(43, 43, 43);
    margin-top: 105px;
}
</style>