<template>
    <div class="resume">
      <h1 id="slideInLeft">My Skills</h1>
    </div>
  </template>
  

<script>
export default {
  name: 'ResumeView',
  components: {}
}
</script>

<style scoped>
.resume {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
}
.resume h1 {
  font-size: 50px;
  color: black;
  margin-bottom: 20px;
  position: relative;
}
.resume h1::after {
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