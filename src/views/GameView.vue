<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {

  setup() {
    const router = useRouter();
    const countdown = ref(4)

    //countdown onmounted
    onMounted(() => {
      const timer = setInterval(() => {
        countdown.value--
        console.log(countdown.value)
        if (countdown.value === 0) {
          clearInterval(timer)
        }
      }, 1000)
    })

    const toNextPage = () => {
      router.push({ name: "intro_1" });
    };
    return {
      toNextPage,
      countdown
    };
  },
};
</script>

<template>
  <main class="game_bg">
    <div class="game_header"></div>
    <div class="game_frame"></div>
    <div class="game_dragon"></div>
    <div class="countdown countdown_3" v-if="countdown == 3"></div>
    <div class="countdown countdown_2" v-if="countdown == 2"></div>
    <div class="countdown countdown_1" v-if="countdown == 1"></div>
    <div class="left_down_cloud"></div>
    <div class="ground_wave"></div>
  </main>
</template>
