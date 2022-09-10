import axios from "axios";
import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      // beat
      beat: <Beat>{},

      playing: false,
      copy: false,
      overlay: false,
    };
  },
  actions: {
    changeBeat(beat: Beat): void {
      Object.assign(this.beat, beat);
      axios.get(`http://localhost:8000/api/beat/${beat.id}/play`);
    },
    playPause(val?: true | false): void {
      if (val) {
        this.playing = val;
        return;
      }
      this.playing = !this.playing;
    },
    toggleOverlay(): void {
      // making overflow y hidden on body
      document.querySelector("#body")!.classList.toggle("locked");
      // changing overlay state
      this.overlay = !this.overlay;
    },
  },
});
