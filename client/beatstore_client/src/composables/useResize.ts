import { ref, onMounted, onUnmounted, type Ref } from "vue";
// css media query analog in JS
export function useResize(bound: number): Ref<boolean> {
  const bounded = ref(false);
  const update = (): void => {
    bounded.value = window.innerWidth < bound;
  };
  update();
  onMounted((): void => {
    window.addEventListener("resize", update);
  });
  onUnmounted((): void => {
    window.removeEventListener("resize", update);
  });
  return bounded;
}
