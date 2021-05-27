import Vue from "vue";
import Vuex from "vuex";
import $ from 'jquery'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    pagination: [],
    page: 1,
    baseURL: "https://rickandmortyapi.com/api/",    
    isLoaded: false
  },
  mutations: {
    loadCharacters(state, rawData) {      
      state.data = rawData.results;
      state.pagination = rawData.info;            
      setTimeout(() => {
        state.isLoaded = true      
      },750)
    },
    pageUp(state) {
      state.page += 1;
      $('html,body').scrollTop(0);
    },
    pageDown(state) {
      state.page -= 1;
      $('html,body').scrollTop(0);
    },
    resetPage(state) {
      state.page = 1;
      
    }
  },
  actions: {
    getData: async function({ commit }, payload) {
      this.state.isLoaded = !this.state.isLoaded;
      const data = await fetch(`${this.state.baseURL}${payload}`);
      const rawData = await data.json();
      commit("loadCharacters", rawData);      
    },
  },
  modules: {},
});
