<template>
  <!-- 1st render -->
    <div v-if="!firstRender">
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240); box-shadow: 0px 1px 9px -4px rgba(0,0,0,0.75); height:fit-content"
        title="Result"
        :sub-title="term"
      >
        <template v-slot:extra>
          <SearchBar @search-user="searchUser" />
        </template>
      </a-page-header>
      <a-layout-content
        :style="{
          margin: '24px 24px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </div>
    <a-layout v-if="firstRender" class="layout">
      <a-layout-content>
        <div
          :style="{ background: '#fff', padding: '100px', minHeight: '380px' }"
          flex="auto"
          justify="space-around"
          align="middle"
        >
          <a-row> <i class="fab fa-github" style="font-size:500%"></i> </a-row>
          <a-row>
            <span style="font-family: 'Poppins', sans-serif; font-size: 30px;">
              Github
            </span></a-row
          >
          <div style="margin-top: 40px;">
            <SearchBar @search-user="searchUser" />
          </div>
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
