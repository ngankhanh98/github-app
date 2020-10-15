<template>
  <div>
    <button type="button" @click="onSearch">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
    },
  },
  methods: {
    onSearch() {
      this.$emit("on-search");
    },
  },
};
</script>

<style lang="scss" scoped></style>
