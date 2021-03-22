const units = {
  namespaced: true,
  state: {
    unitList: [],
    filteredList: [],
    filter: {
      age: 'All',
      costs: [],
    },
  },
  mutations: {
    INITIALIZE_UNITS(state, list) {
      state.unitList = list;
      state.filteredList = list;
    },
    SET_FILTERED(state, list) {
      state.filteredList = list;
    },
    SET_AGE(state, age) {
      state.filter.age = age;
    },
    SET_COSTS(state, costs) {
      state.filter.costs = costs;
    },
  },
  actions: {
    initializeUnits({ commit }, list) {
      commit('INITIALIZE_UNITS', list);
    },
    filterUnits({ commit, state }) {
      let filteredList = state.unitList.filter((item) => {
        if (state.filter.age === 'All') {
          return item;
        }
        return item.age === state.filter.age;
      });
      if (state.filter.costs.length) {
        const minMax = [];
        filteredList.forEach((item) => {
          if (item.cost) {
            Object.keys(item.cost).forEach((key) => {
              state.filter.costs.forEach((cost) => {
                if (key === cost.name
                    && item.cost[key] >= cost.value[0]
                    && item.cost[key] <= cost.value[1]) {
                  minMax.push(item);
                }
              });
            });
          }
        });
        filteredList = minMax;
      }
      commit('SET_FILTERED', filteredList);
    },
    setAge({ commit, dispatch }, age) {
      commit('SET_AGE', age);
      dispatch('filterUnits');
    },
    setCost({ commit, dispatch }, costs) {
      commit('SET_COSTS', costs);
      dispatch('filterUnits');
    },
  },
  getters: {
    getUnits(state) {
      return state.filteredList;
    },
  },
};

export default units;
