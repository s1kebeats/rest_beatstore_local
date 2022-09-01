<template>
  <section
    class="landing select-none border-b flex items-center justify-center w-full py-[200px] 930:py-[100px]"
  >
    <div
      class="text responsive flex items-center justify-center"
    >
      <h1 class="text-5xl text-black font-semibold 930:text-3xl">
        Free type beats by
      </h1>
      <div class="flex-1 flex justify-center items-center gap-4 930:gap-3">
        <img
          class="h-[80px] drop-shadow-sm 930:h-[60px]"
          src="@/assets/images/logo.svg"
        />
        <span class="text-black text-7xl font-['Poppins'] 930:text-5xl">
          s1kebeats
        </span>
        <!-- Socials -->
        <!-- <div class="flex flex-col items-center justify-center">
          <a
            href="https://vk.com/s1kebeats"
            target="_blank"
            title="VK Group"
            class="vk inline-block w-[30px] h-[26px] select-none"
          >
            &nbsp;
          </a>
          <a
            href="https://www.youtube.com/channel/UC7dV_5X2kbLohHHUu5Ckdmw"
            target="_blank"
            title="Youtube Channel"
            class="yt inline-block w-[30px] h-[26px] select-none"
          >
            &nbsp;
          </a>
        </div> -->
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.landing {
  background: linear-gradient(
    70deg,
    rgb(243, 239, 252) 10%,
    rgba(243, 239, 252, 1) 60%,
    rgba(121, 69, 252, 1) 100%
  );
}
// .vk {
//   background: no-repeat url("@/assets/images/vk-black.svg");
//   background-position: 3px 3px;
//   background-size: 23px;
// }
// .yt {
//   background: center no-repeat url("@/assets/images/youtube-black.svg");
//   background-size: 23px;
// }
.text {
  @media screen and (max-width: 1150px) {
    gap: 56px;
    flex-direction: column;
  }
  @media screen and (max-width: 930px) {
    gap: 25px;
  }
}
</style>
