<template>
  <div
    class="flex justify-center transition-all"
    :class="store.overlay ? ' text-white' : ' text-black'"
    data-test="logo"
  >
    <router-link title="Home" to="/" class="flex items-center gap-2">
      <img class="h-[28px] drop-shadow-sm" src="@/assets/images/logo.svg" />
      <span class="text-[23px] font-['Poppins']"> s1kebeats </span>
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "@/stores/index";
const store = useStore();
const props = defineProps({
  style: String,
});
</script>