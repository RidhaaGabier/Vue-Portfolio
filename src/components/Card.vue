<template>
  <div class="box">
    <img :src="project.image_url" :alt="project.title" class="image" />
    <div class="textbox mx-auto text-center">
      <div class="middle mx-auto">
        <h4 class="text">{{ project.title }}</h4>
        <h5 class="text">{{ project.desc }}</h5>
        <a :href="project.live" target="_blank">
          <button class="btn">View Site</button></a
        >
        <a :href="project.github" target="_blank">
          <button class="btn">GitHub</button></a
        >
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style scoped>
.box {
  height: 150px;
  margin-bottom: 15px;
  box-shadow: 6px 6px 10px whitesmoke, -6px -6px 10px silver;
}
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
  background-color: rgba(255, 255, 255, 0.8);
  color: #000;
  position: relative;
  height: 150px;
  top: -150px;
  display: none;
}

.box:hover .textbox {
  display: block;
}

.btn {
  width: 120px;
  height: 25px;
  margin-left: 30px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: green;
  background: black;
  border-radius: 40px 15px 40px 10px;
  text-transform: capitalize;
  letter-spacing: 0.3px;
  margin-top: 6px;
  padding-bottom: 24px;
}
.btn:hover {
  background: #38e54d;
  color: whitesmoke;
  transform: scale(1.02);
}

a {
  text-decoration: none !important;
}
</style>
