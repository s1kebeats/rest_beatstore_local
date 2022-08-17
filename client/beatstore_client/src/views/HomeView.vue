<template>
  <div>
    <section class="flex flex-col min-h-[calc(100vh-90px)]">
      <YoutubeLatest />
      <BestBeats class="flex-1" />
    </section>
    <BeatstoreUsage />
  </div>
</template>
<script setup lang="ts">
import YoutubeLatest from "@/components/sections/YoutubeLatest.vue";
import BestBeats from "@/components/sections/BestBeats.vue";
import BeatstoreUsage from "@/components/sections/BeatstoreUsage.vue";
</script>
