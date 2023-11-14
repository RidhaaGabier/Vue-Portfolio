<template>
  <div class="home">
   <section class="hero_sec">
    <img src="https://i.postimg.cc/QMdQr153/new-size-removebg-preview.png" class="hero_img">
    <div class="hero_content">
      <h2 class="intro_heading">Hi, My Name Is</h2>
      <h2 id="slideInLeft" class="name_heading">Ridhaa Gabier</h2>
      <h2 class="skills_heading">I'm a <span class="textTyper">Software Developer</span></h2>
      <a style="text-decoration: none;" href="https://drive.google.com/file/d/1dCeG2y9NquEFRQeJ434y1OYTgAahmUxx/view?usp=sharing" target="_blank">
        <button class="hero_btn">Download CV</button>
      </a>
    </div>
   </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Roboto:ital,wght@0,400;0,500;0,700;1,500&display=swap");
.hero_sec{
  width: 100%;
  height: 800px;
  min-height:calc(100vh - 70px);
  display: flex; 
  align-items: center;
  justify-content: space-evenly;
}
.hero_img{
  border-radius: 50%;
  box-shadow: 8px 8px 15px whitesmoke, -4px -4px 15px silver;
  background: whitesmoke;
}
.hero_content{
  display: flex;
  flex-direction:column ;
  gap: 10px;
}
.intro_heading{
  font-size: 22px;
  color:#38E54D;
  font-weight: 400;
  letter-spacing: 0.3px;
  text-transform: capitalize;
}
.name_heading{
  font-size: 76px;
  color:black;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  font-family:'Poppins',sans-serif;
}
#slideInLeft{
  animation:slideInLeft 1s ease-in;
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
.skills_heading{
font-size: 26px;
font-weight: 450;
color: black;
letter-spacing: 0.40px;
text-transform: capitalize;
}
.skills_heading .textTyper{
  color:#38E54D ;
  font-size: 30px;
  position: relative;
}
::before{
  background-color: white;
}
.skills_heading .textTyper::before{
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  animation:textTyper 5s steps(30) infinite ;
  left: 0;
  top: 0;
  background:var(2px solid white);
  border-left:2px solid black;
}

@keyframes textTyper{
  0%{
  left: 0;
  width: 100%;
}
  40%, 60%{
    left: 102%;
    width: 0%;
  }
  100%{
    left: 0;
    width: 100%;
  }
}
.hero_btn{
  width: 170px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: green;
  background: black;
  border-radius: 40px 15px 40px 10px;
  text-transform: capitalize;
  letter-spacing: 0.3px;
  margin-top: 15px;
  text-decoration: none;
}
.hero_btn:hover{
  background: #38E54D;
  color: whitesmoke;
  transform: scale(1.02);
}
@media(max-width:1100px){
  .hero_sec{
 
  display: flex; 
  flex-direction: column;
  justify-content: center;
  gap: 40px;
}
.hero_img{
 transform: scale(0.8);
}
@media(max-width:300px){
  .hero_img{
    width: 100%;
    height: 100%;
  }
  .hero_content{
  display: flex;
  flex-direction:column ;
  gap: 1px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.intro_heading{
  font-size: 20px;
}
.name_heading{
  font-size: 46px;
  padding-left: 70px;
}
.skills_heading{
font-size: 20px;
}
.skills_heading .textTyper{
  font-size: 14px;
}
::before{
  background-color: white;
}
.skills_heading .textTyper::before{

  width: 99%;
  height: 100%;
  position: absolute;
  animation:textTyper 5s steps(30) infinite ;
  left: 0;
  margin: 0px;
  padding: 0px;
  top: 0;
  background:var(solid white);
  border-left: solid black;
}
}
}
</style>