import { createRouter, createWebHashHistory } from "vue-router";
import { store } from "./composables/store";
import Welcome from "./components/welcome/Welcome.vue";
import Manage from "./components/manage/Manage.vue";
import Auth from "./components/auth/Auth.vue";
import { parceToken } from "./apis/authAPI";

const routes = [
  { path: '/', redirect: '/welcome' },
  { path: '/welcome', component: Welcome },
  { path: '/manage', component: Manage },
  { path: '/auth', component: Auth }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // Check Admin State
  if(store.admin || to.fullPath === '/welcome' || to.fullPath === '/auth') {
    next();
  }
  let token = localStorage.getItem('token');
  if(token === null || token === '') {
    next('/auth');
  }
  parceToken().then(data => {
    if(data.admin) {
      store.admin = true;
      next();
    } else {
      next('/auth');
    }
  })
})

export default router;