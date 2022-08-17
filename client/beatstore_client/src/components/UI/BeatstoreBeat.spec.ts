import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";
import BeatstoreBeat from "./BeatstoreBeat.vue";

import { createTestingPinia } from "@pinia/testing";
import { useStore } from "@/stores/index";

describe("beat rendering", () => {
  it("renders placeholders properly", async () => {
    const wrapper = mount(BeatstoreBeat, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
          }),
        ],
      },
      props: {
        beat: {},
      },
    });

    expect(wrapper.findAll('[data-test="shimmer"]')).toHaveLength(4);
  });

  it("renders beat properly", async () => {
    const wrapper = mount(BeatstoreBeat, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
          }),
        ],
      },
      props: {
        beat: {
          id: 1,
          name: "Life",
          bpm: 112,
          artist: {
            id: 1,
            name: "Lil Tjay",
          },
          wrap: "wrapUrl",
          mp3: "mp3Url",
          wav: "wavUrl",
        },
      },
    });

    expect(wrapper.get('[data-test="beatWrap"]').element.src).toBe(
      "http://localhost:3000/wrapUrl"
    );
    expect(wrapper.get('[data-test="beatName"]').text()).toBe("Life");
    expect(wrapper.get('[data-test="beatBpm"]').text()).toBe("112");
    expect(wrapper.get('[data-test="beatArtist"]').text()).toBe("Lil Tjay");

    expect(wrapper.get('[data-test="hovered"]').isVisible()).toBe(false);
  });
  it("renders overlay icons properly without playing", async () => {
    const wrapper = mount(BeatstoreBeat, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
          }),
        ],
      },
      props: {
        beat: {
          id: 1,
          name: "Life",
          bpm: 112,
          artist: {
            id: 1,
            name: "Lil Tjay",
          },
          wrap: "wrapUrl",
          mp3: "mp3Url",
          wav: "wavUrl",
        },
      },
    });

    expect(wrapper.get('[data-test="hovered"]').isVisible()).toBe(false);

    await wrapper.get('[data-test="beat"]').trigger("mouseenter");

    expect(wrapper.get('[data-test="hovered"]').isVisible()).toBe(true);
    expect(wrapper.get('[data-test="playIcon"]').isVisible()).toBe(true);
  });
  // it("renders overlay icons properly with playing", async () => {
  //   const wrapper = mount(BeatstoreBeat, {
  //     global: {
  //       plugins: [
  //         createTestingPinia({
  //           createSpy: vi.fn,
  //           stubActions: false,
  //           initialState: {
  //             main: {
  //               beat: {
  //                 id: 1,
  //                 name: "Life",
  //                 bpm: 112,
  //                 artist: {
  //                   id: 1,
  //                   name: "Lil Tjay",
  //                 },
  //                 wrap: "wrapUrl",
  //                 mp3: "mp3Url",
  //                 wav: "wavUrl",
  //               },
  //               playing: true,
  //             }
  //           }
  //         }),
  //       ],
  //     },
  //     props: {
  //       beat: {
  //         id: 1,
  //         name: "Life",
  //         bpm: 112,
  //         artist: {
  //           id: 1,
  //           name: "Lil Tjay",
  //         },
  //         wrap: "wrapUrl",
  //         mp3: "mp3Url",
  //         wav: "wavUrl",
  //       },
  //     },
  //   });

  //   expect(wrapper.get('[data-test="hovered"]').isVisible()).toBe(true);
  //   expect(wrapper.get('[data-test="pauseIcon"]').isVisible()).toBe(false);
  //   expect(wrapper.get('[data-test="playIcon"]').isVisible()).toBe(false);
  //   expect(wrapper.get('[data-test="playingIcon"]').isVisible()).toBe(true);

  //   await wrapper.get('[data-test="beat"]').trigger("click");

  //   // expect(wrapper.get('[data-test="hovered"]').isVisible()).toBe(true);
  //   // expect(wrapper.get('[data-test="pauseIcon"]').isVisible()).toBe(false);
  //   // expect(wrapper.get('[data-test="playIcon"]').isVisible()).toBe(false);
  //   // expect(wrapper.get('[data-test="playingIcon"]').isVisible()).toBe(true);
  // });
});

describe("beat functions", () => {
  it("play pause", async () => {
    const wrapper = mount(BeatstoreBeat, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
          }),
        ],
      },
      props: {
        beat: {
          id: 1,
          name: "Life",
          bpm: 112,
          artist: {
            id: 1,
            name: "Lil Tjay",
          },
          wrap: "wrapUrl",
          mp3: "mp3Url",
          wav: "wavUrl",
        },
      },
    });

    const store = useStore();

    await wrapper.get('[data-test="beat"]').trigger("click");

    expect(store.changeBeat).toBeCalledTimes(1);

    await wrapper.get('[data-test="beat"]').trigger("click");

    expect(store.changeBeat).toBeCalledTimes(1);
    expect(store.playPause).toBeCalledTimes(1);
  });
});
