<template>
  <div
    class="artist_landing__list flex justify-center flex-wrap overflow-hidden"
  >
    <template v-if="list">
      <BeatstoreArtistLanding
        v-for="artist in list"
        :artist="artist"
        :key="artist.id"
      />
    </template>
    <LoadingShimmer
      v-else
      class="artist_landing rounded-full"
      v-for="item in [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]"
    />
  </div>
</template>
<script setup lang="ts">
import LoadingShimmer from "@/components/ui/LoadingShimmer.vue";
import BeatstoreArtistLanding from "@/components/ui/__artist/BeatstoreArtistLanding.vue";
const props = defineProps<{
  list: Artist[] | null;
}>();
</script>
