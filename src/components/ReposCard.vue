<template>
  <div>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">
          {{ description }}
        </p>
        <a href="#" class="card-link">{{ stargazers_count }}</a>
        <a href="#" class="card-link">{{ open_issues_count }}</a>
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
  },
};
</script>

<style></style>
