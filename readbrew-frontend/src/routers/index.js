import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    redirect: '/login' 
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/',
    redirect: '/HomePage',
    component: HomePage
  },
  {
   path: '/HomePage',
    name: 'HomePage',
    component: HomePage
    }
  

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router