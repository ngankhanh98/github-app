<template>
  <div class="container">
    <SearchBar @search-user="searchUser" />
    <Users v-model="users" :items="users" />
  </div>
</template>

<script>
import axios from "axios";

import SearchBar from "./components/SearchBar";
import Users from "./components/Users";
export default {
  name: "App",
  components: {
    SearchBar,
    Users,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.users = [];
  },
  methods: {
    async searchUser(term) {
      console.log("term", term);
      const result = await axios
        .get(`https://api.github.com/search/users?q=user:${term}`)
        .then((result) => {
          return result.data.items;
        })
        .catch((err) => {
          // TODO: don't know how to throw error
          return err;
        });

      // TODO: what if result empty
      this.users = [...result];
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
