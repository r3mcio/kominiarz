import { useHead } from '@unhead/vue'
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

export function useSeo() {
  const route = useRoute()

  watchEffect(() => {
    // Get meta from route
    const { title, description, ogImage } = route.meta || {}
    const canonicalUrl = `https://kominiarz-szczecinek.pl${route.path}`

    useHead({
      title: title || 'Kominiarz',
      meta: [
        {
          name: 'description',
          content: description || 'Profesjonalny kominiarz w Szczecinku. Zapewniamy kompleksowe przeglądy i czyszczenie kominów dla Twojego bezpieczeństwa.'
        },
        {
          name: 'author',
          content: 'Paweł Wojtukiewicz'
        },
        {
          name: 'copyright',
          content: 'Paweł Wojtukiewicz'
        },
        {
          property: 'og:title',
          content: title || 'Kominiarz'
        },
        {
          property: 'og:description',
          content: description || 'Profesjonalny kominiarz w Szczecinku. Zapewniamy kompleksowe przeglądy i czyszczenie kominów dla Twojego bezpieczeństwa.'
        },
        {
          property: 'og:image',
          content: ogImage || '/og-image.jpg'
        },
        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: canonicalUrl
        }
      ]
    })
  })
}
