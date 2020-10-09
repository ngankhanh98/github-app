<template>
  <a-input-search
    v-model:value="term"
    placeholder="input search text"
    style="width: 200px"
    size="large"
    @search="termSearch"
    @keyup.enter="termSearch"
  />
</template>

<script>
export default {
  data() {
    return {
      term: "",
    };
  },
  methods: {
    termSearch() {
      console.log("term", this.term);
      this.$emit("search-user", this.term);
    },
  },
};
</script>

<style scoped></style>
