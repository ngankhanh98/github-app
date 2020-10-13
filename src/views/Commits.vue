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
    const { username, repository } = this.$route.params;
    console.log("username, repository", username, repository);
    this.$store.dispatch("loadCommits", { username, repository });
  },
  computed: {
    ...mapGetters(["commits"]),
  },
  data() {
    return {
      pagination: {
        pageSize: 10,
      },
    };
  },
};
</script>
<style></style>
