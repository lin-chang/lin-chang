import { createStore } from "vuex"


const stroe= createStore({ 
  state: {
    list:10
  },
  mutations: {
    ini(state){
     state.list++
      
    }
  },
  actions: {
  },
  getters: {
  }
})
export default stroe
