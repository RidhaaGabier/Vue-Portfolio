<template>
  <div class="resume">
    <h1 id="slideInLeft">Education</h1>
    <!-- start of time line -->
    <div class="timeline">

    <div class="timeline-item" v-for="info in education" :key="info.id">
      <div class="content">
        <h4 id="textclip" class="title-info">{{ info.name }}</h4>
        <p class="text-info">{{ info.desc }}</p>
        <span class="year">{{ info.year }}</span>
      </div>
    </div>

  </div>
  <!-- end of time line -->
  

  <!-- start of skill bar -->
  <h1 id="slideInLeft">My skills</h1>
  <div class="progress-container" v-for="skill in skills" :key="skill.id">
  <div class="progress" role="progressbar" aria-label="Animated striped example" :aria-valuenow="skill.percent" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated" :style="'width: ' + skill.percent + '%'">
    {{ skill.course }}
  </div>
</div>
</div>

  <!-- end of skill bar -->
  </div>


</template>

<script>

export default {
  name: "ResumeView",
  computed: {
    education() {
      return this.$store.state.education;
    },
    skills() {
      return this.$store.state.skills
    }
  },
  mounted() {
    this.$store.dispatch("getEducation");
    this.$store.dispatch("getSkills");
  },
};
</script>

<style scoped>

*{
  font-family: "Poppins";
}
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
  margin: 50px;
  position: relative;
  font-family: "Poppins";
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
@keyframes slideInLeft {
  from {
    transform: translateX(-300px);
  }
  to {
    transform: translateX(0);
  }
}

#slideInLeft {
  animation: slideInLeft 1s ease-in;
}






.timeline {
  position: relative;
  padding: 100px;
  background-color: #343434 ;
  border-radius: 10px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
.title-info{

  text-transform: uppercase;
  background-image: linear-gradient(
    -245deg,
    #e0ecce 0%,
    #34905f 29%,
    #362722 67%,
    #000000 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
      font-size: 30px;
}
.text-info{
  color:whitesmoke!important ;
}
.timeline:before {
  content: '';
  position: absolute;
  top: 3%;
  bottom: 5%;
  width: 10px;
  background-color: #34905f;
  left: 50%;
  margin-left: -1px;
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
}


.content {
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  background-color: black;
  padding: 20px;
  border-radius: 6px;
}

.year {
  font-weight: bold;
  color:#38E54D;
}

.progress-container{
  margin-top: 20px;
  margin-bottom: 20px;
}

.progress{
 width: 400px;
 background-color: green;
 height: 20px;
}

</style>
