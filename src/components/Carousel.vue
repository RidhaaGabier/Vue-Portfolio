<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade">
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="data in slide"
        :key="data.id"
        :class="{ active: data.id == 1 }"
      >
        <h4 class="lead">{{ data.title }}</h4>
        <img
          :src="data.image_url"
          class="d-block"
          :alt="data.title"
          width="300"
        />
        <p class="lead w-75 mx-auto">{{ data.desc }}</p>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["slide"],
};
</script>

<style>
/* .carousel-inner{
  display: flex;
  justify-content: center;
 
 } */
.carousel-item,
.carousel-item img {
  margin: 0 auto;
  text-align: center;
}

.lead {
  width: 100%;
  font-family: "Roborto", sans-serif;
  font-size: 25px;
  margin: 18px;
  display: flex;
  justify-content: center;
}
</style>
