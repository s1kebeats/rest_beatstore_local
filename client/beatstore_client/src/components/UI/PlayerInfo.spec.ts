import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PlayerInfo from "./PlayerInfo.vue";

describe("PlayerInfo", () => {
  it("renders properly", async () => {
    const wrapper = mount(PlayerInfo, {
      props: {
        beat: {
          id: 1,
          name: "Life",
          bpm: 130,
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

    expect(wrapper.get('[data-test="playerBeatName"]').text()).toBe("Life");
    expect(wrapper.get('[data-test="playerBeatArtist"]').text()).toBe(
      "Type: Lil Tjay"
    );
    expect(wrapper.get('[data-test="playerBeatBpm"]').text()).toBe("130BPM");
    const wrap = wrapper.get('[data-test="playerBeatWrap"]')
      .element as HTMLImageElement;
    expect(wrap.src).toBe("http://localhost:3000/wrapUrl");
  });
});
