<template>
  <header
    class="w-full h-[60px] box-border border-base-200 flex items-center gap-5 px-5 text-center select-none"
    :class="store.overlay ? '' : 'border-b'"
  >
    <BeatstoreLogo class="525:flex-1" />
    <slot>
      <BeatstoreNav
        class="525:hidden"
        :classes="{ main: '', link: 'text-black text-sm' }"
      />
      <BeatstoreOverlayButton />
    </slot>
  </header>
</template>
<script setup lang="ts">
import BeatstoreLogo from "@/components/ui/BeatstoreLogo.vue";
import BeatstoreNav from "@/components/ui/BeatstoreNav.vue";
import BeatstoreOverlayButton from "@/components/ui/BeatstoreOverlayButton.vue";
import { useStore } from "@/stores";
const store = useStore();
</script>
