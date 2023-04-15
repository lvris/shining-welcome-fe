import { createRouter, createWebHashHistory } from "vue-router";
import Welcome from "./components/welcome/Welcome.vue";
import Manage from "./components/manage/Manage.vue";

const routes = [
  { path: '/welcome', component: Welcome },
  { path: '/manage', component: Manage }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;