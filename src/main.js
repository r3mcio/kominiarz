import { createApp } from 'vue'
import { createHead } from '@unhead/vue'

// Handle scroll behavior (prevent browser restoration)
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

import './style.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)

// ZMIANA: Czekamy na gotowość routera przed montowaniem aplikacji
router.isReady().then(() => {
  app.mount('#app')
  
  // Inicjalizacja AOS po zamontowaniu
  AOS.init() 

  // KLUCZOWE: Wysyłamy sygnał do vite-plugin-prerender-cp
  // Dzięki temu plugin wie, że strona jest wyrenderowana i może zapisać plik HTML
  document.dispatchEvent(new Event('custom-render-trigger'))
})