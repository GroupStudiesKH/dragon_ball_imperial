import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IntroFirstView from "../views/IntroFirstView.vue";
import IntroSecondView from "../views/IntroSecondView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/intro/1",
      name: "intro_1",
      component: IntroFirstView,
    },
    {
      path: "/intro/2",
      name: "intro_2",
      component: IntroSecondView,
    },
  ],
});

export default router;
