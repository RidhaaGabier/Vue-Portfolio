<template>
  <router-link :to="{name: 'slide', params:{id: slide.id}}">
  

  <div id="slide" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="slide.image_url" class="d-block w-100" alt="Colleges">
    </div>
  </div>
  <h3>
      {{ slide.title }}
  </h3>
  <p>Description: {{ slide.desc }}</p>
</div>



  
  </router-link>
  </template>
  
  <script>
  export default {
      props: ["slide"]
  }
  </script>
  
  <style>
  
  </style>