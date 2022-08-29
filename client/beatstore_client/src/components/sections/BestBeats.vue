<template>
  <section class="py-5">
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
      <BeatList v-show="!loading" :list="bestBeatsList" data-test="beatlist" class="h-[292px] 930:h-[237px] overflow-hidden" />
      <BeatList
        v-if="loading"
        :list="[{}, {}, {}, {}, {}, {}, {}]"
        data-test="placeholder"
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
import { onMounted, ref } from "vue";
import axios from "axios";
const loading = ref(true);
const bestBeatsList = ref<Beat[]>([]);
onMounted(async () => {
  loading.value = true;
  bestBeatsList.value = (
    await axios.get("http://localhost:8000/api/beats/?ordering=-listenings")
  ).data.results.slice(0, 7);
  setTimeout(() => (loading.value = false), 250);
});
</script>
