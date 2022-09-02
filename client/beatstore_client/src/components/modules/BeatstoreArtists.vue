<template>
  <LoadingShimmer
    data-test="placeholder"
    v-if="isLoading"
    v-for="item in [{}, {}, {}, {}]"
    class="rounded-lg border-none min-w-[90px] max-w-[110px] h-[24px] flex-1 hover:bg-base-300"
  />
  <span v-else-if="isError">Error: {{ error }}</span>
  <ArtistList
    @select-artist="updateArtistQuery"
    v-else
    :artist-list="data!.data.results"
  />
</template>
<script setup lang="ts">
import ArtistList from "@/components/UI/ArtistList.vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useQuery } from "vue-query";
import LoadingShimmer from "../UI/LoadingShimmer.vue";
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
// fetch artists data
onMounted(() => {
  if (artistQuery.value.length) emit("updateArtistQuery", artistQuery.value);
});

const { isLoading, isError, data, error } = useQuery(
  "artists",
  () => axios.get("http://localhost:8000/api/artists/"),
  { staleTime: 1000 * 60 * 5 }
);
</script>
