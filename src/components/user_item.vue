<template>
  <tr>
    <td class="px-6 py-4 whitespace-no-wrap">
      <router-link :to="'/user/' + user.login">
        <div class="flex users-center">
          <div class="flex-shrink-0 h-10 w-10">
            <img class="h-10 w-10 rounded-full" :src="user.avatar_url" alt="" />
          </div>
          <div class="ml-4">
            <div class="text-sm leading-5 font-medium text-gray-900">
              {{ user.login }}
            </div>
            <div class="text-sm leading-5 text-gray-500">
              {{ user.html_url }}
            </div>
          </div>
        </div>
      </router-link>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap">
      <div class="text-sm leading-5 text-gray-900">
        {{ user.type }}
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  name: "Users",
  props: {
    user: { type: Object },
  },
};
</script>

<style lang="scss" scoped></style>
