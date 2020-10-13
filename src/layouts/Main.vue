<template>
  <div>
    <a-layout class="layout">
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
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
export default {
  name: "MainLayout",
  components: SearchBar,
  methods: {
    searchUser(term) {
    //   this.$router.push("/");
    //   this.$store.dispatch("resetState");
      console.log("term", term);
    //   this.$store.dispatch("searchUser", term);
    //   this.term = term;
    //   this.firstRender = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
