<template>
  <nav :class="'flex gap-4 grow justify-end ' + classes.main" data-test="main">
    <router-link
      title="Home"
      to="/"
      :class="
        'text-sm font-medium text-black transition-all ' +
        classes.link +
        (store.overlay ? '' : ' 1368:text-black ')
      "
      data-test="link"
    >
      Home
    </router-link>
    <router-link
      title="Beats"
      to="/beats"
      :class="
        'text-sm font-medium text-black transition-all ' +
        classes.link +
        (store.overlay ? '' : ' 1368:text-black ')
      "
      data-test="link"
    >
      Beats
    </router-link>
    <router-link
      title="Terms of use"
      to="/#usage"
      :class="
        'text-sm font-medium text-black transition-all ' +
        classes.link +
        (store.overlay ? '' : ' 1368:text-black ')
      "
      data-test="link"
    >
      Usage
    </router-link>
  </nav>
</template>
<script setup lang="ts">
import { useStore } from "@/stores/index";
const store = useStore();
const props = defineProps<{
  classes: {
    main: string;
    link: string;
  };
}>();
</script>
