<template>
  <footer class="h-[25px] box-border bg-black px-5 select-none">
    <div class="flex h-full">
      <div class="flex flex-1 items-center justify-start">
        <p class="text-[11px] text-white font-semibold select-none">2022s1kebeats</p>
      </div>
      <div class="flex flex-1 items-center justify-end">
        <BeatstoreSocials />
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import BeatstoreSocials from "@/components/UI/BeatstoreSocials.vue";
</script>
