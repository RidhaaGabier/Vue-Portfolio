import { createStore } from 'vuex'

export default createStore({
  state: {
    slide: null,
    projects: null,
    education: null,
    skills: null,
  },
  mutations: {
    setSlide: (state,slide) => {
      state.slide = slide;
    },
    setProjects: (state,projects) => {
      state.projects = projects;
    },
    setEducation: (state, education) => {
      state.education = education;
    },
    setSkills: (state, skills) => {
      state.skills = skills;
    },
  },
  actions: {
    getSlides: async (context) => {
      try{
        fetch("https://ridhaagabier.github.io/customer.json")
        .then((res) => res.json())
        .then((slide) => {
          let {testimonials} = slide
          context.commit("setSlide", testimonials)
        });

      } catch (error){
        console.error(error)
      }
    },

    getProjects: async (context) => {
      try{
        fetch("https://ridhaagabier.github.io/customer.json")
        .then((res) => res.json())
        .then((project) => {
          let {projects} = project
          context.commit("setProjects", projects)
        });

      } catch (error){
        console.error(error)
      }
    },

    getEducation: async (context) => {
      try{
        fetch("https://ridhaagabier.github.io/customer.json")
        .then((res) => res.json())
        .then((info) => {
          let {education} = info
          context.commit("setEducation", education)
        });

      } catch (error){
        console.error(error)
      }
    },

    getSkills: async (context) => {
      try{
        fetch("https://ridhaagabier.github.io/customer.json")
        .then((res) => res.json())
        .then((info) => {
          let {skills} = info
          context.commit("setSkills", skills)
        });

      } catch (error){
        console.error(error)
      }
    },

    
  },
  
 
})
