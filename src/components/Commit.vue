<template>
  <a-card>
    <p>
      <a :href="html_url" target="_blank"
        ><h5>{{ message }}</h5>
      </a>
    </p>
    <p>
      <a-avatar :src="avatar_url" style="margin-right:8px"/>
      <small 
        ><b>{{ author }}</b> commited on {{ date }}</small
      >
    </p>
  </a-card>
</template>

<script>
export default {
  name: "Commit",
  props: {
    author: { type: String },
    message: { type: String },
    sha: { type: String },
    html_url: { type: String },
    avatar_url: { type: String },
    date: { type: String },
  },
};
</script>

<style></style>
