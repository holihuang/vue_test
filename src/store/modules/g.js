export default {
  namespaced: true,
  state: () => {
    return {
      count: 0,
    };
  },
  mutations: {
    add(state) {
      state.count++;
    },
  },
  actions: {},
};
