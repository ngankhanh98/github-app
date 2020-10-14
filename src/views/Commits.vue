<template>
  <span class="text-lg">Commits</span>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="overflow-hidden sm:rounded-lg"
        >
          <!-- <table class="min-w-full divide-y divide-gray-200">
            <tbody
              class="bg-white divide-y divide-gray-200"
              v-for="item in commits"
              :key="item.sha"
            >
              <Commit
                :key="item.sha"
                :message="item.commit.message"
                :author="item.author.login"
                :html_url="item.html_url"
                :avatar_url="item.author.avatar_url"
                :date="item.commit.author.date"
                
              />
            </tbody>
          </table> -->

          <a-list
            item-layout="vertical"
            size="large"
            :pagination="pagination"
            :data-source="commits"
          >
            <template v-slot:renderItem="{ item }">
                <Commit
                  :key="item.sha"
                  :message="item.commit.message"
                  :author="item.author.login"
                  :html_url="item.html_url"
                  :avatar_url="item.author.avatar_url"
                  :date="item.commit.author.date"
                  class="shadow rounded-lg border my-1"
                />
            </template>
          </a-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Commit from "../components/Commit";
export default {
  name: "Commits",
  components: {
    Commit,
  },
  mounted() {
    const { username, repository } = this.$route.params;
    console.log("username, repository", username, repository);
    this.$store.dispatch("loadCommits", { username, repository });
  },
  computed: {
    ...mapGetters(["commits"]),
  },
  data() {
    return {
      pagination: {
        pageSize: 10,
      },
    };
  },
};
</script>
<style></style>
