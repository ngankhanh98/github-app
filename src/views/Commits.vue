<!--<template>
  <div class="mt-2">
    <h5>Commits</h5>

    <div v-for="commit in commits" :key="commit.sha">
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

<style></style>-->

<template>
  <a-list
    item-layout="vertical"
    size="large"
    :pagination="pagination"
    :data-source="commits"
  >
    <template v-slot:renderItem="{ item }">
      <a-list-item key="item.title">
        <a-list-item-meta :description="item.message">
          <template v-slot:message>
            {{ item.message }}
          </template>
          <!-- <template v-slot:avatar><a-avatar :src="item.avatar"/></template> -->
        </a-list-item-meta>
        {{ item.message }}
      </a-list-item>
    </template>
  </a-list>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  components: {
    // StarOutlined,
    // LikeOutlined,
    // MessageOutlined,
  },

  // computed: {
  //   ...mapGetters(["commits"]),
  // },
  data() {
    return {
      // listData,
      commits: this.$store.state.commits,
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      },
      actions: [
        { type: "StarOutlined", text: "156" },
        { type: "LikeOutlined", text: "156" },
        { type: "MessageOutlined", text: "2" },
      ],
    };
  },
};
</script>
<style></style>
