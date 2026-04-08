<script setup>
import { ref } from 'vue';
import { ChevronDown, ChevronUp } from 'lucide-vue-next';

const faqs = [
  {
    question: "Jak często należy czyścić komin w Szczecinku?",
    answer: "Zgodnie z przepisami, czyszczenie kominów spalinowych (opalanych paliwem stałym) powinno odbywać się 4 razy w roku. Przewody dymowe (gazowe, olejowe) należy czyścić 2 razy w roku, a wentylacyjne raz w roku. W Szczecinku i okolicach zalecamy regularne przeglądy, szczególnie przed sezonem grzewczym."
  },
  {
    question: "Czy przegląd kominiarski jest obowiązkowy?",
    answer: "Tak, okresowy przegląd kominiarski jest obowiązkowy dla każdego właściciela nieruchomości i musi być wykonywany co najmniej raz w roku przez uprawnionego mistrza kominiarskiego. Jest to wymóg prawa budowlanego oraz niezbędny dokument dla ubezpieczyciela w razie szkody."
  },
  {
    question: "Ile kosztuje czyszczenie komina w Szczecinku?",
    answer: "Cena czyszczenia komina w Szczecinku zależy od rodzaju budynku, ilości przewodów oraz ich dostępności. Oferujemy konkurencyjne ceny usług kominiarskich. Aby uzyskać dokładną wycenę, prosimy o kontakt telefoniczny pod numerem 502 619 993."
  },
  {
    question: "Czy wystawiacie protokół z przeglądu?",
    answer: "Tak, po każdym przeglądzie i czyszczeniu wystawiamy oficjalny protokół kominiarski. Jest to pełnoprawny dokument honorowany przez urzędy, nadzór budowlany oraz firmy ubezpieczeniowe."
  },
  {
    question: "Czy kominiarz usuwa gniazda ptaków?",
    answer: "Tak, zajmujemy się udrażnianiem przewodów kominowych, w tym bezpiecznym usuwaniem gniazd ptaków, które mogą blokować przepływ powietrza i spalin. Montujemy również specjalne kratki zabezpieczające."
  }
];

const openIndex = ref(null);

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
  <section id="faq" class="py-24 bg-white">
    <div class="container mx-auto px-6 max-w-4xl">
      <div class="text-center mb-16">
        <h2 class="text-brand-orange font-bold text-sm tracking-widest mb-2 uppercase">FAQ</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Najczęściej Zadawane Pytania</h3>
        <p class="text-gray-600">
          Odpowiedzi na pytania dotyczące usług kominiarskich, przeglądów i czyszczenia kominów.
        </p>
      </div>

      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
          :class="{ 'border-brand-orange/30 bg-brand-light/10': openIndex === index }"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            :aria-expanded="openIndex === index"
          >
            <span class="font-bold text-lg text-brand-dark pr-8">{{ faq.question }}</span>
            <div 
              class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300"
              :class="openIndex === index ? 'bg-brand-orange text-white' : 'bg-gray-100 text-gray-400'"
            >
              <ChevronDown v-if="openIndex !== index" size="20" />
              <ChevronUp v-else size="20" />
            </div>
          </button>
          
          <div 
            v-show="openIndex === index"
            class="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent animate-fade-in"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
