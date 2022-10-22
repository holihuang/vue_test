import { createStore } from "vuex";
const files = require.context("@/store/modules", false, /.js$/);
const modules = {};
files.keys().forEach((path) => {
  const content = files(path).default;
  modules[path.replace(".js", "").replace("./", "")] = content;
});
export default createStore({
  modules,
  state: {
    count: 0,
  },
  mutations: {
    add(state) {
      state.count++;
    },
  },
  actions: {
    addAsync(context) {
      setTimeout(function () {
        context.commit("add");
      }, 2000);
    },
  },
  getters: {
    getCount() {
      return state.count;
    },
  },
});
