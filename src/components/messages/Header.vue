<template>
  <header class="bg-wa-dark flex justify-between text-white fixed w-full">
    <div class="p-2 flex">
      <router-link to="/">
        <i class="fas fa-arrow-left text-white py-4"></i>
      </router-link>
      <div class="px-2">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
          class="w-12 h-12 rounded-full"
        />
      </div>
      <div class="px-2">
        <h1>Whitmans Chat</h1>
        <p class="text-xs">Alice, Francis, Jack, Ned, Peter</p>
      </div>
    </div>
    <div class="py-5">
      <span class="material-icons px-2 transform -rotate-45">attach_file</span>
      <span class="material-icons px-2">more_vert</span>
    </div>
  </header>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style></style>
