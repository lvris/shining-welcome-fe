import { createRouter, createWebHashHistory } from "vue-router";
import welcome from "./components/welcome/Welcome.vue";

const routes = [
  { path: '/welcome', component: welcome }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;