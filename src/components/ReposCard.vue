<template>
  <div>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <button type="button" class="btn btn-link" @click="redirectCommit">
          <h5>
            {{ name }}
          </h5>
        </button>
        <p class="card-text">
          {{ description }}
        </p>
        <p>{{ stargazers_count }} {{ open_issues_count }}</p>
      </div>
    </div>
  </div>
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
