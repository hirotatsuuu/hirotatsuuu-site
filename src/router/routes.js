import Index from '../components/Index.vue'
import Top from '../components/Top.vue'
import About from '../components/About.vue'
import Portfolio from '../components/Portfolio.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/top', component: Top },
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio }
]

export { routes }
