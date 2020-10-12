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
  <!-- <div class="card my-2">
    <div class="card-body" :key="sha">
      <a :href="html_url" target="_blank">
        <h5>{{ message }}</h5>
      </a>
      <div class="d-flex align-items-center">
        <img
          :src="avatar_url"
          width="20"
          height="20"
          class="bd-placeholder-img
      mr-2 rounded-circle"
        />
        <p class="mb-0">
          <small
            ><b>{{ author }}</b> commited on {{ date }}</small
          >
        </p>
      </div>
    </div>
  </div> -->
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
