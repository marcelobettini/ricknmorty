import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {    
    data: [],
    pagination: [],
    page: 1,
    baseURL: 'https://rickandmortyapi.com/api/'
  },  
  mutations: {    
    loadCharacters(state, rawData) {      
      state.data = rawData.results;
      state.pagination = rawData.info;
    },
  },
  actions: {
    getData: async function({ commit }, payload) {      
      const data = await fetch(`${this.state.baseURL}${payload}`);
      const rawData = await data.json();      
      commit('loadCharacters', rawData )
    },
  },
  modules: {},
});
