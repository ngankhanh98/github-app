<template>
  <SearchBar @search-user="searchUser" />
  <div class="container pt-5 mt-5">
    <router-view />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    SearchBar,
  },
  computed: {
    ...mapGetters(["users", "message", "alertType"]),
  },
  mounted() {
    this.$store.dispatch("init");
  },
  methods: {
    searchUser(term) {
      this.$router.push("/");
      this.$store.dispatch("resetState");
      console.log("term", term);
      this.$store.dispatch("searchUser", term);
    },
  },
};
</script>

<style></style>
