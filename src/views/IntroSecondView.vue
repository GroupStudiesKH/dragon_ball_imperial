<script>
import { useRouter, useRoute } from "vue-router";

export default {

  setup() {
    const router = useRouter();

    const toNextPage = () => {
      router.push({ name: "game" });
    };
    return {
      toNextPage
    };
  },
};
</script>

<template>
  <main class="yellow_bg">
    <div class="intro_2_main_full"></div>
    <div class="intro_2_main_title"></div>
    <div class="right_top_play_button" @click="toNextPage()"></div>
    <div class="left_down_woman_small"></div>
    <div class="left_down_cloud"></div>
    <div class="ground_wave"></div>
  </main>
</template>
