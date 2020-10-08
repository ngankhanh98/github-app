<template>
  <div class="card">
    <div class="card-body" :key="sha">
      <a :href="html_url" target="_blank">
        <h6>{{ message }}</h6>
      </a>
      <p class="text-muted">
        <a href="#" class="text-reset">{{ author }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Commit",
  props: {
    author: { type: String },
    message: { type: String },
    sha: { type: String },
    html_url: { type: String },
  },
};
</script>

<style></style>
