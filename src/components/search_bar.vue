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
      console.log("this.term", this.term);
      this.$store.dispatch("searchUser", this.term);
      this.$router.replace({ path: "/user", query: { username: this.term } });
    },
  },
  watch: {
    searchBtnClick(newValue) {
      console.log(newValue);
      this.$store.dispatch("searchUser", this.term);
      this.$router.replace({ path: "/user", query: { username: this.term } });

    },
  },
};
</script>

<style></style>
