<template>
  <div class="flex justify-center">
    <PersonalBar v-show="detail" :user="detail" />
    <div>
      <div class="ml-8"><h2>Repositories</h2></div>
      <div class="ml-4 grid grid-cols-2 gap-1 auto-rows-max">
        <ReposCard
          v-for="repo in repos"
          :key="repo.id"
          :name="repo.name"
          :description="repo.description"
          :stargazers_count="repo.stargazers_count"
          :open_issues_count="repo.open_issues_count"
          :full_name="repo.full_name"
          :forks_count="repo.forks_count"
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
    ...mapGetters(["repos", "detail"]),
    userInfo() {
      const info = this.$store.state?.users?.[0];
      console.log("info", info);
      if (info !== undefined) {
        console.log("info", info);
        const { login, avatar_url } = info;
        console.log("login", login);
        console.log("avatar_url", avatar_url);
        return { username: login, avatar_url };
      }
      return false;
    },
  },
  mounted() {
    const { username } = this.$route.params;
    console.log("username", username);
    this.$store.dispatch("loadRepos", username);
    this.$store.dispatch("searchUser", username);
    this.$store.dispatch("loadUserDetail", username);

    const repos = this.$state;
    console.log("repos", repos);
  },
};
</script>

<style></style>
