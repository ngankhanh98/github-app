<template>
  <div v-for="item in items" :key="item.id">
    <div class="card" style="width: 18rem;">
      <div class="card-body d-flex flex-row ">
        <img v-bind:src="item.avatar_url" width="50" height="50"/>
        <h5 class="card-title">{{ item.login }}</h5>
      </div>
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
