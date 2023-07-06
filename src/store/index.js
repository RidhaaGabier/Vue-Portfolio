import { createStore } from 'vuex'

export default createStore({
  state: {
    // slide:null,
  

  },
  mutations: {
    setSlide: (state,slide) => {
      state.slide = slide;
    },
    // setProject: (state,project) => {
    //   state.project = project;
    // }
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

    // getProjects: async (context) => {
    //   try{
    //     fetch("https://ridhaagabier.github.io/customer.json")
    //     .then((res) => res.json())
    //     .then((project) => {
    //       let {projects} = project
    //       context.commit("setProject", projects)
    //     });

    //   } catch (error){
    //     console.error(error)
    //   }
    // },

    
  },
  
 
})
