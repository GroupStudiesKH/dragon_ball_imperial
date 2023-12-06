<script>
import { useRouter, useRoute } from "vue-router";

export default {

  setup() {
    const router = useRouter();

    const toLastPage = () => {
      router.push({ name: "final" });
      playBackgroundMusic()
    };


    const toNextPage = () => {
      router.push({ name: "intro_2" });
      playBackgroundMusic()
    };

    return {
      toNextPage,
      toLastPage
    };
  },
};
</script>

<template>
  <main class="yellow_bg">
    <div class="intro_slogan">
        完成收集好運8龍珠，<br>
        讓您好運不斷<br>
        龍年行大運！
    </div>
    <div class="left_top_logo_full"></div>
    <div class="left_top_previous_button" @click="toLastPage()"></div>
    <div class="right_top_play_button" @click="toNextPage()"></div>
    <div class="left_down_woman_full"></div>
    <div class="left_down_cloud"></div>
    <div class="dragon_right_big_full"></div>
    <div class="ground_wave intro_1"></div>
  </main>
      <div id="noticeHint" class="gold">僅供帝國菸草集團銷售通路內部使用，請勿置於消費者可取得之處或張貼門市</div>

</template>
