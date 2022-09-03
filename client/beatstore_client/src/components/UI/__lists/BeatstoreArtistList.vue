<template>
  <template v-if="list">
    <BeatstoreArtist
      v-for="artist in list"
      :artist="artist"
      :key="artist.id"
      @select-artist="selectArtist"
      :class="artistQuery.includes(artist.id) ? 'bg-black' : 'bg-primary'"
    />
  </template>
  <template v-else>
    <LoadingShimmer
      class="rounded-lg border-none min-w-[90px] max-w-[110px] h-[24px] flex-1"
      v-for="item in [{}, {}, {}, {}]"
    />
  </template>
</template>
<script setup lang="ts">
import BeatstoreArtist from "@/components/ui/__artist/BeatstoreArtist.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import LoadingShimmer from "@/components/ui/LoadingShimmer.vue";
const route = useRoute();
const emit = defineEmits<{
  (e: "selectArtist", artist: number): void;
}>();
const props = defineProps<{
  list: Artist[] | null;
}>();
const artistQuery = computed((): number[] => {
  // updating artist query based on route query
  if (route.query.artist && typeof route.query.artist === "string")
    return route.query.artist.split(",").map((item: string): number => +item);
  return [];
});
const selectArtist = (id: number): void => {
  emit("selectArtist", id);
};
</script>
