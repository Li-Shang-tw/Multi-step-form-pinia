import { createRouter, createWebHistory } from 'vue-router'



const routes =[
  { path: '/',redirect: { name: 'personalInfo' } },
  {
    path: '/personalInfo',
    name: 'personalInfo',
    component: ()=>import("../views/PersonalInfo.vue")
  },
  {
    path: '/plan',
    name: 'plan',
    component: ()=>import("../views/Plan.vue")
  },
  {
    path: '/addOn',
    name: 'addOn',
    component: ()=>import("../views/AddOn.vue")
  },
  {
    path: '/finishingUp',
    name: 'finishingUp',
    component: ()=>import("../views/FinishingUp.vue")
  },
  {
    path: '/thankYou',
    name: 'thankYou',
    component: ()=>import("../views/ThankYou.vue")
  }
  

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
