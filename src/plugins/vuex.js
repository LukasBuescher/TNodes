import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    routineName: ""
  },
  mutations: {
    setRoutineName (state, routineName){
      state.routineName = " - " + routineName
    }
  }
})

export default store;
