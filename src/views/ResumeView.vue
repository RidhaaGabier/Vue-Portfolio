<template>
  <div class="resume">
    <h1 id="slideInLeft">Education</h1>
    <!-- start of time line -->
    <div class="timeline">
      <li style="list-style: none">
        <!-- Modulus: Check if there will be a remainder if divided. If yes, false, if no, true -->
        <div
          class="timeline-item"
          :class="{ 'direction-r': info.id % 2 }"
          v-for="info in education"
          :key="info.id"
        >
          <div class="content">
            <h4 id="textclip" class="title-info">{{ info.name }}</h4>
            <p class="text-info">{{ info.desc }}</p>
            <span class="year">{{ info.year }}</span>
          </div>
        </div>
      </li>
    </div>
    <!-- end of time line -->

    <!-- start of skill bar -->
    <h1 id="slideInLeft">My skills</h1>
    <div class="row w-100">
      <div class="col d-flex flex-column align-items-center">
        <div class="progress-container" v-for="skill in skills" :key="skill.id">
          <div
            class="progress"
            role="progressbar"
            aria-label="Animated striped example"
            :aria-valuenow="skill.percent"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              :class="'bg-' + skill.color"
              :style="'width: ' + skill.percent + '%'"
            >
              {{ skill.course }}: Beginner
            </div>
          </div>
        </div>
      </div>
      <div class="col d-flex flex-column align-items-center">
        <h4>Description</h4>
        <ul class="desc-info">
          <li>HTML skills are intermediate.</li>
          <li>CSS skills are intermediate.</li>
          <li>Bootstrap skills are intermediate.</li>
          <li>Git skills are intermediate.</li>
          <li>JavaScript skills are intermediate.</li>
          <li>VueJS skills are intermediate.</li>
          <li>MySQL skills are intermediate.</li>
          <li>NodeJS skills are intermediate.</li>
        </ul>
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
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("getEducation");
    this.$store.dispatch("getSkills");
  },
};
</script>

<style scoped>
.row{
  background-color: #edeade;
  padding: 20px;
  border-radius: 10px;
}
.desc-info{
  line-height: 52px;
  font-size: 20px;
  font-family: 'Poppins';
  
}




* {
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

.bg-purple {
  background-color: violet;
}

.timeline-item {
  position: relative;
  left: -200px;
}
.direction-r {
  left: 200px;
}

.timeline {
  position: relative;
  margin: 10px;
  border-radius: 10px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
.title-info {
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
.text-info {
  color: black !important ;
}
.timeline:before {
  content: "";
  position: absolute;
  top: 3%;
  bottom: 5%;
  width: 10px;
  background-color: #38e54d;
  left: 50%;
  margin-left: -1px;
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
}

/*  box of timeline*/
.content {
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  border-radius: 6px;
  border-radius: 10%;
  box-shadow: 8px 8px 15px whitesmoke, -4px -4px 15px silver;
  background: #edeade;
}

.year {
  font-weight: bold;
  color: #38e54d;
}

.progress-container {
  margin-top: 20px;
  margin-bottom: 20px;
}

.progress {
  width: 400px;
  background-color: whitesmoke;
  height: 20px;
  box-shadow: 6px 6px 10px whitesmoke, -6px -6px 10px silver;
}


@media screen and (max-width: 700px){

  .resume h1{
    font-size: 30px;
  }
  .timeline-item {
  left: 0px;
}
.direction-r {
  left: 0px;
}

}


@media screen and (max-width: 450px){
  /* .timeline{
    width: 100%;
    height: 100%;

  }
  .timeline-item{
    width: 100%;
  }
  .timeline-item {
  position: relative;
  padding:20px;
  left: 0px;
} */

.content{
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 10px;
}

.direction-r {
  left: 0px;
}
.title-info{
  width: 100%;
  height: 100%;
  padding: 0px;
}
.progress {
  width: 250px;
}
}
</style>
