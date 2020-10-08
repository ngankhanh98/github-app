<template>
  <SearchBar @search-user="searchUser" />

   <!-- TODO: make these center -->
  <main role="main" class="containter">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-5 pb-2 mb-3 "
    >
      <Users :items="users" />
      <Alert v-if="message" :message="message" :type="alertType" />
    </div>
  </main>
</template>

<script>
import SearchBar from "../components/SearchBar";
import Users from "../components/Users";
import Alert from "../components/Alert";
import { mapGetters } from "vuex";

export default {
  name: "Home",
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
      this.$store.dispatch("resetState");
      this.$store.dispatch("searchUser", term);
    },
  },
};
</script>

<style></style>
