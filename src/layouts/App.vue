<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div>
    <nav class="bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="logo/GitHub-Mark-Light-32px.png"
                alt="Workflow logo"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-6 flex items-baseline space-x-4">
                <input
                  class=" bg-gray-700 md:text-white shadow appearance-none rounded w-full  h-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 md:focus:text-gray-800"
                  id="username"
                  type="text"
                  placeholder="Username"
                  @keyup.enter="onSearch"
                  v-model="term"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
      <div class="hidden md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
            >Dashboard</a
          >

          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Team</a
          >

          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Projects</a
          >

          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Calendar</a
          >

          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Reports</a
          >
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5 space-x-3">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="space-y-1">
              <div class="text-base font-medium leading-none text-white">
                Tom Cook
              </div>
              <div class="text-sm font-medium leading-none text-gray-400">
                tom@example.com
              </div>
            </div>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Your Profile</a
            >

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Settings</a
            >

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Sign out</a
            >
          </div>
        </div>
      </div>
    </nav>

    <!-- <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Dashboard
        </h1>
      </div>
    </header> -->
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <router-view />
        </div>

        <!-- /End replace -->
      </div>
    </main>
  </div>

  <!-- <div>
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
  </div> -->
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
