<template>
  <div class="home">

    <div class="mail">
      <div class="submail">
        <p class="a b maintext">OpenMail</p>
        <p class="a b slogantext">The fastest way to receive mail, and now also convenient</p>
      </div>
    </div>

    <div class="search">
      <p class="a b seach-desc">Log In</p>
      <div class="searchbox-wrap">
        <input type="text" placeholder="Give me your e-mail">
        <button><span>Check</span> </button>
      </div>
      <p class="a b get-it">Dont have OpenMail? Get it! </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  mounted():void {
    document.title = "OpenMail"
  }
});
</script>

<style>
.maintext {
  font-family: Poppins;
  font-size: 43.41px;
  color: white;
}
.slogantext { 
  font-family: Poppins;
  font-size: 22px;
  color: white;
}
.mail {
  margin-top: 1.1%; margin-bottom: 1.1%;
  margin-left: 15%; margin-right: 15%;
  padding: 50px;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 15px;
  background: url('https://hdfon.ru/wp-content/uploads/hdfon.ru-166872470.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 3px 5px rgb(179, 179, 179);
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
button{
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
span{
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
}
</style>
