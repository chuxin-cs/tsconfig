<template>
  <div class="vue-ui-input-container">
    <input type="text" v-model="value">
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      value: ""
    }
  }
}
</script>

<style scoped>
.vue-ui-input-container {
  background-color: #fff;
}
</style>