<template>
  <div class="relative">
    <button
      ref="orderingButton"
      data-test="orderingButton"
      @click="toggleOrderings"
      @focusout="hideOrderings"
      class="flex hover:text-black px-2 rounded-lg text-sm h-[24px] items-center gap-1"
    >
      <span data-test="orderingText" :class="showOrderings ? 'text-black' : ''">
        {{ value === "-id" ? "New first" : "Popular first" }}
      </span>
      <svg
        ref="orderingSvg"
        data-test="orderingDown"
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon w-[16px] transition-all"
        :class="showOrderings ? 'rotate-180' : ''"
        viewBox="0 -40 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48"
          d="M112 184l144 144 144-144"
        />
      </svg>
    </button>
    <div
      ref="orderingsPanel"
      v-show="showOrderings"
      class="absolute z-[2] w-[115px] border-full border-[1px] bg-base-100 rounded-md p-2 flex flex-col gap-1 shadow-md right-0"
    >
      <button
        ref="orderOption1"
        @click="changeOrder('-listenings')"
        class="w-full flex hover:text-black px-2 rounded-lg text-sm items-center gap-1"
        :class="value == '-listenings' ? 'text-black' : ''"
      >
        Popular first
      </button>
      <button
        ref="orderOption2"
        @click="changeOrder('-id')"
        class="w-full flex hover:text-black px-2 rounded-lg text-sm items-center gap-1"
        :class="value == '-id' ? 'text-black' : ''"
      >
        New first
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, type Ref } from "vue";
const emit = defineEmits<{
  (e: "changeOrdering", query: "-listenings" | "-id"): void;
}>();
const orderOption1 = ref();
const orderOption2 = ref();
const showOrderings = ref(false);
const orderingsPanel = ref();
const value: Ref<"-listenings" | "-id"> = ref("-id");
const changeOrder = (order: "-listenings" | "-id"): void => {
  if (value.value === order) return;
  value.value = order;
  // hiding popup after click
  showOrderings.value = false;
  // emitting new value
  emit("changeOrdering", value.value);
};
const toggleOrderings = () => {
  showOrderings.value = !showOrderings.value;
};
const hideOrderings = () => {
  if (
    document.activeElement !== orderOption1.value &&
    document.activeElement !== orderOption2.value
  ) {
    // need timeout to be able to change order
    setTimeout(() => {
      showOrderings.value = false;
    }, 100);
  }
};
</script>
