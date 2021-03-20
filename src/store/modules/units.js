const units = {
  namespaced: true,
  state: {
    unitList: [],
    filteredList: [],
  },
  mutations: {
    INITIALIZE_UNITS(state, list) {
      state.unitList = list;
      state.filteredList = list;
    },
    SET_FILTERED(state, list) {
      state.filteredList = list;
    },
  },
  actions: {
    initializeUnits({ commit }, list) {
      commit('INITIALIZE_UNITS', list);
    },
    filterUnits({ commit, state }, age) {
      const filteredList = state.unitList.filter((item) => {
        if (age === 'All') {
          return item;
        }
        return item.age === age;
      });
      commit('SET_FILTERED', filteredList);
    },
  },
  getters: {
    getUnits(state) {
      return state.filteredList;
    },
  },
};

export default units;
