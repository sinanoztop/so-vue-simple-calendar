<template>
  <div class="date-list">
    <span v-for="value in list" v-bind:key="value" v-on:click="dayClick(value)">
      <span class="icon"> <em class="fas fa-calendar-alt"></em> </span>
      <span class="text">{{ value }}</span>
    </span>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import createDays from "@/mixins/createDays";
export default {
  name: "dateList",
  emits: ["selectDate"],
  mixins: [createDays],
  computed: {
    ...mapState(["list"]),
  },
  methods: {
    dayClick(day) {
      this.$emit("selectDate", day);
    },
  },
  mounted() {},
};
</script>
