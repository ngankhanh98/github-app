<template>
  <input
    type="text"
    placeholder="Search username..."
    @keyup.enter="onSearch"
    v-model="term"
  />
</template>

<script>
export default {
  data() {
    return {
      term: "",
    };
  },
  props: {
    searchBtnClick: { type: String },
  },
  methods: {
    onSearch() {
      this.$store.dispatch("resetState");
      this.$store.dispatch("searchUser", this.term);
      this.$router.replace({ path: "/user", query: { username: this.term } });
    },
  },
  watch: {
    searchBtnClick() {
      this.$store.dispatch("resetState");
      this.$store.dispatch("searchUser", this.term);
      this.$router.replace({ path: "/user", query: { username: this.term } });
    },
  },
};
</script>

<style></style>
