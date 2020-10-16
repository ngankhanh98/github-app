<template>
  <div class="flex" v-if="detail">
    <PersonalBar v-if="detail" :user="detail" />
    <div class="flex-auto">
      <div class="ml-8 text-lg">Repositories</div>
      <div class="ml-4 grid grid-cols-2 gap-1 ">
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
import ReposCard from "../components/repos_card";
import PersonalBar from "../components/personal_bar";
import { mapGetters } from "vuex";

export default {
  name: "Repos",
  components: {
    ReposCard,
    PersonalBar,
  },
  computed: {
    ...mapGetters(["repos", "detail"]),
  },
  created() {
    const { username } = this.$route.params;
    this.Load(username);
  },
  methods: {
    async Load(username) {
      await this.$store.dispatch("loadRepos", username);
      await this.$store.dispatch("loadUserDetail", username);
    },
  },
};
</script>

<style></style>
