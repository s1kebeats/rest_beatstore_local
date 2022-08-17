import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";
import CustomRange from "./CustomRange.vue";

describe("CustomRange", () => {
  it("renders properly", async () => {
    const wrapper = mount(CustomRange, {
      props: {
        max: 200,
        value: 240,
        thumbState: true,
      },
    });

    expect(wrapper.find('[data-test="thumb"]').isVisible()).toBe(true);
  });
});
