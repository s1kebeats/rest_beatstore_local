<template>
  <section class="w-[1520px] responsive py-5">
    <h1 class="text-left text-xl font-semibold my-5 text-black">Artists</h1>
    <BeatstoreArtistsLanding />
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
import { onMounted, ref } from "vue";
import axios from "axios";
import BeatstoreArtistsLanding from "@/components/modules/BeatstoreArtistsLanding.vue";
const loading = ref(true);
const bestBeatsList = ref<Beat[]>([]);
onMounted(async () => {
  loading.value = true;
  bestBeatsList.value = (
    await axios.get("http://localhost:8000/api/beats/?ordering=-listenings")
  ).data.results.slice(0, 10);
  setTimeout(() => (loading.value = false), 250);
});
</script>
