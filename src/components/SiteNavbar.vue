<template>
  <div class="SiteNavbar">
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
          <img src="../assets/github.svg" alt="GitHub" class="h-8" />
        </a>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SiteNavbar"
});
</script>
