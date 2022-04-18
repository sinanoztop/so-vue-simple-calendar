<template>
  <div class="day-modal">
    <div class="c">
      <div class="t">
        <span>İtem Oluştur</span>
        <span v-on:click="$emit('closeModal')">
          <em class="fas fa-times"></em>
          kapat
        </span>
      </div>
      <div class="c-c">
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dayModal",
  props: ["day"],
  emits: ["closeModal"],
  data() {
    return {};
  },
  mounted() {},
};
</script>
