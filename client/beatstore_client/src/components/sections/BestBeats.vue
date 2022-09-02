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

    <div class="flex justify-center">
      <BeatList
        v-if="isLoading"
        :list="[{}, {}, {}, {}, {}, {}, {}]"
        data-test="placeholder"
        class="h-[292px] 930:h-[237px] overflow-hidden"
      />
      <span v-else-if="isError">Error: {{ error }}</span>
      <BeatList
        v-else
        :list="data!.data.results.slice(0, 7)"
        data-test="beatlist"
        class="h-[292px] 930:h-[237px] overflow-hidden"
      />
    </div>
  </section>
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
import BeatList from "@/components/UI/BeatList.vue";
import { useQuery } from "vue-query";
import axios from "axios";

const { isLoading, isError, data, error } = useQuery("mostPopular", () =>
  axios.get("http://localhost:8000/api/beats/?ordering=-listenings"), { staleTime: 1000 * 60 * 20, cacheTime: 1000 * 60 * 20 }
);
</script>
