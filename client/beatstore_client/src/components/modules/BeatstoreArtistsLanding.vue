<template>
  <div v-if="!loading" class="flex gap-5">
    <router-link
      :to="`/beats?ordering=-id&artist=${artist.id}`"
      class="select-none w-[150px] h-[150px] rounded-full bg-gradient-to-tr from-[#f3effc] to-primary flex items-center justify-center text-white text-lg shadow-lg hover:from-black hover:to-primary transition-all"
      v-for="artist in artistList"
    >
      {{ artist.name }}
    </router-link>
  </div>
  <div v-if="loading" class="flex gap-5">
    <div
      class="w-[150px] h-[150px] rounded-full"
      v-for="artist in [{}, {}, {}, {}, {}, {}, {}, {}, {}]"
    >
      <LoadingShimmer class="rounded-full" />
    </div>
  </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import LoadingShimmer from "@/components/UI/LoadingShimmer.vue";
// local artist query value
interface Artist {
  id: number;
  name: string;
}
const loading = ref(true);
const artistList = ref<Artist[]>([]);
// fetch artists data
onMounted(async () => {
  artistList.value = (
    await axios.get("http://localhost:8000/api/artists/")
  ).data.results.slice(0, 9);
  loading.value = false;
});
</script>
