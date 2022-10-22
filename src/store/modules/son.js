export default {
  namespaced: true,
  state: () => {
    return {
      count: 0,
    };
  },
  mutations: {
    add(state) {
      console.log(state, "这是son...");
      state.count++;
    },
  },
  actions: {},
};
