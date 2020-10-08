<template>
  <div>
    <div :class="['alert', type]" role="alert">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    message: {
      type: String,
    },
    type: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
