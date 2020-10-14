<template>
  <span class="text-lg">Commits</span>

  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden sm:rounded-lg">
          <a-list
            item-layout="vertical"
            size="large"
            :pagination="pagination"
            :data-source="commits"
          >
            <template v-slot:renderItem="{ item }">
              <!-- {{item}} -->
              <Commit
                :v-for="item"
                :key="item.sha"
                :message="item.commit.message"
                :author="item.author.login"
                :html_url="item.html_url"
                :avatar_url="item.author.avatar_url"
                :date="item.commit.author.date"
                class="rounded-lg border my-1"
              />
              <!-- <a-timeline v-for="i in item" :key="i">
                <a-timeline-item>
                  {{ item.commit.author.date }}
                </a-timeline-item>
              </a-timeline>
              <Commit
                :key="item.sha"
                :message="item.commit.message"
                :author="item.commit.author.name"
                :html_url="item.html_url"
                :avatar_url="item.author.avatar_url"
                :date="item.commit.author.date"
                class="rounded-lg border my-1"
              />-->
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
    // groupCommits() {
    // },
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
