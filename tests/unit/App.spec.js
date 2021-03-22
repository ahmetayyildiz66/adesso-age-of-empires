// import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
// import { createStore } from 'vuex';
// import { createRouter, createMemoryHistory } from 'vue-router';
// import App from '../../src/App.vue';
// import Home from '../../src/views/Home.vue';
// import routes from '../../src/routes';
// import ageOfEmpires from '../../src/age-of-empires-units.json';
// import UnitsModule from '../../src/store/modules/units';

// const localVue = createLocalVue();

// localVue.use(Vuex);

// describe('App', () => {
//   it('renders Home component via routing', async () => {
//     const router = createRouter({
//       history: createMemoryHistory(),
//       routes,
//     });
//     router.push('');
//     console.log('ageOfEmpires', ageOfEmpires);

//     await router.isReady();
//     const wrapper = mount(App, {
//       global: {
//         plugins: [router],
//       },
//     });

//     expect(wrapper.findComponent(Home).exists()).toBe(true);
//   });
// });

// describe('App vuex store', () => {
//   const store = createStore({
//     state: {
//       unitList: [],
//       filteredList: [],
//     },
//     actions: {
//       initializeUnits({ commit }, list) {
//         commit('INITIALIZE_UNITS', list);
//       },
//     },
//     mutations: {
//       INITIALIZE_UNITS(state, list) {
//         state.unitList = list;
//         state.filteredList = list;
//       },
//     },
//   });

//   test('vuex', async () => {
//     const wrapper = shallowMount(App, {
//       global: {
//         plugins: [store],
//       },
//     });
//   });
// });
