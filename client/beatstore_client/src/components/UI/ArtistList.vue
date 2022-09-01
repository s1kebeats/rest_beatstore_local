<template>
  <BeatstoreArtist
    v-for="artist in artistList"
    :artist="artist"
    :key="artist.id ? artist.id : 0"
    @select-artist="selectArtist"
    :class="artistQuery.includes(artist.id) ? 'bg-black' : 'bg-primary'"
  />
</template>
<script lang="ts">
interface Artist {
  id?: number | null;
  name?: string;
}
</script>
<script setup lang="ts">
import BeatstoreArtist from "@/components/UI/BeatstoreArtist.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const emit = defineEmits<{
  (e: "selectArtist", artist: number | null): void;
}>();
const props = defineProps<{
  artistList: Artist[];
}>();
type id = number | undefined | null;
const artistQuery = computed((): id[] => {
  if (route.query.artist && typeof route.query.artist === "string")
    return route.query.artist.split(",").map((item: string): number => +item);
  return [];
});
const selectArtist = (id: number | null): void => {
  emit("selectArtist", id);
};
</script>