export default {
  namespaced: true,
  state: () => {
    return {
      num: 0,
    };
  },
  mutations: {
    add(state) {
      state.num++;
    },
    clear(state) {
      state.num = 0;
    },
  },
  actions: {},
};
