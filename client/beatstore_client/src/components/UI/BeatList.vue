<template>
  <div data-test="beatList" class="flex flex-col w-[1520px] responsive">
    <div class="flex flex-wrap gap-5" v-show="list.length">
      <BeatstoreBeat
        v-for="item in list"
        :key="item.id ? item.id : 0"
        :beat="item"
      />
    </div>
    <p
      v-show="!list.length"
      data-test="nothingFound"
      class="text-xl text-black text-center pt-1"
    >
      Nothing was found
    </p>
  </div>
</template>
<script lang="ts">
interface Artist {
  id?: number | null;
  name?: string;
}
interface Beat {
  id?: number | null;
  name?: string;
  bpm?: number | null;
  artist?: Artist;
  mp3?: string;
  wave?: string;
  wrap?: string;
}
</script>
<script setup lang="ts">
import BeatstoreBeat from "@/components/UI/BeatstoreBeat.vue";
const props = defineProps<{
  list: Beat[];
}>();
</script>
<style lang="scss">
.list-enter-active {
  animation: bounce-in 0.1s;
}
.list-leave-active {
  animation: bounce-in 0.1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
