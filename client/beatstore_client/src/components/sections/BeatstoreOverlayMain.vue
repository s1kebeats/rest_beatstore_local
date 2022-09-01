<template>
  <BeatstoreOverlay
    data-test="mainOverlay"
    class="main-overlay"
    :active="store.overlay"
  >
    <BeatstoreHeader class="min-h-[60px]">
      <button
        title="Close overlay"
        @click="store.toggleOverlay"
        class="btn btn-primary btn-square btn-xs absolute right-5 hover:bg-primary hover:border-primary overlay-btn_close"
      ></button>
    </BeatstoreHeader>
    <main class="grow flex items-center justify-center flex-col h-full w-full">
      <BeatstoreNav
        @click="store.toggleOverlay"
        :classes="{
          main: 'grow-0 flex flex-col gap-[5px]',
          link: 'text-white text-xl',
        }"
      />
    </main>
    <BeatstoreFooter />
  </BeatstoreOverlay>
</template>
<script setup lang="ts">
import BeatstoreOverlay from "@/components/UI/BeatstoreOverlay.vue";
import BeatstoreHeader from "@/components/sections/BeatstoreHeader.vue";
import BeatstoreNav from "@/components/UI/BeatstoreNav.vue";
import BeatstoreFooter from "@/components/sections/BeatstoreFooter.vue";
// global store
import { useStore } from "@/stores/index";
const store = useStore();
</script>
<style lang="scss">
.overlay-btn_close {
  background-image: url("@/assets/images/close.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 18px;
}
</style>