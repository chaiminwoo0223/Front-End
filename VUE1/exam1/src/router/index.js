import { createRouter, createWebHistory } from 'vue-router'
import Exam1 from '../views/ExamOne.vue'
import Exam2 from '../views/ExamTwo.vue'
import Exam3 from '../views/ExamThree.vue'
import Exam4 from '../views/ExamFour.vue'
import Exam5 from '../views/ExamFive.vue'
import Exam6 from '../views/ExamSix.vue'

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
  {
    path: '/exam4',
    name: 'exam4',
    component: Exam4
  },
  {
    path: '/exam5',
    name: 'exam5',
    component: Exam5
  },
  {
    path: '/exam6',
    name: 'exam6',
    component: Exam6
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router