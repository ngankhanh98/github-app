<template>
  <Users />
</template>

<script>
import Users from "../components/users";
export default {
  components: {
    Users,
  },
  mounted() {
    const { username } = this.$route.query;
    this.$store.dispatch("searchUser", username);
  },
  updated() {
    const { username } = this.$route.query;
    this.$store.dispatch("searchUser", username);
  },
};
</script>

<style></style>
