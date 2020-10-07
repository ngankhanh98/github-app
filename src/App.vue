<template>
  <div class="container">
    <SearchBar @search-user="searchUser" />
    <Users :items="users" />
    <Alert v-if="message" :message="message" :type="alertType" />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import Users from "./components/Users";
import Alert from "./components/Alert";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    SearchBar,
    Users,
    Alert,
  },
  computed: {
    ...mapGetters(["users", "message", "alertType"]),
  },
  mounted() {
    this.$store.dispatch("init");
  },
  methods: {
    searchUser(term) {
      this.$store.dispatch('resetState')
      this.$store.dispatch("searchUser", term);
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
