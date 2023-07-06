<template>
  <div class="box">
    <img :src="project.image_url" :alt="project.title" class="image" />
    <div class="middle mx-auto">
      <div class="textbox mx-auto text-center">
        <h4 class="text">{{ project.title }}</h4>
        <h5 class="text">{{ project.desc }}</h5>
        <a :href="project.live" target="_blank">
          <button class="btn">View Site</button></a>
        <a :href="project.github" target="_blank">
          <button class="btn">GitHub</button></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style scoped>


.box img.image {
  opacity: 1;
  width: 100% !important;
  height: 150px !important;
  background-size: cover;
  display: block;
  transition: 0.5s ease !important;
  backface-visibility: hidden;
}
.textbox {
  color: #000;
  position: relative;
  height: 150px;
  top: -1px;
}

.btn {
  width: 120px;
  height: 25px;
  margin-left: 30px;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: green;
  background: black;
  border-radius: 40px 15px 40px 10px;
  text-transform: capitalize;
  letter-spacing: 0.3px;
  margin-top: 15px;
  padding-bottom: 25px;
}
.btn:hover{
  background: #38E54D;
  color: whitesmoke;
  transform: scale(1.02);
}

a {
  text-decoration: none !important;
} 

</style>
