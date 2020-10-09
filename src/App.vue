<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <a-row type="flex">
        <a-col flex="150px" justify="space-around" align="middle">
          <i class="fab fa-github" style="color:white;font-size:200%"></i>
          <span
            style="font-family: 'Poppins', sans-serif; color:white; font-size: 15px;"
          >
            Github
          </span>
        </a-col>
        <a-col flex="auto"> <SearchBar @search-user="searchUser" /> </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content>
      <div :style="{ background: '#fff', padding: '50px', minHeight: '380px' }">
        <router-view />
      </div>
    </a-layout-content>
  </a-layout>
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

<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
<!--
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
-->
