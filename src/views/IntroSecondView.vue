<script>
import { useRouter, useRoute } from "vue-router";

export default {

  setup() {
    const router = useRouter();

    const toLastPage = () => {
      router.push({ name: "home" });
    };


    const toNextPage = () => {
      router.push({ name: "game" });
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
    <div class="intro_2_main_full"></div>
    <div class="intro_2_main_title"></div>
    <div class="left_top_previous_button" @click="toLastPage()"></div>
    <div class="right_top_play_button" @click="toNextPage()"></div>
    <div class="left_down_woman_small"></div>
    <div class="left_down_cloud"></div>
    <div class="ground_wave intro_2"></div>
  </main>
      <div id="noticeHint" class="gold">僅供帝國菸草集團銷售通路內部使用，請勿置於消費者可取得之處或張貼門市</div>

</template>
