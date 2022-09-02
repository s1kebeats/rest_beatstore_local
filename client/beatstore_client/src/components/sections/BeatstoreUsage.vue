<template>
  <section id="usage" class="flex flex-col items-start responsive py-5">
    <h1
      @click="toggleUsage"
      class="cursor-pointer flex items-center gap-[3px] text-left text-xl font-semibold my-5 text-black w-full"
    >
      Terms of use
      <svg
        ref="icon"
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon w-[18px] transition-all"
        viewBox="0 -40 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48"
          d="M184 112l144 144-144 144"
        />
      </svg>
    </h1>
    <p v-show="showUsage" class="text-md text-black w-[300px] pb-5">
      All beats are free to use, must credit me in the name of your song:
      <span class="font-semibold">"prod. by s1kebeats"</span>
    </p>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
const showUsage = ref(false);
const icon = ref();
const toggleUsage = () => {
  showUsage.value = !showUsage.value;
  icon.value.classList.toggle("rotate-90");
};
</script>
