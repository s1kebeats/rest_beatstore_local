<template>
  <nav
    class="flex gap-4 grow justify-end"
    :class="classes.main"
    data-test="main"
  >
    <router-link
      title="Home"
      to="/"
      class="font-medium transition-all"
      :class="classes.link"
      data-test="link"
    >
      Home
    </router-link>
    <router-link
      title="Beats"
      to="/beats"
      class="font-medium transition-all"
      :class="classes.link"
      data-test="link"
    >
      Beats
    </router-link>
    <router-link
      title="Terms of use"
      to="/#usage"
      class="font-medium transition-all"
      :class="classes.link"
      data-test="link"
    >
      Usage
    </router-link>
  </nav>
</template>
<script setup lang="ts">
const props = defineProps<{
  classes: {
    main: string;
    link: string;
  };
}>();
</script>