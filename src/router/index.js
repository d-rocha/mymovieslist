import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newmovie',
    name: 'Movie',
    component: Movie
  }  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
