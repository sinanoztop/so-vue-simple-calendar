<template>
  <div class="date-list">
    <span
      v-for="value in dateList"
      v-bind:key="value"
      v-on:click="dayClick(value)"
    >
      <span class="icon"> <em class="fas fa-calendar-alt"></em> </span>
      <span class="text">{{ value }}</span>
    </span>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import moment from "moment";
import "moment/locale/tr";
export default {
  name: "dateList",
  emits: ["selectDate"],
  data() {
    return {
      dateList: [],
    };
  },
  methods: {
    ...mapActions(["setList"]),
    createDays() {
      let _first_day_format =
        moment().format("YYYY") + "-" + moment().format("MM") + "-01";
      let _first_day = 0;
      let _last_day = moment().endOf("month").format("DD") - 1;
      for (let _i = _first_day; _i <= _last_day; _i++) {
        let _day_res = moment(_first_day_format)
          .add("days", _i)
          .format("DD MMMM, dddd");
        this.dateList.push(_day_res);
      }
    },
    dayClick(day) {
      this.$emit("selectDate", day);
    },
  },
  mounted() {
    moment.locale("tr");
    this.createDays();
    this.setList(this.dateList);
  },
};
</script>
