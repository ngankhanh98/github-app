<template>
  <div class="flex flex-col" style="width:300px">
    <a-avatar v-show="user.avatar_url" :src="user.avatar_url" :size="300" />
    <!-- <span class="font-bold text-2xl">{{ user.name }}</span>
    <span class="text-xl">{{ user.login }} </span> -->
    <div class="justify-center">
      <span class="font-bold text-2xl">Khánh</span>
      <span class="text-xl">ngankhanh98 </span>
    </div>
    <span class="my-4 text-xl text-gray-600 w-full">
      <small>{{ user.bio }} </small></span
    >
    <div class="flex flex-row">
      <span class="mr-2"
        ><i class="fas fa-user-friends mr-2" />{{ user.followers }} followers
      </span>
      <span
        ><p>&#8231; {{ user.followers }} following</p></span
      >
    </div>
    <div class="flex flex-col">
      <span v-show="user.company"
        ><i class="far fa-building mr-2"></i>{{ user.company }}
      </span>
      <span v-show="user.location"
        ><i class="fas fa-map-marker-alt mr-2"></i>{{ user.location }}
      </span>
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
