<template>
  <footer
    class="h-[25px] w-full box-border bg-black px-5 select-none"
    :class="store.beat.name && !store.overlay ? 'pb-[45px] h-[75px]' : ''"
  >
    <div class="flex h-full">
      <div class="flex flex-1 items-center justify-start">
        <p class="text-[11px] text-white font-semibold select-none">
          2022s1kebeats
        </p>
      </div>
      <div class="flex flex-1 items-center justify-end">
        <BeatstoreSocials />
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import BeatstoreSocials from "@/components/ui/__socials/BeatstoreSocials.vue";
import { useStore } from "@/stores";
const store = useStore();
</script>
