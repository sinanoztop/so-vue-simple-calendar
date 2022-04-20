import { mapState, mapActions } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      dateList: [],
    };
  },
  computed: {
    ...mapState(["month", "year"]),
  },
  methods: {
    ...mapActions(["setList"]),
    createDays() {
      this.dateList = [];
      let _first_day_format = this.year + "-" + this.month + "-01";
      let _first_day = 0;
      let _last_day = moment(_first_day_format).endOf("month").format("DD") - 1;
      for (let _i = _first_day; _i <= _last_day; _i++) {
        let _day_res = moment(_first_day_format)
          .add("days", _i)
          .format("DD MMMM, dddd");
        this.dateList.push(_day_res);
      }
      this.setList(this.dateList);
    },
    dayClick(day) {
      this.$emit("selectDate", day);
    },
  },
  mounted() {
    moment.locale("tr");
    this.createDays();
  },
};
