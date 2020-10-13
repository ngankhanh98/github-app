<template>
  <router-view />
</template>
<script>
// import SearchBar from "./components/SearchBar";
import { mapGetters } from "vuex";

export default {
  name: "App",
  // components: {
  //   SearchBar,
  // },
  data() {
    return {
      firstRender: true,
      term: "",
    };
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
      this.term = term;
      this.firstRender = false;
    },
  },
};
</script>

<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
