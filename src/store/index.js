import { createLogger, createStore } from 'vuex';
import units from './modules/units';

export default createStore({
  plugins: [createLogger()],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    units,
  },
});
