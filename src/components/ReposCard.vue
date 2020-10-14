<template>
  <router-link :to="full_name">
    <div
      class="rounded overflow-hidden rounded-lg border mx-4 my-4 flex justify-between flex-col"
      style="height:150px"
    >
      <div class="px-6 py-4 overflow-hidden h-100">
        <div class="font-bold text-lg mb-2">{{ name }}</div>
        <p class="text-gray-700 text-base">
          <small>{{ description }}</small>
        </p>
      </div>
      <div class="px-6 pb-4">
        <span class="inline-block text-sm font-semibold text-gray-700 mr-4">
          <i class="far fa-star mr-1" />{{ stargazers_count }}
        </span>
        <span class="inline-block text-sm font-semibold text-gray-700">
          <i class="fas fa-code-branch mr-1" />{{ forks_count }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ReposCard",
  props: {
    name: { type: String },
    description: { type: String },
    stargazers_count: { type: Number },
    forks_count: { type: Number },
    open_issues_count: { type: Number },
    full_name: { type: String },
  },
  methods: {
    redirectCommit() {
      console.log("this.full_name", this.full_name);
      this.$router.push(`/${this.full_name}`);
    },
  },
};
</script>

<style></style>
