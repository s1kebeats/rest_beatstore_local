<template>
  <div
    class="w-[1520px] flex justify-between items-center relative z-2 responsive"
  >
    <h1 class="text-left text-xl font-semibold my-5 text-black">Beats</h1>
    <div class="flex items-center gap-1">
      <div class="relative">
        <button
          ref="orderingButton"
          data-test="orderingButton"
          @click="toggleOrders"
          class="flex hover:text-black px-2 rounded-lg text-sm h-[24px] items-center gap-1"
        >
          <span data-test="orderingText">
            {{ searchQuery.ordering === "-id" ? "New first" : "Popular first" }}
          </span>
          <svg
            ref="orderingSvg"
            data-test="orderingDown"
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon w-[16px] transition-all"
            viewBox="0 -40 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M112 184l144 144 144-144"
            />
          </svg>
        </button>
        <div
          tabindex="0"
          @focusout="hideOrderings"
          ref="orderings"
          v-show="ordersState"
          class="absolute w-[115px] bg-base-200 rounded-md p-2 flex flex-col gap-1 shadow-md right-0"
        >
          <button
            ref="order1"
            @click="changeOrder('-listenings')"
            class="w-full flex hover:text-black px-2 rounded-lg text-sm items-center gap-1"
            :class="searchQuery.ordering == '-listenings' ? 'text-black' : ''"
          >
            Popular first
          </button>
          <button
            ref="order2"
            @click="changeOrder('-id')"
            class="w-full flex hover:text-black px-2 rounded-lg text-sm items-center gap-1"
            :class="searchQuery.ordering == '-id' ? 'text-black' : ''"
          >
            New first
          </button>
        </div>
      </div>

      <button
        data-test="searchButton"
        class="flex hover:text-black px-2 rounded-lg text-sm h-[24px] items-center gap-[6px]"
        @click="toggleSearch"
      >
        Filters
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon w-[14px]"
          viewBox="0 -30 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M32 144h448M112 256h288M208 368h96"
          />
        </svg>
      </button>
    </div>
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
  useClasslistToggle(target, ["text-black"]);
};
// search query object
const searchQuery = reactive<searchQuery>({
  ordering: route.query.ordering ? String(route.query.ordering) : "-id",
});
// changing ordering on button click
const changeOrder = (order: string): void => {
  if (searchQuery.ordering === order) return;
  searchQuery.ordering = order;
  toggleOrders(false);
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
const orderingSvg = ref();
const orderings = ref();
const orderingButton = ref();
const ordersState = ref(false);
const toggleOrders = (value?: boolean) => {
  if (value !== undefined) ordersState.value = value;
  else { ordersState.value = !ordersState.value; }
  orderingButton.value.classList.toggle("text-black");
  orderingSvg.value.classList.toggle("rotate-180");
};
const order1 = ref();
const order2 = ref();
const hideOrderings = () => {
  if (document.activeElement !== order1.value && document.activeElement !== order2.value) {
    toggleOrders(false);
  }
}
</script>
<style lang="scss">
.beats-wrapper {
  @media screen and (max-width: 700px) {
    max-width: 90%;
  }
}
</style>
