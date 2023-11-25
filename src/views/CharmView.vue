<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const toNextPage = () => {
      router.push({ name: "final" });
    };
    return {
      toNextPage,
    };
  },
};
</script>

<template>
  <main class="charm_bg">
    <div class="right_top_play_button" @click="toNextPage()"></div>
    <div class="charm_main"></div>
    <div class="charm_ball charm_ball_cloud"></div>
    <div class="charm_ball charm_ball_wind"></div>
    <div class="charm_ball charm_ball_infinite"></div>
    <div class="dragon_right_big_full"></div>
    <div class="right_down_belt_without_slogan"></div>
    <div class="ground_wave"></div>
  </main>
</template>
