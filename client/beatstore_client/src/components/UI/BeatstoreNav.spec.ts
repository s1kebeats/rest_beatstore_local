import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import BeatstoreNav from "./BeatstoreNav.vue";

describe("nav prop classes", () => {
  it("test-class-main, test-class-link", () => {
    const wrapper = mount(BeatstoreNav, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
      props: {
        classes: { main: "test-class-main", link: "test-class-link" },
      },
    });

    expect(wrapper.get('[data-test="main"]').classes()).toContain(
      "test-class-main"
    );
    expect(wrapper.get('[data-test="link"]').classes()).toContain(
      "test-class-link"
    );
  });
  it("bg-blue, font-medium", () => {
    const wrapper = mount(BeatstoreNav, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
      props: {
        classes: { main: "bg-blue", link: "font-medium" },
      },
    });

    expect(wrapper.get('[data-test="main"]').classes()).toContain("bg-blue");
    expect(wrapper.get('[data-test="link"]').classes()).toContain(
      "font-medium"
    );
  });
});

describe("nav overlay class", () => {
  it("overlay: true", () => {
    const wrapper = mount(BeatstoreNav, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              main: {
                overlay: true,
              },
            },
          }),
        ],
      },
      props: {
        classes: { main: "", link: "" },
      },
    });

    expect(wrapper.get('[data-test="link"]').classes()).not.toContain(
      "1368:text-black"
    );
  });
  it("overlay: false", () => {
    const wrapper = mount(BeatstoreNav, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              main: {
                overlay: false,
              },
            },
          }),
        ],
      },
      props: {
        classes: { main: "", link: "" },
      },
    });

    expect(wrapper.get('[data-test="link"]').classes()).toContain(
      "1368:text-black"
    );
  });
});
