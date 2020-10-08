<template>
  <div class="media text-muted pt-3" v-for="item in items" :key="item.id">
    <img
      :src="item.avatar_url"
      width="30"
      height="30"
      class="bd-placeholder-img mr-2 rounded"
    />
    <router-link :to="item.login">
      <div
        class="media-body pb-3 mb-0 small lh-125 d-flex justify-content-start"
      >
        <div>
          <strong class="text-primary">@{{ item.login }}</strong>
        </div>
      </div>
    </router-link>
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
