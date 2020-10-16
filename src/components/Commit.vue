<template>
  <div class="px-6 py-4 whitespace-no-wrap">
    <div class="flex items-center">
      <div class="ml-2">
        <a :href="html_url" target="_blank">
          <div class="text-md leading-5 font-medium text-gray-900 mb-2 truncate">
            {{ message }}
          </div>
        </a>
        <div class="text-sm leading-5 text-gray-500 flex items-center">
          <img class="h-4 w-4 rounded-full mr-2" :src="avatar_url" alt="" />
          <router-link :to="'/user/' + author">
            <span class="text-md leading-5 font-medium text-gray-700 mr-1">{{
              author
            }}</span>
          </router-link>
          commited on {{ date }}
        </div>
      </div>
    </div>
  </div>
  <!-- </tr> -->
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
