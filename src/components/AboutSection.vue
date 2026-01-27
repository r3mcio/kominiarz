<script setup>
import { ShieldCheck, Award, History } from 'lucide-vue-next';
</script>

<template>
  <section id="about" class="py-20 bg-white overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center gap-16">
        <!-- Image Side -->
        <div class="w-full md:w-1/2" data-aos="fade-up">
          <div class="relative max-w-[350px] mx-auto md:mx-0">
            <div class="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange/10 rounded-full z-0"></div>
            <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-graphite/5 rounded-full z-0"></div>
            <picture>
              <source srcset="/Noweonas-mobile.webp" media="(max-width: 768px)" type="image/webp">
              <source srcset="/Noweonas-tablet.webp" media="(max-width: 1200px)" type="image/webp">
              <source srcset="/Noweonas-desktop.webp" media="(min-width: 1201px)" type="image/webp">
              <img 
                src="/Noweonas-desktop.webp" 
                alt="Mistrz kominiarski Szczecinek przy pracy" 
                class="relative z-10 rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[2/3] transform transition-transform duration-500 hover:scale-[1.02]"
                width="600"
                height="900"
                loading="lazy"
              />
            </picture>
            <div class="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-xl z-20 hidden md:block border-l-4 border-brand-orange">
              <p class="text-4xl font-bold text-brand-dark">25+</p>
              <p class="text-sm text-gray-500 font-medium">Lat doświadczenia</p>
            </div>
          </div>
        </div>

        <!-- Text Side -->
        <div class="w-full md:w-1/2">
          <h2 class="text-brand-orange font-bold text-sm tracking-widest mb-2 uppercase" data-aos="fade-up">Nasza historia – kominiarz Szczecinek</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-brand-dark mb-6" data-aos="fade-up" data-aos-delay="100">Zaufanie i Profesjonalizm</h3>
          <p class="text-gray-600 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="200">
            Od wielu lat świadczymy usługi kominiarskie w Szczecinku i okolicach. Tytuł mistrza kominiarskiego uzyskałem w 2000 roku, przejmując firmę po ojcu, który również był wieloletnim kominiarzem.
          </p>
          <p class="text-gray-600 leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="200">
            Jako członek Korporacji Kominiarzy Polskich, stawiam na rzetelność i bezpieczeństwo naszych klientów. Jesteśmy lokalną firmą z tradycjami, której zależy na dobrych relacjach z mieszkańcami. Każde zlecenie wykonujemy z najwyższą starannością, zgodnie z aktualnymi przepisami prawa budowlanego.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
              <div class="bg-brand-orange/10 p-3 rounded-lg text-brand-orange transform transition-transform hover:rotate-12">
                <ShieldCheck size="24" />
              </div>
              <div>
                <h4 class="font-bold text-brand-dark">Certyfikaty</h4>
                <p class="text-sm text-gray-500">Uprawnienia mistrzowskie</p>
              </div>
            </div>
            <div class="flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
              <div class="bg-brand-orange/10 p-3 rounded-lg text-brand-orange transform transition-transform hover:rotate-12">
                <History size="24" />
              </div>
              <div>
                <h4 class="font-bold text-brand-dark">Działamy lokalnie</h4>
                <p class="text-sm text-gray-500">Szczecinek i okolice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
