<template>
  <div class="vue-ui-button-container">
    <button>
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name:"Button"
}
</script>

<style scoped>
.vue-ui-button-container{
  background-color: #fff;
}
</style>