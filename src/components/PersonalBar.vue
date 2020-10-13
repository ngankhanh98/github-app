<template>
  <div class="d-flex flex-column ">
    <a-avatar v-show="user.avatar_url" :src="user.avatar_url" :size="200" />
    <div class="mt-3" v-show="user.username">
      <h2>@{{ user.username }}</h2>
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
