<template>
  <div
    @mouseenter="toggleThumb(true)"
    @mouseleave="toggleThumb(false)"
    class="flex items-center gap-1 710:hidden"
  >
    <CustomRange
      :thumb-state="thumbState"
      @toggle-thumb="focusThumb"
      :value="audioVolume"
      :max="100"
      @update-value="updateAudioVolume"
      class="w-[65px] h-[2px] mx-[6px]"
    />
    <button
      data-test="volumeButton"
      @click="toggleAudioVolume"
      :class="
        'block w-[26px] h-[26px] volume drop-shadow-md' +
        (!audioVolume ? ' muted' : '')
      "
    ></button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import CustomRange from "@/components/UI/CustomRange.vue";
const emit = defineEmits<{
  (e: "updateAudioVolume", value: number): void;
}>();
const thumbState = ref(false);
const thumbFocused = ref(false);
const focusThumb = (state: boolean): void => {
  thumbFocused.value = state;
  toggleThumb(false);
};
const toggleThumb = (state: boolean): void => {
  if (thumbFocused.value) {
    thumbState.value = true;
    return;
  }
  thumbState.value = state;
};
const audioVolume = ref(
  localStorage.getItem("volume") !== null
    ? +localStorage.getItem("volume")!
    : 100
);
onMounted(() => {
  emit("updateAudioVolume", audioVolume.value);
});
const updateAudioVolume = (value: number): void => {
  audioVolume.value = value;
  emit("updateAudioVolume", audioVolume.value);
};
const toggleAudioVolume = (): void => {
  if (audioVolume.value) audioVolume.value = 0;
  else
    audioVolume.value =
      localStorage.getItem("volume") !== null
        ? +localStorage.getItem("volume")!
        : 100;
  emit("updateAudioVolume", audioVolume.value);
};
watch(audioVolume, (value) => {
  if (value) localStorage.setItem("volume", String(value));
});
</script>
<style lang="scss">
.volume {
  background: center no-repeat url("@/assets/images/volume-medium.svg");
  background-size: 26px;
  &.muted {
    background: -3px center no-repeat url("@/assets/images/volume-off.svg");
    background-size: 26px;
  }
}
</style>
