<template>
  <section>
    <h1 class="text-center text-xl font-semibold my-5 select-none text-black">
      Hot 10
    </h1>
    <div class="flex justify-center">
      <!-- <transition name="overlay"> -->
      <BeatList v-show="!loading" :list="bestBeatsList" data-test="beatlist" />
      <!-- </transition> -->
      <BeatList
        v-if="loading"
        :list="[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]"
        data-test="placeholder"
      />
    </div>
    <div class="w-full text-center mb-[100px] mt-3 select-none">
      <router-link
        to="/beats?ordering=-id"
        title="View all beats"
        class="btn bg-black text-white hover:bg-black btn-xs w-[1648px] shadow-lg hover:brightness-95 transition-all responsive"
      >
        View all beats
      </router-link>
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
    await axios.get("http://localhost:8000/api/beats/?ordering=-id")
  ).data.results.slice(0, 10);
  setTimeout(() => (loading.value = false), 250);
});
</script>
