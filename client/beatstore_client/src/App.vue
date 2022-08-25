<template>
  <div class="main bg-[#ffffff] flex flex-col min-h-screen">
    <BeatstoreOverlayMain />
    <BeatstoreHeader />
    <main
      class="main relative grow flex flex-col bg-cover bg-no-repeat pb-[75px]"
    >
      <router-view></router-view>
    </main>
    <div class="fixed bottom-0 w-full">
      <BeatstorePlayer />
      <BeatstoreFooter class="main-footer" />
    </div>
  </div>
</template>
<script setup lang="ts">
import BeatstoreOverlayMain from "@/components/sections/BeatstoreOverlayMain.vue";
import BeatstoreHeader from "@/components/sections/BeatstoreHeader.vue";
import BeatstorePlayer from "@/components/modules/BeatstorePlayer.vue";
import BeatstoreFooter from "@/components/sections/BeatstoreFooter.vue";
</script>
<style lang="scss">
.main {
  font-family: 'Inter';
}
.locked {
  overflow-y: hidden;
}
.responsive {
  @media screen and (max-width: 1700px) {
    width: 1316px;
    max-width: 1316px;
  }
  @media screen and (max-width: 1368px) {
    width: 984px;
    max-width: 984px;
  }
  @media screen and (max-width: 1030px) {
    width: 652px;
    max-width: 652px;
  }
  @media screen and (max-width: 700px) {
    width: 320px;
    max-width: 320px;
  }
}
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.2s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>
