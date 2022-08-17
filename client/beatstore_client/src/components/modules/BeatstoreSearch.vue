<template>
  <div
    class="w-[1648px] flex justify-between items-center py-5 relative z-2 responsive"
  >
    <button
      data-test="orderingButton"
      @click="changeOrder"
      class="btn w-[70px] gap-1 border-none bg-base-100 text-black btn-xs hover:bg-base-100 shadow-lg"
    >
      <span class="inline-block w-[30px]" data-test="orderingText">
        {{ searchQuery.ordering === "-id" ? "New" : "Old" }}
      </span>
      <svg
        data-test="orderingDown"
        v-show="searchQuery.ordering === '-id'"
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon w-[15px]"
        viewBox="0 0 512 512"
      >
        <title>Chevron Down</title>
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48"
          d="M112 184l144 144 144-144"
        />
      </svg>
      <svg
        data-test="orderingUp"
        v-show="searchQuery.ordering === 'id'"
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon w-[15px]"
        viewBox="0 0 512 512"
      >
        <title>Chevron Up</title>
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48"
          d="M112 328l144-144 144 144"
        />
      </svg>
    </button>
    <h1 class="text-xl font-semibold text-black text-center">Beats</h1>
    <button
      data-test="searchButton"
      class="btn border-none bg-white text-black btn-xs hover:bg-white shadow-md hover:brightness-95 transition-all"
      @click="toggleSearch"
    >
      Filters
    </button>
  </div>
  <BeatstoreSearchPanel
    @update-search-query="updateSearchQuery"
    v-show="showSearch"
  />
</template>
<script lang="ts">
interface searchQuery {
  name?: string;
  bpm?: string;
  artist?: string;
  ordering: string;
}
interface stringQuery {
  name?: string;
  bpm?: string;
  artist?: string;
}
</script>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { useClasslistToggle } from "@/composables/useClasslistToggle";
import { useRoute } from "vue-router";
import BeatstoreSearchPanel from "@/components/modules/BeatstoreSearchPanel.vue";
// route
const route = useRoute();
const emit = defineEmits<{ (e: "search", query: string): void }>();
// search panel show state
const showSearch = ref(false);
const toggleSearch = (e: Event): void => {
  const target = e.target as HTMLElement;
  showSearch.value = !showSearch.value;
  // change filters button styles
  useClasslistToggle(target, [
    "bg-white",
    "bg-black",
    "text-black",
    "text-white",
    "hover:bg-white",
    "hover:bg-black",
  ]);
};
// search query object
const searchQuery = reactive<searchQuery>({
  ordering: route.query.ordering ? String(route.query.ordering) : "-id",
});
// changing ordering on button click
const changeOrder = (): void => {
  searchQuery.ordering === "-id"
    ? (searchQuery.ordering = "id")
    : (searchQuery.ordering = "-id");
  // update query => re-order data
  updateSearchQuery(searchQuery);
};
// forming and submitting search query
const updateSearchQuery = (newQuery: stringQuery): void => {
  // cleaning previous search query values
  if (!("bpm" in newQuery)) delete searchQuery.bpm;
  if (!("name" in newQuery)) delete searchQuery.name;
  if (!("artist" in newQuery)) delete searchQuery.artist;
  // adding new values
  Object.assign(searchQuery, newQuery);
  emit("search", `?${new URLSearchParams(searchQuery).toString()}`);
};
</script>
<style lang="scss">
.beats-wrapper {
  @media screen and (max-width: 700px) {
    max-width: 90%;
  }
}
</style>
