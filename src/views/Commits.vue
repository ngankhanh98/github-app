<template>
  <div class="mt-2">
    <h5>Commits</h5>

    <div v-for="commit in latestCommits" :key="commit.sha">
      <Commit
        :key="commit.sha"
        :message="commit.commit.message"
        :author="commit.author.login"
        :html_url="commit.html_url"
        :avatar_url="commit.author.avatar_url"
        :date="commit.commit.author.date"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Commit from "../components/Commit";

export default {
  name: "Commits",
  components: {
    Commit,
  },
  mounted() {
    const username = this.$route.params.username;
    const repos = this.$route.params.repos;
    console.log("username", username);
    console.log("repos", repos);
    this.$store.dispatch("loadCommits", { username, repos });
  },
  computed: {
    ...mapGetters(["commits"]),
    latestCommits() {
      return this.$store.state.commits.slice(0, 10);
    },
  },
};
</script>

<style></style>
