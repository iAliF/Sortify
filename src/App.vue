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
  <div class="mt-5 mx-4 md:mx-20 lg:mx-36 text-center">
    <div class="form-control">
      <label class="label">
        <span class="label-text">Select your file</span>
      </label>
      <input
        class="w-full file-input file-input-bordered"
        type="file"
        accept="text/csv"
        @change="onChange"
      />
    </div>
    <div v-if="sortedData" class="mt-10">
      <button class="btn btn-neutral" @click="downloadFile">
        Download File
      </button>

      <button class="btn btn-neutral mx-10" @click="showData = !showData">
        {{ showData ? "Hide" : "Show" }} sorted data
      </button>

      <div class="mt-5 card bg-gray-100" v-if="showData">
        <div class="card-body">
          <p v-html="sortedForHtml" class="overflow-y-scroll h-52"></p>
        </div>

        <div class="card-actions justify-end">
          <button class="btn btn-primary text-white mr-5 mb-5" @click="doCopy">
            Copy
          </button>
        </div>
      </div>

      <div class="alert alert-success mt-5" v-if="showAlert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Copied!</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./index.css";

export default defineComponent({
  name: "App",
  data() {
    return {
      sortedData: "",
      showData: false,
      showAlert: false
    };
  },
  methods: {
    onChange(event: InputEvent) {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      file?.text().then((data: string) => {
        this.processData(data);
      });
    },
    processData(data: string) {
      const sortedLines = data.split(/\r\n|\r|\n/g).sort();
      this.sortedData = sortedLines.join("\n");
    },
    downloadFile() {
      const blob = new Blob([this.sortedData], { type: "text/csv" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "sorted_file.csv";
      link.click();
      window.URL.revokeObjectURL(link.href);
    },
    copy() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(this.sortedData);
      }
    },
    doCopy() {
      this.copy();
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 2000);
    }
  },
  computed: {
    sortedForHtml(): string {
      return this.sortedData.replaceAll("\n", "<br />");
    }
  }
});
</script>
