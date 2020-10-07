<template>
  <div class="media text-muted pt-3" v-for="item in items" :key="item.id">
    <img
      v-bind:src="item.avatar_url"
      width="30"
      height="30"
      class="bd-placeholder-img mr-2 rounded"
    />
    <div
      class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray d-flex justify-content-start"
    >
      <div><strong class="text-primary">@{{item.login}}</strong></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Users",
  props: {
    items: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped></style>
