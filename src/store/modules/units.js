const units = {
  namespaced: true,
  state: {
    unitList: [],
  },
  mutations: {
    SET_UNITS(state, list) {
      state.unitList = list;
    },
  },
  actions: {
    setUnits({ commit }, list) {
      commit('SET_UNITS', list);
    },
  },
};

export default units;
