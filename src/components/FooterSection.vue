<script setup>
import { Facebook, Instagram, Linkedin } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="bg-brand-dark text-white py-12 border-t border-gray-800">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <!-- Brand -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left" data-aos="fade-up">
          <router-link to="/" class="flex items-center gap-4 mb-4" aria-label="Strona główna - Kominiarz Szczecinek">
            <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-orange bg-white shadow-md transition-transform hover:scale-105">
              <img src="/Logo.webp" alt="Logo Kominiarz" class="w-full h-full object-cover" width="80" height="80" loading="lazy" />
            </div>
            <div class="flex flex-col">
              <span class="text-2xl font-bold tracking-tighter leading-none text-white">
                KOMINIARZ
              </span>
              <span class="text-brand-orange font-bold text-base leading-none tracking-widest">SZCZECINEK</span>
            </div>
          </router-link>
          <p class="text-gray-400 text-sm max-w-xs mt-2">
            Profesjonalne usługi kominiarskie dla Twojego bezpieczeństwa.
          </p>
        </div>

        <!-- Links -->
        <div class="flex gap-8 text-sm text-gray-400 font-medium" data-aos="fade-up" data-aos-delay="100">
          <router-link :to="{ path: '/', hash: '#about' }" class="hover:text-white transition hover:-translate-y-1 inline-block">O Nas</router-link>
          <router-link :to="{ path: '/', hash: '#services' }" class="hover:text-white transition hover:-translate-y-1 inline-block">Usługi</router-link>
          <router-link :to="{ path: '/', hash: '#contact' }" class="hover:text-white transition hover:-translate-y-1 inline-block">Kontakt</router-link>
        </div>

        <!-- Socials -->
        <div class="flex gap-4" data-aos="fade-up" data-aos-delay="200">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Odwiedź nasz Facebook" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition group transform hover:-translate-y-1">
            <Facebook size="18" class="text-white group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Odwiedź nasz Instagram" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition group transform hover:-translate-y-1">
            <Instagram size="18" class="text-white group-hover:scale-110 transition-transform" />
          </a>
          
        </div>
      </div>
      
      <div class="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs" data-aos="fade-in" data-aos-delay="300">
        <p>&copy; {{ new Date().getFullYear() }} Kominiarz Szczecinek. Wszelkie prawa zastrzeżone.</p>
        <router-link to="/polityka-prywatnosci" class="hover:text-white transition mt-2 inline-block">Polityka Prywatności</router-link>
        <p class="mt-4 text-gray-600">Created by - CodeWave_Szczecinek</p>
      </div>
    </div>
  </footer>
</template>
