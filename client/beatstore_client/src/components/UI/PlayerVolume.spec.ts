import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";
import PlayerVolume from "./PlayerVolume.vue";

// const localStorageMock = {
//   setItem: function (key: string, value: string): void {
//     localStorageMock[key] = value || "";
//   },
//   getItem: function (key: string): string {
//     return key in localStorageMock ? localStorageMock[key] : null;
//   },
//   removeItem: function (key: string): void {
//     delete localStorageMock[key];
//   },
//   get length() {
//     return Object.keys(localStorageMock).length;
//   },
//   key: function (i: string) {
//     const keys = Object.keys(localStorageMock);
//     return keys[i] || null;
//   },
// };

// vi.stubGlobal("localStorage", localStorageMock);

describe("PlayerVolume", () => {
  it("renders properly", async () => {
    const wrapper = mount(PlayerVolume);

    expect(wrapper.get('[data-test="volumeButton"]').classes()).not.toContain(
      "muted"
    );

    await wrapper.get('[data-test="volumeButton"]').trigger("click");

    expect(wrapper.emitted("updateAudioVolume")).toHaveLength(2);
    expect(wrapper.emitted("updateAudioVolume")![0]).toEqual([0]);
    expect(wrapper.get('[data-test="volumeButton"]').classes()).toContain(
      "muted"
    );

    await wrapper.get('[data-test="volumeButton"]').trigger("click");

    expect(wrapper.emitted("updateAudioVolume")).toHaveLength(3);
    expect(wrapper.emitted("updateAudioVolume")![1]).toEqual([100]);
    expect(wrapper.get('[data-test="volumeButton"]').classes()).not.toContain(
      "muted"
    );
  });
});
