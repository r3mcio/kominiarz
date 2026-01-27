import { useHead } from '@unhead/vue'
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

export function useSeo() {
  const route = useRoute()

  watchEffect(() => {
    // Get meta from route
    const { title, description, ogImage } = route.meta || {}
    const canonicalUrl = `https://kominiarz-test.web.app${route.path}`

    useHead({
      title: title || 'Kominiarz',
      meta: [
        {
          name: 'description',
          content: description || 'Profesjonalne usługi kominiarskie'
        },
        {
          property: 'og:title',
          content: title || 'Kominiarz'
        },
        {
          property: 'og:description',
          content: description || 'Profesjonalne usługi kominiarskie'
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
