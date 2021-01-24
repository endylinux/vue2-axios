import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomePage from './components/welcome/Welcome.vue'
import DashboardPage from './components/dashboard/Dashboard.vue'
import SignupPage from './components/auth/Signup.vue'
import SigningPage from './components/auth/Signin.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: WelcomePage },
    { path: '/signup', component: SignupPage },
    { path: '/signin', component: SigningPage },
    { path: '/dashboard', component: DashboardPage }
]

export default new VueRouter({mode: 'history', routes})
