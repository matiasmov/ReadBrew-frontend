import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePageView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import Cafeteria from '../views/CafeteriaView.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/login', name: 'login', component: LoginView, meta: { requiresGuest: true } },
  { path: '/register', name: 'register', component: RegisterView, meta: { requiresGuest: true } },
  { path: '/cafeteria', name: 'cafeteria', component: Cafeteria }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach((to, from) => {
  const isAuthenticated = !!localStorage.getItem('readbrew_token');

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) return { name: 'login' }; 
  } 
  else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (isAuthenticated) return { name: 'cafeteria' };
  } 
  
  return true; 
})

export default router