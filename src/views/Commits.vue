<template>
  <span class="text-lg">Commits</span>

  <div class="flex flex-col ">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-6 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="sm:rounded-lg">
          <a-timeline v-if="groupCommits">
            <a-timeline-item
              v-for="date in Object.keys(groupCommits)"
              :key="date"
              class="mt-2"
            >
              Commits on {{ date }}
              <a-list
                item-layout="vertical"
                size="large"
                :data-source="groupCommits[date]"
              >
                <template v-slot:renderItem="item">
                  <div v-for="commit in item" :key="commit.sha">
                    <Commit
                      :key="item.sha"
                      :message="commit.commit?.message"
                      :author="commit.commit?.author?.name"
                      :html_url="commit.html_url"
                      :avatar_url="commit.author?.avatar_url"
                      :date="commit.commit?.author?.date"
                      class="rounded-lg border my-1"
                    />
                  </div>
                </template>
              </a-list>
            </a-timeline-item>
          </a-timeline>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
import Commit from "../components/commit";
export default {
  name: "Commits",
  components: {
    Commit,
  },
  created() {
    const { username, repository } = this.$route.params;
    this.LoadCommits(username, repository);
  },
  methods: {
    async LoadCommits(username, repository) {
      await this.$store.dispatch("loadCommits", { username, repository });
    },
  },
  watch: {
    commits(newValue) {
     
      const commits = newValue;
      this.groupCommits = commits?.reduce((r, a) => {
        r[moment(a.commit.author.date).format("L")] = [
          ...(r[moment(a.commit.author.date).format("L")] || []),
          a,
        ];
        return r;
      }, {});
    },
  },
  computed: {
    ...mapGetters(["commits"]),
  },

  data() {
    return {
      pagination: {
        pageSize: 10,
      },
      groupCommits: Object,
    };
  },
};
</script>
<style></style>
