<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade">
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="data in slide"
        :key="data.id"
        :class="{ active: data.id == 1 }">

        <h4 class="lead">{{ data.title }}</h4>
        <img
          :src="data.image_url"
          class="carousel-img d-block"
          :alt="data.title"
          width="300"/>

        <p class="lead w-75 mx-auto">{{ data.desc }}</p>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev">

      <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/back.png" alt="back"/>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next">

      <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/forward--v1.png" alt="forward--v1"/>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["slide"],
};
</script>

<style scoped>
.carousel-img {
  width: 300px;
  height: 450px;
}
.carousel-inner{
  width: 100%;
 }
.carousel-item,
.carousel-item img {
  margin: 0 auto;
  text-align: center;
  background-color: #edeade;
  border-radius: 20px;
}

.lead {
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  margin: 18px;
  display: flex;
  justify-content: center;
}
.carousel-control{
  color: black;
}

p {
  text-wrap: balance;
}
</style>
