<template>
  <!-- <Home /> -->
  <div id="nav">
    <router-link to="/"></router-link>
    <router-link to="/profile"></router-link>
    <router-view />
  </div>
</template>

<script>
// import Home from "./views/Home";
export default {
  name: "App",
  // components: { Home },
};
</script>

<style></style>
