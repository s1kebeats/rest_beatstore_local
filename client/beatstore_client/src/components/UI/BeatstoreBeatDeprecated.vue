<template>
  <div
    data-test="beat"
    class="box-border flex h-[105px] w-[320px] bg-base-100 rounded-lg cursor-pointer shadow-lg"
    @mouseenter="showOverlay"
    @mouseleave="hideOverlay"
    @click="playBeat"
  >
    <div class="w-[93px] relative py-3 pl-3">
      <transition name="overlay">
        <div
          data-test="hovered"
          v-show="hovered"
          class="play-overlay absolute bg-black bg-opacity-80 w-[81px] h-[81px] rounded-lg flex justify-center items-center"
        >
          <svg
            data-test="pauseIcon"
            v-show="store.beat.mp3 === beat.mp3 && copyHovered && store.playing"
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon w-[50px]"
            viewBox="0 0 512 512"
            fill="#FFFFFF"
          >
            <title>Pause audio</title>
            <path
              d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-32 272a16 16 0 01-32 0V192a16 16 0 0132 0zm96 0a16 16 0 01-32 0V192a16 16 0 0132 0z"
            />
          </svg>
          <svg
            data-test="playingIcon"
            v-show="
              store.beat.mp3 === beat.mp3 && !copyHovered && store.playing
            "
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon w-[40px]"
            viewBox="0 0 512 512"
            fill="#FFFFFF"
          >
            <title>Currently playing</title>
            <path
              d="M264 416.19a23.92 23.92 0 01-14.21-4.69l-.66-.51-91.46-75H88a24 24 0 01-24-24V200a24 24 0 0124-24h69.65l91.46-75 .66-.51A24 24 0 01288 119.83v272.34a24 24 0 01-24 24zM352 336a16 16 0 01-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0128.5-14.54C378.2 208.16 384 231.47 384 256c0 23.83-6 47.78-17.7 71.18A16 16 0 01352 336z"
            />
            <path
              d="M400 384a16 16 0 01-13.87-24C405 327.05 416 299.45 416 256c0-44.12-10.94-71.52-29.83-103.95A16 16 0 01413.83 136C434.92 172.16 448 204.88 448 256c0 50.36-13.06 83.24-34.12 120a16 16 0 01-13.88 8z"
            />
          </svg>
          <svg
            data-test="playIcon"
            v-show="
              (store.beat.mp3 && store.beat.mp3 !== beat.mp3) || !store.playing
            "
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon w-[50px]"
            viewBox="0 0 512 512"
            fill="#FFFFFF"
          >
            <title>Play audio</title>
            <path
              d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm74.77 217.3l-114.45 69.14a10.78 10.78 0 01-16.32-9.31V186.87a10.78 10.78 0 0116.32-9.31l114.45 69.14a10.89 10.89 0 010 18.6z"
            />
          </svg>
        </div>
      </transition>
      <img
        data-test="beatWrap"
        v-if="beat.wrap"
        :src="beat.wrap"
        class="rounded-lg object-cover box-border w-[81px] h-[81px] shadow-lg"
      />
      <LoadingShimmer v-else class="rounded-lg object-cover box-border" />
    </div>
    <div
      class="borderedPart box-border p-3 flex-1 flex flex-col justify-between rounded-r-lg"
    >
      <div class="flex text-xl" v-if="beat.name">
        <div class="w-[55px] text-secondary">Name</div>
        <div class="rounded-lg text-center text-black flex-1 flex items-center">
          <div data-test="beatName" class="flex-1">{{ beat.name }}</div>
        </div>
      </div>
      <LoadingShimmer class="rounded-lg h-5" v-else />
      <div class="flex text-xl" v-if="beat.artist">
        <div class="w-[55px] text-secondary">Type</div>
        <div class="rounded-lg text-center text-black flex-1 flex items-center">
          <div data-test="beatArtist" class="flex-1">
            {{ beat.artist.name }}
          </div>
        </div>
      </div>
      <LoadingShimmer class="rounded-lg h-5" v-else />
      <div class="flex text-xl" v-if="beat.bpm">
        <div class="w-[55px] text-secondary">Bpm</div>
        <div class="rounded-lg text-center text-black flex-1 flex items-center">
          <div data-test="beatBpm" class="flex-1">{{ beat.bpm }}</div>
        </div>
      </div>
      <LoadingShimmer class="rounded-lg h-5" v-else />
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
import LoadingShimmer from "@/components/UI/LoadingShimmer.vue";
import { ref, onMounted, watch } from "vue";
// global store
import { useStore } from "@/stores/index";
import { storeToRefs } from "pinia";
const store = useStore();
const props = defineProps<{ beat: Beat }>();
// global playing state
const { playing } = storeToRefs(store);
// overlay value
const hovered = ref(false);
// overlay inside overlay value (was made to be able to change icons when beat is playing)
const copyHovered = ref(false);
onMounted((): void => {
  // indicate if beat if playing when we change page
  if (store.beat.mp3 === props.beat.mp3) hovered.value = true;
});
watch(playing, (): void => {
  // set hovered value to show volume icon when playing
  if (store.beat.mp3 === props.beat.mp3) {
    hovered.value = true;
    return;
  }
  // if beat is not currently playing
  hovered.value = false;
});
// on hover function
const showOverlay = (): void => {
  hovered.value = true;
  copyHovered.value = true;
};
// on unhover function
const hideOverlay = (): void => {
  // if beat is currently playing, we turn of only nested overlay, but keep main one, to be able to show volume icon
  if (store.beat.mp3 === props.beat.mp3) {
    copyHovered.value = false;
    return;
  }
  // if beat is not playing
  hovered.value = false;
  copyHovered.value = false;
};
// changes global beat value or pauses beat if it's currenty playing
const playBeat = (): void => {
  // pause
  if (store.beat.mp3 === props.beat.mp3) {
    store.playPause();
    return;
  }
  store.changeBeat(props.beat);
};
</script>
