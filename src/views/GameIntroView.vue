<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const toNextPage = () => {
      router.push({ name: "charm" });
      
    };
    return {
      toNextPage,
    };
  },
};
</script>

<template>
  <main class="game_intro_bg">
    <div class="right_top_play_button" @click="toNextPage()"></div>
    <div class="intro_ball intro_ball_1">
        <div class="intro_ball_img"></div>
        <h1>風生水起</h1>
    </div>
    <div class="intro_ball intro_ball_2">
        <div class="intro_ball_img"></div>
        <h1>祥雲獻瑞</h1>
    </div>
    <div class="intro_ball intro_ball_3">
        <div class="intro_ball_img"></div>
        <h1>無限發財</h1>
    </div>
    <div class="right_down_belt_without_slogan"></div>
    <div class="ground_wave"></div>
  </main>
      <div id="noticeHint" class="gold">僅供帝國菸草集團銷售通路內部使用，請勿置於消費者可取得之處或張貼門市</div>

</template>
