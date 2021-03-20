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
  getters: {
    // eslint-disable-next-line no-unused-vars
    getUnits(state) {
      return state.unitList.units;
    },
  },
};

export default units;
