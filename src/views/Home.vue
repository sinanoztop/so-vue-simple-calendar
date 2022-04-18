<template>
  <div class="home">
    <dayList v-on:selectDate="selectDate" />
    <dayModal
      v-if="dayModal"
      v-bind:day="selectedDate"
      v-on:closeModal="closeModal"
    />
  </div>
</template>

<script>
import "@/styles/base.styl";
import dayList from "@/components/dayList";
import dayModal from "@/components/dayModal";
export default {
  name: "Home",
  components: {
    dayList,
    dayModal,
  },
  data() {
    return {
      dayModal: false,
      selectedDate: "",
    };
  },
  methods: {
    closeModal() {
      this.selectedDate = "";
      this.dayModal = false;
    },
    selectDate(day) {
      this.selectedDate = day;
      this.dayModal = true;
    },
  },
};
</script>
