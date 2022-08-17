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
      <div class="flex gap-2 600:gap-0">
        <div
          class="flex items-center text-lg font-semibold text-black"
          data-test="playerBeatName"
        >
          {{ beat.name }}
        </div>
        <div class="text-xs 600:hidden text-secondary">
          <div data-test="playerBeatBpm">{{ beat.bpm }}BPM</div>
          <div data-test="playerBeatArtist">Type: {{ beat.artist!.name }}</div>
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
