<template>
  <div>
    <div>
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240); box-shadow: 0px 1px 9px -4px rgba(0,0,0,0.75); height:fit-content"
        title="Result"
        :sub-title="term"
      >
        <template v-slot:extra>
          <SearchBar @search-user="searchUser" />
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
import SearchBar from "../components/SearchBar";
export default {
  name: "AppLayout",
  components: SearchBar,
  mounted() {
  },
};
</script>

<style lang="scss" scoped></style>
