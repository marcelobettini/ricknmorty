import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {    
    characters: [],
    pagination: [],
    page: 1,
    baseURL: 'https://rickandmortyapi.com/api/'
  },  
  mutations: {    
    loadCharacters(state, char) {      
      state.characters = char.results;
      state.pagination = char.info;
    },
  },
  actions: {
    getCharacters: async function({ commit }, payload) {      
      const data = await fetch(`${this.state.baseURL}${payload}`);
      const char = await data.json();      
      commit('loadCharacters', char )
    },
  },
  modules: {},
});
