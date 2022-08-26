<template>
  <div class="flex-1 flex h-full items-center gap-5">
    <div class="flex items-center justify-center flex-1 gap-2">
      <img
        data-test="playerBeatWrap"
        :src="beat.wrap"
        width="26px"
        height="26px"
        alt="wrap-image"
        class="rounded-lg box-border object-cover w-[26px] h-[26px] drop-shadow-md"
      />
      <div class="flex gap-3 600:gap-0">
        <div
          class="flex items-center text-md font-semibold text-white"
          data-test="playerBeatName"
        >
          {{ beat.name }}
        </div>
        <div class="text-xs 600:hidden text-white flex items-center gap-1 select-none">
          <div
            title="Type"
            data-test="playerBeatArtist"
            class="bg-primary rounded-md px-1 h-[18px] flex items-center transition-all"
            >{{ beat.artist!.name }}</div
          >
          <div
            title="BPM"
            data-test="playerBeatBpm"
            class="bg-accent rounded-md px-1 h-[18px] flex items-center transition-all"
            >{{ beat.bpm }}BPM</div
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
