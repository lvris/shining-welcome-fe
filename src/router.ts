import { createRouter, createWebHistory } from "vue-router";
import { store } from "./composables/store";
import Welcome from "./components/welcome/Welcome.vue";
import Manage from "./components/manage/Manage.vue";
import ManageGuest from "./components/manage/ManageGuest.vue";
import Auth from "./components/auth/Auth.vue";
import { authAdmin } from "./apis/authAPI";

const routes = [
  { path: '/', redirect: '/welcome' },
  { path: '/welcome', component: Welcome },
  { path: '/manage', component: Manage },
  { path: '/manage/:id', component: ManageGuest },
  { path: '/auth', component: Auth }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from) => {
  // Check Admin State
  if(store.admin || to.path === '/welcome' || to.path === '/auth') {
    return true;
  }
  const result = await authAdmin()
    .then(data => {
      store.admin = true;
      return true;
    })
    .catch(err => ({ path: '/auth', query: { to: to.fullPath } }))
  return result;
})

export default router;