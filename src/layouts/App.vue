<template>
  <div>
    <nav class="bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link :to="'/'">
                <img class="h-8 w-8" src="logo-light-64px.png" alt="Github" />
              </router-link>
            </div>
            <div class="hidden md:block">
              <div
                class="flex items-center border-teal-500 py-2 bg-gray-700  appearance-none rounded  h-8 py-2 mx-4 text-gray-700 leading-tight focus:outline-none group-focus:bg-gray-200 md:group-focus:text-gray-800"
              >
                <SearchBar
                  class="bg-gray-700 md:text-white shadow appearance-none rounded-l-lg  h-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 md:focus:text-gray-800"
                  :searchBtnClick="searchBtnClick"
                />

                <SearchButton
                  class="flex-shrink-0 bg-transparent text-teal-500 hover:text-white text-sm py-1 px-1 mx-1 my-1 rounded"
                  @on-search="searching"
                >
                  <i class="fas fa-search"></i>
                </SearchButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
         
          <router-view />
          <!-- Alert -->
          <Alert
            v-if="alert?.type"
            :message="alert.message"
            :type="alert.type"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SearchBar from "../components/search_bar";
import SearchButton from "../components/search_button";
import Alert from "../components/alert";
import moment from "moment";
import { mapGetters } from "vuex";

export default {
  name: "AppLayout",
  components: {
    SearchBar,
    SearchButton,
    Alert,
  },

  computed: {
    ...mapGetters(["alert"]),
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

<style lang="scss" scoped></style>
