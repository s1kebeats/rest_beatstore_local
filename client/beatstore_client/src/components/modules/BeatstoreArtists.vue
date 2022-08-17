<template>
  <ArtistList
    @select-artist="updateArtistQuery"
    v-show="!loading"
    :artist-list="artistList"
  />
  <ArtistList
    data-test="placeholder"
    v-if="loading"
    :artist-list="[{}, {}, {}, {}]"
  />
</template>
<script setup lang="ts">
import ArtistList from "@/components/UI/ArtistList.vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
const route = useRoute();
const emit = defineEmits<{ (e: "updateArtistQuery", query: id[]): void }>();
// local artist query value
interface Artist {
  id: number;
  name: string;
}
type id = number | undefined | null;
const artistQuery = ref<id[]>(
  route.query.artist && typeof route.query.artist === "string"
    ? route.query.artist.split(",").map((item: string) => +item)
    : []
);
const updateArtistQuery = (id: number | null) => {
  // remove artist from query if query already includes it
  if (artistQuery.value.includes(id))
    artistQuery.value = artistQuery.value.filter((item) => item !== id);
  // add artist to the query
  else {
    artistQuery.value.push(id);
  }
  // send query
  emit("updateArtistQuery", artistQuery.value);
};
const loading = ref(true);
const artistList = ref<Artist[]>([]);
// fetch artists data
onMounted(async () => {
  artistList.value = (
    await axios.get("http://localhost:8000/api/artists/")
  ).data.results;
  loading.value = false;
  if (artistQuery.value.length) emit("updateArtistQuery", artistQuery.value);
});
</script>
