import Vue from 'vue';
import Vuex from 'vuex';
import Router from '@/router/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    activePage: Router.currentRoute
  },
  mutations: {
    CHANGE_PAGE(state, page)
    {
      let pageName = page;
      state.activePage = pageName;
    }
  },
  actions: {
    pageChange({ commit }, page)
    {
      commit('CHANGE_PAGE', page);
    }
  },
  getters: {
    currentPage: state => {
      state.activePage
    }
  },
});