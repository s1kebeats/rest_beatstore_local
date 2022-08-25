<template>
  <div>
    <section class="flex flex-col items-center min-h-[calc(100vh-90px)]">
      <BeatstoreLanding />
      <BestBeats />
    </section>
  </div>
</template>
<script setup lang="ts">
import YoutubeLatest from "@/components/sections/YoutubeLatest.vue";
import BestBeats from "@/components/sections/BestBeats.vue";
import BeatstoreUsage from "@/components/sections/BeatstoreUsage.vue";
import BeatstoreLanding from "@/components/sections/BeatstoreLanding.vue";
</script>
<style lang="scss">
// .landing {
//   background: no-repeat url("@/assets/images/bg.jpg");
//   background-size: auto;
// }
</style>