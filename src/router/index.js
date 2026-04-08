import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Kominiarz Szczecinek - Paweł Wojtukiewicz - Usługi Kominiarskie',
        description: 'Usługi kominiarskie Paweł Wojtukiewicz. Profesjonalne czyszczenie, przeglądy i odbiory kominów w Szczecinku i okolicach.',
        ogImage: '/og-image.jpg'
      }
    },
    {
      path: '/uslugi/:slug',
      name: 'service',
      component: () => import('../views/ServiceView.vue'),
      props: true,
      meta: {
        title: 'Usługi Kominiarskie', // Fallback, will be overridden dynamically
        description: 'Szczegóły naszych usług kominiarskich.',
        ogImage: '/og-image.jpg'
      }
    },
    {
      path: '/polityka-prywatnosci',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue'),
      meta: {
        title: 'Polityka Prywatności',
        description: 'Nasza polityka prywatności i zasady RODO.',
        ogImage: '/og-image.jpg'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        title: 'Nie znaleziono strony',
        description: 'Przepraszamy, szukana strona nie istnieje.',
        ogImage: '/og-image.jpg'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0, left: 0 }
  }
})

export default router
