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
</template>
