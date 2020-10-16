<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-lg w-full">
      <div>
        <img class="mx-auto h-20 w-auto" src="logo-120px.png" alt="Github" />
      </div>

      <div class="mt-6">
        <div
          class="flex items-center border-b border-teal-500 py-2 px-2  rounded-full border focus:shadow-xl focus:outline-none"
        >
          <i class=" fas fa-search flex-shrink-0 py-2 px-2"> </i>
          <!-- <input
            required
            class="appearance-none  h-10 relative block w-full placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 "
            type="text"
            placeholder="Search username..."
            @keyup.enter="onSearch"
            v-model="term"
          /> -->
          <SearchBar
            class="appearance-none  h-10 relative block w-full placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 "
            :searchBtnClick="searchBtnClick"
          />
        </div>
      </div>

      <div class="mt-6 flex justify-center ">
        <SearchButton
          class="group relative py-2 px-4 text-sm leading-5 font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 focus:outline-none focus:bg-gray-900 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          @on-search="searching"
        >
          Github Search
        </SearchButton>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/search_bar";
import SearchButton from "../components/search_button";
import moment from "moment";
export default {
  name: "MainLayout",
  components: {
    SearchBar,
    SearchButton,
  },
  data() {
    return {
      searchBtnClick: moment().unix(),
    };
  },
  methods: {
    searching() {
      this.searchBtnClick = moment().unix();
    },
  },
};
</script>

<style></style>
