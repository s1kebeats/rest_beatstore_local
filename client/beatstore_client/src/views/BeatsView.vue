<template>
  <div>
    <section
      class="flex-1 flex flex-col items-center py-5 min-h-[calc(100vh-90px)] select-none"
    >
      <BeatstoreBeats />
    </section>
  </div>
</template>
<script setup lang="ts">
import BeatstoreBeats from "@/components/sections/BeatstoreBeats.vue";
import BeatstoreUsage from "@/components/sections/BeatstoreUsage.vue";
</script>
