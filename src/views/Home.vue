<template>
  <Users />
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
    ...mapGetters(["message", "alertType"]),
  },
  mounted() {
    this.$store.dispatch("init");
  },
};
</script>

<style></style>
