import { createStore } from "vuex";
import states from "./states";
import actions from "./actions";
import mutations from "./mutations";

export default createStore({
  state: states,
  mutations: mutations,
  actions: actions,
  modules: {},
});
