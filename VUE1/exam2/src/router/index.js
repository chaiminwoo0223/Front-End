import { createRouter, createWebHistory } from 'vue-router'
import Exam1 from '../views/Exam1View.vue'
import Exam2 from '../views/Exam2View.vue'
import Exam3 from '../views/Exam3View.vue'

const routes = [
  {
    path: '/exam1',
    name: 'exam1',
    component: Exam1
  },
  {
    path: '/exam2',
    name: 'exam2',
    component: Exam2
  },
  {
    path: '/exam3',
    name: 'exam3',
    component: Exam3
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router