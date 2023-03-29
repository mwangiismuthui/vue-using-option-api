import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import OneTimeLandingPage from '../views/OneTimeLandingPage.vue'
import AllEmployees from '../views/employees/AllEmployees.vue'
import EmployeeDetail from '../views/employees/EmployeeDetail.vue'
import PageNotFound from '../views/error/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'About',
    component: AboutView

  },
  {
    path: '/onetimeLandingPage',
    name: 'OneTimeLandingPage',
    component: OneTimeLandingPage

  },
  {
    path: '/all-employees',
    name: 'AllEmployees',
    component: AllEmployees

  },
  {
    path: '/employee-detail/:id',
    name: 'EmployeeDetail',
    component: EmployeeDetail,
    props: true

  },
  /* This is how we handle redirects */
  {
    path: '/any-other-route',
    redirect: '/'
  },
  /* Handling 404 */
  {
    path: '/:catchAll()',
    name: '404',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
