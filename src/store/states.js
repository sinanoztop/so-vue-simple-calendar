import moment from "moment";
export default {
  monthList: [
    {
      id: "01",
      name: "Ocak",
    },
    {
      id: "02",
      name: "Şubat",
    },
    {
      id: "03",
      name: "Mart",
    },
    {
      id: "04",
      name: "Nisan",
    },
    {
      id: "05",
      name: "Mayıs",
    },
    {
      id: "06",
      name: "Haziran",
    },
    {
      id: "07",
      name: "Temmuz",
    },
    {
      id: "08",
      name: "Ağustos",
    },
    {
      id: "09",
      name: "Eylül",
    },
    {
      id: "10",
      name: "Ekim",
    },
    {
      id: "11",
      name: "Kasım",
    },
    {
      id: "12",
      name: "Aralık",
    },
  ],
  yearList: [2023, 2022, 2021],
  month: moment().format("MM"),
  year: moment().format("YYYY"),
  list: [],
  items: [],
};
