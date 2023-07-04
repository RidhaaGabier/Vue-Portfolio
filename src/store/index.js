import { createStore } from 'vuex'

export default createStore({
  state: {
    slide:null,
  },
  mutations: {
    setSlides: (state,slide) => {
      state.slide = slide;
    }
  },
  actions: {
    getSlides: async (context) => {
      fetch("")
      .then((res) => res.json())
      .then((slide) => context.commit("setSlide", slide));
    }
  },
 
})
