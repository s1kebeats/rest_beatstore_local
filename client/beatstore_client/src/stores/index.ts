import { defineStore } from "pinia";

interface Artist {
  id?: number | null;
  name?: string;
}
interface Beat {
  id?: number | null;
  name?: string;
  bpm?: number | null;
  artist?: Artist;
  mp3?: string;
  wave?: string;
  wrap?: string;
}

export const useStore = defineStore("main", {
  state: () => {
    return {
      // beat
      beat: <Beat>{
        id: null,
        name: "",
        bpm: null,
        artist: {
          id: null,
          name: "",
        },
        wrap: "",
        mp3: "",
        wave: "",
      },

      playing: false,
      copy: false,
      overlay: false,
    };
  },
  actions: {
    changeBeat(beat: Beat): void {
      this.beat = beat;
    },
    playPause(val?: true | false): void {
      if (val) {
        this.playing = val;
        return;
      }
      this.playing = !this.playing;
    },
    toggleOverlay(): void {
      // scroll width
      const scrollbarWidth =
        window.innerWidth - document.documentElement.offsetWidth;
      // elements that need spacing
      const main = document.querySelector(".main") as HTMLElement;
      const closeButton = document.querySelector(
        ".close-button"
      ) as HTMLElement;
      const mainOverlay = document.querySelector(
        ".main-overlay"
      ) as HTMLElement;
      const mainFooter = document.querySelector(".main-footer") as HTMLElement;
      const overlayButton = document.querySelector(
        ".overlay-button"
      ) as HTMLElement;
      main.setAttribute("style", `padding-right:${scrollbarWidth}px`);
      closeButton.setAttribute("style", `right:${scrollbarWidth + 20}px`);
      mainOverlay.setAttribute("style", `padding-right:${scrollbarWidth}px`);
      mainFooter.setAttribute(
        "style",
        `padding-right:${scrollbarWidth + 20}px`
      );
      overlayButton.setAttribute("style", `right:${scrollbarWidth + 20}px`);
      // making overflow y hidden on body
      document.querySelector("#body")!.classList.toggle("locked");
      // changing overlay state
      this.overlay = !this.overlay;
    },
  },
});
