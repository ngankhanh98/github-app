<template>
  <!-- <a-list item-layout="horizontal" v-if="users" :data-source="users">
    <template v-slot:renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta description="">
          <template v-slot:title>
            <router-link :to="'/user/' + item.login"
              >@{{ item.login }}</router-link
            >
          </template>
          <template v-slot:avatar>
            <a-avatar :src="item.avatar_url" />
          </template>
        </a-list-item-meta>
       
      </a-list-item>
    </template>
  </a-list> -->
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Type
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="item in users" :key="item.id">
                <td class="px-6 py-4 whitespace-no-wrap">
                  <router-link :to="'/user/' + item.login">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          :src="item.avatar_url"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          {{ item.login }}
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          {{ item.html_url }}
                        </div>
                      </div>
                    </div>
                  </router-link>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <div class="text-sm leading-5 text-gray-900">
                    {{ item.type }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Users",
  computed: {
    ...mapGetters(["users"]),
  },
};
</script>

<style lang="scss" scoped></style>
