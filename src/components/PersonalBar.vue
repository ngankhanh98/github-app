<template>
  <div class="flex flex-col">
    <a-avatar v-show="user.avatar_url" :src="user.avatar_url" :size="300" />
    <span class="font-bold text-2xl">{{ user.name }}</span>
    <span class="text-xl">{{ user.login }} </span>
    <span class="mt-4 text-xl text-gray-600"> {{ user.bio }} </span>
    <div class="flex flex-row">
      <span class="mr-2"
        ><i class="fas fa-user-friends mr-2" />{{ user.followers }} followers
      </span>
      <span
        ><p>&#8231; {{ user.followers }} following</p></span
      >
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
