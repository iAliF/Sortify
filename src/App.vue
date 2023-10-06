<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <span
        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
        >Sortify</span
      >

      <a
        href="https://github.com/iAliF/Sortify/"
        class="block py-2 pr-3"
        target="_blank"
      >
        <img src="./assets/github.svg" alt="GitHub" class="h-8" />
      </a>
    </div>
  </nav>

  <h1>Hello World!</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./index.css";

export default defineComponent({
  name: "App"
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
