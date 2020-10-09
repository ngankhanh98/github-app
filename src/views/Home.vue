<template>
  <h3 v-if="users">Users</h3>
  <Users :items="users" />
  <Alert v-if="message" :message="message" :type="alertType" />
</template>

<script>
import Users from "../components/Users";
import Alert from "../components/Alert";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Users,
    Alert,
  },
  computed: {
    ...mapGetters(["users", "message", "alertType"]),
  },
  mounted() {
    this.$store.dispatch("init");
  },
};
</script>

<style></style>
