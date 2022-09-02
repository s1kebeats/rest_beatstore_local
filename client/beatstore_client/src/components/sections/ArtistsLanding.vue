<template>
  <section class="responsive py-5">
    <h1 class="text-left text-xl font-semibold my-5 text-black">Artists</h1>
    <div
      v-if="isLoading"
      class="flex justify-center gap-5 flex-wrap h-[144px] artistList overflow-hidden"
    >
      <div
        class="landingArtist w-[134px] h-[134px] rounded-full"
        v-for="artist in [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]"
      >
        <LoadingShimmer class="rounded-full" />
      </div>
    </div>
    <span v-else-if="isError">Error: {{ error }}</span>
    <div
      v-else
      class="flex justify-center gap-5 flex-wrap h-[144px] artistList overflow-hidden"
    >
      <router-link
        :to="`/beats?ordering=-id&artist=${artist.id}`"
        class="landingArtist select-none w-[134px] h-[134px] rounded-full bg-gradient-to-tr from-[#f3effc] to-primary flex items-center justify-center text-white text-lg shadow-lg hover:from-black hover:to-primary transition-all 930:text-sm"
        v-for="artist in data!.data.results.slice(0, 9)"
      >
        {{ artist.name }}
      </router-link>
    </div>
  </section>
</template>
<script setup lang="ts">
import axios from "axios";
import LoadingShimmer from "@/components/UI/LoadingShimmer.vue";
import { useQuery } from "vue-query";
// fetch artists data
const { isLoading, isError, data, error } = useQuery("artists", () =>
  axios.get("http://localhost:8000/api/artists/"), { staleTime: 1000 * 60 * 5 }
);
</script>
<style lang="scss">
.landingArtist {
  @media screen and (max-width: 930px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 525px) {
    width: 93.3px;
    height: 93.3px;
  }
}
.artistList {
  @media screen and (max-width: 930px) {
    height: 110px;
  }
  @media screen and (max-width: 525px) {
    height: 103px;
    gap: 10px;
  }
}
</style>
