<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade">
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="data in slide"
        :key="data.id"
        :class="{ active: data.id == 1 }"
      >
        <div class="carousel-content">
          <h4 class="lead">{{ data.title }}</h4>
          <img
            :src="data.image_url"
            class="carousel-img d-block mx-auto"
            :alt="data.title"
          />
          <p class="lead w-75 mx-auto">{{ data.desc }}</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev"
    >
      <img
        class="arrow"
        src="https://img.icons8.com/ios-filled/50/back.png"
        alt="back"
      />
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next"
    >
      <img
        class="arrow"
        src="https://img.icons8.com/ios-filled/50/forward--v1.png"
        alt="forward--v1"
      />
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
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel-inner {
  width: 100%;
}

.carousel-item {
  margin: 0 auto;
  text-align: center;
  background-color: #f5f5f5; /* Lighter background color */
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel-content {
  padding: 20px;
}

.lead {
  font-family: "Poppins", sans-serif;
  font-size: 20px; /* Adjusted font size */
  font-weight: 600; /* Adjusted font weight */
  margin: 12px 0;
}

.carousel-control {
  color: black;
}

.arrow {
  width: 30px;
  height: 30px;
  padding: 2px;
  margin-right: 10px;
  filter: invert(48%) sepia(0%) saturate(6315%) hue-rotate(197deg)
    brightness(103%) contrast(101%); /* Adjusted icon color */
}

@media screen and (max-width: 700px) {
  .lead {
    font-size: 16px; /* Adjusted font size for smaller screens */
  }
}
</style>