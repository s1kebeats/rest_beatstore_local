<template>
  <button
    title="Toggle overlay"
    @click="store.toggleOverlay"
    class="btn btn-primary btn-square btn-xs absolute right-5 hover:bg-primary hover:border-primary shadow-md overlay-btn hidden 525:block"
  ></button>
</template>
<script setup lang="ts">
import { useStore } from "@/stores/index";
const store = useStore();
</script>
<style lang="scss">
.overlay-btn {
  background-image: url("@/assets/images/menu.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 18px;
}
</style>
