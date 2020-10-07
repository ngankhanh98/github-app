<template>
  <div class="container">
    <SearchBar @search-user="searchUser" />
    <Users v-model="users" :items="users" />
    <Alert v-if="message" :message="message" :type="alertType" />
    <!-- <div class="alert alert-warning" role="alert">
      A simple warning alert—check it out!
    </div> -->
  </div>
</template>

<script>
import axios from "axios";

import SearchBar from "./components/SearchBar";
import Users from "./components/Users";
import Alert from "./components/Alert";
export default {
  name: "App",
  components: {
    SearchBar,
    Users,
    Alert,
  },
  data() {
    return {
      users: [],
      message: "",
      alertType: "",
    };
  },
  mounted() {
    this.users = [];
    this.message = "";
    this.alertType = "";
  },
  methods: {
    async searchUser(term) {
      console.log("term", term);
      const result = await axios
        .get(`https://api.github.com/search/users?q=user:${term}`)
        .then((result) => {
          return result;
        })
        .catch((err) => {
          // TODO: don't know how to throw error
          // return err;
          console.log("err", err);
          const error = err.response.data.errors[0].message;
          this.users = [];
          this.message = error;
          this.alertType = "alert-warning";
          console.log("this.message", this.message);
          return;
        });

      if (result) {
        console.log("result", result);
        this.users = [...result.data.items];
        this.message = "";
      }
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
