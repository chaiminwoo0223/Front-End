import { createRouter, createWebHistory } from 'vue-router' 
import Exam1View from '../views/Exam1View.vue' 
import Exam2View from '../views/Exam2View.vue'

const routes = [ 
  { 
    path: '/', 
    name: 'Exam1View', 
    component: Exam1View 
  }, 
  { path: '/exam2', 
    name: 'Exam2View', 
    component: Exam2View 
  }
] 
const router = createRouter({ 
  history: createWebHistory(process.env.BASE_URL), 
  routes 
}) 

export default router