<template>
  <header
    class="w-full h-[60px] box-border border-b border-base-200 flex items-center gap-[20px] px-[20px] font-medium text-center select-none"
  >
    <BeatstoreLogo class="600:flex-1" />
    <slot>
      <BeatstoreNav class="600:hidden" :classes="{ main: '', link: '' }" />
      <BeatstoreOverlayButton />
    </slot>
  </header>
</template>
<script setup lang="ts">
import BeatstoreLogo from "@/components/UI/BeatstoreLogo.vue";
import BeatstoreNav from "@/components/UI/BeatstoreNav.vue";
import BeatstoreOverlayButton from "@/components/UI/BeatstoreOverlayButton.vue";
</script>
