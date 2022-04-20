const setList = ({ commit }, payload) => {
  commit("setList", payload);
};
const setMonthYear = ({ commit }, payload) => {
  commit("setMonthYear", payload);
};
export default {
  setList,
  setMonthYear,
};
