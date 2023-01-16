<template>
  <div class="home">
    <filterT />
    <dayList v-on:selectDate="selectDate" />
    <dayModal
      v-if="dayModal"
      v-bind:day="selectedDate"
      v-on:closeModal="closeModal"
    />
    <p>Test section</p>
  </div>
</template>

<script>
import "@/styles/base.styl";
import { mapState, mapActions } from "vuex";
import filterT from "@/components/filterT";
import dayList from "@/components/dayList";
import dayModal from "@/components/dayModal";
export default {
  name: "Home",
  components: {
    dayList,
    dayModal,
    filterT,
  },
  data() {
    return {
      dayModal: false,
      selectedDate: "",
    };
  },
  methods: {
    ...mapActions(["setMonthYear"]),
    closeModal() {
      this.selectedDate = "";
      this.dayModal = false;
    },
    selectDate(day) {
      this.selectedDate = day;
      this.dayModal = true;
    },
  },
  mounted() {},
};
</script>
