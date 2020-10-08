<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="collapse navbar-collapse " id="navbarCollapse">
      <i class="fab fa-github mx-3" style="color:white;font-size:200%"></i>
      <div class="input-group-sm my-2 input-group d-flex align-items-center">
        <input
          class="form-control mr-sm-1"
          type="text"
          aria-label="Github username"
          v-model="term"
          @keyup.enter="termSearch"
        />
        <div class="input-group-append">
          <button type="button" class="btn btn-link">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      term: "",
    };
  },
  methods: {
    termSearch() {
      //   console.log("term", this.term);
      this.$emit("search-user", this.term);
    },
  },
};
</script>

<style scoped></style>
