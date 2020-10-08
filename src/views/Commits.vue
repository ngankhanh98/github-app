<template>
  <div>
    <div v-for="commit in commits" :key="commit.sha">
      <Commit
        :key="commit.sha"
        :message="commit.commit.message"
        :author="commit.author.login"
        :html_url="commit.html_url"
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
  },
};
</script>

<style></style>
