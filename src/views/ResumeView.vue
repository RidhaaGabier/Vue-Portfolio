<template>
  <div class="resume">
    <h1 id="slideInLeft">My Skills</h1>
    <!-- start of time line -->
    <div class="timeline">

    <div class="timeline-item" v-for="info in education" :key="info.id">
      <div class="timeline-item-content">
        <h4>{{ info.name }}</h4>
        <p>{{ info.desc }}</p>
        <span class="date">{{ info.year }}</span>
      </div>
    </div>

  </div>
  <!-- end of time line -->
  

  <!-- start of skill bar -->
  
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
  padding: 20px 0;
}

.timeline:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #ccc;
  left: 50%;
  margin-left: -1px;
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
}

.timeline-item:before,
.timeline-item:after {
  content: '';
  display: table;
}

.timeline-item:after {
  clear: both;
}

.timeline-item-content {
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 6px;
}

.date {
  font-weight: bold;
  color: #888;
}

</style>
