<script>
import { useRouter, useRoute } from "vue-router";

export default {

  setup() {
    const router = useRouter();

    const toNextPage = () => {
      router.push({ name: "intro_1" });
    };
    return {
      toNextPage
    };
  },
};
</script>


<template>
  <main>
    <div class="left_top_logo"></div>
    <div class="right_top_play_button" @click="toNextPage()"></div>
    <div class="index_title_full"></div>
    <div class="main_product_full"></div>
    <div class="left_down_cloud"></div>
    <div class="right_down_belt"></div>
    <div class="dragon_right_small"></div>
    <div class="ground"></div>
  </main>
</template>
