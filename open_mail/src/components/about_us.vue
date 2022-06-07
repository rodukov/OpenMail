<template>
<div>
<h2 class="why-h">Why OpenMail?</h2>
<div class="about-us">
    <div class="about-us-container">
        <h2 class="why">Anonymous</h2>
        <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div class="about-us-container">
        <h2 class="why">Open Source</h2>
        <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div class="about-us-container">
        <h2 class="why">Nice design</h2>
        <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div class="about-us-container">
        <h2 class="why">One-Time</h2>
        <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div class="about-us-container">
        <h2 class="why">Fast</h2>
        <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div class="about-us-container">
        <h2 class="why">Updatable</h2>
        <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.</p>
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