<script setup>
import { Flame, Search, FileText, Wrench, Home, AlertTriangle } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

const services = [
  {
    icon: Flame,
    title: 'Czyszczenie Komina Szczecinek',
    slug: 'czyszczenie-komina-szczecinek',
    desc: 'Kompleksowe czyszczenie kominów, pieców i kominków w Szczecinku. Metody tradycyjne i mechaniczne dla Twojego bezpieczeństwa.'
  },
  {
    icon: Search,
    title: 'Przegląd Kominowy Szczecinek',
    slug: 'przeglad-kominowy-szczecinek',
    desc: 'Okresowe kontrole stanu technicznego i inspekcje kominów w Szczecinku. Zapobiegamy pożarom poprzez regularną diagnostykę.'
  },
  {
    icon: FileText,
    title: 'Opinia Kominiarska Szczecinek',
    slug: 'opinia-kominiarska-szczecinek',
    desc: 'Odbiory techniczne budynków i wydawanie pisemnych opinii kominiarskich dla urzędów i gazowni w Szczecinku.'
  },
  {
    icon: Wrench,
    title: 'Montaż Wkładów Szczecinek',
    slug: 'montaz-wkladow-szczecinek',
    desc: 'Montaż wkładów kominowych kwasoodpornych i żaroodpornych, nasad oraz wentylatorów w Szczecinku. Renowacja kominów.'
  },
  {
    icon: Home,
    title: 'Ekspertyzy Kominowe Szczecinek',
    slug: 'ekspertyzy-kominowe-szczecinek',
    desc: 'Inwentaryzacja podłączeń grzewczych i ekspertyzy przewodów kominowych dla administracji i wspólnot w Szczecinku.'
  },
  {
    icon: AlertTriangle,
    title: 'Udrażnianie Kominów Szczecinek',
    slug: 'udraznianie-kominow-szczecinek',
    desc: 'Usuwanie zatorów, gniazd i zabezpieczanie kominów przed ptakami w Szczecinku. Skuteczne rozwiązywanie problemów z ciągiem.'
  }
];
</script>

<template>
  <section id="services" class="py-24 bg-brand-light">
    <div class="container mx-auto px-6">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-brand-orange font-bold text-sm tracking-widest mb-2 uppercase" data-aos="fade-down">Oferta</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-brand-dark mb-4" data-aos="fade-up">Usługi Kominiarskie Szczecinek</h3>
        <p class="text-gray-600" data-aos="fade-up" data-aos-delay="100">
          Oferujemy pełen zakres usług kominiarskich w Szczecinku dla domów jednorodzinnych, wspólnot mieszkaniowych oraz obiektów przemysłowych.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink 
          v-for="(service, index) in services" 
          :key="index"
          :to="{ name: 'service', params: { slug: service.slug } }"
          class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:-translate-y-2 block h-full"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          data-aos-duration="800"
          :aria-label="'Szczegóły usługi: ' + service.title"
        >
          <div class="w-14 h-14 bg-brand-dark text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors duration-300 shadow-md group-hover:shadow-orange-200">
            <component :is="service.icon" size="28" class="transform transition-transform group-hover:scale-110 duration-300" />
          </div>
          <h3 class="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">{{ service.title }}</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            {{ service.desc }}
          </p>
          <div class="mt-4 text-brand-orange font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Dowiedz się więcej ->
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
