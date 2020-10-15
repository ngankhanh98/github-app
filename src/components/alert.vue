<template>
  <div>
    <a-alert
      v-if="visible"
      :message="message"
      :type="type"
      closable
      :after-close="handleClose"
      show-icon
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  props: {
    message: { type: Number },
    type: { type: String },
  },
  methods: {
    handleClose() {
      this.visible = false;
      this.$store.dispatch("resetState");
    },
  },
};
</script>

<style lang="scss" scoped></style>
