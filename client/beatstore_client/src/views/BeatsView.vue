<template>
  <div>
    <section
      class="flex-1 flex flex-col items-center pb-[50px] min-h-[calc(100vh-90px)] select-none"
    >
      <BeatstoreBeats />
    </section>
    <BeatstoreUsage />
  </div>
</template>
<script setup lang="ts">
import BeatstoreBeats from "@/components/sections/BeatstoreBeats.vue";
import BeatstoreUsage from "@/components/sections/BeatstoreUsage.vue";
</script>
