<template>
  <div class="project">
    <h1 id="slideInLeft">My Projects</h1>
    <div class="container mt-5">
      <div class="row">
        <div v-for="project in projects" :key="project.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
          <projectSite :project="project" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import projectSite from "@/components/Card.vue";

export default {
  name: "ProjectView",
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    return this.$store.dispatch("getProjects");
  },
  components: { projectSite },
};
</script>

<style scoped>
*{
  font-family: "Poppins";
}
.project {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
}

.project h1 {
  font-size: 50px;
  color: black;
  margin-bottom: 20px;
  position: relative;
}
.text {
  margin-top:100px !important;
}
.project h1::after {
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

@media screen and (max-width: 300px){
  #slideInLeft{
  font-size: 30px;
  margin:20px;
  margin-bottom: 25px ;
  }
  .project h1{
    font-size: 30px;
  }

}
</style>
