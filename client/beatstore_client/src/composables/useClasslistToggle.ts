export function useClasslistToggle(el: HTMLElement, classes: string[]): void {
  classes.forEach((cls) => {
    el.classList.toggle(cls);
  });
}
