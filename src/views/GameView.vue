<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const countdown = ref(4);
    const balls = ref([{}, {}, {}, {}, {}]);
    const scoreBall = ref([]);

    const createBalls = () => {
      const ballCount = balls.value.length;
      const rail = Math.floor(Math.random() * ballCount);
      const ballKey = Date.now();
      const ballTypeNum = Math.floor(Math.random() * 10);
      let ballTypeClass = "";
      switch (ballTypeNum) {
        case 1:
          ballTypeClass = "wind_ball";
          break;

        case 2:
          ballTypeClass = "cloud_ball";
          break;

        case 3:
          ballTypeClass = "fire_ball";
          break;

        default:
          ballTypeClass = "";
          break;
      }

      balls.value[rail][ballKey] = {
        class: ballTypeClass,
      };

      setTimeout(() => {
        delete balls.value[rail][ballKey];
      }, 8000);
    };

    const clickBall = (rail, ballKey) => {

        if(['wind_ball', 'cloud_ball', 'fire_ball'].includes(balls.value[rail][ballKey]['class'])){{
            scoreBall.value.push(balls.value[rail][ballKey]['class']);

            if(scoreBall.value.length == 8){
                
                //after 1 second, go to next page
                setTimeout(() => {
                    router.push({ name: "intro_1" });
                }, 1000);
            }
        }}

        delete balls.value[rail][ballKey];
    };

    //countdown onmounted
    onMounted(() => {
      const timer = setInterval(() => {
        countdown.value--;
        if (countdown.value === 0) {
          clearInterval(timer);

          setInterval(() => {
              createBalls();
          }, 1000);
        }
      }, 1000);
    });

    const toNextPage = () => {
      router.push({ name: "intro_1" });
    };
    return {
      toNextPage,
      countdown,
      balls,
      clickBall,
      scoreBall
    };
  },
};
</script>

<template>
  <main class="game_bg">
    <div class="game_header">
        <div class="game_score_ball" :class="score" v-for="(score, scoreIndex) in scoreBall" v-bind:key="scoreIndex"></div>
    </div>
    <div class="game_frame"></div>
    <div class="game_ball_rails">
      <div class="game_ball_rail_1">
        <div
          class="game_ball"
          :class="ball.class"
          v-for="(ball, ballIndex) in balls[0]"
          v-bind:key="ballIndex"
          @click="clickBall(0, ballIndex)"
        ></div>
      </div>
      <div class="game_ball_rail_2">
        <div
          class="game_ball"
          :class="ball.class"
          v-for="(ball, ballIndex) in balls[1]"
          v-bind:key="ballIndex"
          @click="clickBall(1, ballIndex)"
        ></div>
      </div>
      <div class="game_ball_rail_3">
        <div
          class="game_ball"
          :class="ball.class"
          v-for="(ball, ballIndex) in balls[2]"
          v-bind:key="ballIndex"
          @click="clickBall(2, ballIndex)"
        ></div>
      </div>
      <div class="game_ball_rail_4">
        <div
          class="game_ball"
          :class="ball.class"
          v-for="(ball, ballIndex) in balls[3]"
          v-bind:key="ballIndex"
          @click="clickBall(3, ballIndex)"
        ></div>
      </div>
      <div class="game_ball_rail_5">
        <div
          class="game_ball"
          :class="ball.class"
          v-for="(ball, ballIndex) in balls[4]"
          v-bind:key="ballIndex"
          @click="clickBall(4, ballIndex)"
        ></div>
      </div>
    </div>
    <div class="game_dragon"></div>
    <div class="countdown countdown_3" v-if="countdown == 3"></div>
    <div class="countdown countdown_2" v-if="countdown == 2"></div>
    <div class="countdown countdown_1" v-if="countdown == 1"></div>
    <div class="left_down_cloud"></div>
    <div class="ground_wave"></div>
  </main>
</template>
