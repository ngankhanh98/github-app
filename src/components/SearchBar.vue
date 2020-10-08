<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <input
          class="form-control mr-sm-2"
          type="text"
          aria-label="Github username"
          aria-describedby="button-addon2"
          v-model="term"
          @keyup.enter="termSearch"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click="termSearch">
          Search
        </button>
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
