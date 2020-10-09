<template>
  <div class="d-flex flex-row">
    <div class="flex-shrink-0 col-12 col-md-3 mb-4 mb-md-0">
      <PersonalBar v-show="userInfo" :user="userInfo" />
    </div>
    <div class="flex-shrink-0 col-12 col-md-10 mb-4 mb-md-0">
      <h5>Repositories</h5>
      <div class="d-flex flex-row flex-wrap">
        <ReposCard
          v-for="repo in repos"
          :key="repo.id"
          :name="repo.name"
          :description="repo.description"
          :stargazers_count="repo.stargazers_count"
          :open_issues_count="repo.open_issues_count"
          :full_name="repo.full_name"
          class="col-md-5 m-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ReposCard from "../components/ReposCard";
import PersonalBar from "../components/PersonalBar";
import { mapGetters } from "vuex";

export default {
  name: "Repos",
  components: {
    ReposCard,
    PersonalBar,
  },
  computed: {
    ...mapGetters(["repos"]),
    userInfo() {
      const info = this.$store.state?.users?.[0];
      console.log("info", info);
      if (info !== undefined) {
        console.log("info", info);
        const { login, avatar_url } = info;
        console.log("login", login);
        console.log("avatar_url", avatar_url);
        // // console.log('object', object)
        return { username: login, avatar_url };
      }
      return false;
    },
  },
  mounted() {
    const username = this.$route.params.username;
    console.log("username", username);
    this.$store.dispatch("loadRepos", username);
    this.$store.dispatch("searchUser", username);

    const repos = this.$state;
    console.log("repos", repos);
  },
};
</script>

<style></style>
