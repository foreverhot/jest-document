import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    addListItem(state, name) {
      state.list = state.list.concat(name)
    },
    minusListItem(state, index) {
      state.list.splice(index, 1)
    }
  },
  actions: {},
  modules: {}
});
