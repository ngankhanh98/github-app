<template>
  <div class="d-flex flex-column ">
    <img
      v-show="user.avatar_url"
      :src="user.avatar_url"
      width="200"
      height="200"
      class="bd-placeholder-img mr-2 rounded-circle"
    />
    <div class="mt-3" v-show="user.username">
      <h5>@{{ user.username }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalBar",
  props: {
    user: { type: Object },
  },
};
</script>

<style></style>
