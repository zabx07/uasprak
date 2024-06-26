import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TasksView from "../views/TasksView.vue";
import WeatherView from "../views/WeatherView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
  },
  {
    path: "/weather",
    name: "weather",
    component: WeatherView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
