import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: () => import('../views/about/index.vue'),
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/project/index.vue'),
    },
    {
      path: '/project/:id',
      name: 'project-detail',
      component: () => import('../views/project/_id.vue'),
      props: true
    },
    {
      path: '/cooperate',
      name: 'cooperate',
      component: () => import('../views/cooperate/index.vue'),
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/download/index.vue'),
    },
  ],
});

export default router;
