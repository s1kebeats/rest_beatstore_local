<template>
  <div class="flex-1 flex h-full items-center gap-5">
    <div class="flex items-center justify-center flex-1 gap-2">
      <img
        data-test="playerBeatWrap"
        :src="beat.wrap"
        width="40px"
        height="40px"
        alt="wrap-image"
        class="rounded-lg box-border object-cover w-[30px] h-[30px] drop-shadow-md"
      />
      <div class="flex gap-3 600:gap-0">
        <div
          class="flex items-center text-lg font-semibold text-black"
          data-test="playerBeatName"
        >
          {{ beat.name }}
        </div>
        <div class="text-xs 600:hidden text-white flex items-center gap-1">
          <router-link
            title="Type"
            :to="`/beats?ordering=-id&artist=${beat.artist!.id}`"
            data-test="playerBeatArtist"
            class="bg-primary shadow-md rounded-md px-2 h-[20px] flex items-center hover:bg-black transition-all"
            >{{ beat.artist!.name }}</router-link
          >
          <router-link
            title="BPM"
            :to="`/beats?ordering=-id&bpm=${beat.bpm}`"
            data-test="playerBeatBpm"
            class="bg-accent shadow-md rounded-md px-2 h-[20px] flex items-center hover:bg-black transition-all"
            >{{ beat.bpm }}BPM</router-link
          >
        </div>
      </div>
    </div>
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
const props = defineProps<{
  beat: Beat;
}>();
</script>
