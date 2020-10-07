<template>
  <div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Github username"
        aria-label="Github username"
        aria-describedby="button-addon2"
        v-model="term"
        @keyup.enter="termSearch"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          @click="termSearch"
        >
          Search
        </button>
      </div>
    </div>
  </div>
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
