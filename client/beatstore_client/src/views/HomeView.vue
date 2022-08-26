<template>
  <div>
    <section class="flex flex-col items-center min-h-[calc(100vh-90px)]">
      <BeatstoreLanding />
      <BestBeats />
      <ArtistsLanding />
      <BeatstoreUsage />
    </section>
  </div>
</template>
<script setup lang="ts">
import BestBeats from "@/components/sections/BestBeats.vue";
import BeatstoreUsage from "@/components/sections/BeatstoreUsage.vue";
import BeatstoreLanding from "@/components/sections/BeatstoreLanding.vue";
import ArtistsLanding from "@/components/sections/ArtistsLanding.vue";
</script>
