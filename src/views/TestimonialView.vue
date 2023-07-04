<template>
    <div class="testimonial">
      <h1 id="slideInLeft">Testimonials</h1>

      <!-- <div v-if="slide" class="slide-details">
    <img :src="slide.image_url" :alt= "slide.title">

    <div>

        <h2>{{ slide.title }}</h2>
        <p>Description {{ slide.desc }}</p>

    </div>
     </div> -->
   </div>
  </template>
  

<script>
import  slideShow from '@/components/Carousel.vue'

export default {
  name: 'TestimonialView',
  props: ["id"],
    computed: {
        slide() {
            return this.$store.state.slide
        }
    },
    mounted(){
        return this.$store.dispatch("getSlide",this.id)
    },
    components:{slideShow}
}
</script>

<style scoped>
.testimonial {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
}
.testimonial h1 {
  font-size: 50px;
  color: black;
  margin-bottom: 20px;
  position: relative;
}
.testimonial h1::after {
  content: "";
  margin: 0 auto;
  background-color: #333333;
  position: absolute;
  display: block;
  height: 4px;
  width: 100%;
}
@keyframes slideInLeft{
  from{
    transform: translateX(-300px);
  }
  to{
    transform: translateX(0);
  }
}

#slideInLeft{
  animation:slideInLeft 1s ease-in;
}

</style>