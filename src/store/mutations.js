const setList = (state, data) => {
  state.list = data;
};
const setMonthYear = (state, data) => {
  state.month = data.month;
  state.year = data.year;
};

export default {
  setList,
  setMonthYear,
};
