import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: import("@/views/index.vue") },
  { path: "/about", component: import("@/views/about.vue") },
  { path: "/:catchAll(.*)", component: import("@/views/404.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
