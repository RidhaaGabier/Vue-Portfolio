<template>
  <div class="testimonial">
    <h1 class="slideInLeft">Testimonials</h1>
    <slideShow :slide="slide" />
  </div>
</template>

<script>
import slideShow from "@/components/Carousel.vue";

export default {
  name: "TestimonialView",
  computed: {
    slide() {
      return this.$store.state.slide;
    },
  },
  mounted() {
    return this.$store.dispatch("getSlides");
  },
  components: { slideShow },
};
</script>

<style scoped>
p {
  text-wrap: balance;
}

* {
  font-family: "Poppins";
}

.testimonial {
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 24px auto;
  padding: 50px; /* Added padding for space around the testimonial section */
}

.testimonial h1 {
  font-size: 3rem;
  color: black;
  margin-bottom: 20px;
  position: relative;
  line-height: 1.5; /* Increased line height for better readability */
}

.testimonial h1::after {
  content: "";
  background-color: black;
  position: absolute;
  display: block;
  height: 3px;
  width: 100%;
  bottom: 0;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slideInLeft {
  animation: slideInLeft 1s ease-in;
}

#slideInLeft {
  animation: slideInLeft 1s ease-in;
}

@media screen and (max-width: 300px) {
  .testimonial h1 {
    font-size: 30px !important;
  }
  .testimonial {
    padding: 10px;
    margin: 10px;
  }
  #slideInLeft {
    font-size: 30px;
  }
}

/* Add the following style for vertical alignment of text in carousel items */
.carousel-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px; /* Added padding for space around each carousel item */
}

/* Adjust font size and line height for text in carousel items */
.carousel-item .lead {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
}

.carousel-item p {
  font-size: 16px;
  line-height: 1.6;
}
</style>