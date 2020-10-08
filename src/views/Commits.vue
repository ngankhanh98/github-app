<template>
  {{ $route.params.username }}
  {{ $route.params.repos }}
  <div>{{ commits }}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Commits",
  mounted() {
    const username = this.$route.params.username;
    const repos = this.$route.params.repos;
    console.log("username", username);
    console.log("repos", repos);
    this.$store.dispatch("loadCommits", { username, repos });
  },
  computed: {
    ...mapGetters(["commits"]),
  },
};
</script>

<style></style>
