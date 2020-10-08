<template>
  <div v-for="repo in repos" :key="repo.key">
    <ReposCard
      :name="repo.name"
      :description="repo.description"
      :stargazers_count="repo.stargazers_count"
      :open_issues_count="repo.open_issues_count"
    />
  </div>
</template>

<script>
import ReposCard from "../components/ReposCard";
import { mapGetters } from "vuex";

export default {
  name: "Repos",
  components: { ReposCard },
  computed: {
    ...mapGetters(["repos"]),
  },
  mounted() {
    const username = this.$route.params.username
    // const username = this.$store.state.users[0].login;
    console.log("username", username);
    this.$store.dispatch("loadRepos", username);
  },
};
</script>

<style></style>
