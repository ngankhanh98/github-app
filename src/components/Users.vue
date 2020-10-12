<template>
<!-- v-if to hot render -->
  <a-list item-layout="horizontal" v-if="users" :data-source="users">
    <template v-slot:renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta description="">
          <template v-slot:title>
            <router-link :to="item.login">@{{ item.login }}</router-link>
          </template>
          <template v-slot:avatar>
            <a-avatar :src="item.avatar_url" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Users",
  computed: {
   ...mapGetters(["users"])
  },
};
</script>

<style lang="scss" scoped></style>
