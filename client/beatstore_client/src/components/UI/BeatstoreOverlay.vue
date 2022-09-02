<template>
  <transition name="overlay">
    <section
      class="absolute z-[999] w-full h-screen bg-[rgba(0,0,0,.99)] flex items-center justify-center flex-col"
      v-show="active"
      data-test="overlay"
    >
      <slot></slot>
    </section>
  </transition>
</template>
<script setup lang="ts">
const props = defineProps({
  active: Boolean,
});
</script>
