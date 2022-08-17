import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";
import BeatstoreLogo from "./BeatstoreLogo.vue";

import { createTestingPinia } from "@pinia/testing";

describe("logo overlay class", () => {
  it("overlay: true", () => {
    const wrapper = mount(BeatstoreLogo, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              main: {
                overlay: true,
              },
            },
            createSpy: vi.fn,
          }),
        ],
      },
    });

    expect(wrapper.get('[data-test="logo"]').classes()).not.toContain(
      "text-black"
    );
    expect(wrapper.get('[data-test="logo"]').classes()).toContain("text-white");
  });
  it("overlay: false", () => {
    const wrapper = mount(BeatstoreLogo, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              main: {
                overlay: false,
              },
            },
            createSpy: vi.fn,
          }),
        ],
      },
    });

    expect(wrapper.get('[data-test="logo"]').classes()).toContain("text-black");
    expect(wrapper.get('[data-test="logo"]').classes()).not.toContain(
      "text-white"
    );
  });
});
