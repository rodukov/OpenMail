<template>
<div>
    <!-- About us -->
<h2 class="why-h">Why OpenMail?</h2>
<div class="about-us">
    <div class="about-us-container">
        <h2 class="why">Anonymous</h2>
        <p class="text">This service does not track any of your activities. 
        Do not use this service for malicious purposes.</p>
    </div>
    <div class="about-us-container">
        <h2 class="why">Open Source</h2>
        <p class="text">The project code is completely open. 
        Explore, modify, run locally, critique.</p>
    </div>
    <div class="about-us-container">
        <h2 class="why">Nice design</h2>
        <p class="text">I managed to make a nice design. 
        Using the service is very pleasant.</p>
    </div>
    <div class="about-us-container">
        <h2 class="why">One-Time</h2>
        <p class="text">This service was conceived as a mail service for unwanted services.
        If you don't want spam coming to your inbox, use openmail.
        All messages are automatically deleted after 15 minutes</p>
    </div>
    <div class="about-us-container">
        <h2 class="why">Fast</h2>
        <p class="text">Really fast! Of course, it also depends on the sender. The future will be even faster!</p>
    </div>
    <div class="about-us-container">
        <h2 class="why">Updatable</h2>
        <p class="text">I will keep working on this project if the project gets a little attention.
        But remember, only one person is working on this!</p>
    </div>
</div>
</div>
</template>

<script>
export default {
    name: 'Abous-Us'
}
</script>

<style scoped>
.about-us {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
}
.about-us-container {
    background: #0059FF;
    margin: 25px;
    padding: 25px;
    box-shadow: 3.5px 3.5px 0px #1A5AD2;
}
.text {
    text-align: justify;
    color: white;
    font-size: 15px;
    font-family: 'Poppins';
}
.why {
    font-family: 'Poppins';
    color: white;
}
.why-h {
    margin: 5px;
    margin-left: 25px;
    font-family: 'Poppins';
    font-size: 30px;
    color: #2F2F2F;
}
</style>