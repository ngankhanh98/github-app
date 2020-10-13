<template>
  <div>
    <a-layout class="layout">
      <a-layout-content>
        <div
          :style="{ background: '#fff', padding: '100px', minHeight: '380px' }"
          flex="auto"
          justify="space-around"
          align="middle"
        >
          <a-row> <i class="fab fa-github" style="font-size:500%"></i> </a-row>
          <a-row>
            <span style="font-family: 'Poppins', sans-serif; font-size: 30px;">
              Github
            </span></a-row
          >
          <div style="margin-top: 40px;">
            <a-input-search
              v-model:value="term"
              placeholder="input search text"
              style="width: 200px; border-radius: 25px"
              size="large"
              @keyup.enter="onSearch"
            />
          </div>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      term: "",
    };
  },
  methods: {
    onSearch() {
      console.log("this.term", this.term);
      this.$router.push(`user?username=${this.term}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
