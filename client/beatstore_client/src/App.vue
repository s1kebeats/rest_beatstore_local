<template>
  <BeatstoreOverlayMain />
  <BeatstoreHeader />
  <main class="grow flex flex-col items-center">
    <router-view></router-view>
  </main>
  <BeatstoreFooter />
  <BeatstorePlayer />
</template>
<script setup lang="ts">
import BeatstoreOverlayMain from "@/components/sections/BeatstoreOverlayMain.vue";
import BeatstoreHeader from "@/components/sections/BeatstoreHeader.vue";
import BeatstorePlayer from "@/components/modules/BeatstorePlayer.vue";
import BeatstoreFooter from "@/components/sections/BeatstoreFooter.vue";
</script>
<style lang="scss">
.locked {
  overflow-y: hidden;
}
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.2s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
.responsive {
  width: 1520px;
  max-width: 1520px;
  @media screen and (max-width: 1590px) {
    width: 1300px;
    max-width: 1300px;
  }
  @media screen and (max-width: 1370px) {
    width: 1080px;
    max-width: 1080px;
  }
  @media screen and (max-width: 1150px) {
    width: 860px;
    max-width: 860px;
  }
  @media screen and (max-width: 930px) {
    width: 640px;
    max-width: 640px;
  }
  @media screen and (max-width: 710px) {
    width: 475px;
    max-width: 475px;
  }
  @media screen and (max-width: 525px) {
    width: 310px;
    max-width: 310px;
  }
}
.artist_landing {
  width: 134px;
  height: 134px;
  @media screen and (max-width: 930px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 525px) {
    width: 93.3px;
    height: 93.3px;
  }
  &__list {
    height: 144px;
    gap: 20px;
    @media screen and (max-width: 930px) {
      height: 110px;
    }
    @media screen and (max-width: 525px) {
      height: 103px;
      gap: 10px;
    }
  }
}
</style>
