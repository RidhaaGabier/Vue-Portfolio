<template>
    <!-- <router-link :to="{ name: 'project', params: { id: project.id } }"> -->
      <div class="box p-5 m-5 col-3">
        <img :src="project.image_url" :alt="project.title" class="image" />
        <div class="middle">
          <div class="textbox p-5 m-5">
            <h1 class="text">{{ project.title }}</h1>
            <h2 class="text">{{ project.desc }}</h2>
            <a :href="project.live" target="_blank"> <button class="But">View Site</button></a>
            <a :href="project.github" target="_blank"><button class="But">GitHub</button></a>
          </div>
        </div>
      </div>
    <!-- </router-link> -->
  </template>

<script>
export default {
  props: ["project"],
};
</script>

<style>
.box {
  position: relative;
width: 400px;
height: 200px;
background-color: transparent;
}
.image {
  opacity: 1;
  width: 300px !important;
  height: 200px !important;
  background-size: cover;
  display: block;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}
.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 70%;
  left: 60%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.box:hover .image {
  opacity: 0.3;
}
.box:hover .middle {
  opacity: 1;
}
.textbox {
  color: #000;
  padding: 20px ;
  margin: 30px;
  width: 300px;
}
.textbox h1{
    font-size: 20px;
}
.textbox h2{
    font-size: 16px;
}
.But{
  background-color: #04AA6D;
  font-size: 14px;
}
</style>