<template>
  <a-list
    item-layout="vertical"
    size="large"
    :pagination="pagination"
    :data-source="commits"
  >
    <template v-slot:renderItem="{ item }">
      <a-list-item key="item.sha">
        <Commit
          :key="item.sha"
          :message="item.commit.message"
          :author="item.author.login"
          :html_url="item.html_url"
          :avatar_url="item.author.avatar_url"
          :date="item.commit.author.date"
        />
      </a-list-item>
    </template>
  </a-list>
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
  data() {
    return {
      pagination: {
        onChange: (page) => {
          console.log(page);
          console.log("this.commits", this.commits);
        },
        pageSize: 10,
      },
    };
  },
};
</script>
<style></style>
