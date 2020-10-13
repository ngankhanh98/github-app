<template>
  <div>
    <div>
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240); box-shadow: 0px 1px 9px -4px rgba(0,0,0,0.75); height:fit-content"
        title="Result"
        :sub-title="term"
      >
        <template v-slot:extra>
          <a-input-search
            v-model:value="term"
            placeholder="input search text"
            style="width: 200px; border-radius: 25px"
            size="large"
            @keyup.enter="onSearch"
          />
        </template>
      </a-page-header>
      <a-layout-content
        :style="{
          margin: '24px 24px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLayout",
  data() {
    return {
      term: "",
    };
  },
  methods: {
    onSearch() {
      console.log("this.term", this.term);
      this.$router.replace({ path: "/user", query: { username: this.term } });
    },
  },
};
</script>

<style lang="scss" scoped></style>
