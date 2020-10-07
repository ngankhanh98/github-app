<template>
  <!-- <div> -->
    <!-- <SearchBar @search-user="searchUser" /> -->

    <!-- TODO: make these center -->
    <!-- <main role="main" class="containter">
      <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-5 pb-2 mb-3 "
      >
        <Users :items="users" />
        <Alert v-if="message" :message="message" :type="alertType" />
      </div>
    </main> -->
    <ReposCard />
    <!-- <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div> -->
  <!-- </div> -->
</template>

<script>
import ReposCard from "../components/ReposCard";
export default {
  name: "Repos",
    components: { ReposCard },
};
</script>

<style></style>
