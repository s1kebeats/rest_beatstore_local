<template>
  <div
    data-test="searchPanel"
    class="flex justify-center box-border w-[1520px] mb-5 responsive"
  >
    <form class="w-full flex gap-5 search">
      <fieldset
        class="flex-1 flex gap-5 max-w-[440px] 1700:max-w-[300px] field"
      >
        <fieldset class="bpm flex-1 max-w-[120px] 1700:max-w-[80px]">
          <label
            for="bpm"
            class="text-left text-base text-black font-semibold mb-2 select-none"
          >
            Bpm
          </label>
          <input
            id="bpm"
            data-test="bpmInput"
            type="number"
            size="3"
            name="bpm"
            min="1"
            max="300"
            placeholder="s1ke"
            :value="searchQuery.bpm"
            @input.prevent="debounceInputBpm"
            class="w-full input input-xs border-none focus:outline-none text-black shadow-lg"
          />
        </fieldset>
        <fieldset class="flex-1 max-w-[300px] 1700:max-w-[200px] field">
          <label
            for="name"
            class="text-left text-base text-black font-semibold mb-2 select-none"
          >
            Name
          </label>
          <input
            id="name"
            data-test="nameInput"
            type="text"
            placeholder="beats"
            name="nm"
            :value="searchQuery.name"
            @input="debounceInputName"
            class="w-full input input-xs border-none focus:outline-none text-black shadow-lg"
          />
        </fieldset>
      </fieldset>
      <fieldset class="flex-1">
        <p
          class="text-left text-base text-black font-semibold mb-[10px] select-none"
        >
          Type
        </p>
        <BeatstoreArtists @update-artist-query="updateArtistQuery" />
      </fieldset>
    </form>
  </div>
</template>
<script lang="ts">
type id = number | null;
interface searchQuery {
  name?: string;
  bpm?: string;
  artist?: id[];
}
interface stringQuery {
  name?: string;
  bpm?: string;
  artist?: string;
}
</script>
<script setup lang="ts">
import BeatstoreArtists from "@/components/modules/BeatstoreArtists.vue";
import { useRoute } from "vue-router";
import { reactive, watch } from "vue";
const route = useRoute();
const emit = defineEmits<{
  (e: "updateSearchQuery", query: stringQuery): void;
}>();
// search query object
const searchQuery = reactive<searchQuery>({
  bpm: route.query.bpm ? String(route.query.bpm) : '',
  name: route.query.name ? String(route.query.name) : '',
  artist: [],
});
// fires on emit from ArtistList, updates local search query with new artists list
function updateArtistQuery(list: id[] | []): void {
  searchQuery.artist = list;
}
// interval for debouncing bpm input
let debounceBpm: number;
function debounceInputBpm(e: Event): void {
  const target = e.target as HTMLInputElement;
  target.value = target.value.replace(/[^\d,]/g, "");
  clearTimeout(debounceBpm);
  debounceName = setTimeout(() => {
    searchQuery.bpm = target.value;
  }, 500);
}
// interval for debouncing name input
let debounceName: number;
function debounceInputName(e: Event): void {
  const target = e.target as HTMLInputElement;
  clearTimeout(debounceName);
  debounceName = setTimeout(() => {
    searchQuery.name = target.value;
  }, 750);
}
// emit new search query on every update
watch(searchQuery, () => {
  const query = <stringQuery>{};
  if (searchQuery.bpm) query.bpm = searchQuery.bpm;
  if (searchQuery.name) query.name = searchQuery.name;
  if (searchQuery.artist && searchQuery.artist.length) query.artist = searchQuery.artist.join(",");
  emit("updateSearchQuery", query);
});
</script>
<style lang="scss">
.search {
  @media screen and (max-width: 1030px) {
    flex-direction: column;
    .field {
      max-width: 100%;
    }
  }
}
</style>
