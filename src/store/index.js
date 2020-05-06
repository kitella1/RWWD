import Vue from 'vue';
import Vuex from 'vuex';
import Router from '@/router/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    activePage: Router.currentRoute,
    activeCountry: "UK"
  },
  mutations: {
    CHANGE_PAGE(state, page)
    {
      let pageName = page;
      state.activePage = pageName;
    },
    CHANGE_COUNTRY(state, country)
    {
      let countryCode = country;
      state.activeCountry = countryCode;
    }
  },
  actions: {
    pageChange({ commit }, page)
    {
      commit('CHANGE_PAGE', page);
    },
    countryChange({ commit }, country)
    {
      commit('CHANGE_COUNTRY', country);
    }
  },
  getters: {
    currentPage: state => {
      state.activePage
    },
    currentCountry: state => {
      state.currentCountry
    }
  },
});