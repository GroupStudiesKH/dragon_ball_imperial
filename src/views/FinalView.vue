<script>
import { useRouter, useRoute } from "vue-router";

export default {

  setup() {
    const router = useRouter();

    const toNextPage = () => {
      playBackgroundMusic()
      router.push({ name: "home" });
    };
    return {
      toNextPage
    };
  },
};
</script>

<template>
  <main class="final_bg" @click="toNextPage()">
  </main>
      <div id="noticeHint">僅供帝國菸草集團銷售通路內部使用，請勿置於消費者可取得之處或張貼門市</div>

</template>
