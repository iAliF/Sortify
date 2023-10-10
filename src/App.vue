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
  <div class="mt-5 text-center">
    <div>
      <input type="file" accept="text/csv" @change="onChange" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./index.css";

export default defineComponent({
  name: "App",
  methods: {
    onChange(event: InputEvent) {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      file?.text().then((data: string) => {
        console.log(data);
      });
    }
  }
});
</script>
