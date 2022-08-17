<template>
  <button
    v-if="artist.id"
    data-test="artist"
    @click.prevent="selectArtist(artist.id ? artist.id : null)"
    class="btn btn-xs from-primary to-[#C165CC] border-none text-base-100 min-w-[120px] flex-1 shadow-lg hover:brightness-95 transition-all"
  >
    {{ artist.name }}
  </button>
  <LoadingShimmer
    v-else
    class="btn btn-xs border-none min-w-[120px] flex-1 shadow-lg hover:bg-base-300"
  />
</template>
<script lang="ts">
interface Artist {
  id?: number | null;
  name?: string;
}
</script>
<script setup lang="ts">
import LoadingShimmer from "@/components/UI/LoadingShimmer.vue";
const emit = defineEmits<{
  (e: "selectArtist", artist: number | null): void;
}>();
const props = defineProps<{
  artist: Artist;
}>();
const selectArtist = (id: number | null): void => {
  emit("selectArtist", id);
};
</script>
