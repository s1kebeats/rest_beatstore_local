<template>
  <section class="py-5 responsive">
    <div class="flex items-center justify-between">
      <h1 class="text-left text-xl font-semibold my-5 text-black">
        Most popular
      </h1>
      <router-link
        class="hover:text-black transition-all"
        to="/beats?ordering=-id"
        >See all beats</router-link
      >
    </div>

    <span v-if="isError">Error: {{ error }}</span>
    <BeatstoreMostPopularList
      v-else
      :list="!isLoading ? data!.data.results.slice(0, 7) : null"
    />
  </section>
</template>
<script setup lang="ts">
import BeatstoreMostPopularList from "@/components/ui/__lists/BeatstoreMostPopularList.vue";
import { useQuery } from "vue-query";
import axios from "axios";
const { isLoading, isError, data, error } = useQuery(
  "mostPopular",
  () => axios.get("http://localhost:8000/api/beats/?ordering=-listenings"),
  { staleTime: 1000 * 60 * 20, cacheTime: 1000 * 60 * 20 }
);
</script>
