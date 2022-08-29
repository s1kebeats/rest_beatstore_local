<template>
  <button
    data-test="artist"
    @click.prevent="selectArtist(artist.id ? artist.id : null)"
    class="flex-1 px-2 h-[24px] text-xs rounded-lg shadow-md text-white flex justify-center items-center min-w-[90px] max-w-[110px] box-border hover:bg-black transition-all"
  >
    {{ artist.name }}
  </button>
</template>
<script lang="ts">
interface Artist {
  id?: number | null;
  name?: string;
}
</script>
<script setup lang="ts">
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
