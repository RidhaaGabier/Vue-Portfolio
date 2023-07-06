<template>
  <div class="box">
    <img :src="project.image_url" :alt="project.title" class="image" />
    <div class="middle mx-auto">
      <div class="textbox mx-auto text-center">
        <h4 class="text">{{ project.title }}</h4>
        <h5 class="text">{{ project.desc }}</h5>
        <a :href="project.live" target="_blank">
          <button class="btn">View Site</button></a
        >
        <a :href="project.github" target="_blank"
          ><button class="btn">GitHub</button></a
        >
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
/* .box {
  position: relative;
  width: 440px;
  height: 190px;
  background-color: transparent;
}*/
.box img.image {
  opacity: 1;
  width: 100% !important;
  height: 150px !important;
  background-size: cover;
  display: block;
  transition: 0.5s ease !important;
  backface-visibility: hidden;
}/*
.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 64%;
  left:50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.box .image {
  opacity: 0.3;
}
.box .middle {
  opacity: 1;
}*/
.textbox {
  color: #000;
  position: relative;
  height: 150px;
  top: -150px;
}
/*
.textbox h1 {
  font-size: 18px;
}
.textbox h2 {
  font-size: 12px;
}
.btn {
  width: 120px;
  height: 25px;
  display: flex;
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
}*/
.btn:hover{
  background: #38E54D;
  color: whitesmoke;
  transform: scale(1.02);
}
/*
a {
  text-decoration: none !important;
} */

</style>
