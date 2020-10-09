<template>
  <a-card
    size="small"
    :title="name"
    style="width: 400px; cursor: pointer;margin-bottom: 10px; margin-right:10px"
    a
    href="javascript:void(0)"
    @click="redirectCommit"
  >
    <p>{{ description }}</p>
    <p>
      <i class="fas fa-star" /> {{ stargazers_count }}
      <i class="fas fa-ticket-alt" /> {{ open_issues_count }}
    </p>
  </a-card>
</template>

<script>
export default {
  name: "ReposCard",
  props: {
    name: { type: String },
    description: { type: String },
    stargazers_count: { type: Number },
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
