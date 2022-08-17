<template>
  <div
    data-test="customRange"
    ref="range"
    @mousedown.prevent="thumbHandler"
    @focus="toggleThumb(true)"
    @focusout="toggleThumb(false)"
    tabindex="0"
    class="custom-range relative cursor-pointer h-[3px] w-full box-border flex items-center bg-base-200 focus:outline-none"
  >
    <div
      data-test="beforeThumb"
      class="beforethumb h-full w-0 bg-primary"
      ref="beforethumb"
    ></div>
    <transition name="overlay">
      <div
        v-show="thumbState"
        data-test="thumb"
        class="thumb absolute w-[12px] h-[12px] rounded-full bg-primary"
        ref="thumb"
      ></div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch, type Ref } from "vue";
const emit = defineEmits<{
  (e: "updateValue", value: number): void;
  (e: "setValue", value: number): void;
  (e: "toggleThumb", state: boolean): void;
}>();
const props = defineProps({
  max: Number,
  value: Number,
  thumbState: Boolean,
});
const movePrice = ref(0);
const locaValue = ref(0);
// elements
const range = ref() as Ref<HTMLDivElement>;
const beforethumb = ref() as Ref<HTMLDivElement>;
const thumb = ref() as Ref<HTMLDivElement>;
const toggleThumb = (state: boolean): void => {
  emit("toggleThumb", state);
};
const moveThumb = (value: number): void => {
  beforethumb.value!.style.width = Math.ceil(value * movePrice.value) + "px";
  if (thumb.value!.offsetWidth) {
    thumb.value!.style.left =
      Math.ceil(value * movePrice.value) - thumb.value!.offsetWidth / 2 + "px";
  } else {
    thumb.value!.style.left = Math.ceil(value * movePrice.value) - 6 + "px";
  }
};
const updateValue = (event: MouseEvent): void => {
  movePrice.value = +(range.value!.clientWidth / props.max!).toFixed(2);
  let newLeft =
    event.clientX -
    range.value!.getBoundingClientRect().left -
    thumb.value!.offsetWidth / 2;
  const rightEdge = range.value!.clientWidth - thumb.value!.offsetWidth / 2;
  //left side limitation
  if (newLeft < -(thumb.value!.offsetWidth / 2)) {
    newLeft = -(thumb.value!.offsetWidth / 2);
  }
  // right side limitation
  if (newLeft > rightEdge) {
    newLeft = rightEdge;
  }
  const newValue = +(
    (newLeft + thumb.value!.offsetWidth / 2) /
    movePrice.value
  ).toFixed(0);
  locaValue.value = newValue;
  emit("updateValue", newValue);
};
const thumbHandler = (event: MouseEvent): void => {
  range.value!.focus();
  updateValue(event);
  document.addEventListener("mousemove", updateValue);
  document.addEventListener("mouseup", onMouseUp);
  function onMouseUp() {
    emit("setValue", locaValue.value);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", updateValue);
  }
};
watch(
  () => props.value,
  (value) => {
    moveThumb(value!);
  }
);
watch(
  () => props.max,
  (value) => {
    movePrice.value = +(range.value!.clientWidth / value!).toFixed(2);
  }
);
onMounted(() => {
  movePrice.value = +(range.value!.clientWidth / props.max!).toFixed(2);
  moveThumb(props.value!);
});
</script>
<style lang="scss"></style>
