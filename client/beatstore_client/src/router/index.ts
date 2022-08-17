import { createRouter, createWebHistory } from "vue-router";
const BeatsView = () => import("@/views/BeatsView.vue");
const HomeView = () => import("@/views/HomeView.vue");

const routes = [
  {
    path: "",
    name: "home",
    component: HomeView,
  },
  {
    path: "/beats",
    name: "beats",
    component: BeatsView,
    meta: { title: "Beats" },
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: function (to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      return { left: 0, top: 0 };
    }
  },
  routes,
});
router.afterEach((to) => {
  if (typeof to.meta.title === "string") document.title = to.meta.title;
  else document.title = "S1ke Beatstore";
});

export default router;
