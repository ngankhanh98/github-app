<template>
  <div v-for="repo in repos" :key="repo.key">
      <ReposCard
        :name="repo.name"
        :description="repo.description"
        :stargazers_count="repo.stargazers_count"
        :open_issues_count="repo.open_issues_count"
        :full_name="repo.full_name"
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
    const username = this.$route.params.username;
    console.log("username", username);
    this.$store.dispatch("loadRepos", username);
    const repos = this.$state;
    console.log("repos", repos);
  },
};
</script>

<style></style>
