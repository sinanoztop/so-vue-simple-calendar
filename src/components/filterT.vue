<template>
  <div class="filter-t">
    <div>
      <span>
        Ay: {{ getMonthName }}
        <em class="fas fa-arrow-down"></em>
      </span>
      <select v-on:change="changeMonth($event)" v-model="month">
        <option
          v-for="value in monthList"
          v-bind:key="value.id"
          v-bind:value="value.id"
        >
          {{ value.name }}
        </option>
      </select>
    </div>
    <div>
      <span>
        Yıl: {{ year }}
        <em class="fas fa-arrow-down"></em>
      </span>
      <select v-on:change="changeYear($event)" v-model="year">
        <option
          v-for="value in yearList"
          v-bind:key="value"
          v-bind:value="value"
        >
          {{ value }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import createDays from "@/mixins/createDays";
export default {
  name: "filterT",
  mixins: [createDays],
  data() {
    return {};
  },
  computed: {
    ...mapState(["monthList", "yearList", "month", "year"]),
    getMonthName() {
      if (this.month == "") return "";
      let _res = this.monthList.filter((value) => value.id == this.month);
      return _res[0]?.["name"];
    },
  },
  methods: {
    ...mapActions(["setMonthYear"]),
    changeYear(event) {
      this.setMonthYear({ month: this.month, year: event.target.value });
      this.createDays();
    },
    changeMonth(event) {
      this.setMonthYear({ month: event.target.value, year: this.year });
      this.createDays();
    },
  },
  mounted() {},
};
</script>
