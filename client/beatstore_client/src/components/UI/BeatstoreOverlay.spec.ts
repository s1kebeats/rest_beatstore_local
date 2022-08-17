import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import BeatstoreOverlay from "./BeatstoreOverlay.vue";

describe("overlay visibility", () => {
  it("hidden", () => {
    const wrapper = mount(BeatstoreOverlay, {
      props: {
        active: false,
      },
    });

    expect(wrapper.find('[data-test="overlay"]').isVisible()).toBe(false);
  });
  it("visible", () => {
    const wrapper = mount(BeatstoreOverlay, {
      props: {
        active: true,
      },
    });

    expect(wrapper.find('[data-test="overlay"]').isVisible()).toBe(true);
  });
});
