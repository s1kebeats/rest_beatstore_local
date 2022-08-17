<template>
  <BeatstoreOverlay
    data-test="mainOverlay"
    class="main-overlay"
    v-if="mobile"
    :active="store.overlay"
  >
    <BeatstoreHeader class="bg-transparent min-h-[65px] text-white">
      <button
        title="Close overlay"
        @click="store.toggleOverlay"
        class="close-button btn btn-primary btn-square btn-xs absolute hover:bg-primary hover:border-primary overlay-btn_close"
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
    <BeatstoreFooter class="w-full" />
  </BeatstoreOverlay>
</template>
<script setup lang="ts">
import { ref } from "vue";
import BeatstoreOverlay from "@/components/UI/BeatstoreOverlay.vue";
import BeatstoreHeader from "@/components/sections/BeatstoreHeader.vue";
import BeatstoreNav from "@/components/UI/BeatstoreNav.vue";
import BeatstoreFooter from "@/components/sections/BeatstoreFooter.vue";
import { useResize } from "@/composables/useResize";
// global store
import { useStore } from "@/stores/index";
const store = useStore();
// checking if device is mobile
const mobile = ref(useResize(600));
</script>
<style lang="scss">
.overlay-btn_close {
  background-image: url("@/assets/images/close.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 18px;
}
</style>
